const { execSync } = require('child_process');

console.log('🚀 Starting production build...');

try {
  // Set environment variables
  process.env.NODE_ENV = 'production';
  process.env.GENERATE_SOURCEMAP = 'false';
  process.env.SITE_URL = 'https://www.i-k-psoma.gr';

  console.log('🔨 Building application with legacy peer deps...');
  
  // Build the application with legacy peer deps to handle React 19 compatibility
  execSync('npx react-scripts build', { 
    stdio: 'inherit',
    cwd: process.cwd(),
    env: { 
      ...process.env,
      NODE_ENV: 'production',
      GENERATE_SOURCEMAP: 'false'
    }
  });

  console.log('✅ Build completed successfully!');
  console.log('📁 Build files are in the "build" directory');
  
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}
