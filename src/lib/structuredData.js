import { BRAND_NAME, CANONICAL_HOME_URL, CANONICAL_ORIGIN, getCanonicalUrl } from "./seoConfig";

const ORGANIZATION_ID = `${CANONICAL_HOME_URL}#organization`;
const WEBSITE_ID = `${CANONICAL_HOME_URL}#website`;
const LOCAL_BUSINESS_ID = `${CANONICAL_HOME_URL}#localbusiness`;
const LOGO_URL = `${CANONICAL_ORIGIN}/images/logos/tractorLogo2.png`;

export const getWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: CANONICAL_HOME_URL,
  name: BRAND_NAME,
  inLanguage: "el-GR",
  publisher: {
    "@id": ORGANIZATION_ID,
  },
});

export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: BRAND_NAME,
  url: CANONICAL_HOME_URL,
  logo: {
    "@type": "ImageObject",
    url: LOGO_URL,
    width: 512,
    height: 512,
  },
  image: LOGO_URL,
  description:
    "Agricultural machinery spare parts supplier in Greece with 40+ years of sourcing and support experience.",
  foundingDate: "1980",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+30-2310-512239",
    contactType: "customer service",
    availableLanguage: ["el", "en"],
  },
  sameAs: [
    "https://www.facebook.com/profile.php?id=100009717723166",
    "https://www.instagram.com/i.k.psomaoe/",
  ],
});

export const getLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Store"],
  "@id": LOCAL_BUSINESS_ID,
  name: BRAND_NAME,
  url: CANONICAL_HOME_URL,
  image: LOGO_URL,
  logo: LOGO_URL,
  telephone: "+30-2310-512239",
  email: "info@psomasst.gr",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Monastiriou 92",
    addressLocality: "Thessaloniki",
    postalCode: "54627",
    addressCountry: "GR",
  },
  areaServed: {
    "@type": "Country",
    name: "Greece",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "14:00",
    },
  ],
});

export const getWebPageSchema = ({ path = "/", name, description, type = "WebPage" }) => {
  const pageUrl = getCanonicalUrl(path);

  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name,
    description,
    inLanguage: "el-GR",
    isPartOf: {
      "@id": WEBSITE_ID,
    },
    about: {
      "@id": ORGANIZATION_ID,
    },
  };
};

export const getBreadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: /^https?:\/\//i.test(item.url) ? item.url : getCanonicalUrl(item.url),
  })),
});

export const getServiceSchema = (service) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${getCanonicalUrl("/services")}#service`,
  name: service.name,
  description: service.description,
  provider: {
    "@id": ORGANIZATION_ID,
  },
  serviceType: service.type,
  areaServed: {
    "@type": "Country",
    name: "Greece",
  },
  url: getCanonicalUrl("/services"),
});

export const getProductSchema = (product) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": `${getCanonicalUrl("/parts")}#product-catalog`,
  name: product.name,
  description: product.description,
  brand: {
    "@type": "Brand",
    name: product.brand || "John Deere",
  },
  category: product.category,
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    seller: {
      "@id": ORGANIZATION_ID,
    },
    url: getCanonicalUrl("/contact"),
  },
});
