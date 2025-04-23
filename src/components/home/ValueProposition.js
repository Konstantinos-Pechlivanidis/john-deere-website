import { Check, Truck, Globe, Wrench } from "lucide-react";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-jdgreen flex flex-col items-center">
      <div className="text-jdgreen mb-4">
        {icon}
      </div>
      <h3 className="font-semibold text-xl mb-2 text-charcoal-dark text-center">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

const ValueProposition = () => {
  const features = [
    {
      icon: <Globe className="h-12 w-12" />,
      title: "Διεθνής Προμήθεια",
      description: "Εκμεταλλευόμαστε τη δύναμη των άμεσων σχέσεων με κορυφαίους προμηθευτές παγκοσμίως για να προσφέρουμε αυθεντικά προϊόντα John Deere σε ανταγωνιστικές τιμές."
    },
    {
      icon: <Check className="h-12 w-12" />,
      title: "Εγγυημένη Αυθεντικότητα",
      description: "Κάθε μηχάνημα και ανταλλακτικό που προσφέρουμε είναι αυθεντικό και πιστοποιημένο, διασφαλίζοντας υψηλή ποιότητα και αξιοπιστία."
    },
    {
      icon: <Truck className="h-12 w-12" />,
      title: "Αποτελεσματική Λογιστική Διαχείριση",
      description: "Αξιοποιούμε την εμπειρία μας στον τομέα της λογιστικής για να εξασφαλίσουμε την έγκαιρη παράδοση σε όλη την Ελλάδα, μειώνοντας τον χρόνο διακοπής λειτουργίας."
    },
    {
      icon: <Wrench className="h-12 w-12" />,
      title: "Εξειδικευμένη Υποστήριξη",
      description: "Η τεχνική μας υποστήριξη είναι διαθέσιμη για να σας βοηθήσει να επιλέξετε τα κατάλληλα μηχανήματα και ανταλλακτικά για τις συγκεκριμένες ανάγκες σας."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-3 text-charcoal-dark">Γιατί να μας Επιλέξετε</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Γεφυρώνουμε το χάσμα μεταξύ διεθνών προμηθευτών και ελληνικών επιχειρήσεων,
            προσφέροντας αξιόπιστη πρόσβαση σε προϊόντα υψηλής ποιότητας John Deere για κάθε ανάγκη.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
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
