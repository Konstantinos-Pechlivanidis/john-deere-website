import React from "react";

const LawnGardenParts = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="order-2 lg:order-1 relative">
            <div className="aspect-[4/4] rounded-lg overflow-hidden shadow-xl">
              <img
                src="/images/parts/LawnMower/webp1.webp"
                alt="Lawn & Garden Parts"
                loading="lazy" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden md:block absolute -bottom-6 -left-6 w-40 h-40 bg-jdyellow rounded-lg shadow-lg -z-10"></div>
            <div className="hidden md:block absolute -top-6 -right-6 w-24 h-24 bg-jdgreen rounded-lg shadow-lg -z-10"></div>
          </div>

          {/* Content Section */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold text-charcoal-dark mb-4">Φροντίδα Χλοοτάπητα - Οχήματα</h2>
            <div className="w-20 h-1 bg-jdyellow mb-6"></div>
            <p className="text-gray-600 mb-4">
              Τα ανταλλακτικά για τον κήπο και την αυλή σας προσφέρουν εξαιρετική ποιότητα και απόδοση.
              Από χλοοκοπτικά μέχρι και άλλα μηχανήματα κήπου, σας παρέχουμε τα αυθεντικά ανταλλακτικά για να διασφαλίσετε την ομαλή λειτουργία των μηχανημάτων σας.
            </p>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-charcoal-dark">
                Τύποι Ανταλλακτικών:
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Χλοοκοπτικά Μέρη:</strong> Ανταλλακτικά για την άριστη λειτουργία
                  των χλοοκοπτικών σας, όπως λεπίδες, φίλτρα και κινητήρες.
                </li>
                <li>
                  <strong>Φίλτρα και Λιπαντικά:</strong> Για τη σωστή συντήρηση και τη
                  μεγιστοποίηση της απόδοσης του εξοπλισμού.
                </li>
                <li>
                  <strong>Μπαταρίες:</strong> Αυθεντικές μπαταρίες που εξασφαλίζουν
                  αξιόπιστη ισχύ για τα εργαλεία κήπου.
                </li>
                <li>
                  <strong>Ζώνες και Αλυσίδες:</strong> Ανταλλακτικά για το σωστό συντονισμό
                  και λειτουργία των μηχανημάτων.
                </li>
                <li>
                  <strong>Φώτα και Αξεσουάρ:</strong> Για αυξημένη ασφάλεια και ευχρηστία
                  κατά τη διάρκεια της εργασίας.
                </li>
              </ul>
            </div>
            <div className="mt-4">
              <p className="text-gray-600">
                Τα ανταλλακτικά μας βοηθούν να διατηρείτε τα μηχανήματά σας σε άριστη
                κατάσταση και να επιτύχετε καλύτερα αποτελέσματα στην εργασία σας στον
                κήπο ή στην αυλή. Όταν χρειάζεστε οποιοδήποτε ανταλλακτικό, μην
                διστάσετε να επικοινωνήσετε μαζί μας και να μας κάνετε την προσφορά σας
                για ακριβώς αυτό που χρειάζεστε.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LawnGardenParts;
