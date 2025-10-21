#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

// Image extensions to scan for
const IMAGE_EXTENSIONS = ['.png', '.jpg', '.jpeg', '.svg', '.webp', '.gif', '.avif'];

// Files/folders to always exclude from unused detection
const ALWAYS_USED_PATTERNS = [
  'unused-images',
  '.well-known',
  'robots.txt',
  'sitemap',
  'manifest',
  'favicon',
  'apple-touch-icon',
  'icon-'
];

function getAllFiles(dir, relativePath = '') {
  const files = [];
  
  try {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const relativeItemPath = relativePath ? path.join(relativePath, item) : item;
      
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        files.push(...getAllFiles(fullPath, relativeItemPath));
      } else if (stat.isFile()) {
        files.push(relativeItemPath.replace(/\\/g, '/'));
      }
    }
  } catch (error) {
    console.warn(`⚠️  Could not scan directory ${dir}: ${error.message}`);
  }
  
  return files;
}

function getAllPublicImages() {
  const publicDir = path.join(projectRoot, 'public');
  const allFiles = getAllFiles(publicDir);
  
  return allFiles.filter(file => {
    const ext = path.extname(file).toLowerCase();
    return IMAGE_EXTENSIONS.includes(ext);
  }).sort();
}

function scanSrcForImages() {
  const srcDir = path.join(projectRoot, 'src');
  const usedImages = new Set();
  
  function scanDirectory(dir) {
    try {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          scanDirectory(fullPath);
        } else if (stat.isFile() && (item.endsWith('.js') || item.endsWith('.jsx') || item.endsWith('.ts') || item.endsWith('.tsx'))) {
          scanFile(fullPath);
        }
      }
    } catch (error) {
      console.warn(`⚠️  Could not scan directory ${dir}: ${error.message}`);
    }
  }
  
  function scanFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Find image references
      const patterns = [
        /src=["']([^"']*\.(png|jpg|jpeg|svg|webp|gif|avif))["']/gi,
        /background(?:-image)?\s*:\s*url\(["']?([^"')]*\.(png|jpg|jpeg|svg|webp|gif|avif))["']?\)/gi,
        /import\s+.*\s+from\s+["']([^"']*\.(png|jpg|jpeg|svg|webp|gif|avif))["']/gi,
        /require\(["']([^"']*\.(png|jpg|jpeg|svg|webp|gif|avif))["']\)/gi,
        /ogImage=["']([^"']*\.(png|jpg|jpeg|svg|webp|gif|avif))["']/gi,
        /["']([^"']*\/images\/[^"']*\.(png|jpg|jpeg|svg|webp|gif|avif))["']/gi
      ];
      
      for (const pattern of patterns) {
        let match;
        while ((match = pattern.exec(content)) !== null) {
          const imagePath = match[1];
          if (imagePath) {
            let normalized = imagePath.replace(/^\/+/, '');
            if (normalized.startsWith('images/')) {
              usedImages.add(normalized);
            }
          }
        }
      }
    } catch (error) {
      console.warn(`⚠️  Could not read ${filePath}: ${error.message}`);
    }
  }
  
  scanDirectory(srcDir);
  return Array.from(usedImages).sort();
}

function isWhitelisted(imagePath) {
  for (const pattern of ALWAYS_USED_PATTERNS) {
    if (imagePath.includes(pattern)) {
      return true;
    }
  }
  return false;
}

function main() {
  console.log('🔍 Scanning for image usage...');
  
  // Get all public images
  const allPublicImages = getAllPublicImages();
  console.log(`📁 Found ${allPublicImages.length} total images in /public`);
  
  // Get used images from src
  const usedImages = scanSrcForImages();
  console.log(`📊 Found ${usedImages.size} used images in /src`);
  
  // Find unused images
  const usedSet = new Set(usedImages);
  const unusedImages = [];
  const whitelistedImages = [];
  
  for (const imagePath of allPublicImages) {
    if (isWhitelisted(imagePath)) {
      whitelistedImages.push(imagePath);
    } else if (!usedSet.has(imagePath)) {
      unusedImages.push(imagePath);
    }
  }
  
  // Write reports
  const usedReportPath = path.join(projectRoot, 'public', 'USED_IMAGES_LIST.json');
  const unusedReportPath = path.join(projectRoot, 'public', 'UNUSED_IMAGES_REPORT.txt');
  
  fs.writeFileSync(usedReportPath, JSON.stringify(usedImages, null, 2));
  fs.writeFileSync(unusedReportPath, unusedImages.join('\n'));
  
  // Print summary
  console.log('\n📊 SUMMARY:');
  console.log(`  Total images in /public: ${allPublicImages.length}`);
  console.log(`  Used images: ${usedImages.length}`);
  console.log(`  Whitelisted images: ${whitelistedImages.length}`);
  console.log(`  Unused images: ${unusedImages.length}`);
  
  if (unusedImages.length > 0) {
    console.log('\n🗑️  Unused images (safe to delete):');
    unusedImages.slice(0, 10).forEach(img => console.log(`    - ${img}`));
    if (unusedImages.length > 10) {
      console.log(`    ... and ${unusedImages.length - 10} more`);
    }
    console.log(`\n📄 Full list written to: ${unusedReportPath}`);
  } else {
    console.log('\n✅ No unused images found!');
  }
  
  return {
    total: allPublicImages.length,
    used: usedImages.length,
    whitelisted: whitelistedImages.length,
    unused: unusedImages.length,
    unusedImages
  };
}

// Run the analysis
main().catch(error => {
  console.error('❌ Error:', error);
  process.exit(1);
});
