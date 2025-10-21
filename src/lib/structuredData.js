// Structured Data (JSON-LD) utilities for SEO

const BASE_URL = 'https://psomasst.gr';

export const getWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Ι. & Κ. ΨΩΜΑ Ο.Ε.",
  "url": BASE_URL,
  "description": "Αξιόπιστα ανταλλακτικά για γεωργικά μηχανήματα John Deere. Πανελλαδική αποστολή, ποιότητα και εξυπηρέτηση από το 1980.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${BASE_URL}/search?q={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  }
});

export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Ι. & Κ. ΨΩΜΑ Ο.Ε.",
  "url": BASE_URL,
  "logo": `${BASE_URL}/images/logos/tractorLogo2.png`,
  "description": "Εισαγωγέας γεωργικών ανταλλακτικών με 40+ χρόνια εμπειρίας",
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
    "availableLanguage": ["Greek", "English"]
  },
  "sameAs": [
    // Add social media URLs when available
  ]
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
    "name": "Ι. & Κ. ΨΩΜΑ Ο.Ε."
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
    "name": product.brand || "John Deere"
  },
  "category": product.category,
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@type": "Organization",
      "name": "Ι. & Κ. ΨΩΜΑ Ο.Ε."
    }
  }
});
