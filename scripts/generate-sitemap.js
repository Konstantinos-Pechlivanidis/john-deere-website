const fs = require("fs");
const path = require("path");
const { getCanonicalUrl, routes } = require("./seo-routes");

const BUILD_DIR = path.join(__dirname, "..", "build");
const PUBLIC_DIR = path.join(__dirname, "..", "public");
const OUTPUT_PATHS = [path.join(BUILD_DIR, "sitemap.xml"), path.join(PUBLIC_DIR, "sitemap.xml")];

const generateSitemap = () => {
  const lastmod = new Date().toISOString().split("T")[0];
  const indexableRoutes = routes.filter((route) => route.indexable);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${indexableRoutes
  .map(
    (route) => `  <url>
    <loc>${getCanonicalUrl(route.path)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  OUTPUT_PATHS.forEach((outputPath) => {
    const outputDir = path.dirname(outputPath);

    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    fs.writeFileSync(outputPath, sitemap);
    console.log(`Sitemap generated at ${outputPath}`);
  });

  console.log(`Generated ${indexableRoutes.length} canonical URLs`);
};

generateSitemap();
