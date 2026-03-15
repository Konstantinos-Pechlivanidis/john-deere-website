// Structured Data (JSON-LD) utilities for SEO

import { LEGAL_COMPANY_NAME, SEO_BRAND_NAME, SEO_DEFAULTS, getAbsoluteUrl } from '../config/seo';

export const getWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": SEO_BRAND_NAME,
  "alternateName": LEGAL_COMPANY_NAME,
  "url": SEO_DEFAULTS.baseUrl,
  "description": SEO_DEFAULTS.description
});

export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": SEO_BRAND_NAME,
  "legalName": LEGAL_COMPANY_NAME,
  "url": SEO_DEFAULTS.baseUrl,
  "logo": getAbsoluteUrl('/images/logos/tractorLogo2.png'),
  "description": "Εισαγωγέας ανταλλακτικών γεωργικών μηχανημάτων με έδρα τη Θεσσαλονίκη και πανελλαδική εξυπηρέτηση.",
  "foundingDate": "1980",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Μοναστηρίου 92",
    "addressLocality": "Θεσσαλονίκη",
    "addressCountry": "GR"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+30-2310-512239",
    "contactType": "customer service",
    "availableLanguage": ["Greek"]
  },
  "sameAs": []
});

export const getBreadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const getServiceSchema = (service) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": service.name,
  "description": service.description,
  "provider": {
    "@type": "Organization",
    "name": SEO_BRAND_NAME
  },
  "serviceType": service.type,
  "areaServed": {
    "@type": "Country",
    "name": "Greece"
  }
});

export const getProductSchema = (product) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": product.name,
  "description": product.description,
  "brand": {
    "@type": "Brand",
    "name": product.brand || SEO_BRAND_NAME
  },
  "category": product.category,
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@type": "Organization",
      "name": SEO_BRAND_NAME
    }
  }
});
