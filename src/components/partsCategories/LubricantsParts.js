import React from "react";
import { useTranslation } from "react-i18next";

const LubricantsParts = () => {
  const { t } = useTranslation('parts_components');

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Τίτλος & Περιγραφή */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className='text-3xl font-bold text-charcoal-dark mb-4'>
            {t('lubricants.title')}
          </h2>
          <div className="w-20 h-1 bg-jdyellow mx-auto mb-6 rounded" />
          <p className='text-lg text-gray-600'>
            {t('lubricants.description')}
          </p>
        </div>


        {/* Περιεχόμενο */}
        <div className="max-w-3xl mx-auto text-gray-700 space-y-4 text-left">
          <h3 className="text-xl font-semibold text-charcoal-dark">
            {t('lubricants.parts_list_title')}
          </h3>
          <ul className="list-disc list-inside space-y-2">
            {t('lubricants.parts', { returnObjects: true }).map((part, index) => (
              <li key={index}>{part}</li>
            ))}
          </ul>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h4 className="text-lg font-semibold text-charcoal-dark mb-2">
              {t('lubricants.why_choose_title')}
            </h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              {t('lubricants.why_choose', { returnObjects: true }).map((reason, index) => (
                <li key={index}>{reason}</li>
              ))}
            </ul>
          </div>

          <p className='mt-4'>
            {t('lubricants.contact_text')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default LubricantsParts;
