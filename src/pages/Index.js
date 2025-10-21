
import Layout from "../components/layout/Layout";
import SEO from "../components/SEO";
import Hero from "../components/home/Hero";
import ValueProposition from "../components/home/ValueProposition";
import AboutPreview from "../components/home/AboutPreview";
import ContactSection from "../components/home/ContactSection";
import PartsLinkSection from "../components/home/PartsLinkSection";
import { getWebsiteSchema, getOrganizationSchema } from "../lib/structuredData";
import { useTranslation } from "react-i18next";

const Index = () => {
  const { t } = useTranslation(['home', 'common']);
  
  const structuredData = [
    getWebsiteSchema(),
    getOrganizationSchema()
  ];

  return (
    <Layout>
      <SEO
        title={t('home:hero.title')}
        description={t('home:hero.subtitle')}
        canonical="/"
        ogImage="/images/general/mobile4.jpg"
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
