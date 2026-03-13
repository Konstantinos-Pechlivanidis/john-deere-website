export const CANONICAL_ORIGIN = "https://www.i-k-psoma.gr";
export const CANONICAL_HOME_URL = `${CANONICAL_ORIGIN}/`;
export const BRAND_NAME = "I. & K. PSOMA O.E.";
export const DEFAULT_OG_IMAGE = "/images/logos/tractorLogo2.png";

export const CORE_INDEXABLE_PATHS = ["/", "/about", "/parts", "/services", "/contact"];
export const LEGAL_NOINDEX_PATHS = ["/terms", "/privacy"];

const PAGE_SEO = {
  "/": {
    title: {
      el: "I. & K. PSOMA O.E. | John Deere Agricultural Machinery Parts in Greece",
      en: "I. & K. PSOMA O.E. | John Deere Agricultural Machinery Parts in Greece",
    },
    description: {
      el: "I. & K. PSOMA O.E. supplies spare parts for tractors, strippers, harvesters, and cotton machinery from Thessaloniki with nationwide shipping and technical support.",
      en: "I. & K. PSOMA O.E. supplies spare parts for tractors, strippers, harvesters, and cotton machinery from Thessaloniki with nationwide shipping and technical support.",
    },
    ogImage: "/images/general/DSC_2519.JPG",
  },
  "/about": {
    title: {
      el: "About I. & K. PSOMA O.E. | 40+ Years of Agricultural Parts Experience",
      en: "About I. & K. PSOMA O.E. | 40+ Years of Agricultural Parts Experience",
    },
    description: {
      el: "Learn how I. & K. PSOMA O.E. has served agricultural professionals since 1980 with trusted parts sourcing, logistics, and customer support.",
      en: "Learn how I. & K. PSOMA O.E. has served agricultural professionals since 1980 with trusted parts sourcing, logistics, and customer support.",
    },
    ogImage: "/images/general/Store.JPG",
  },
  "/parts": {
    title: {
      el: "Agricultural Machinery Parts | I. & K. PSOMA O.E.",
      en: "Agricultural Machinery Parts | I. & K. PSOMA O.E.",
    },
    description: {
      el: "Browse major categories of agricultural spare parts for tractors, harvesters, and cotton machinery with quick availability and expert guidance.",
      en: "Browse major categories of agricultural spare parts for tractors, harvesters, and cotton machinery with quick availability and expert guidance.",
    },
    ogImage: "/images/general/DSC_2519.JPG",
  },
  "/services": {
    title: {
      el: "Services | I. & K. PSOMA O.E. Agricultural Parts Supply",
      en: "Services | I. & K. PSOMA O.E. Agricultural Parts Supply",
    },
    description: {
      el: "Explore sourcing, technical support, and delivery services from I. & K. PSOMA O.E. for agricultural machinery spare parts across Greece.",
      en: "Explore sourcing, technical support, and delivery services from I. & K. PSOMA O.E. for agricultural machinery spare parts across Greece.",
    },
    ogImage: "/images/general/DSC_2523.webp",
  },
  "/contact": {
    title: {
      el: "Contact I. & K. PSOMA O.E. | Agricultural Parts Support",
      en: "Contact I. & K. PSOMA O.E. | Agricultural Parts Support",
    },
    description: {
      el: "Contact I. & K. PSOMA O.E. in Thessaloniki for spare part requests, quotes, and technical support for agricultural machinery.",
      en: "Contact I. & K. PSOMA O.E. in Thessaloniki for spare part requests, quotes, and technical support for agricultural machinery.",
    },
    ogImage: "/images/general/DSC_2523.webp",
  },
  "/terms": {
    title: {
      el: "Terms and Conditions | I. & K. PSOMA O.E.",
      en: "Terms and Conditions | I. & K. PSOMA O.E.",
    },
    description: {
      el: "Terms and Conditions for the website and services of I. & K. PSOMA O.E.",
      en: "Terms and Conditions for the website and services of I. & K. PSOMA O.E.",
    },
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/privacy": {
    title: {
      el: "Privacy Policy | I. & K. PSOMA O.E.",
      en: "Privacy Policy | I. & K. PSOMA O.E.",
    },
    description: {
      el: "Privacy Policy and data handling practices for I. & K. PSOMA O.E.",
      en: "Privacy Policy and data handling practices for I. & K. PSOMA O.E.",
    },
    ogImage: DEFAULT_OG_IMAGE,
  },
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

export const getPageSeo = (pathname = "/", language = "el") => {
  const normalizedPath = normalizePathname(pathname);
  const page = PAGE_SEO[normalizedPath] || PAGE_SEO["/"];
  const locale = language && language.toLowerCase().startsWith("en") ? "en" : "el";

  return {
    canonical: normalizedPath,
    title: page.title[locale],
    description: page.description[locale],
    ogImage: page.ogImage || DEFAULT_OG_IMAGE,
  };
};
