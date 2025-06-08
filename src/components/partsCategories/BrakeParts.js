import React, { useState } from "react";

const images = [
  "/images/parts/Brake/brake1.jpg",
  "/images/parts/Brake/brake2.png",
  "/images/parts/Brake/brake3.jpg",
];

const BrakeParts = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const handleImageClick = (src) => {
    setModalImage(src);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalImage("");
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Τίτλος & Περιγραφή */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-charcoal-dark mb-4">
            Ανταλλακτικά Φρένων
          </h2>
          <div className="w-20 h-1 bg-jdyellow mx-auto mb-6 rounded" />
          <p className="text-lg text-gray-600">
            Τα φρένα είναι κρίσιμο στοιχείο ασφαλείας. Προσφέρουμε ανταλλακτικά υψηλής ποιότητας που εξασφαλίζουν άμεση και σταθερή πέδηση σε κάθε συνθήκη.
          </p>
        </div>

        {/* Εικόνες */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {images.map((src, i) => (
            <div
              key={i}
              className="rounded-lg shadow-md overflow-hidden cursor-pointer"
              onClick={() => handleImageClick(src)}
            >
              <img
                src={src}
                alt={`Brake Part ${i + 1}`}
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

        {/* Περιεχόμενο */}
        <div className="max-w-3xl mx-auto text-gray-700 space-y-4 text-left">
          <h3 className="text-xl font-semibold text-charcoal-dark">
            Ενδεικτικά Ανταλλακτικά:
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Δίσκοι φρένων:</strong> για μέγιστη δύναμη πέδησης και θερμική αντοχή.</li>
            <li><strong>Σιαγόνες & τακάκια:</strong> για αθόρυβη και αξιόπιστη πέδηση.</li>
            <li><strong>Αντλίες & κυλινδράκια:</strong> για σωστή πίεση στο υδραυλικό κύκλωμα.</li>
            <li><strong>Σωληνώσεις & υγρά φρένων:</strong> για σταθερή απόδοση χωρίς απώλειες.</li>
            <li><strong>Σετ επισκευής:</strong> για πλήρη ανακατασκευή του συστήματος φρένων.</li>
          </ul>
          <p>
            Αν δεν γνωρίζετε το ακριβές ανταλλακτικό, η ομάδα μας είναι εδώ για να σας καθοδηγήσει. Απλώς συμπληρώστε τη φόρμα προσφοράς.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BrakeParts;
