import {
  BRAND_NAME,
  CANONICAL_HOME_URL,
  CANONICAL_ORIGIN,
  LEGAL_BUSINESS_NAME,
  getCanonicalUrl,
} from "./seoConfig";

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
  legalName: LEGAL_BUSINESS_NAME,
  alternateName: LEGAL_BUSINESS_NAME,
  url: CANONICAL_HOME_URL,
  logo: {
    "@type": "ImageObject",
    url: LOGO_URL,
    width: 512,
    height: 512,
  },
  image: LOGO_URL,
  description:
    "Η i.k psoma εξειδικεύεται σε ανταλλακτικά γεωργικών μηχανημάτων, τεχνική υποστήριξη και άμεση εξυπηρέτηση σε όλη την Ελλάδα.",
  foundingDate: "1980",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+30-2310-512239",
    contactType: "customer support",
    availableLanguage: ["el-GR"],
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
  legalName: LEGAL_BUSINESS_NAME,
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
    name: "Ελλάδα",
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
    name: "Ελλάδα",
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
    name: product.brand || BRAND_NAME,
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
