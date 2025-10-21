const fs = require('fs');
const path = require('path');

const SITE_URL = process.env.SITE_URL || 'https://i-k-psoma.gr';
const BUILD_DIR = path.join(__dirname, '..', 'build');
const SITEMAP_PATH = path.join(BUILD_DIR, 'sitemap.xml');

// Static routes from the app
const routes = [
  { url: '/', priority: '1.0', changefreq: 'weekly' },
  { url: '/about', priority: '0.8', changefreq: 'monthly' },
  { url: '/parts', priority: '0.9', changefreq: 'weekly' },
  { url: '/services', priority: '0.8', changefreq: 'monthly' },
  { url: '/contact', priority: '0.7', changefreq: 'monthly' },
  { url: '/terms', priority: '0.3', changefreq: 'yearly' },
  { url: '/privacy', priority: '0.3', changefreq: 'yearly' },
];

const generateSitemap = () => {
  const lastmod = new Date().toISOString().split('T')[0];
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${SITE_URL}${route.url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  // Ensure build directory exists
  if (!fs.existsSync(BUILD_DIR)) {
    fs.mkdirSync(BUILD_DIR, { recursive: true });
  }

  fs.writeFileSync(SITEMAP_PATH, sitemap);
  console.log(`✅ Sitemap generated at ${SITEMAP_PATH}`);
  console.log(`📄 Generated ${routes.length} URLs`);
};

generateSitemap();