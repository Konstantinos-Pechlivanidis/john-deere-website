import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const images = [
  "/images/parts/Differential/differential2.jpg",
  "/images/parts/Differential/differential4.jpg",
  "/images/parts/Differential/differential3.webp",
];

const DifferentialParts = () => {
  const { t } = useTranslation('parts_components');
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
        {/* Τίτλος και Περιγραφή */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-charcoal-dark mb-4">
            Ανταλλακτικά Διαφορικού
          </h2>
          <div className="w-20 h-1 bg-jdyellow mx-auto mb-6 rounded" />
          <p className="text-lg text-gray-600">
            Το διαφορικό αποτελεί κρίσιμο κομμάτι για την ευστάθεια, την κίνηση και την αξιοπιστία των γεωργικών μηχανημάτων. Ανακαλύψτε ανταλλακτικά υψηλής ακρίβειας για κάθε τύπο εφαρμογής.
          </p>
        </div>

        {/* Εικόνες */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {images.map((src, index) => (
            <div
              key={index}
              className="rounded-lg shadow-md overflow-hidden cursor-pointer"
              onClick={() => handleImageClick(src)}
            >
              <img
                src={src}
                alt={`Διαφορικό ${index + 1}`}
                className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
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
                alt={t('alt_texts.zoom')}
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
            Τύποι Ανταλλακτικών:
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Κορώνα & Πηνίο:</strong> για μετάδοση κίνησης με ακρίβεια</li>
            <li><strong>Άξονες & Πλανητικά Γρανάζια:</strong> για πλήρη σταθερότητα</li>
            <li><strong>Ρουλεμάν & Τσιμούχες:</strong> για αποφυγή διαρροών και κραδασμών</li>
            <li><strong>Μειωτήρες:</strong> για βαρέως τύπου μηχανήματα</li>
            <li><strong>Συστήματα Κλειδώματος:</strong> για αυξημένη πρόσφυση σε δύσκολες συνθήκες</li>
          </ul>
          <p>
            Αν δεν είστε βέβαιοι για το κατάλληλο εξάρτημα, η ομάδα μας είναι στη διάθεσή σας. Συμπληρώστε τη φόρμα προσφοράς και θα σας προτείνουμε την ιδανική λύση.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DifferentialParts;
