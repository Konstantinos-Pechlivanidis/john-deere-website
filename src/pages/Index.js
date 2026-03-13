
import Layout from "../components/layout/Layout";
import SEO from "../components/SEO";
import Hero from "../components/home/Hero";
import ValueProposition from "../components/home/ValueProposition";
import AboutPreview from "../components/home/AboutPreview";
import ContactSection from "../components/home/ContactSection";
import PartsLinkSection from "../components/home/PartsLinkSection";
import {
  getLocalBusinessSchema,
  getOrganizationSchema,
  getWebPageSchema,
  getWebsiteSchema,
} from "../lib/structuredData";
import { getPageSeo } from "../lib/seoConfig";
import { useTranslation } from "react-i18next";

const Index = () => {
  const { i18n } = useTranslation(["home", "common"]);
  const seo = getPageSeo("/", i18n.language);
  
  const structuredData = [
    getWebsiteSchema(),
    getOrganizationSchema(),
    getLocalBusinessSchema(),
    getWebPageSchema({
      path: "/",
      name: seo.title,
      description: seo.description,
    }),
  ];

  return (
    <Layout>
      <SEO
        title={seo.title}
        description={seo.description}
        canonical="/"
        ogImage={seo.ogImage}
        structuredData={structuredData}
      />
      <div role="region" aria-label="Homepage content">
        <Hero />
        <ValueProposition />
        <PartsLinkSection />
        <AboutPreview />
        <ContactSection />
      </div>
    </Layout>
  );
};

export default Index;
