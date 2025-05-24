import Layout from "../components/layout/Layout";

const About = () => {
  return (
    <Layout>
      <div className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4 text-charcoal-dark">
              Σχετικά Με Εμάς
            </h1>
            <div className="w-24 h-1 bg-jdyellow mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 mb-8">
              Ο αξιόπιστος συνεργάτης σας για αυθεντικά μηχανήματα και
              ανταλλακτικά John Deere στην Ελλάδα.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-charcoal-dark">
                Η Ιστορία Μας
              </h2>
              <div className="w-20 h-1 bg-jdyellow mb-6"></div>
              <p className="text-gray-600 mb-4">
                Η εταιρεία μας, Ι. & Κ. Ψώμα OE, ιδρύθηκε το 1980 και από μια
                μικρή οικογενειακή επιχείρηση έχει εξελιχθεί σε έναν από τους
                κορυφαίους εισαγωγείς αγροτικών μηχανημάτων και ανταλλακτικών
                της John Deere στην Ελλάδα.
              </p>
              <p className="text-gray-600 mb-4">
                Από την αρχή, στόχος μας ήταν η ικανοποίηση του Έλληνα αγρότη,
                παρέχοντας υψηλής ποιότητας προϊόντα και επιλογές σε
                ανταγωνιστικές τιμές. Με τα χρόνια έχουμε δημιουργήσει ισχυρές
                σχέσεις με προμηθευτές παγκοσμίως, δίνοντάς μας τη δυνατότητα να
                προσφέρουμε μια μεγάλη γκάμα ανταλλακτικών.
              </p>
              <p className="text-gray-600">
                Σήμερα εξυπηρετούμε πελάτες που κυμαίνονται από μικρές
                οικογενειακές φάρμες μέχρι μεγάλες γεωργικές εταιρείες σε όλη
                την Ελλάδα, αλλά και το εξωτερικό, διατηρώντας την δέσμευσή μας
                στην ποιότητα, αξιοπιστία και στην εξαιρετική εξυπηρέτηση.
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
                <strong>Αποστολή:</strong> Να γεφυρώσουμε το χάσμα μεταξύ
                διεθνών προμηθευτών και ελληνικών γεωργικών επιχειρήσεων,
                παρέχοντας αξιόπιστη πρόσβαση σε αυθεντικά μηχανήματα και
                ανταλλακτικά John Deere που ενισχύουν την παραγωγικότητα και τη
                βιωσιμότητα.
              </p>
              <p className="text-gray-600 mb-4">
                <strong>Όραμα:</strong> Να γίνουμε ο πιο αξιόπιστος συνεργάτης
                για γεωργικά μηχανήματα στην Ελλάδα, αναγνωρισμένοι για την
                τεχνική μας εξειδίκευση, τα ποιοτικά προϊόντα και τη δέσμευσή
                μας στην επιτυχία των πελατών.
              </p>
              <p className="text-gray-600">
                Πιστεύουμε ότι παρέχοντας πρόσβαση στην καλύτερη γεωργική
                τεχνολογία, συμβάλλουμε στην ανάπτυξη και βιωσιμότητα της
                ελληνικής γεωργίας, βοηθώντας τους πελάτες μας να επιτύχουν
                καλύτερες σοδειές, να μειώσουν τα κόστη τους και να βελτιώσουν
                το περιβαλλοντικό τους αποτύπωμα.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
