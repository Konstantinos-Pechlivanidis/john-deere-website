const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://psomasst.gr';
const BUILD_DIR = path.join(__dirname, '../build');

// Define all routes
const routes = [
  { url: '/', priority: '1.0', changefreq: 'weekly' },
  { url: '/about', priority: '0.8', changefreq: 'monthly' },
  { url: '/parts', priority: '0.9', changefreq: 'weekly' },
  { url: '/services', priority: '0.8', changefreq: 'monthly' },
  { url: '/contact', priority: '0.7', changefreq: 'monthly' }
];

// Generate sitemap.xml
const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${routes.map(route => `  <url>
    <loc>${BASE_URL}${route.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
    <xhtml:link rel="alternate" hreflang="el" href="${BASE_URL}${route.url}" />
    <xhtml:link rel="alternate" hreflang="en" href="${BASE_URL}/en${route.url}" />
  </url>`).join('\n')}
</urlset>`;

  // Ensure build directory exists
  if (!fs.existsSync(BUILD_DIR)) {
    fs.mkdirSync(BUILD_DIR, { recursive: true });
  }

  fs.writeFileSync(path.join(BUILD_DIR, 'sitemap.xml'), sitemap);
  console.log('✅ Sitemap generated successfully');
};

// Generate robots.txt
const generateRobots = () => {
  const robots = `User-agent: *
Allow: /

# Sitemap
Sitemap: ${BASE_URL}/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1

# Disallow admin or private areas (if any)
Disallow: /admin/
Disallow: /private/
Disallow: /*.json$
Disallow: /api/`;

  fs.writeFileSync(path.join(BUILD_DIR, 'robots.txt'), robots);
  console.log('✅ Robots.txt generated successfully');
};

// Run generation
generateSitemap();
generateRobots();
