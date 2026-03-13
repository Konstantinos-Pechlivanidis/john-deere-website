const CANONICAL_ORIGIN = "https://www.i-k-psoma.gr";
const BRAND_NAME = "I. & K. PSOMA O.E.";

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

const routes = [
  {
    path: "/",
    title: "I. & K. PSOMA O.E. | John Deere Agricultural Machinery Parts in Greece",
    description:
      "I. & K. PSOMA O.E. supplies spare parts for tractors, strippers, harvesters, and cotton machinery from Thessaloniki with nationwide shipping and technical support.",
    ogImage: "/images/general/DSC_2519.JPG",
    changefreq: "weekly",
    priority: "1.0",
    indexable: true,
    robots: "index,follow",
  },
  {
    path: "/about",
    title: "About I. & K. PSOMA O.E. | 40+ Years of Agricultural Parts Experience",
    description:
      "Learn how I. & K. PSOMA O.E. has served agricultural professionals since 1980 with trusted parts sourcing, logistics, and customer support.",
    ogImage: "/images/general/Store.JPG",
    changefreq: "monthly",
    priority: "0.8",
    indexable: true,
    robots: "index,follow",
  },
  {
    path: "/parts",
    title: "Agricultural Machinery Parts | I. & K. PSOMA O.E.",
    description:
      "Browse major categories of agricultural spare parts for tractors, harvesters, and cotton machinery with quick availability and expert guidance.",
    ogImage: "/images/general/DSC_2519.JPG",
    changefreq: "weekly",
    priority: "0.9",
    indexable: true,
    robots: "index,follow",
  },
  {
    path: "/services",
    title: "Services | I. & K. PSOMA O.E. Agricultural Parts Supply",
    description:
      "Explore sourcing, technical support, and delivery services from I. & K. PSOMA O.E. for agricultural machinery spare parts across Greece.",
    ogImage: "/images/general/DSC_2523.webp",
    changefreq: "monthly",
    priority: "0.8",
    indexable: true,
    robots: "index,follow",
  },
  {
    path: "/contact",
    title: "Contact I. & K. PSOMA O.E. | Agricultural Parts Support",
    description:
      "Contact I. & K. PSOMA O.E. in Thessaloniki for spare part requests, quotes, and technical support for agricultural machinery.",
    ogImage: "/images/general/DSC_2523.webp",
    changefreq: "monthly",
    priority: "0.7",
    indexable: true,
    robots: "index,follow",
  },
  {
    path: "/terms",
    title: "Terms and Conditions | I. & K. PSOMA O.E.",
    description: "Terms and Conditions for the website and services of I. & K. PSOMA O.E.",
    ogImage: "/images/logos/tractorLogo2.png",
    changefreq: "yearly",
    priority: "0.1",
    indexable: false,
    robots: "noindex,follow",
  },
  {
    path: "/privacy",
    title: "Privacy Policy | I. & K. PSOMA O.E.",
    description: "Privacy Policy and data handling practices for I. & K. PSOMA O.E.",
    ogImage: "/images/logos/tractorLogo2.png",
    changefreq: "yearly",
    priority: "0.1",
    indexable: false,
    robots: "noindex,follow",
  },
].map((route) => ({
  ...route,
  path: normalizePathname(route.path),
}));

module.exports = {
  BRAND_NAME,
  CANONICAL_ORIGIN,
  routes,
  getCanonicalUrl,
  normalizePathname,
};
