import React from "react";

const ConstructionParts = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Ενότητα Εικόνας */}
          <div className="order-2 lg:order-1 relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <img
                src="/images/img4.jpg"
                alt="Ανταλλακτικά Κατασκευαστικών Μηχανημάτων"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden md:block absolute -bottom-6 -left-6 w-40 h-40 bg-jdyellow rounded-lg shadow-lg -z-10"></div>
            <div className="hidden md:block absolute -top-6 -right-6 w-24 h-24 bg-jdgreen rounded-lg shadow-lg -z-10"></div>
          </div>

          {/* Ενότητα Περιεχομένου */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold text-charcoal-dark mb-4">
              Ανταλλακτικά Κατασκευαστικών Μηχανημάτων
            </h2>
            <div className="w-20 h-1 bg-jdyellow mb-6"></div>
            <p className="text-gray-600 mb-4">
              Είτε εργάζεστε σε εργοτάξιο είτε χρειάζεστε επισκευές για τα
              μηχανήματά σας, προσφέρουμε υψηλής ποιότητας και ανθεκτικά
              ανταλλακτικά για να διατηρήσετε τον εξοπλισμό σας σε άριστη
              κατάσταση.
            </p>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-charcoal-dark">
                Τύποι Ανταλλακτικών Κατασκευαστικών Μηχανημάτων:
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Ανταλλακτικά Εκσκαφέων:</strong> Αυθεντικά ανταλλακτικά για
                  εκσκαφείς, όπως κουτάλες, βραχίονες και μπουμς για μέγιστη
                  απόδοση.
                </li>
                <li>
                  <strong>Ανταλλακτικά Φορτωτών:</strong> Ανταλλακτικά φορτωτών
                  υψηλής ποιότητας, όπως κουτάλες, φτυάρια και υδραυλικά
                  εξαρτήματα.
                </li>
                <li>
                  <strong>Ανταλλακτικά Μπουλντόζας:</strong> Ανταλλακτικά για
                  μπουλντόζες, όπως λεπίδες, υδραυλικές αντλίες και ερπύστριες
                  για αποτελεσματική απόδοση.
                </li>
                <li>
                  <strong>Υδραυλικά Εξαρτήματα:</strong> Αντλίες, κινητήρες, σωλήνες
                  και φίλτρα σχεδιασμένα για ανώτερη υδραυλική απόδοση.
                </li>
                <li>
                  <strong>Ανταλλακτικά Μηχανών:</strong> Εμβόλια, φλάντζες και
                  υπερσυμπιεστές για βελτίωση της απόδοσης και αξιοπιστίας των
                  κινητήρων.
                </li>
              </ul>
            </div>
            <div className="mt-4">
              <p className="text-gray-600">
                Προσφέρουμε μια ολοκληρωμένη γκάμα ανταλλακτικών για
                κατασκευαστικά μηχανήματα για να καλύψουμε όλες τις ανάγκες σας.
                Εάν ψάχνετε για συγκεκριμένα ανταλλακτικά για τα μηχανήματά σας,
                μην διστάσετε να επικοινωνήσετε μαζί μας και θα σας προμηθεύσουμε
                ακριβώς το ανταλλακτικό που χρειάζεστε.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConstructionParts;
