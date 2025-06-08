import React, { useState } from "react";

const images = [
  "/images/parts/Clutch/clutch3.jpeg",
  "/images/parts/Clutch/clutch4.webp",
  "/images/parts/Clutch/clutch5.jpg",
];

const ClutchParts = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const handleImageClick = (src) => {
    setModalImage(src);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalImage("");
    setIsModalOpen(false);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Title & Intro */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-charcoal-dark mb-4">
            Ανταλλακτικά Συμπλέκτη
          </h2>
          <div className="w-20 h-1 bg-jdyellow mx-auto mb-6 rounded" />
          <p className="text-lg text-gray-600">
            Εξασφαλίστε τη μέγιστη απόδοση και αξιοπιστία του συμπλέκτη με
            ανταλλακτικά κατασκευασμένα για αντοχή, ακρίβεια και συμβατότητα με κάθε τύπο γεωργικού μηχανήματος.
          </p>
        </div>

        {/* Images */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {images.map((src, i) => (
            <div
              key={i}
              className="rounded-lg shadow-md overflow-hidden cursor-pointer"
              onClick={() => handleImageClick(src)}
            >
              <img
                src={src}
                alt={`Clutch ${i + 1}`}
                className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Modal Zoom */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center">
            <div className="bg-white rounded-lg p-4 max-w-2xl w-full">
              <img
                src={modalImage}
                alt="Μεγέθυνση"
                className="w-full h-auto rounded shadow"
              />
              <div className="text-center mt-4">
                <button
                  onClick={handleCloseModal}
                  className="bg-jdyellow hover:bg-jdyellow-dark px-6 py-2 text-white rounded"
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
            <li><strong>Δίσκοι Συμπλέκτη:</strong> υλικά υψηλής αντοχής για βέλτιστη μετάδοση ροπής.</li>
            <li><strong>Πλατώ:</strong> αντοχή σε υπερφόρτωση και σταθερότητα.</li>
            <li><strong>Ρουλεμάν Αποσύμπλεξης:</strong> ομαλή λειτουργία χωρίς κραδασμούς.</li>
            <li><strong>Σετ Συμπλέκτη:</strong> πλήρη κιτ με εγγυημένη συμβατότητα.</li>
          </ul>
          <p>
            Δεν είστε βέβαιοι για τον τύπο εξαρτήματος; Η ομάδα μας μπορεί να σας καθοδηγήσει — συμπληρώστε τη φόρμα προσφοράς και θα επικοινωνήσουμε άμεσα μαζί σας.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClutchParts;
