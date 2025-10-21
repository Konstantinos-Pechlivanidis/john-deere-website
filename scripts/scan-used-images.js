#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const projectRoot = path.resolve(__dirname, '..');

// Image extensions to scan for
const IMAGE_EXTENSIONS = ['.png', '.jpg', '.jpeg', '.svg', '.webp', '.gif'];

// Directories to scan
const SCAN_DIRS = ['src', 'public'];

// Patterns to detect image references
const IMAGE_PATTERNS = [
  // <img src="...">
  /<img[^>]+src=["']([^"']*\.(png|jpg|jpeg|svg|webp|gif))["'][^>]*>/gi,
  
  // background-image: url(...)
  /background-image\s*:\s*url\(["']?([^"')]*\.(png|jpg|jpeg|svg|webp|gif))["']?\)/gi,
  
  // background: url(...)
  /background\s*:\s*[^;]*url\(["']?([^"')]*\.(png|jpg|jpeg|svg|webp|gif))["']?\)/gi,
  
  // import statements
  /import\s+[^;]*from\s+["']([^"']*\.(png|jpg|jpeg|svg|webp|gif))["']/gi,
  
  // require statements
  /require\(["']([^"']*\.(png|jpg|jpeg|svg|webp|gif))["']\)/gi,
  
  // link rel="icon"
  /<link[^>]+rel=["'](?:icon|apple-touch-icon|shortcut icon)["'][^>]+href=["']([^"']*\.(png|jpg|jpeg|svg|webp|gif))["'][^>]*>/gi,
  
  // manifest icons
  /"src"\s*:\s*["']([^"']*\.(png|jpg|jpeg|svg|webp|gif))["']/gi,
  
  // CSS url() in any property
  /url\(["']?([^"')]*\.(png|jpg|jpeg|svg|webp|gif))["']?\)/gi
];

function normalizePath(imagePath) {
  // Remove leading slash if present
  let normalized = imagePath.replace(/^\/+/, '');
  
  // If path starts with public/, remove it
  if (normalized.startsWith('public/')) {
    normalized = normalized.substring(7);
  }
  
  // If path doesn't start with images/, add it
  if (!normalized.startsWith('images/')) {
    normalized = 'images/' + normalized;
  }
  
  return normalized;
}

function extractImageReferences(content, filePath) {
  const references = new Set();
  
  for (const pattern of IMAGE_PATTERNS) {
    let match;
    while ((match = pattern.exec(content)) !== null) {
      const imagePath = match[1];
      if (imagePath) {
        const normalized = normalizePath(imagePath);
        references.add(normalized);
      }
    }
  }
  
  return Array.from(references);
}

function getUsageType(filePath, imagePath) {
  if (imagePath.includes('logos/')) return 'logo';
  if (imagePath.includes('general/')) return 'hero';
  if (imagePath.includes('machinery/')) return 'machinery';
  if (imagePath.includes('parts/')) return 'parts';
  if (imagePath.includes('mobile')) return 'mobile';
  return 'content';
}

function getAllFiles(dir, extensions) {
  const files = [];
  
  function scanDir(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules, build, dist
        if (!['node_modules', 'build', 'dist'].includes(item)) {
          scanDir(fullPath);
        }
      } else {
        const ext = path.extname(item).toLowerCase();
        if (extensions.includes(ext)) {
          files.push(fullPath);
        }
      }
    }
  }
  
  scanDir(dir);
  return files;
}

function scanUsedImages() {
  console.log('🔍 Scanning for used images...');
  
  const usedImages = new Map();
  
  // Scan all files in specified directories
  for (const dir of SCAN_DIRS) {
    const dirPath = path.join(projectRoot, dir);
    if (!fs.existsSync(dirPath)) {
      console.warn(`⚠️  Directory ${dir} not found, skipping...`);
      continue;
    }
    
    // Get all JS/JSX/TS/TSX/CSS/HTML/JSON files
    const extensions = ['.js', '.jsx', '.ts', '.tsx', '.css', '.html', '.json', '.md'];
    const files = getAllFiles(dirPath, extensions);
    
    for (const filePath of files) {
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        const references = extractImageReferences(content, filePath);
        
        for (const imagePath of references) {
          if (!usedImages.has(imagePath)) {
            usedImages.set(imagePath, {
              path: imagePath,
              whereUsed: [],
              usageType: getUsageType(filePath, imagePath)
            });
          }
          
          const relativePath = path.relative(projectRoot, filePath);
          usedImages.get(imagePath).whereUsed.push(relativePath);
        }
      } catch (error) {
        console.warn(`⚠️  Error reading ${filePath}: ${error.message}`);
      }
    }
  }
  
  // Convert to array and sort
  const result = Array.from(usedImages.values()).sort((a, b) => a.path.localeCompare(b.path));
  
  // Write report
  const reportPath = path.join(projectRoot, 'public', 'used-images-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(result, null, 2));
  
  console.log(`✅ Found ${result.length} used images`);
  console.log(`📄 Report saved to: ${reportPath}`);
  
  // Print summary
  const usageTypes = {};
  result.forEach(img => {
    usageTypes[img.usageType] = (usageTypes[img.usageType] || 0) + 1;
  });
  
  console.log('\n📊 Usage Summary:');
  Object.entries(usageTypes).forEach(([type, count]) => {
    console.log(`  ${type}: ${count} images`);
  });
  
  return result;
}

// Run the scan
try {
  scanUsedImages();
} catch (error) {
  console.error('❌ Error scanning images:', error);
  process.exit(1);
}
