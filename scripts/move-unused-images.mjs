#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const DRY_RUN = process.env.DRY_RUN === '1';

function checkGitStatus() {
  try {
    const status = execSync('git status --porcelain', { 
      cwd: projectRoot,
      encoding: 'utf8'
    });
    
    if (status.trim()) {
      console.error('❌ Git working tree is not clean. Please commit or stash changes before moving images.');
      console.error('Uncommitted changes:');
      console.error(status);
      process.exit(1);
    }
  } catch (error) {
    console.warn('⚠️  Could not check git status:', error.message);
  }
}

function loadUnusedImagesReport() {
  const reportPath = path.join(projectRoot, 'public', 'unused-images-report.txt');
  
  if (!fs.existsSync(reportPath)) {
    console.error('❌ unused-images-report.txt not found. Run "npm run images:diff" first.');
    process.exit(1);
  }
  
  try {
    const content = fs.readFileSync(reportPath, 'utf8');
    return content.split('\n').filter(line => line.trim());
  } catch (error) {
    console.error('❌ Error reading unused images report:', error.message);
    process.exit(1);
  }
}

function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function getUniqueDestinationPath(destinationPath) {
  if (!fs.existsSync(destinationPath)) {
    return destinationPath;
  }
  
  const dir = path.dirname(destinationPath);
  const ext = path.extname(destinationPath);
  const name = path.basename(destinationPath, ext);
  
  let counter = 1;
  let newPath;
  
  do {
    newPath = path.join(dir, `${name}_${counter}${ext}`);
    counter++;
  } while (fs.existsSync(newPath));
  
  return newPath;
}

function moveFile(sourcePath, destinationPath) {
  const fullSourcePath = path.join(projectRoot, 'public', sourcePath);
  const fullDestinationPath = path.join(projectRoot, 'public', 'unused-images', sourcePath);
  
  // Check if source file exists
  if (!fs.existsSync(fullSourcePath)) {
    console.warn(`⚠️  Source file not found: ${sourcePath}`);
    return null;
  }
  
  // Ensure destination directory exists
  ensureDirectoryExists(path.dirname(fullDestinationPath));
  
  // Check for conflicts and get unique path
  const finalDestinationPath = getUniqueDestinationPath(fullDestinationPath);
  
  if (DRY_RUN) {
    console.log(`[DRY RUN] Would move: ${sourcePath} → unused-images/${sourcePath}`);
    if (finalDestinationPath !== fullDestinationPath) {
      console.log(`[DRY RUN] (renamed to avoid conflict: ${path.relative(projectRoot, finalDestinationPath)})`);
    }
    return {
      from: sourcePath,
      to: path.relative(projectRoot, finalDestinationPath),
      timestamp: new Date().toISOString()
    };
  } else {
    try {
      fs.renameSync(fullSourcePath, finalDestinationPath);
      console.log(`✅ Moved: ${sourcePath} → unused-images/${sourcePath}`);
      if (finalDestinationPath !== fullDestinationPath) {
        console.log(`   (renamed to avoid conflict: ${path.relative(projectRoot, finalDestinationPath)})`);
      }
      return {
        from: sourcePath,
        to: path.relative(projectRoot, finalDestinationPath),
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      console.error(`❌ Error moving ${sourcePath}:`, error.message);
      return null;
    }
  }
}

async function moveUnusedImages() {
  if (DRY_RUN) {
    console.log('🔍 DRY RUN MODE - No files will be moved');
  } else {
    console.log('🚚 Moving unused images...');
    checkGitStatus();
  }
  
  // Load unused images report
  const unusedImages = loadUnusedImagesReport();
  
  if (unusedImages.length === 0) {
    console.log('🎉 No unused images to move!');
    return;
  }
  
  console.log(`📋 Found ${unusedImages.length} unused images to move`);
  
  const moves = [];
  let successCount = 0;
  let errorCount = 0;
  
  // Process each unused image
  for (const imagePath of unusedImages) {
    const result = moveFile(imagePath, imagePath);
    if (result) {
      moves.push(result);
      successCount++;
    } else {
      errorCount++;
    }
  }
  
  // Write moves log
  const movesLogPath = path.join(projectRoot, 'public', 'unused-images-moves.json');
  fs.writeFileSync(movesLogPath, JSON.stringify(moves, null, 2));
  
  // Print summary
  console.log('\n📊 Summary:');
  console.log(`  ✅ Successfully processed: ${successCount} files`);
  if (errorCount > 0) {
    console.log(`  ❌ Errors: ${errorCount} files`);
  }
  
  if (DRY_RUN) {
    console.log(`📄 Move log would be saved to: ${movesLogPath}`);
  } else {
    console.log(`📄 Move log saved to: ${movesLogPath}`);
  }
  
  // Group by directory
  const byDir = {};
  moves.forEach(move => {
    const dir = path.dirname(move.to);
    if (!byDir[dir]) byDir[dir] = [];
    byDir[dir].push(path.basename(move.to));
  });
  
  console.log('\n📁 Moved Images by Directory:');
  Object.entries(byDir).forEach(([dir, files]) => {
    console.log(`  ${dir}/ (${files.length} files):`);
    files.forEach(file => {
      console.log(`    ${file}`);
    });
  });
}

// Run the move operation
moveUnusedImages().catch(error => {
  console.error('❌ Error moving unused images:', error);
  process.exit(1);
});
