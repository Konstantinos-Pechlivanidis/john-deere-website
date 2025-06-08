import React, { useState } from "react";

const images = [
  "/images/parts/Engine/engine1.jpg",
  "/images/parts/Engine/engine2.avif",
  "/images/parts/Engine/engine3.jpg",
];

const EngineParts = () => {
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
        {/* Τίτλος & Περιγραφή */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-charcoal-dark mb-4">
            Ανταλλακτικά Κινητήρα
          </h2>
          <div className="w-20 h-1 bg-jdyellow mx-auto mb-6 rounded" />
          <p className="text-lg text-gray-600">
            Γνήσια και συμβατά ανταλλακτικά για όλους τους τύπους κινητήρων γεωργικών μηχανημάτων. Από τη συντήρηση έως την πλήρη ανακατασκευή, προμηθευτείτε με αξιοπιστία και τεχνική συνέπεια.
          </p>
        </div>

        {/* Grid Εικόνων */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {images.map((src, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-lg shadow-md cursor-pointer"
              onClick={() => handleImageClick(src)}
            >
              <img
                src={src}
                alt={`Engine Part ${i + 1}`}
                className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
            <div className="bg-white p-4 rounded-lg max-w-2xl w-full">
              <img
                src={modalImage}
                alt="Μεγέθυνση"
                className="w-full h-auto rounded shadow"
              />
              <div className="text-center mt-4">
                <button
                  className="bg-jdyellow hover:bg-jdyellow-dark text-white px-6 py-2 rounded"
                  onClick={handleCloseModal}
                >
                  Κλείσιμο
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Κείμενο Περιγραφής */}
        <div className="max-w-3xl mx-auto text-gray-700 space-y-4 text-left">
          <h3 className="text-xl font-semibold text-charcoal-dark">Κύριες Κατηγορίες Ανταλλακτικών:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Κυλινδροκεφαλές:</strong> για σωστή συμπίεση και καύση</li>
            <li><strong>Έμβολα & Μπιέλες:</strong> για ανακατασκευή με ακρίβεια</li>
            <li><strong>Αντλίες λαδιού & καυσίμου:</strong> για κυκλοφορία και λίπανση</li>
            <li><strong>Στεγανοποιήσεις & Φλάντζες:</strong> για αποφυγή διαρροών</li>
            <li><strong>Ιμάντες, ρουλεμάν & αισθητήρες:</strong> για υποστήριξη των μηχανικών μερών</li>
          </ul>
          <p>
            Αν δεν γνωρίζετε ποιο εξάρτημα χρειάζεστε, η έμπειρη ομάδα μας είναι εδώ για να σας καθοδηγήσει. Συμπληρώστε το αίτημα προσφοράς και θα επικοινωνήσουμε άμεσα μαζί σας.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EngineParts;
