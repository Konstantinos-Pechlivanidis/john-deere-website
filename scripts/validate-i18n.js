#!/usr/bin/env node

/**
 * I18N Validation Script
 * Scans for hardcoded Greek text and validates i18n coverage
 */

const fs = require('fs');
const path = require('path');

// Greek Unicode range: \u0370-\u03FF
const GREEK_PATTERN = /[\u0370-\u03FF]/;
const QUOTED_STRING_PATTERN = /["'][^"']*[\u0370-\u03FF][^"']*["']/g;

// Files to scan
const SCAN_PATHS = [
  'src/components/home/PartsLinkSection.js',
  'src/components/home/ContactSection.js', 
  'src/pages/About.js',
  'src/pages/Services.js',
  'src/components/partsCategories/',
  'src/pages/Contact.js'
];

// Files to exclude from Greek text check (translation files)
const EXCLUDE_PATTERNS = [
  /\.json$/,
  /node_modules/,
  /build/,
  /dist/
];

let hasErrors = false;
let errorCount = 0;

function logError(file, line, message) {
  console.error(`❌ ${file}:${line} - ${message}`);
  hasErrors = true;
  errorCount++;
}

function logSuccess(message) {
  console.log(`✅ ${message}`);
}

function scanFile(filePath) {
  if (!fs.existsSync(filePath)) {
    console.warn(`⚠️  File not found: ${filePath}`);
    return;
  }

  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');

  lines.forEach((line, index) => {
    const lineNumber = index + 1;
    
    // Skip comments and imports
    if (line.trim().startsWith('//') || line.trim().startsWith('import') || line.trim().startsWith('*')) {
      return;
    }

    // Check for Greek characters in quoted strings (outside of t() calls)
    if (GREEK_PATTERN.test(line) && !line.includes('t(') && !line.includes('useTranslation')) {
      const matches = line.match(QUOTED_STRING_PATTERN);
      if (matches) {
        matches.forEach(match => {
          logError(filePath, lineNumber, `Hardcoded Greek text: ${match}`);
        });
      }
    }
  });
}

function scanDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) {
    console.warn(`⚠️  Directory not found: ${dirPath}`);
    return;
  }

  const items = fs.readdirSync(dirPath);
  
  items.forEach(item => {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      scanDirectory(fullPath);
    } else if (stat.isFile() && item.endsWith('.js') && !EXCLUDE_PATTERNS.some(pattern => pattern.test(fullPath))) {
      scanFile(fullPath);
    }
  });
}

function validateTranslationFiles() {
  const locales = ['el', 'en'];
  const namespaces = ['common', 'layout', 'home', 'about', 'parts', 'services', 'contact', 'categories'];
  
  console.log('\n🔍 Validating translation file structure...');
  
  locales.forEach(locale => {
    namespaces.forEach(namespace => {
      const filePath = `src/i18n/locales/${locale}/${namespace}.json`;
      
      if (!fs.existsSync(filePath)) {
        logError(filePath, 1, `Missing translation file`);
        return;
      }
      
      try {
        const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        logSuccess(`${filePath} - Valid JSON structure`);
      } catch (error) {
        logError(filePath, 1, `Invalid JSON: ${error.message}`);
      }
    });
  });
}

function main() {
  console.log('🌍 I18N Validation Script');
  console.log('========================\n');
  
  // Scan specified files
  console.log('🔍 Scanning for hardcoded Greek text...');
  
  SCAN_PATHS.forEach(scanPath => {
    if (scanPath.endsWith('/')) {
      scanDirectory(scanPath);
    } else {
      scanFile(scanPath);
    }
  });
  
  // Validate translation files
  validateTranslationFiles();
  
  // Summary
  console.log('\n📊 Validation Summary');
  console.log('====================');
  
  if (hasErrors) {
    console.error(`❌ Found ${errorCount} issues that need to be fixed`);
    process.exit(1);
  } else {
    console.log('✅ All validations passed! No hardcoded Greek text found.');
    console.log('✅ All translation files are valid.');
  }
}

if (require.main === module) {
  main();
}

module.exports = { scanFile, scanDirectory, validateTranslationFiles };
