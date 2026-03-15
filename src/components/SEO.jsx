import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import {
  BRAND_NAME,
  DEFAULT_OG_IMAGE,
  buildAbsoluteUrl,
  getCanonicalUrl,
  getPageSeo,
} from "../lib/seoConfig";

const defaultSeo = getPageSeo("/");
const DEFAULT_TITLE = defaultSeo.title;
const DEFAULT_DESCRIPTION = defaultSeo.description;

const normalizeHreflang = (hreflang) => {
  if (!Array.isArray(hreflang)) {
    return [];
  }

  return hreflang
    .filter((entry) => entry?.lang && entry?.url)
    .map((entry) => ({
      lang: entry.lang,
      url: buildAbsoluteUrl(entry.url),
    }));
};

const SEO = ({
  title,
  description,
  canonical = "/",
  ogImage,
  ogType = "website",
  structuredData,
  noindex = false,
  nofollow = false,
  hreflang = [],
}) => {
  const { i18n } = useTranslation();
  const language = i18n.language?.toLowerCase().startsWith("en") ? "en" : "el";

  const finalTitle = title || DEFAULT_TITLE;
  const finalDescription = description || DEFAULT_DESCRIPTION;
  const finalCanonical = canonical === false ? null : getCanonicalUrl(canonical);
  const finalOgImage = buildAbsoluteUrl(ogImage || DEFAULT_OG_IMAGE);
  const robots = `${noindex ? "noindex" : "index"},${nofollow ? "nofollow" : "follow"}`;
  const hreflangLinks = normalizeHreflang(hreflang);

  const structuredDataBlocks = Array.isArray(structuredData)
    ? structuredData.filter(Boolean)
    : structuredData
      ? [structuredData]
      : [];

  const socialUrl = finalCanonical || null;

  return (
    <Helmet>
      <html lang={language} />
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="robots" content={robots} />

      {finalCanonical && <link rel="canonical" href={finalCanonical} />}

      {hreflangLinks.map(({ lang, url }) => (
        <link key={`${lang}-${url}`} rel="alternate" hrefLang={lang} href={url} />
      ))}

      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={finalOgImage} />
      {socialUrl && <meta property="og:url" content={socialUrl} />}
      <meta property="og:site_name" content={BRAND_NAME} />
      <meta property="og:locale" content="el_GR" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={finalOgImage} />

      {structuredDataBlocks.map((schema, index) => (
        <script key={`schema-${index}`} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
