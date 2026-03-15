import Layout from "../components/layout/Layout";
import SEO from "../components/SEO";
import { useTranslation } from "react-i18next";
import { ROUTE_SEO } from "../config/seo";

const Privacy = () => {
  const { t } = useTranslation(['legal', 'common']);

  return (
    <Layout>
      <SEO
        title={ROUTE_SEO.privacy.title}
        description={ROUTE_SEO.privacy.description}
        canonical={ROUTE_SEO.privacy.canonical}
      />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold text-jdgreen mb-6">
              {t('legal:privacy.title')}
            </h1>
            
            <div className="text-sm text-gray-600 mb-8">
              {t('legal:privacy.last_updated')}: October 21, 2025
            </div>

            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-charcoal-dark mb-4">
                  {t('legal:privacy.section_1.title')}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('legal:privacy.section_1.content')}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-charcoal-dark mb-4">
                  {t('legal:privacy.section_2.title')}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('legal:privacy.section_2.content')}
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-charcoal-dark mb-2">
                    {t('legal:privacy.section_2.company_details')}:
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li><strong>{t('legal:privacy.section_2.business_name')}:</strong> I. & K. PSOMA O.E.</li>
                    <li><strong>{t('legal:privacy.section_2.address')}:</strong> Monastiriou 92, Thessaloniki, Greece</li>
                    <li><strong>{t('legal:privacy.section_2.phone')}:</strong> +30-2310-512239</li>
                    <li><strong>{t('legal:privacy.section_2.website')}:</strong> https://psomasst.gr</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-charcoal-dark mb-4">
                  {t('legal:privacy.section_3.title')}
                </h2>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-charcoal-dark mb-3">
                    {t('legal:privacy.section_3.direct_info')}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {t('legal:privacy.section_3.direct_content')}
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>{t('legal:privacy.section_3.field_1')}</li>
                    <li>{t('legal:privacy.section_3.field_2')}</li>
                    <li>{t('legal:privacy.section_3.field_3')}</li>
                    <li>{t('legal:privacy.section_3.field_4')}</li>
                    <li>{t('legal:privacy.section_3.field_5')}</li>
                  </ul>
                </div>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-charcoal-dark mb-3">
                    {t('legal:privacy.section_3.automatic_info')}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {t('legal:privacy.section_3.automatic_content')}
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>{t('legal:privacy.section_3.auto_field_1')}</li>
                    <li>{t('legal:privacy.section_3.auto_field_2')}</li>
                    <li>{t('legal:privacy.section_3.auto_field_3')}</li>
                    <li>{t('legal:privacy.section_3.auto_field_4')}</li>
                    <li>{t('legal:privacy.section_3.auto_field_5')}</li>
                    <li>{t('legal:privacy.section_3.auto_field_6')}</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-charcoal-dark mb-3">
                    {t('legal:privacy.section_3.cookies')}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {t('legal:privacy.section_3.cookies_content')}
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-charcoal-dark mb-4">
                  {t('legal:privacy.section_4.title')}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('legal:privacy.section_4.content')}
                </p>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-charcoal-dark mb-3">
                    {t('legal:privacy.section_4.business_communications')}
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>{t('legal:privacy.section_4.business_1')}</li>
                    <li>{t('legal:privacy.section_4.business_2')}</li>
                    <li>{t('legal:privacy.section_4.business_3')}</li>
                    <li>{t('legal:privacy.section_4.business_4')}</li>
                  </ul>
                </div>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-charcoal-dark mb-3">
                    {t('legal:privacy.section_4.website_improvement')}
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>{t('legal:privacy.section_4.website_1')}</li>
                    <li>{t('legal:privacy.section_4.website_2')}</li>
                    <li>{t('legal:privacy.section_4.website_3')}</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-charcoal-dark mb-3">
                    {t('legal:privacy.section_4.legal_compliance')}
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>{t('legal:privacy.section_4.legal_1')}</li>
                    <li>{t('legal:privacy.section_4.legal_2')}</li>
                    <li>{t('legal:privacy.section_4.legal_3')}</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-charcoal-dark mb-4">
                  {t('legal:privacy.section_5.title')}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('legal:privacy.section_5.content')}
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li><strong>{t('legal:privacy.section_5.legitimate_interest')}:</strong> {t('legal:privacy.section_5.legitimate_content')}</li>
                  <li><strong>{t('legal:privacy.section_5.consent')}:</strong> {t('legal:privacy.section_5.consent_content')}</li>
                  <li><strong>{t('legal:privacy.section_5.contract')}:</strong> {t('legal:privacy.section_5.contract_content')}</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-charcoal-dark mb-4">
                  {t('legal:privacy.section_6.title')}
                </h2>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-charcoal-dark mb-3">
                    {t('legal:privacy.section_6.data_storage')}
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>{t('legal:privacy.section_6.storage_1')}</li>
                    <li>{t('legal:privacy.section_6.storage_2')}</li>
                    <li>{t('legal:privacy.section_6.storage_3')}</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-charcoal-dark mb-3">
                    {t('legal:privacy.section_6.security_measures')}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {t('legal:privacy.section_6.security_content')}
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>{t('legal:privacy.section_6.security_1')}</li>
                    <li>{t('legal:privacy.section_6.security_2')}</li>
                    <li>{t('legal:privacy.section_6.security_3')}</li>
                    <li>{t('legal:privacy.section_6.security_4')}</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-charcoal-dark mb-4">
                  {t('legal:privacy.section_7.title')}
                </h2>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-charcoal-dark mb-3">
                    {t('legal:privacy.section_7.no_selling')}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {t('legal:privacy.section_7.no_selling_content')}
                  </p>
                </div>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-charcoal-dark mb-3">
                    {t('legal:privacy.section_7.limited_sharing')}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {t('legal:privacy.section_7.limited_content')}
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li><strong>{t('legal:privacy.section_7.service_providers')}:</strong> {t('legal:privacy.section_7.service_content')}</li>
                    <li><strong>{t('legal:privacy.section_7.legal_requirements')}:</strong> {t('legal:privacy.section_7.legal_content')}</li>
                    <li><strong>{t('legal:privacy.section_7.business_transfers')}:</strong> {t('legal:privacy.section_7.business_content')}</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-charcoal-dark mb-3">
                    {t('legal:privacy.section_7.third_party_services')}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {t('legal:privacy.section_7.third_party_content')}
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li><strong>{t('legal:privacy.section_7.hosting')}:</strong> {t('legal:privacy.section_7.hosting_content')}</li>
                    <li><strong>{t('legal:privacy.section_7.email')}:</strong> {t('legal:privacy.section_7.email_content')}</li>
                    <li><strong>{t('legal:privacy.section_7.analytics')}:</strong> {t('legal:privacy.section_7.analytics_content')}</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-charcoal-dark mb-4">
                  {t('legal:privacy.section_8.title')}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('legal:privacy.section_8.content')}
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li><strong>{t('legal:privacy.section_8.contact_data')}:</strong> {t('legal:privacy.section_8.contact_content')}</li>
                  <li><strong>{t('legal:privacy.section_8.analytics_data')}:</strong> {t('legal:privacy.section_8.analytics_content')}</li>
                  <li><strong>{t('legal:privacy.section_8.legal_requirements')}:</strong> {t('legal:privacy.section_8.legal_content')}</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-charcoal-dark mb-4">
                  {t('legal:privacy.section_9.title')}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('legal:privacy.section_9.content')}
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-charcoal-dark mb-3">
                      {t('legal:privacy.section_9.right_1')}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {t('legal:privacy.section_9.right_1_content')}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-charcoal-dark mb-3">
                      {t('legal:privacy.section_9.right_2')}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {t('legal:privacy.section_9.right_2_content')}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-charcoal-dark mb-3">
                      {t('legal:privacy.section_9.right_3')}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {t('legal:privacy.section_9.right_3_content')}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-charcoal-dark mb-3">
                      {t('legal:privacy.section_9.right_4')}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {t('legal:privacy.section_9.right_4_content')}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-charcoal-dark mb-3">
                      {t('legal:privacy.section_9.right_5')}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {t('legal:privacy.section_9.right_5_content')}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-charcoal-dark mb-3">
                      {t('legal:privacy.section_9.right_6')}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {t('legal:privacy.section_9.right_6_content')}
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-charcoal-dark mb-4">
                  {t('legal:privacy.section_10.title')}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('legal:privacy.section_10.content')}
                </p>
                <div className="bg-blue-50 border-l-4 border-jdgreen p-4">
                  <p className="text-gray-700">
                    <strong>{t('legal:privacy.section_10.contact_info')}:</strong><br />
                    {t('legal:privacy.section_10.email')}: [Contact through website form]<br />
                    {t('legal:privacy.section_10.phone')}: +30-2310-512239<br />
                    {t('legal:privacy.section_10.address')}: Monastiriou 92, Thessaloniki, Greece
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-charcoal-dark mb-4">
                  {t('legal:privacy.section_11.title')}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('legal:privacy.section_11.content')}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-charcoal-dark mb-4">
                  {t('legal:privacy.section_12.title')}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('legal:privacy.section_12.content')}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-charcoal-dark mb-4">
                  {t('legal:privacy.section_13.title')}
                </h2>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-charcoal-dark mb-3">
                    {t('legal:privacy.section_13.cookie_types')}
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li><strong>{t('legal:privacy.section_13.essential')}:</strong> {t('legal:privacy.section_13.essential_content')}</li>
                    <li><strong>{t('legal:privacy.section_13.preference')}:</strong> {t('legal:privacy.section_13.preference_content')}</li>
                    <li><strong>{t('legal:privacy.section_13.analytics')}:</strong> {t('legal:privacy.section_13.analytics_content')}</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-charcoal-dark mb-3">
                    {t('legal:privacy.section_13.managing_cookies')}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {t('legal:privacy.section_13.managing_content')}
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>{t('legal:privacy.section_13.managing_1')}</li>
                    <li>{t('legal:privacy.section_13.managing_2')}</li>
                    <li>{t('legal:privacy.section_13.managing_3')}</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-charcoal-dark mb-4">
                  {t('legal:privacy.section_14.title')}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('legal:privacy.section_14.content')}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-charcoal-dark mb-4">
                  {t('legal:privacy.section_15.title')}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('legal:privacy.section_15.content')}
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-charcoal-dark mb-2">
                    {t('legal:privacy.section_15.contact_info')}:
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li><strong>{t('legal:privacy.section_15.company')}:</strong> I. & K. PSOMA O.E.</li>
                    <li><strong>{t('legal:privacy.section_15.address')}:</strong> Monastiriou 92, Thessaloniki, Greece</li>
                    <li><strong>{t('legal:privacy.section_15.phone')}:</strong> +30-2310-512239</li>
                    <li><strong>{t('legal:privacy.section_15.website')}:</strong> https://psomasst.gr</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-charcoal-dark mb-4">
                  {t('legal:privacy.section_16.title')}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('legal:privacy.section_16.content')}
                </p>
                <div className="bg-yellow-50 border-l-4 border-jdyellow p-4">
                  <p className="text-gray-700">
                    <strong>{t('legal:privacy.section_16.authority')}:</strong><br />
                    {t('legal:privacy.section_16.website')}: https://www.dpa.gr/<br />
                    {t('legal:privacy.section_16.address')}: Kifisias 1-3, 115 23 Athens, Greece<br />
                    {t('legal:privacy.section_16.phone')}: +30-210-6475600
                  </p>
                </div>
              </section>

              <div className="mt-12 pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-500 italic">
                  {t('legal:privacy.footer_note')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Privacy;
