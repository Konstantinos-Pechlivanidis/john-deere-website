import React, { useState } from "react";
import { useTranslation } from "react-i18next";

// const images = [
//   "/images/parts/Cabin/cabin1.jpg",
//   "/images/parts/Cabin/cabin2.jpg",
//   "/images/parts/Cabin/cabin3.jpg",
// ];

const CabinFrameParts = () => {
  const { t } = useTranslation('common');
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
            Ανταλλακτικά Καμπίνας & Πλαισίου
          </h2>
          <div className="w-20 h-1 bg-jdyellow mx-auto mb-6 rounded" />
          <p className="text-lg text-gray-600">
            Εξασφαλίστε την άνεση και την ασφάλεια του χειριστή, καθώς και τη δομική ακεραιότητα του μηχανήματός σας, με ανταλλακτικά κορυφαίας ποιότητας.
          </p>
        </div>

        {/* Εικόνες */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {images.map((src, i) => (
            <div
              key={i}
              className="rounded-lg shadow-md overflow-hidden cursor-pointer"
              onClick={() => handleImageClick(src)}
            >
              <img
                src={src}
                alt={`Cabin ${i + 1}`}
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
            Ενδεικτικά Ανταλλακτικά:
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Πόρτες, καθρέπτες & παράθυρα:</strong> για μέγιστη ορατότητα και προστασία.</li>
            <li><strong>Καθίσματα & αξεσουάρ καμπίνας:</strong> για άνεση και εργονομία.</li>
            <li><strong>Καπό, φτερά & πάνελ:</strong> για προστασία και ανανέωση εμφάνισης.</li>
            <li><strong>Πλαίσια & βάσεις:</strong> για δομική σταθερότητα.</li>
            <li><strong>Συστήματα θέρμανσης – εξαερισμού:</strong> για ιδανικές συνθήκες εργασίας.</li>
          </ul>
          <p>
            Έχετε υποστεί φθορά ή ατύχημα; Επικοινωνήστε μαζί μας για να εντοπίσουμε το σωστό εξάρτημα και να σας εξυπηρετήσουμε άμεσα.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CabinFrameParts;
