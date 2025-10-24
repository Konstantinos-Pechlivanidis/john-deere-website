import Layout from "../components/layout/Layout";
import SEO from "../components/SEO";
import { useTranslation } from "react-i18next";
import { getBreadcrumbSchema } from "../lib/structuredData";

const About = () => {
  const { t } = useTranslation('about');
  
  const breadcrumbData = getBreadcrumbSchema([
    { name: t('common:company_name'), url: 'https://www.i-k-psoma.gr' },
    { name: t('layout:navigation.about'), url: 'https://www.i-k-psoma.gr/about' }
  ]);
  
  return (
    <Layout>
      <SEO
        title={t('intro.title')}
        description={t('intro.subtitle')}
        canonical="/about"
        ogImage="/images/general/Store.JPG"
        structuredData={breadcrumbData}
      />
      {/* Intro Section */}
      <div className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4 text-charcoal-dark">
              {t('intro.title')}
            </h1>
            <div className="w-24 h-1 bg-jdyellow mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 mb-8">
              {t('intro.subtitle')}
            </p>
          </div>
        </div>
      </div>

      {/* Η Ιστορία Μας */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-charcoal-dark">
                {t('history.title')}
              </h2>
              <div className="w-20 h-1 bg-jdyellow mb-6"></div>
              <p className="text-gray-600 mb-4">
                {t('history.description_1')}
              </p>
              <p className="text-gray-600 mb-4">
                {t('history.description_2')}
              </p>
              <p className="text-gray-600">
                {t('history.description_3')}
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/images/general/Store.JPG"
                  alt={t('common:alt_texts.agricultural_landscape')}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="hidden md:block absolute -bottom-6 -right-6 w-40 h-40 bg-jdyellow rounded-lg shadow-lg -z-10"></div>
            </div>
          </div>

          {/* Αποστολή & Όραμα */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/images/general/DSC_2521.webp"
                  alt={t('common:alt_texts.our_team')}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="hidden md:block absolute -top-6 -left-6 w-40 h-40 bg-jdgreen rounded-lg shadow-lg -z-10"></div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-4 text-charcoal-dark">
                {t('mission_vision.title')}
              </h2>
              <div className="w-20 h-1 bg-jdyellow mb-6"></div>
              <p className="text-gray-600 mb-4">
                <strong>{t('mission_vision.mission.title')}</strong> {t('mission_vision.mission.description')}
              </p>
              <p className="text-gray-600 mb-4">
                <strong>{t('mission_vision.vision.title')}</strong> {t('mission_vision.vision.description')}
              </p>
              <p className="text-gray-600">
                {t('mission_vision.belief')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Τι μας ξεχωρίζει */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-charcoal-dark mb-4">{t('what_sets_us_apart.title')}</h2>
            <div className="w-24 h-1 bg-jdyellow mx-auto mb-6 rounded"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('what_sets_us_apart.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t('what_sets_us_apart.features', { returnObjects: true }).map((item, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition text-center">
                <h3 className="text-xl font-semibold text-charcoal-dark mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Οι Αξίες μας */}
      <div className="bg-gray-100 py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-charcoal-dark mb-4">{t('values.title')}</h2>
            <div className="w-24 h-1 bg-jdyellow mx-auto mb-6 rounded"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('values.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {t('values.value_items', { returnObjects: true }).map((value, i) => (
              <div key={i} className="p-6 bg-white rounded-xl shadow-md">
                <h3 className="text-jdgreen font-bold text-xl mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
