import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { SEO_DEFAULTS, getAbsoluteUrl } from '../config/seo';

const SEO = ({
  title,
  description,
  canonical,
  keywords,
  ogImage,
  ogType = 'website',
  structuredData,
  noindex = false,
  nofollow = false,
  hreflang = null,
  lang = 'el'
}) => {
  const { pathname } = useLocation();

  const finalTitle = title || SEO_DEFAULTS.title;
  const finalDescription = description || SEO_DEFAULTS.description;
  const finalKeywords = Array.isArray(keywords) && keywords.length > 0 ? keywords : null;
  const canonicalPath = canonical || (!noindex ? pathname : null);
  const finalCanonical = canonicalPath ? getAbsoluteUrl(canonicalPath) : null;
  const finalOgImage = getAbsoluteUrl(ogImage || SEO_DEFAULTS.ogImage);
  
  // Robots directive
  const robots = [];
  if (noindex) robots.push('noindex');
  if (nofollow) robots.push('nofollow');
  if (robots.length === 0) robots.push('index', 'follow');
  
  // Greek-first SEO setup with optional overrides when explicit alternate URLs are available.
  const hreflangLinks = hreflang || [{ lang: 'el', url: finalCanonical }];

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <html lang={lang} />
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      {finalKeywords && <meta name="keywords" content={finalKeywords.join(', ')} />}
      <meta name="robots" content={robots.join(', ')} />
      
      {/* Canonical URL */}
      {finalCanonical && <link rel="canonical" href={finalCanonical} />}
      
      {/* Hreflang for i18n */}
      {hreflangLinks.filter(({ url }) => Boolean(url)).map(({ lang: hrefLang, url }) => (
        <link key={hrefLang} rel="alternate" hrefLang={hrefLang} href={url} />
      ))}
      
      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={finalOgImage} />
      <meta property="og:url" content={finalCanonical || getAbsoluteUrl(pathname)} />
      <meta property="og:site_name" content={SEO_DEFAULTS.siteName} />
      <meta property="og:locale" content={SEO_DEFAULTS.locale} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={finalOgImage} />
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#2D5016" />
      <meta name="msapplication-TileColor" content="#2D5016" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
