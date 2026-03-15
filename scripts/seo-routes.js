const seoPages = require("../src/config/seoPages.json");

const normalizeCanonicalOrigin = (origin = "") => {
  const normalized = String(origin || "").trim().replace(/\/+$/, "");
  return normalized || "https://www.i-k-psoma.gr";
};

const CANONICAL_ORIGIN = normalizeCanonicalOrigin(seoPages.canonicalOrigin);
const BRAND_NAME = seoPages.brandName || "i.k psoma";
const LEGAL_BUSINESS_NAME = seoPages.legalBusinessName || BRAND_NAME;
const DEFAULT_OG_IMAGE = seoPages.defaultOgImage || "/images/logos/tractorLogo2.png";

const normalizePathname = (pathname = "/") => {
  if (!pathname || pathname === "/") {
    return "/";
  }

  const [withoutHash] = pathname.split("#");
  const [withoutQuery] = withoutHash.split("?");
  const withLeadingSlash = withoutQuery.startsWith("/") ? withoutQuery : `/${withoutQuery}`;
  const trimmed = withLeadingSlash.replace(/\/+$/, "");
  return trimmed || "/";
};

const getCanonicalUrl = (pathname = "/") => {
  const normalized = normalizePathname(pathname);
  return normalized === "/" ? `${CANONICAL_ORIGIN}/` : `${CANONICAL_ORIGIN}${normalized}`;
};

const rawRoutes = Array.isArray(seoPages.pages) ? seoPages.pages : [];

const routes = rawRoutes.map((route) => {
  const path = normalizePathname(route.path);
  const indexable = route.indexable !== false;

  return {
    ...route,
    path,
    ogImage: route.ogImage || DEFAULT_OG_IMAGE,
    robots: route.robots || (indexable ? "index,follow" : "noindex,follow"),
    indexable,
  };
});

module.exports = {
  BRAND_NAME,
  LEGAL_BUSINESS_NAME,
  CANONICAL_ORIGIN,
  routes,
  getCanonicalUrl,
  normalizePathname,
};
