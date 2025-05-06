import React from "react";

const EngineParts = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Ενότητα Εικόνας */}
          <div className="order-2 lg:order-1 relative">
            <div className="aspect-[4/2] rounded-lg overflow-hidden shadow-xl mb-6">
              <img
                src="/images/parts/General/img2.jpg"
                loading="lazy" 
                alt="Engine Parts"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/2] rounded-lg overflow-hidden shadow-xl">
              <img
                src="/images/parts/General/avif1.avif"
                alt="Engine Parts"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden md:block absolute -bottom-6 -left-6 w-40 h-40 bg-jdyellow rounded-lg shadow-lg -z-10"></div>
            <div className="hidden md:block absolute -top-6 -right-6 w-24 h-24 bg-jdgreen rounded-lg shadow-lg -z-10"></div>
          </div>

          {/* Ενότητα Περιεχομένου */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold text-charcoal-dark mb-4">
              Ανταλλακτικά Μηχανών
            </h2>
            <div className="w-20 h-1 bg-jdyellow mb-6"></div>
            <p className="text-gray-600 mb-4">
              Τα ανταλλακτικά κινητήρων John Deere είναι κρίσιμα για την ομαλή
              λειτουργία των μηχανημάτων σας. Είτε πρόκειται για γεωργικά
              μηχανήματα, είτε για εξοπλισμό άλλου τύπου, έχουμε τα αυθεντικά
              ανταλλακτικά που θα διασφαλίσουν την αποτελεσματική και αξιόπιστη
              λειτουργία του κινητήρα σας.
            </p>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-charcoal-dark">
                Τύποι Ανταλλακτικών:
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Φίλτρα:</strong> Ανταλλακτικά φίλτρα αέρα, λαδιού και καυσίμου
                  για τη βέλτιστη λειτουργία του κινητήρα.
                </li>
                <li>
                  <strong>Ελαστικά & Σχέδια:</strong> Ανταλλακτικά για την ομαλή
                  κίνηση και τη μέγιστη απόδοση των συστημάτων κίνησης.
                </li>
                <li>
                  <strong>Λιπαντικά:</strong> Αυθεντικά λιπαντικά που διασφαλίζουν τη
                  σωστή συντήρηση του κινητήρα σας και μειώνουν την τριβή.
                </li>
                <li>
                  <strong>Πιέσεις & Αντλίες:</strong> Ανταλλακτικά για τις πιέσεις και
                  τις αντλίες που διασφαλίζουν τη σωστή λειτουργία του κινητήρα.
                </li>
                <li>
                  <strong>Μπουζί:</strong> Αυθεντικά μπουζί για αξιόπιστη εκκίνηση και
                  καλή απόδοση.
                </li>
              </ul>
            </div>
            <div className="mt-4">
              <p className="text-gray-600">
                Τα ανταλλακτικά κινητήρων μας βοηθούν να διατηρείτε τα μηχανήματά σας
                σε άριστη κατάσταση και να επιτύχετε καλύτερη απόδοση και
                αξιοπιστία στην εργασία σας. Επικοινωνήστε μαζί μας για να βρείτε το
                ακριβές ανταλλακτικό που χρειάζεστε ή για να ζητήσετε προσφορά για
                ειδικά ανταλλακτικά.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngineParts;
