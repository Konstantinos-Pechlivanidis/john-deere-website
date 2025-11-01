import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const BASE_URL = process.env.SITE_URL || 'https://i-k-psoma.gr';

const SEO = ({
  title,
  description,
  canonical,
  ogImage,
  ogType = 'website',
  structuredData,
  noindex = false,
  nofollow = false,
  hreflang = null
}) => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language || 'el';
  
  // Default values
  const defaultTitle = 'Ι. & Κ. ΨΩΜΑ Ο.Ε. - Ανταλλακτικά Γεωργικών Μηχανημάτων';
  const defaultDescription = 'Αξιόπιστα συμβατά ανταλλακτικά για γεωργικά μηχανήματα τύπου John Deere. Δεν είμαστε επίσημος αντιπρόσωπος John Deere. Πανελλαδική αποστολή, ποιότητα και εξυπηρέτηση από το 1980.';
  const defaultOgImage = `${BASE_URL}/images/logos/tractorLogo2.png`;
  
  const finalTitle = title ? `${title} | Ι. & Κ. ΨΩΜΑ Ο.Ε.` : defaultTitle;
  const finalDescription = description || defaultDescription;
  const finalCanonical = canonical ? `${BASE_URL}${canonical}` : BASE_URL;
  const finalOgImage = ogImage ? `${BASE_URL}${ogImage}` : defaultOgImage;
  
  // Robots directive
  const robots = [];
  if (noindex) robots.push('noindex');
  if (nofollow) robots.push('nofollow');
  if (robots.length === 0) robots.push('index', 'follow');
  
  // Hreflang structure for i18n
  const hreflangLinks = hreflang || [
    { lang: 'el', url: `${BASE_URL}${canonical || ''}` },
    { lang: 'en', url: `${BASE_URL}/en${canonical || ''}` }
  ];

  const logoUrl = `${BASE_URL}/images/logos/tractorLogo2.png`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <html lang={currentLang} />
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="robots" content={robots.join(', ')} />
      
      {/* Favicons for Google and browsers */}
      <link rel="icon" type="image/png" sizes="16x16" href={logoUrl} />
      <link rel="icon" type="image/png" sizes="32x32" href={logoUrl} />
      <link rel="icon" type="image/png" sizes="96x96" href={logoUrl} />
      <link rel="icon" type="image/png" sizes="192x192" href={logoUrl} />
      <link rel="icon" type="image/png" sizes="512x512" href={logoUrl} />
      <link rel="shortcut icon" href={logoUrl} />
      <link rel="apple-touch-icon" href={logoUrl} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={finalCanonical} />
      
      {/* Hreflang for i18n */}
      {hreflangLinks.map(({ lang, url }) => (
        <link key={lang} rel="alternate" hrefLang={lang} href={url} />
      ))}
      
      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={finalOgImage} />
      <meta property="og:image:width" content="512" />
      <meta property="og:image:height" content="512" />
      <meta property="og:url" content={finalCanonical} />
      <meta property="og:site_name" content="Ι. & Κ. ΨΩΜΑ Ο.Ε." />
      <meta property="og:locale" content={currentLang === 'el' ? 'el_GR' : 'en_US'} />
      
      {/* Additional logo for Google */}
      <link rel="icon" type="image/png" href={logoUrl} />
      
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
