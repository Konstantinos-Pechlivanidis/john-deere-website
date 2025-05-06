import React from "react";

const RemanufacturedParts = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Ενότητα Εικόνας */}
          <div className="order-2 lg:order-1 relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <img
                src="/images/img8.jpg"
                loading="lazy" 
                alt="Remanufactured Parts"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden md:block absolute -bottom-6 -left-6 w-40 h-40 bg-jdyellow rounded-lg shadow-lg -z-10"></div>
            <div className="hidden md:block absolute -top-6 -right-6 w-24 h-24 bg-jdgreen rounded-lg shadow-lg -z-10"></div>
          </div>

          {/* Ενότητα Περιεχομένου */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold text-charcoal-dark mb-4">
              Ανταλλακτικά Ανακατασκευασμένα
            </h2>
            <div className="w-20 h-1 bg-jdyellow mb-6"></div>
            <p className="text-gray-600 mb-4">
              Τα ανακατασκευασμένα ανταλλακτικά John Deere είναι αυθεντικά ανταλλακτικά
              που έχουν υποβληθεί σε αυστηρή διαδικασία ανακατασκευής για να
              επιστρέψουν στην κανονική τους λειτουργία με την εγγύηση της ποιότητας
              του John Deere. Αυτά τα ανταλλακτικά παρέχουν την ίδια αξιόπιστη
              απόδοση με τα νέα, αλλά σε πολύ πιο συμφέρουσα τιμή.
            </p>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-charcoal-dark">
                Πλεονεκτήματα:
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Ανακατασκευασμένα με αυθεντικά μέρη:</strong> Κάθε ανταλλακτικό
                  ανακατασκευάζεται με αυθεντικά εξαρτήματα για να διασφαλιστεί η
                  σωστή λειτουργία του μηχανήματος.
                </li>
                <li>
                  <strong>Εγγυημένη ποιότητα:</strong> Τα ανταλλακτικά ανακατασκευάζονται
                  με αυστηρούς ελέγχους ποιότητας και δοκιμές για να διασφαλιστεί η
                  άριστη απόδοση.
                </li>
                <li>
                  <strong>Κόστος:</strong> Παρέχουν μια πιο οικονομική λύση σε σχέση με
                  τα καινούρια ανταλλακτικά, διατηρώντας την ίδια αξιόπιστη απόδοση.
                </li>
                <li>
                  <strong>Ανακύκλωση:</strong> Υποστηρίζουμε την ανακύκλωση και τη
                  βιωσιμότητα, μειώνοντας την κατανάλωση πρώτων υλών.
                </li>
              </ul>
            </div>
            <div className="mt-4">
              <p className="text-gray-600">
                Είτε χρειάζεστε ανταλλακτικά για γεωργικά μηχανήματα είτε για άλλο
                εξοπλισμό, τα ανακατασκευασμένα ανταλλακτικά μας είναι μια αξιόπιστη,
                οικονομική και οικολογική επιλογή. Επικοινωνήστε μαζί μας για να
                βρείτε το ακριβές ανταλλακτικό που χρειάζεστε ή για να ζητήσετε
                προσφορά για ειδικά ανταλλακτικά.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RemanufacturedParts;
