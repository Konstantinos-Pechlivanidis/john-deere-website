import Layout from "../components/layout/Layout";

const About = () => {
  return (
    <Layout>
      {/* Intro Section */}
      <div className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4 text-charcoal-dark">
              Σχετικά Με Εμάς
            </h1>
            <div className="w-24 h-1 bg-jdyellow mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 mb-8">
              Ο αξιόπιστος συνεργάτης σας για ανταλλακτικά γεωργικών μηχανημάτων σε όλη την Ελλάδα.
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
                Η Ιστορία Μας
              </h2>
              <div className="w-20 h-1 bg-jdyellow mb-6"></div>
              <p className="text-gray-600 mb-4">
                Η εταιρεία μας, Ι. & Κ. Ψώμα OE, ιδρύθηκε το 1980 και από μια μικρή οικογενειακή επιχείρηση έχει εξελιχθεί σε έναν από τους κορυφαίους εισαγωγείς ανταλλακτικών για γεωργικά μηχανήματα στην Ελλάδα.
              </p>
              <p className="text-gray-600 mb-4">
                Από την αρχή, στόχος μας ήταν η ικανοποίηση του Έλληνα αγρότη, παρέχοντας υψηλής ποιότητας προϊόντα και επιλογές σε ανταγωνιστικές τιμές. Με τα χρόνια έχουμε δημιουργήσει ισχυρές σχέσεις με προμηθευτές παγκοσμίως, δίνοντάς μας τη δυνατότητα να προσφέρουμε μια μεγάλη γκάμα ανταλλακτικών.
              </p>
              <p className="text-gray-600">
                Σήμερα εξυπηρετούμε πελάτες που κυμαίνονται από μικρές οικογενειακές φάρμες μέχρι μεγάλες γεωργικές εταιρείες σε όλη την Ελλάδα, αλλά και το εξωτερικό, διατηρώντας την δέσμευσή μας στην ποιότητα, αξιοπιστία και στην εξαιρετική εξυπηρέτηση.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/images/general/webp5.webp"
                  alt="Αγροτικό τοπίο"
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
                  src="/images/general/img16.jpg"
                  alt="Η ομάδα μας"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="hidden md:block absolute -top-6 -left-6 w-40 h-40 bg-jdgreen rounded-lg shadow-lg -z-10"></div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-4 text-charcoal-dark">
                Η Αποστολή & Το Όραμά Μας
              </h2>
              <div className="w-20 h-1 bg-jdyellow mb-6"></div>
              <p className="text-gray-600 mb-4">
                <strong>Αποστολή:</strong> Να γεφυρώσουμε το χάσμα μεταξύ διεθνών προμηθευτών και ελληνικών γεωργικών επιχειρήσεων, παρέχοντας αξιόπιστη πρόσβαση σε ποιοτικά ανταλλακτικά που ενισχύουν την παραγωγικότητα και τη βιωσιμότητα.
              </p>
              <p className="text-gray-600 mb-4">
                <strong>Όραμα:</strong> Να γίνουμε ο πιο αξιόπιστος συνεργάτης για ανταλλακτικά γεωργικών μηχανημάτων στην Ελλάδα, αναγνωρισμένοι για την εμπειρία μας, τα ποιοτικά προϊόντα και τη δέσμευσή μας στην επιτυχία των πελατών.
              </p>
              <p className="text-gray-600">
                Πιστεύουμε ότι παρέχοντας πρόσβαση στην καλύτερη γεωργική τεχνολογία και εξαρτήματα, συμβάλλουμε στην ανάπτυξη και βιωσιμότητα της ελληνικής γεωργίας.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Τι μας ξεχωρίζει */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-charcoal-dark mb-4">Τι μας ξεχωρίζει</h2>
            <div className="w-24 h-1 bg-jdyellow mx-auto mb-6 rounded"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Με έμφαση στην ποιότητα, την εξυπηρέτηση και την πολυετή εμπειρία μας, εξυπηρετούμε τις ανάγκες κάθε επαγγελματία του αγροτικού τομέα.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "40+ Χρόνια Εμπειρίας",
                desc: "Πολυετής παρουσία στον χώρο της γεωργικής μηχανολογίας.",
              },
              {
                title: "10.000+ Ανταλλακτικά",
                desc: "Μεγάλη διαθεσιμότητα σε αυθεντικά και συμβατά εξαρτήματα.",
              },
              {
                title: "Άμεση Αποστολή",
                desc: "Αποστολές σε όλη την Ελλάδα και το εξωτερικό.",
              },
              {
                title: "Προσωποποιημένη Εξυπηρέτηση",
                desc: "Αναζητούμε και προτείνουμε το κατάλληλο ανταλλακτικό για κάθε ανάγκη.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition text-center">
                <h3 className="text-xl font-semibold text-charcoal-dark mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Οι Αξίες μας */}
      <div className="bg-gray-100 py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-charcoal-dark mb-4">Οι Αξίες μας</h2>
            <div className="w-24 h-1 bg-jdyellow mx-auto mb-6 rounded"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Η φιλοσοφία μας βασίζεται στην εμπιστοσύνη, την ειλικρίνεια και την προσήλωση στην εξυπηρέτηση των πελατών μας.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-white rounded-xl shadow-md">
              <h3 className="text-jdgreen font-bold text-xl mb-2">Αξιοπιστία</h3>
              <p className="text-gray-600 text-sm">Παραδίδουμε αυτό που υποσχόμαστε – χωρίς καθυστερήσεις, χωρίς παρεκκλίσεις.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md">
              <h3 className="text-jdgreen font-bold text-xl mb-2">Διαφάνεια</h3>
              <p className="text-gray-600 text-sm">Καθαρή επικοινωνία, χωρίς ψιλά γράμματα. Η εμπιστοσύνη είναι βασική αξία.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md">
              <h3 className="text-jdgreen font-bold text-xl mb-2">Εξυπηρέτηση</h3>
              <p className="text-gray-600 text-sm">Η ομάδα μας είναι πάντα πρόθυμη να βοηθήσει, βρίσκοντας λύσεις για κάθε πελάτη.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
