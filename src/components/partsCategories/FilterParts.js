import React, { useState } from "react";

const images = [
  "/images/parts/Filter/filter3.avif",
  "/images/parts/Filter/filter5.jpg",
  "/images/parts/Filter/filter4.avif",
];

const FilterParts = () => {
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
            Ανταλλακτικά Φίλτρων
          </h2>
          <div className="w-20 h-1 bg-jdyellow mx-auto mb-6 rounded" />
          <p className="text-lg text-gray-600">
            Τα φίλτρα είναι ζωτικής σημασίας για την προστασία και τη μακροχρόνια απόδοση των γεωργικών μηχανημάτων. Σας προμηθεύουμε με όλα τα είδη φίλτρων, συμβατά και αυθεντικά.
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
                alt={`Φίλτρο ${index + 1}`}
                className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Modal */}
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

        {/* Περιγραφή */}
        <div className="max-w-3xl mx-auto text-gray-700 space-y-4 text-left">
          <h3 className="text-xl font-semibold text-charcoal-dark">
            Διαθέσιμοι Τύποι:
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Φίλτρα Λαδιού:</strong> για καθαρή κυκλοφορία λιπαντικού στον κινητήρα</li>
            <li><strong>Φίλτρα Αέρα:</strong> για καθαρή εισαγωγή και αποδοτική καύση</li>
            <li><strong>Φίλτρα Καυσίμου:</strong> προστασία από ακαθαρσίες & νερό στο πετρέλαιο</li>
            <li><strong>Υδραυλικά Φίλτρα:</strong> για σταθερή πίεση και προστασία κυκλωμάτων</li>
            <li><strong>Φίλτρα Καμπίνας:</strong> καθαρό και υγιεινό περιβάλλον για τον χειριστή</li>
          </ul>
          <p>
            Δεν είστε σίγουροι για το μοντέλο ή τη διάσταση; Επικοινωνήστε μαζί μας και θα σας προτείνουμε τη σωστή επιλογή βάσει τύπου μηχανήματος και εφαρμογής.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FilterParts;
