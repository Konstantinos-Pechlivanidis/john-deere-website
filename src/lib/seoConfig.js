import seoPages from "../config/seoPages.json";

const normalizeCanonicalOrigin = (origin = "") => {
  const normalized = String(origin || "").trim().replace(/\/+$/, "");
  return normalized || "https://www.i-k-psoma.gr";
};

export const normalizePathname = (pathname = "/") => {
  if (!pathname || pathname === "/") {
    return "/";
  }

  const [withoutHash] = pathname.split("#");
  const [withoutQuery] = withoutHash.split("?");
  const withLeadingSlash = withoutQuery.startsWith("/") ? withoutQuery : `/${withoutQuery}`;
  const trimmed = withLeadingSlash.replace(/\/+$/, "");
  return trimmed || "/";
};

export const CANONICAL_ORIGIN = normalizeCanonicalOrigin(seoPages.canonicalOrigin);
export const CANONICAL_HOME_URL = `${CANONICAL_ORIGIN}/`;
export const BRAND_NAME = seoPages.brandName || "i.k psoma";
export const LEGAL_BUSINESS_NAME = seoPages.legalBusinessName || BRAND_NAME;
export const DEFAULT_OG_IMAGE = seoPages.defaultOgImage || "/images/logos/tractorLogo2.png";

const rawPages = Array.isArray(seoPages.pages) ? seoPages.pages : [];

export const PAGE_SEO = rawPages.reduce((acc, page) => {
  const path = normalizePathname(page.path);
  acc[path] = {
    ...page,
    path,
  };
  return acc;
}, {});

const HOME_PAGE_FALLBACK = {
  path: "/",
  title: `Ανταλλακτικά Γεωργικών Μηχανημάτων | ${BRAND_NAME}`,
  description:
    "Η i.k psoma προσφέρει ανταλλακτικά γεωργικών μηχανημάτων, τεχνική υποστήριξη και άμεση εξυπηρέτηση σε όλη την Ελλάδα.",
  ogImage: DEFAULT_OG_IMAGE,
  indexable: true,
  robots: "index,follow",
  changefreq: "weekly",
  priority: "1.0",
};

const HOME_PAGE = PAGE_SEO["/"] || HOME_PAGE_FALLBACK;

if (!PAGE_SEO["/"]) {
  PAGE_SEO["/"] = HOME_PAGE;
}

const PAGE_SEO_LIST = Object.values(PAGE_SEO);

export const CORE_INDEXABLE_PATHS = PAGE_SEO_LIST.filter((page) => page.indexable !== false).map(
  (page) => page.path
);
export const LEGAL_NOINDEX_PATHS = PAGE_SEO_LIST.filter((page) => page.indexable === false).map(
  (page) => page.path
);

export const getCanonicalUrl = (pathname = "/") => {
  const normalized = normalizePathname(pathname);
  return normalized === "/" ? CANONICAL_HOME_URL : `${CANONICAL_ORIGIN}${normalized}`;
};

export const buildAbsoluteUrl = (pathOrUrl = "/") => {
  if (/^https?:\/\//i.test(pathOrUrl)) {
    return pathOrUrl;
  }

  return getCanonicalUrl(pathOrUrl);
};

export const getPageSeo = (pathname = "/", _language = "el") => {
  const normalizedPath = normalizePathname(pathname);
  const page = PAGE_SEO[normalizedPath] || HOME_PAGE;
  const indexable = page.indexable !== false;

  return {
    canonical: normalizedPath,
    title: page.title || HOME_PAGE.title,
    description: page.description || HOME_PAGE.description,
    ogImage: page.ogImage || DEFAULT_OG_IMAGE,
    robots: page.robots || (indexable ? "index,follow" : "noindex,follow"),
    indexable,
    changefreq: page.changefreq,
    priority: page.priority,
  };
};

export const getSeoRoutes = () =>
  PAGE_SEO_LIST.map((page) => {
    const indexable = page.indexable !== false;

    return {
      ...page,
      path: normalizePathname(page.path),
      ogImage: page.ogImage || DEFAULT_OG_IMAGE,
      robots: page.robots || (indexable ? "index,follow" : "noindex,follow"),
      indexable,
    };
  });
