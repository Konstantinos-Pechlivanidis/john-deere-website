import React from "react";

const MaintenanceParts = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="order-2 lg:order-1 relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <img
                src="/images/parts/General/webp2.webp"
                alt="Maintenance Parts"
                loading="lazy" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden md:block absolute -bottom-6 -left-6 w-40 h-40 bg-jdyellow rounded-lg shadow-lg -z-10"></div>
            <div className="hidden md:block absolute -top-6 -right-6 w-24 h-24 bg-jdgreen rounded-lg shadow-lg -z-10"></div>
          </div>

          {/* Content Section */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold text-charcoal-dark mb-4">
              Ανταλλακτικά Συντήρησης
            </h2>
            <div className="w-20 h-1 bg-jdyellow mb-6"></div>
            <p className="text-gray-600 mb-4">
              Τα ανταλλακτικά συντήρησης είναι ζωτικής σημασίας για τη διατήρηση των μηχανημάτων σας σε άριστη κατάσταση. Παρέχουμε αυθεντικά ανταλλακτικά για να εξασφαλίσουμε τη μέγιστη απόδοση και διάρκεια ζωής των μηχανημάτων σας.
            </p>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-charcoal-dark">
                Τύποι Ανταλλακτικών Συντήρησης:
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Φίλτρα:</strong> Φίλτρα αέρα, λαδιού και καυσίμου για να διατηρείτε τα μηχανήματά σας καθαρά και αποδοτικά.
                </li>
                <li>
                  <strong>Λιπαντικά:</strong> Αυθεντικά λιπαντικά για την ομαλή λειτουργία και την προστασία των κινητήριων μερών.
                </li>
                <li>
                  <strong>Ζώνες και Αλυσίδες:</strong> Ανταλλακτικά για τον συντονισμό και τη σωστή λειτουργία των μηχανημάτων σας.
                </li>
                <li>
                  <strong>Μπαταρίες:</strong> Αυθεντικές μπαταρίες για αξιόπιστη ισχύ και διαρκή απόδοση.
                </li>
                <li>
                  <strong>Λάδια και Συμπυκνώματα:</strong> Διατηρούν το σύστημα του κινητήρα σε βέλτιστη κατάσταση.
                </li>
              </ul>
            </div>
            <div className="mt-4">
              <p className="text-gray-600">
                Η σωστή συντήρηση του εξοπλισμού σας εξασφαλίζει την αδιάκοπη και αποδοτική λειτουργία του. Όταν χρειάζεστε ανταλλακτικά συντήρησης για το μηχάνημά σας, μην διστάσετε να επικοινωνήσετε μαζί μας και να ζητήσετε προσφορά για τα ακριβή ανταλλακτικά που χρειάζεστε.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaintenanceParts;
