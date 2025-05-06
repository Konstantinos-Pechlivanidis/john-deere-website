import { useState } from "react";

const TractorsParts = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const handleImageClick = (imageSrc) => {
    setModalImage(imageSrc);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalImage("");
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <h2 className="text-3xl font-bold text-charcoal-dark mb-4">
          Ανταλλακτικά για Τρακτέρ
        </h2>
        <div className="w-20 h-1 bg-jdyellow mb-6"></div>
        <p className="text-gray-600 mb-8">
          Ανακαλύψτε τα αυθεντικά ανταλλακτικά για τρακτέρ John Deere, που
          καλύπτουν κάθε ανάγκη σας για γεωργική ή κατασκευαστική εργασία. Από
          compact τρακτέρ μέχρι μεγάλα τρακτέρ, έχουμε τη δυνατότητα να
          προμηθεύσουμε ό,τι χρειάζεστε για τη σωστή λειτουργία των μηχανημάτων
          σας.
        </p>

        {/* Compact Tractors Section */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-charcoal-dark mb-4 mt-4">
            Compact Tractors
          </h3>
          <div className="flex flex-wrap gap-6">
            <div className="w-full sm:w-1/2 md:w-1/3">
              <img
                src="/images/machinery/Tractors/compact/img1.jpg"
                alt="Compact Tractors 1"
                className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform"
                onClick={() =>
                  handleImageClick(
                    "/images/machinery/Tractors/compact/img1.jpg"
                  )
                }
              />
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3">
              <img
                src="/images/machinery/Tractors/compact/img2.jpg"
                alt="Compact Tractors 2"
                className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform"
                onClick={() =>
                  handleImageClick(
                    "/images/machinery/Tractors/compact/img2.jpg"
                  )
                }
              />
            </div>
          </div>
          <p className="text-gray-600 mb-4 mt-4">
            Τα compact τρακτέρ είναι ιδανικά για μικρότερες εκτάσεις και
            ποικιλία αγροτικών εργασιών. Διαθέτουν εξαιρετική ευχρηστία και
            μπορούν να χρησιμοποιηθούν για εργασίες όπως φύτευση, πότισμα και
            καθαρισμός.
          </p>
          <ul className="list-disc pl-5">
            <li>Ιδανικά για μικρότερες εκτάσεις και οικογενειακές φάρμες</li>
            <li>Ευέλικτα και εύκολα στη χρήση</li>
            <li>
              Κατάλληλα για κηπουρικές εργασίες, οργώματα και άλλες μικρές
              γεωργικές εργασίες
            </li>
          </ul>
        </div>

        {/* Utility Tractors Section */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-charcoal-dark mb-4 mt-4">
            Utility Tractors
          </h3>
          <div className="flex flex-wrap gap-6">
            <div className="w-full sm:w-1/2 md:w-1/3">
              <img
                src="/images/machinery/Tractors/utility/img3.jpg"
                alt="Utility Tractors 3"
                className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform"
                onClick={() =>
                  handleImageClick(
                    "/images/machinery/Tractors/utility/img3.jpg"
                  )
                }
              />
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3">
              <img
                src="/images/machinery/Tractors/utility/img1.jpg"
                alt="Utility Tractors 1"
                className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform"
                onClick={() =>
                  handleImageClick(
                    "/images/machinery/Tractors/utility/img1.jpg"
                  )
                }
              />
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3">
              <img
                src="/images/machinery/Tractors/utility/img2.jpg"
                alt="Utility Tractors 2"
                className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform"
                onClick={() =>
                  handleImageClick(
                    "/images/machinery/Tractors/utility/img2.jpg"
                  )
                }
              />
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3">
              <img
                src="/images/machinery/Tractors/utility/img4.jpg"
                alt="Utility Tractors 4"
                className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform"
                onClick={() =>
                  handleImageClick(
                    "/images/machinery/Tractors/utility/img4.jpg"
                  )
                }
              />
            </div>
          </div>
          <p className="text-gray-600 mb-4 mt-4">
            Τα utility τρακτέρ είναι κατάλληλα για μεσαίες εκτάσεις και
            απαιτητικές γεωργικές ή κατασκευαστικές εργασίες. Με αυξημένη ισχύ
            και ευχρηστία, είναι ιδανικά για οργώματα, μεταφορές και άλλες
            βαριές εργασίες.
          </p>
          <ul className="list-disc pl-5">
            <li>Ικανότητα για βαριές εργασίες και χειρισμούς</li>
            <li>Ιδανικά για μεγάλο εύρος εργασιών και εκτάσεων</li>
            <li>Εξαιρετική απόδοση και αντοχή σε δύσκολες συνθήκες</li>
          </ul>
        </div>

        {/* Specialty Tractors Section */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-charcoal-dark mb-4 mt-4">
            Specialty Tractors
          </h3>
          <div className="flex flex-wrap gap-6">
            <div className="w-full sm:w-1/2 md:w-1/3">
              <img
                src="/images/machinery/Tractors/specialty/img3.jpg"
                alt="Specialty Tractors 3"
                className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform"
                onClick={() =>
                  handleImageClick(
                    "/images/machinery/Tractors/specialty/img3.jpg"
                  )
                }
              />
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3">
              <img
                src="/images/machinery/Tractors/specialty/img2.jpg"
                alt="Specialty Tractors 2"
                className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform"
                onClick={() =>
                  handleImageClick(
                    "/images/machinery/Tractors/specialty/img2.jpg"
                  )
                }
              />
            </div>
          </div>
          <p className="text-gray-600 mb-4 mt-4">
            Τα specialty τρακτέρ είναι κατασκευασμένα για να εκτελούν
            εξειδικευμένες εργασίες σε απαιτητικές συνθήκες, όπως γεωργία σε
            ορεινές ή περιορισμένες περιοχές. Προσφέρουν άριστη ευχρηστία και
            δυνατότητες χειρισμού σε στενά περάσματα.
          </p>
          <ul className="list-disc pl-5">
            <li>
              Ιδανικά για γεωργία σε δύσκολες περιοχές και στενά περάσματα
            </li>
            <li>Εξαιρετική ευχρηστία και χειρισμός</li>
            <li>Κατάλληλα για εξειδικευμένες αγροτικές εργασίες</li>
          </ul>
        </div>

        {/* Large Tractors Section */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-charcoal-dark mb-4">
            Large Tractors
          </h3>
          <div className="flex flex-wrap gap-6">
            <div className="w-full sm:w-1/2 w-full sm:w-1/2 md:w-1/3">
              <img
                src="/images/machinery/Tractors/large/img2.jpg"
                alt="Large Tractors 2"
                className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform"
                onClick={() =>
                  handleImageClick("/images/machinery/Tractors/large/img2.jpg")
                }
              />
            </div>
            <div className="w-full sm:w-1/2 w-full sm:w-1/2 md:w-1/3">
              <img
                src="/images/machinery/Tractors/large/img3.jpg"
                alt="Large Tractors 3"
                className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform"
                onClick={() =>
                  handleImageClick("/images/machinery/Tractors/large/img3.jpg")
                }
              />
            </div>
            <div className="w-full sm:w-1/2 w-full sm:w-1/2 md:w-1/3">
              <img
                src="/images/machinery/Tractors/large/img4.jpg"
                alt="Large Tractors 4"
                className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform"
                onClick={() =>
                  handleImageClick("/images/machinery/Tractors/large/img4.jpg")
                }
              />
            </div>
            <div className="w-full sm:w-1/2 w-full sm:w-1/2 md:w-1/3">
              <img
                src="/images/machinery/Tractors/large/img5.jpg"
                alt="Large Tractors 5"
                className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform"
                onClick={() =>
                  handleImageClick("/images/machinery/Tractors/large/img5.jpg")
                }
              />
            </div>
            <div className="w-full sm:w-1/2 w-full sm:w-1/2 md:w-1/3">
              <img
                src="/images/machinery/Tractors/large/img7.jpg"
                alt="Large Tractors 7"
                className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform"
                onClick={() =>
                  handleImageClick("/images/machinery/Tractors/large/img7.jpg")
                }
              />
            </div>
            <div className="w-full sm:w-1/2 w-full sm:w-1/2 md:w-1/3">
              <img
                src="/images/machinery/Tractors/large/img6.jpg"
                alt="Large Tractors 6"
                className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform"
                onClick={() =>
                  handleImageClick("/images/machinery/Tractors/large/img6.jpg")
                }
              />
            </div>
          </div>
          <p className="text-gray-600 mb-4 mt-4">
            Τα μεγάλα τρακτέρ είναι ιδανικά για μεγάλες εκτάσεις και βαριές
            γεωργικές εργασίες. Με αυξημένη ισχύ και αντοχή, προσφέρουν μέγιστη
            απόδοση για βαριές εφαρμογές όπως η συγκομιδή, η ανασκαφή και οι
            μεταφορές.
          </p>
          <ul className="list-disc pl-5">
            <li>Κατάλληλα για βαριές και απαιτητικές γεωργικές εργασίες</li>
            <li>Υψηλή απόδοση και ανθεκτικότητα σε δύσκολες συνθήκες</li>
            <li>Ιδανικά για μεγάλες εκτάσεις και εφαρμογές υψηλής ισχύος</li>
          </ul>
        </div>
      </div>

      {/* Modal for Image Zoom */}
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 max-w-lg w-full">
            <img
              src={modalImage}
              alt="Large View"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <button
              className="bg-jdyellow hover:bg-jdyellow-dark mt-4 p-2 rounded text-white"
              onClick={handleCloseModal}
            >
              Κλείσιμο
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default TractorsParts;
