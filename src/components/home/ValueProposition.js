import { Check, Truck, Globe } from "lucide-react";

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
  const features = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Διεθνές Δίκτυο Προμηθευτών",
      description:
        "Συνεργαζόμαστε με αξιόπιστους προμηθευτές παγκοσμίως για να εντοπίζουμε και να σας παρέχουμε τα ανταλλακτικά που χρειάζεστε, άμεσα και αξιόπιστα.",
    },
    {
      icon: <Check className="w-8 h-8" />,
      title: "Ανταλλακτικά Ποιότητας",
      description:
        "Διαθέτουμε μεγάλη γκάμα αυθεντικών και συμβατών ανταλλακτικών για γεωργικά μηχανήματα, με έμφαση στην ποιότητα και την αξιοπιστία.",
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Αποστολή Πανελλαδικά",
      description:
        "Αναλαμβάνουμε την αποστολή των ανταλλακτικών στον χώρο σας, σε οποιοδήποτε σημείο της Ελλάδας, άμεσα και με ασφάλεια.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4 text-charcoal-dark tracking-tight">
            Γιατί να μας Επιλέξετε
          </h2>
          <div className="w-24 h-1 bg-jdyellow mx-auto mb-6 rounded"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Βοηθάμε γεωργικές επιχειρήσεις να βρίσκουν τα κατάλληλα ανταλλακτικά
            γρήγορα και αξιόπιστα, αξιοποιώντας διεθνείς συνεργασίες και άμεση
            εξυπηρέτηση – χωρίς μεσάζοντες.
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
