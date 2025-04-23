
import Layout from "../components/layout/Layout";
import Hero from "../components/home/Hero";
import ValueProposition from "../components/home/ValueProposition";
import FeaturedProducts from "../components/home/FeaturedProducts";
import AboutPreview from "../components/home/AboutPreview";
import ContactSection from "../components/home/ContactSection";

const Index = () => {
  return (
    <Layout>
      <div role="region" aria-label="Homepage content">
        <Hero />
        <ValueProposition />
        <FeaturedProducts />
        <AboutPreview />
        <ContactSection />
      </div>
    </Layout>
  );
};

export default Index;
