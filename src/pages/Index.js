
import Layout from "../components/layout/Layout";
import SEO from "../components/SEO";
import Hero from "../components/home/Hero";
import ValueProposition from "../components/home/ValueProposition";
import AboutPreview from "../components/home/AboutPreview";
import ContactSection from "../components/home/ContactSection";
import PartsLinkSection from "../components/home/PartsLinkSection";
import { getWebsiteSchema, getOrganizationSchema } from "../lib/structuredData";
import { ROUTE_SEO } from "../config/seo";

const Index = () => {
  const structuredData = [
    getWebsiteSchema(),
    getOrganizationSchema()
  ];

  return (
    <Layout>
      <SEO
        title={ROUTE_SEO.home.title}
        description={ROUTE_SEO.home.description}
        canonical={ROUTE_SEO.home.canonical}
        ogImage={ROUTE_SEO.home.ogImage}
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
