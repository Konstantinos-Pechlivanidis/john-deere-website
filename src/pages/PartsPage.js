import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import SEO from "../components/SEO";
import { useTranslation } from "react-i18next";
import { getBreadcrumbSchema, getProductSchema, getWebPageSchema } from "../lib/structuredData";
import { BRAND_NAME, getCanonicalUrl, getPageSeo } from "../lib/seoConfig";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Button } from "../components/ui/button";

// Components ανά κατηγορία
import GeneralParts from "../components/partsCategories/GeneralParts";
import EngineParts from "../components/partsCategories/EngineParts";
import TransmissionParts from "../components/partsCategories/TransmissionParts";
import DifferentialParts from "../components/partsCategories/DifferentialParts";
import FilterParts from "../components/partsCategories/FilterParts";
import ClutchParts from "../components/partsCategories/ClutchParts";
import HydraulicParts from "../components/partsCategories/HydraulicParts";
import BrakeParts from "../components/partsCategories/BrakeParts";
import ElectricalParts from "../components/partsCategories/ElectricalParts";
import CabinFrameParts from "../components/partsCategories/CabinFrameParts";
import LubricantsParts from "../components/partsCategories/LubricantsParts";

// Mapping κατηγοριών -> Component
const categoryComponents = {
  γενικα: <GeneralParts />,
  κινητηρας: <EngineParts />,
  σασμαν: <TransmissionParts />,
  διαφορικο: <DifferentialParts />,
  φιλτρα: <FilterParts />,
  συμπλεκτης: <ClutchParts />,
  υδραυλικο: <HydraulicParts />,
  φρενα: <BrakeParts />,
  ηλεκτρολογικο: <ElectricalParts />,
  καμπινα: <CabinFrameParts />,
  λιπαντικα: <LubricantsParts />,
};

const PartsPage = () => {
  const { t, i18n } = useTranslation(["parts", "common", "layout"]);
  const seo = getPageSeo("/parts", i18n.language);
  const [selectedCategory, setSelectedCategory] = useState("γενικα");

  const breadcrumbData = getBreadcrumbSchema([
    { name: BRAND_NAME, url: getCanonicalUrl("/") },
    { name: t("layout:navigation.parts"), url: getCanonicalUrl("/parts") }
  ]);

  const productSchema = getProductSchema({
    name: seo.title,
    description: seo.description,
    category: "Ανταλλακτικά γεωργικών μηχανημάτων",
    brand: BRAND_NAME,
  });

  return (
    <Layout>
      <SEO
        title={seo.title}
        description={seo.description}
        canonical="/parts"
        ogImage={seo.ogImage}
        structuredData={[
          getWebPageSchema({
            path: "/parts",
            name: seo.title,
            description: seo.description,
            type: "CollectionPage",
          }),
          breadcrumbData,
          productSchema,
        ]}
      />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          {/* Τίτλος */}
          <h1 className="text-4xl font-extrabold text-charcoal-dark mb-4 tracking-tight">
            {t('title')}
          </h1>
          <div className="w-20 h-1 bg-jdyellow mx-auto mb-6 rounded" />

          {/* Περιγραφή */}
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            {t('subtitle')} {t('common:choose_what_suits_you')}. {t('common:if_unsure_start_with')} <strong>{t('categories.general')}</strong>.
          </p>

          {/* Επιλογή Κατηγορίας */}
          <div className="bg-gray-50 shadow-inner border border-gray-200 rounded-xl p-6 max-w-xl mx-auto mb-12">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 text-left">
              {t('category_selector.label')}
            </h3>
            <Select onValueChange={setSelectedCategory} defaultValue="γενικα">
              <SelectTrigger className="w-full bg-white border-gray-300 shadow-sm hover:shadow-md transition focus:ring-jdgreen focus:border-jdgreen rounded-md text-left">
                <SelectValue placeholder={t('category_selector.placeholder')} />
              </SelectTrigger>
              <SelectContent className="z-50">
                <SelectItem value="γενικα">{t('categories.general')}</SelectItem>
                <SelectItem value="κινητηρας">{t('categories.engine')}</SelectItem>
                <SelectItem value="σασμαν">{t('categories.transmission')}</SelectItem>
                <SelectItem value="διαφορικο">{t('categories.differential')}</SelectItem>
                <SelectItem value="φιλτρα">{t('categories.filter')}</SelectItem>
                <SelectItem value="συμπλεκτης">{t('categories.clutch')}</SelectItem>
                <SelectItem value="φρενα">{t('categories.brake')}</SelectItem>
                <SelectItem value="υδραυλικο">{t('categories.hydraulic')}</SelectItem>
                <SelectItem value="ηλεκτρολογικο">
                  {t('categories.electrical')}
                </SelectItem>
                <SelectItem value="καμπινα">{t('categories.cabin')}</SelectItem>
                <SelectItem value="λιπαντικα">{t('categories.lubricants')}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Εμφάνιση Επιλεγμένου Component */}
          <div className="mt-12">
            {categoryComponents[selectedCategory] || <GeneralParts />}
          </div>

          <Button
            asChild
            className="bg-jdgreen hover:bg-jdgreen-light text-white px-6 rounded-full shadow-md text-base font-medium"
          >
            <Link to="/contact">{t('common:contact_us')}</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default PartsPage;

