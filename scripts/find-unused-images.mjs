#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { glob } from 'glob';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

// Image extensions to scan for
const IMAGE_EXTENSIONS = ['.png', '.jpg', '.jpeg', '.svg', '.webp', '.gif'];

// Files/folders to always exclude from unused detection
const ALWAYS_USED_PATTERNS = [
  'unused-images/**',
  '.well-known/**',
  'robots.txt',
  'sitemap.xml',
  'manifest*.json',
  'favicon*',
  'apple-touch-icon*',
  'icon-*.png',
  'sw.js'
];

function loadUsedImagesReport() {
  const reportPath = path.join(projectRoot, 'public', 'used-images-report.json');
  
  if (!fs.existsSync(reportPath)) {
    console.error('❌ used-images-report.json not found. Run "npm run images:scan" first.');
    process.exit(1);
  }
  
  try {
    const content = fs.readFileSync(reportPath, 'utf8');
    const report = JSON.parse(content);
    return new Set(report.map(img => img.path));
  } catch (error) {
    console.error('❌ Error reading used images report:', error.message);
    process.exit(1);
  }
}

function shouldExcludeFile(filePath, relativePath) {
  // Check against always-used patterns
  for (const pattern of ALWAYS_USED_PATTERNS) {
    if (relativePath.includes(pattern.replace('**', '')) || 
        relativePath.match(pattern.replace('*', '.*'))) {
      return true;
    }
  }
  
  // Exclude files in unused-images directory
  if (relativePath.startsWith('unused-images/')) {
    return true;
  }
  
  return false;
}

async function findUnusedImages() {
  console.log('🔍 Finding unused images...');
  
  // Load used images report
  const usedImages = loadUsedImagesReport();
  console.log(`📊 Found ${usedImages.size} used images in report`);
  
  // Find all image files in public directory
  const publicDir = path.join(projectRoot, 'public');
  const allImages = await glob('**/*.{png,jpg,jpeg,svg,webp,gif}', {
    cwd: publicDir,
    absolute: false,
    ignore: ['**/node_modules/**', '**/build/**', '**/dist/**']
  });
  
  console.log(`📁 Found ${allImages.length} total image files in public directory`);
  
  // Filter out excluded files and find unused ones
  const unusedImages = [];
  
  for (const imagePath of allImages) {
    // Skip if in excluded patterns
    if (shouldExcludeFile(imagePath, imagePath)) {
      continue;
    }
    
    // Check if image is used
    if (!usedImages.has(imagePath)) {
      unusedImages.push(imagePath);
    }
  }
  
  // Write unused images report
  const reportPath = path.join(projectRoot, 'public', 'unused-images-report.txt');
  const reportContent = unusedImages.join('\n');
  fs.writeFileSync(reportPath, reportContent);
  
  console.log(`✅ Found ${unusedImages.length} unused images`);
  console.log(`📄 Report saved to: ${reportPath}`);
  
  // Print summary
  if (unusedImages.length > 0) {
    console.log('\n📋 Unused Images:');
    unusedImages.forEach(img => {
      console.log(`  ${img}`);
    });
    
    // Group by directory
    const byDir = {};
    unusedImages.forEach(img => {
      const dir = path.dirname(img);
      if (!byDir[dir]) byDir[dir] = [];
      byDir[dir].push(path.basename(img));
    });
    
    console.log('\n📁 Unused Images by Directory:');
    Object.entries(byDir).forEach(([dir, files]) => {
      console.log(`  ${dir}/ (${files.length} files):`);
      files.forEach(file => {
        console.log(`    ${file}`);
      });
    });
  } else {
    console.log('🎉 No unused images found!');
  }
  
  return unusedImages;
}

// Run the scan
findUnusedImages().catch(error => {
  console.error('❌ Error finding unused images:', error);
  process.exit(1);
});
