const fs = require("fs");
const path = require("path");
const {
  BRAND_NAME,
  LEGAL_BUSINESS_NAME,
  CANONICAL_ORIGIN,
  getCanonicalUrl,
  routes,
} = require("./seo-routes");

const BUILD_DIR = path.join(__dirname, "..", "build");
const INDEX_PATH = path.join(BUILD_DIR, "index.html");

const escapeHtml = (value = "") =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const toAbsoluteAsset = (value) => {
  if (/^https?:\/\//i.test(value)) {
    return value;
  }

  return `${CANONICAL_ORIGIN}${value.startsWith("/") ? value : `/${value}`}`;
};

const toSlug = (pathname) => pathname.replace(/^\/+/, "");

const buildStructuredData = (route) => {
  const canonical = getCanonicalUrl(route.path);
  const logoUrl = `${CANONICAL_ORIGIN}/images/logos/tractorLogo2.png`;

  const webPage = {
    "@context": "https://schema.org",
    "@type": route.path === "/about" ? "AboutPage" : route.path === "/contact" ? "ContactPage" : "WebPage",
    "@id": `${canonical}#webpage`,
    url: canonical,
    name: route.title,
    description: route.description,
    isPartOf: {
      "@id": `${CANONICAL_ORIGIN}/#website`,
    },
    about: {
      "@id": `${CANONICAL_ORIGIN}/#organization`,
    },
    inLanguage: "el-GR",
  };

  if (route.path !== "/") {
    return [webPage];
  }

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${CANONICAL_ORIGIN}/#website`,
    url: `${CANONICAL_ORIGIN}/`,
    name: BRAND_NAME,
    inLanguage: "el-GR",
    publisher: {
      "@id": `${CANONICAL_ORIGIN}/#organization`,
    },
  };

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${CANONICAL_ORIGIN}/#organization`,
    name: BRAND_NAME,
    legalName: LEGAL_BUSINESS_NAME,
    alternateName: LEGAL_BUSINESS_NAME,
    url: `${CANONICAL_ORIGIN}/`,
    logo: {
      "@type": "ImageObject",
      url: logoUrl,
    },
    sameAs: [
      "https://www.facebook.com/profile.php?id=100009717723166",
      "https://www.instagram.com/i.k.psomaoe/",
    ],
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Store"],
    "@id": `${CANONICAL_ORIGIN}/#localbusiness`,
    name: BRAND_NAME,
    legalName: LEGAL_BUSINESS_NAME,
    url: `${CANONICAL_ORIGIN}/`,
    image: logoUrl,
    telephone: "+30-2310-512239",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Monastiriou 92",
      addressLocality: "Thessaloniki",
      postalCode: "54627",
      addressCountry: "GR",
    },
  };

  return [website, organization, localBusiness, webPage];
};

const buildNoScriptContent = (route) => {
  const canonical = getCanonicalUrl(route.path);

  return `<noscript>
  <main style="max-width: 880px; margin: 0 auto; padding: 24px; font-family: Arial, sans-serif; line-height: 1.5;">
    <h1>${escapeHtml(route.title)}</h1>
    <p>${escapeHtml(route.description)}</p>
    <p>Canonical URL: <a href="${canonical}">${canonical}</a></p>
    <p>
      <a href="${getCanonicalUrl("/")}">Αρχική</a> |
      <a href="${getCanonicalUrl("/about")}">Σχετικά</a> |
      <a href="${getCanonicalUrl("/parts")}">Ανταλλακτικά</a> |
      <a href="${getCanonicalUrl("/services")}">Υπηρεσίες</a> |
      <a href="${getCanonicalUrl("/contact")}">Επικοινωνία</a>
    </p>
  </main>
</noscript>`;
};

const injectRouteMeta = (template, route) => {
  const canonical = getCanonicalUrl(route.path);
  const ogImage = toAbsoluteAsset(route.ogImage || "/images/logos/tractorLogo2.png");
  const locale = "el_GR";
  const structuredData = buildStructuredData(route);
  const robots = route.robots || "index,follow";

  const managedPatterns = [
    /<title>[\s\S]*?<\/title>/gi,
    /<meta\s+name="description"[^>]*>\s*/gi,
    /<meta\s+name="robots"[^>]*>\s*/gi,
    /<link\s+rel="canonical"[^>]*>\s*/gi,
    /<meta\s+property="og:[^"]+"[^>]*>\s*/gi,
    /<meta\s+name="twitter:[^"]+"[^>]*>\s*/gi,
    /<script\s+type="application\/ld\+json">[\s\S]*?<\/script>\s*/gi,
  ];

  let html = template;
  managedPatterns.forEach((pattern) => {
    html = html.replace(pattern, "");
  });

  const headTags = [
    `<title data-rh="true">${escapeHtml(route.title)}</title>`,
    `<meta data-rh="true" name="description" content="${escapeHtml(route.description)}" />`,
    `<meta data-rh="true" name="robots" content="${robots}" />`,
    `<link data-rh="true" rel="canonical" href="${canonical}" />`,
    `<meta data-rh="true" property="og:type" content="website" />`,
    `<meta data-rh="true" property="og:title" content="${escapeHtml(route.title)}" />`,
    `<meta data-rh="true" property="og:description" content="${escapeHtml(route.description)}" />`,
    `<meta data-rh="true" property="og:url" content="${canonical}" />`,
    `<meta data-rh="true" property="og:image" content="${ogImage}" />`,
    `<meta data-rh="true" property="og:site_name" content="${escapeHtml(BRAND_NAME)}" />`,
    `<meta data-rh="true" property="og:locale" content="${locale}" />`,
    `<meta data-rh="true" name="twitter:card" content="summary_large_image" />`,
    `<meta data-rh="true" name="twitter:title" content="${escapeHtml(route.title)}" />`,
    `<meta data-rh="true" name="twitter:description" content="${escapeHtml(route.description)}" />`,
    `<meta data-rh="true" name="twitter:image" content="${ogImage}" />`,
    ...structuredData.map(
      (schema) => `<script data-rh="true" type="application/ld+json">${JSON.stringify(schema)}</script>`
    ),
  ].join("\n    ");

  html = html.replace("</head>", `    ${headTags}\n  </head>`);

  if (/<noscript>[\s\S]*?<\/noscript>/i.test(html)) {
    html = html.replace(/<noscript>[\s\S]*?<\/noscript>/i, buildNoScriptContent(route));
  } else {
    html = html.replace("<body>", `<body>\n${buildNoScriptContent(route)}`);
  }

  return html;
};

const writeRouteFile = (route, html) => {
  const normalizedPath = route.path === "/" ? "/" : `/${toSlug(route.path)}`;
  const outputPath =
    normalizedPath === "/"
      ? INDEX_PATH
      : path.join(BUILD_DIR, toSlug(normalizedPath), "index.html");

  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, html);
  console.log(`Prerendered ${normalizedPath} -> ${outputPath}`);
};

const prerender = () => {
  if (!fs.existsSync(INDEX_PATH)) {
    throw new Error(`Missing build index at ${INDEX_PATH}. Run the production build first.`);
  }

  const template = fs.readFileSync(INDEX_PATH, "utf8");

  routes.forEach((route) => {
    const html = injectRouteMeta(template, route);
    writeRouteFile(route, html);
  });
};

prerender();
