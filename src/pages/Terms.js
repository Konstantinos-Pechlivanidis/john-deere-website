import Layout from "../components/layout/Layout";
import SEO from "../components/SEO";
import { useTranslation } from "react-i18next";

const Terms = () => {
  const { t } = useTranslation(['legal', 'common']);

  return (
    <Layout>
      <SEO
        title={t('legal:terms.title')}
        description={t('legal:terms.description')}
        canonical="/terms"
      />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold text-jdgreen mb-6">
              {t('legal:terms.title')}
            </h1>
            
            <div className="text-sm text-gray-600 mb-8">
              {t('legal:terms.last_updated')}: October 21, 2025
            </div>

            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-charcoal-dark mb-4">
                  {t('legal:terms.section_1.title')}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('legal:terms.section_1.content')}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-charcoal-dark mb-4">
                  {t('legal:terms.section_2.title')}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('legal:terms.section_2.content')}
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-charcoal-dark mb-2">
                    {t('legal:terms.section_2.company_details')}:
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li><strong>{t('legal:terms.section_2.business_name')}:</strong> I. & K. PSOMA O.E.</li>
                    <li><strong>{t('legal:terms.section_2.address')}:</strong> Monastiriou 92, Thessaloniki, Greece</li>
                    <li><strong>{t('legal:terms.section_2.phone')}:</strong> +30-2310-512239</li>
                    <li><strong>{t('legal:terms.section_2.website')}:</strong> https://psomasst.gr</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-charcoal-dark mb-4">
                  {t('legal:terms.section_3.title')}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('legal:terms.section_3.content')}
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>{t('legal:terms.section_3.point_1')}</li>
                  <li>{t('legal:terms.section_3.point_2')}</li>
                  <li>{t('legal:terms.section_3.point_3')}</li>
                  <li>{t('legal:terms.section_3.point_4')}</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-charcoal-dark mb-4">
                  {t('legal:terms.section_4.title')}
                </h2>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-charcoal-dark mb-3">
                    {t('legal:terms.section_4.permitted_use')}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {t('legal:terms.section_4.permitted_content')}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-charcoal-dark mb-3">
                    {t('legal:terms.section_4.prohibited_activities')}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {t('legal:terms.section_4.prohibited_content')}
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-charcoal-dark mb-4">
                  {t('legal:terms.section_5.title')}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('legal:terms.section_5.content')}
                </p>
                <div className="bg-yellow-50 border-l-4 border-jdyellow p-4 mb-4">
                  <p className="text-gray-700">
                    <strong>{t('legal:terms.section_5.john_deere_notice')}</strong> {t('legal:terms.section_5.john_deere_content')}
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-charcoal-dark mb-4">
                  {t('legal:terms.section_6.title')}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('legal:terms.section_6.content')}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-charcoal-dark mb-4">
                  {t('legal:terms.section_7.title')}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('legal:terms.section_7.content')}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-charcoal-dark mb-4">
                  {t('legal:terms.section_8.title')}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('legal:terms.section_8.content')}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-charcoal-dark mb-4">
                  {t('legal:terms.section_9.title')}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('legal:terms.section_9.content')}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-charcoal-dark mb-4">
                  {t('legal:terms.section_10.title')}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('legal:terms.section_10.content')}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-charcoal-dark mb-4">
                  {t('legal:terms.section_11.title')}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('legal:terms.section_11.content')}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-charcoal-dark mb-4">
                  {t('legal:terms.section_12.title')}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('legal:terms.section_12.content')}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-charcoal-dark mb-4">
                  {t('legal:terms.section_13.title')}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('legal:terms.section_13.content')}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-charcoal-dark mb-4">
                  {t('legal:terms.section_14.title')}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('legal:terms.section_14.content')}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-charcoal-dark mb-4">
                  {t('legal:terms.section_15.title')}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('legal:terms.section_15.content')}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-charcoal-dark mb-4">
                  {t('legal:terms.section_16.title')}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('legal:terms.section_16.content')}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-charcoal-dark mb-4">
                  {t('legal:terms.section_17.title')}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('legal:terms.section_17.content')}
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-charcoal-dark mb-2">
                    {t('legal:terms.section_17.contact_info')}:
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li><strong>{t('legal:terms.section_17.company')}:</strong> I. & K. PSOMA O.E.</li>
                    <li><strong>{t('legal:terms.section_17.address')}:</strong> Monastiriou 92, Thessaloniki, Greece</li>
                    <li><strong>{t('legal:terms.section_17.phone')}:</strong> +30-2310-512239</li>
                    <li><strong>{t('legal:terms.section_17.website')}:</strong> https://psomasst.gr</li>
                  </ul>
                </div>
              </section>

              <div className="mt-12 pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-500 italic">
                  {t('legal:terms.footer_note')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Terms;
