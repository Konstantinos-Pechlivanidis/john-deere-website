
import Layout from "../components/layout/Layout";
import Hero from "../components/home/Hero";
import ValueProposition from "../components/home/ValueProposition";
import AboutPreview from "../components/home/AboutPreview";
import ContactSection from "../components/home/ContactSection";
import PartsLinkSection from "../components/home/PartsLinkSection";
import MachinerySection from "../components/home/MachinerySection";

const Index = () => {
  return (
    <Layout>
      <div role="region" aria-label="Homepage content">
        <Hero />
        <ValueProposition />
        <PartsLinkSection />
        <MachinerySection />
        {/* <FeaturedProducts /> */}
        <AboutPreview />
        <ContactSection />
      </div>
    </Layout>
  );
};

export default Index;
