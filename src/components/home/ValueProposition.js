import { Check, Truck, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition flex flex-col items-center text-center">
      <div className="w-16 h-16 flex items-center justify-center bg-jdgreen/10 rounded-full mb-4">
        <div className="text-jdgreen">{icon}</div>
      </div>
      <h3 className="text-xl font-semibold text-charcoal-dark mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

const ValueProposition = () => {
  const { t } = useTranslation('home');
  
  const features = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: t('value_proposition.features.international_network.title'),
      description: t('value_proposition.features.international_network.description'),
    },
    {
      icon: <Check className="w-8 h-8" />,
      title: t('value_proposition.features.quality_parts.title'),
      description: t('value_proposition.features.quality_parts.description'),
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: t('value_proposition.features.nationwide_shipping.title'),
      description: t('value_proposition.features.nationwide_shipping.description'),
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4 text-charcoal-dark tracking-tight">
            {t('value_proposition.title')}
          </h2>
          <div className="w-24 h-1 bg-jdyellow mx-auto mb-6 rounded"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {t('value_proposition.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
