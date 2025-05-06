import React from "react";

const CommercialMowingParts = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Ενότητα Εικόνας */}
          <div className="order-2 lg:order-1 relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <img
                src="/images/img5.jpg"
                alt="Ανταλλακτικά Εμπορικών Χλοοκοπτικών"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden md:block absolute -bottom-6 -left-6 w-40 h-40 bg-jdyellow rounded-lg shadow-lg -z-10"></div>
            <div className="hidden md:block absolute -top-6 -right-6 w-24 h-24 bg-jdgreen rounded-lg shadow-lg -z-10"></div>
          </div>

          {/* Ενότητα Περιεχομένου */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold text-charcoal-dark mb-4">
              Ανταλλακτικά Εμπορικών Χλοοκοπτικών
            </h2>
            <div className="w-20 h-1 bg-jdyellow mb-6"></div>
            <p className="text-gray-600 mb-4">
              Τα ανταλλακτικά για τα εμπορικά χλοοκοπτικά μηχανήματα John Deere προσφέρουν
              την αντοχή και την ποιότητα που απαιτούνται για την καθημερινή και
              επαγγελματική χρήση. Είτε πρόκειται για κινητήρες, λεπίδες, είτε για άλλα
              ανταλλακτικά, διαθέτουμε τη γκάμα για να διατηρήσετε τα μηχανήματά σας σε
              άριστη κατάσταση.
            </p>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-charcoal-dark">
                Τύποι Ανταλλακτικών:
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Λεπίδες Χλοοκοπτικών:</strong> Αυθεντικές λεπίδες που εγγυώνται
                  άψογη απόδοση και ανθεκτικότητα, για τέλεια κοπή σε όλες τις συνθήκες
                  χλοοκοπής.
                </li>
                <li>
                  <strong>Κινητήρες και Συστήματα Κίνησης:</strong> Ανταλλακτικά κινητήρων
                  και συστημάτων κίνησης για αξιόπιστη και αποδοτική λειτουργία.
                </li>
                <li>
                  <strong>Φίλτρα και Υδραυλικά Εξαρτήματα:</strong> Φίλτρα αέρα, λαδιού
                  και υδραυλικά εξαρτήματα για την καλύτερη απόδοση του εξοπλισμού.
                </li>
                <li>
                  <strong>Ζώνες και Αλυσίδες:</strong> Ανταλλακτικά για το σωστό
                  συντονισμό και τη λειτουργία του μηχανήματος.
                </li>
                <li>
                  <strong>Μπαταρίες και Ηλεκτρονικά:</strong> Αυθεντικές μπαταρίες και
                  ηλεκτρονικά εξαρτήματα για αξιόπιστη και μακροχρόνια λειτουργία.
                </li>
              </ul>
            </div>
            <div className="mt-4">
              <p className="text-gray-600">
                Τα ανταλλακτικά εμπορικών χλοοκοπτικών John Deere εξασφαλίζουν
                αδιάλειπτη απόδοση για επαγγελματική χρήση. Είτε πρόκειται για μικρές
                διορθώσεις, είτε για πιο μεγάλες επισκευές, έχουμε τη λύση για κάθε
                ανάγκη. Επικοινωνήστε μαζί μας για να σας παρέχουμε τα ακριβή ανταλλακτικά
                που χρειάζεστε για να κρατήσετε τα μηχανήματά σας σε άριστη κατάσταση.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommercialMowingParts;
