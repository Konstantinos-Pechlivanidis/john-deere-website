import React, { useState } from "react";

// const images = [
//   "/images/parts/Electrical/electrical1.jpg",
//   "/images/parts/Electrical/electrical2.jpg",];

const ElectricalParts = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  // const handleImageClick = (src) => {
  //   setModalImage(src);
  //   setIsModalOpen(true);
  // };

  const handleCloseModal = () => {
    setModalImage("");
    setIsModalOpen(false);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Τίτλος και Εισαγωγή */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-charcoal-dark mb-4">
            Ανταλλακτικά Ηλεκτρολογικού Υλικού
          </h2>
          <div className="w-20 h-1 bg-jdyellow mx-auto mb-6 rounded" />
          <p className="text-lg text-gray-600">
            Εξασφαλίστε την αξιόπιστη λειτουργία του ηλεκτρικού συστήματος με γνήσια ή συμβατά ανταλλακτικά για γεωργικά και βιομηχανικά μηχανήματα John Deere.
          </p>
        </div>

        {/* Εικόνες */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 mb-12">
          {images.map((src, index) => (
            <div
              key={index}
              className="rounded-lg shadow-md overflow-hidden cursor-pointer"
              onClick={() => handleImageClick(src)}
            >
              <img
                src={src}
                alt={`Ηλεκτρολογικό ${index + 1}`}
                className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div> */}

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
            <li><strong>Μίζες & Δυναμό:</strong> για αξιόπιστη εκκίνηση και συνεχή φόρτιση</li>
            <li><strong>Πίνακες ελέγχου & αισθητήρες:</strong> για ακριβή παρακολούθηση λειτουργιών</li>
            <li><strong>Πλεξούδες & καλωδιώσεις:</strong> για ασφαλή και σταθερή συνδεσιμότητα</li>
            <li><strong>Διακόπτες, ρελέ & ασφαλειοθήκες:</strong> για προστασία και διανομή ρεύματος</li>
            <li><strong>Προβολείς & φώτα:</strong> για βελτιωμένη ορατότητα και ασφάλεια</li>
          </ul>
          <p>
            Δεν είστε σίγουροι για τον τύπο ή τη συμβατότητα του εξαρτήματος; Η ομάδα μας μπορεί να σας καθοδηγήσει. Απλώς συμπληρώστε τη φόρμα προσφοράς και θα επικοινωνήσουμε άμεσα μαζί σας.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ElectricalParts;
