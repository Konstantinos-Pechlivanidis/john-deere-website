import React, { useState } from "react";

// const images = [
//   "/images/parts/Hydraulic/hydraulic1.jpg",
//   "/images/parts/Hydraulic/hydraulic2.jpg",
//   "/images/parts/Hydraulic/hydraulic3.png",
// ];

const HydraulicParts = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  // const handleImageClick = (src) => {
  //   setModalImage(src);
  //   setIsModalOpen(true);
  // };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalImage("");
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Τίτλος */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-charcoal-dark mb-4">
            Ανταλλακτικά Υδραυλικού Συστήματος
          </h2>
          <div className="w-20 h-1 bg-jdyellow mx-auto mb-6 rounded" />
          <p className="text-lg text-gray-600">
            Το υδραυλικό σύστημα είναι ζωτικής σημασίας για την αποδοτικότητα, την ασφάλεια και την αντοχή των γεωργικών μηχανημάτων. Παρέχουμε αυθεντικά και συμβατά ανταλλακτικά που ανταποκρίνονται στις πιο αυστηρές απαιτήσεις.
          </p>
        </div>

        {/* Εικόνες */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {images.map((src, index) => (
            <div
              key={index}
              className="rounded-lg shadow-md overflow-hidden cursor-pointer"
              onClick={() => handleImageClick(src)}
            >
              <img
                src={src}
                alt={`Υδραυλικό Ανταλλακτικό ${index + 1}`}
                className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div> */}

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center">
            <div className="bg-white rounded-lg p-4 max-w-2xl w-full">
              <img src={modalImage} alt="Μεγέθυνση" className="w-full h-auto rounded shadow" />
              <div className="text-center mt-4">
                <button
                  className="bg-jdyellow hover:bg-jdyellow-dark px-6 py-2 text-white rounded"
                  onClick={handleCloseModal}
                >
                  Κλείσιμο
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Περιεχόμενο */}
        <div className="max-w-3xl mx-auto text-gray-700 space-y-4 text-left">
          <h3 className="text-xl font-semibold text-charcoal-dark">
            Διαθέσιμα Ανταλλακτικά:
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Υδραυλικές αντλίες:</strong> υψηλής απόδοσης και πίεσης</li>
            <li><strong>Σωλήνες & εύκαμπτοι αγωγοί:</strong> αντοχή σε πίεση και διαρροές</li>
            <li><strong>Βαλβίδες & ρυθμιστές πίεσης:</strong> για ακριβή έλεγχο της ροής</li>
            <li><strong>Υδραυλικοί κύλινδροι:</strong> για ομαλή και αξιόπιστη λειτουργία</li>
            <li><strong>Σετ στεγανοποιήσεων:</strong> για απόλυτη στεγανότητα</li>
          </ul>
          <p>
            Δεν είστε σίγουροι ποιο ανταλλακτικό χρειάζεστε; Η ομάδα μας μπορεί να σας καθοδηγήσει με βάση τον τύπο μηχανήματος και τις ανάγκες σας.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HydraulicParts;
