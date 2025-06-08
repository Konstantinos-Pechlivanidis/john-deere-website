import React, { useState } from "react";

const images = [
  "/images/parts/Transmision/transmission1.webp",
  "/images/parts/Transmision/transmission2.jpg",
  "/images/parts/Transmision/transmission3.jpg",
];

const TransmissionParts = () => {
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
            Ανταλλακτικά Συστήματος Μετάδοσης (Σασμάν)
          </h2>
          <div className="w-20 h-1 bg-jdyellow mx-auto mb-6 rounded" />
          <p className="text-lg text-gray-600">
            Προσφέρουμε γνήσια και συμβατά ανταλλακτικά για κάθε τύπο συστήματος μετάδοσης — αυτόματα, μηχανικά ή υδροστατικά. Ιδανικά για κάθε τύπο γεωργικού μηχανήματος John Deere.
          </p>
        </div>

        {/* Εικόνες */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {images.map((src, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-lg shadow-md cursor-pointer"
              onClick={() => handleImageClick(src)}
            >
              <img
                src={src}
                alt={`Transmission Part ${i + 1}`}
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

        {/* Περιεχόμενο */}
        <div className="max-w-3xl mx-auto text-gray-700 space-y-4 text-left">
          <h3 className="text-xl font-semibold text-charcoal-dark">
            Τύποι Ανταλλακτικών:
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Γρανάζια:</strong> για ομαλή και ακριβή εναλλαγή ταχυτήτων</li>
            <li><strong>Δίσκοι – Συμπλέκτης:</strong> για μετάδοση ροπής με αντοχή στη φθορά</li>
            <li><strong>Άξονες & ρουλεμάν:</strong> για σταθερή λειτουργία χωρίς κραδασμούς</li>
            <li><strong>Καμπάνες & κάσες:</strong> ενισχυμένες για βαριά χρήση</li>
            <li><strong>Σετ στεγανοποιήσεων:</strong> για αποτροπή διαρροών και μεγαλύτερη διάρκεια</li>
          </ul>
          <p>
            Δεν γνωρίζετε ακριβώς τι χρειάζεστε; Η ομάδα μας είναι στη διάθεσή σας για να σας καθοδηγήσει με βάση το μοντέλο και τη χρήση του μηχανήματός σας.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TransmissionParts;
