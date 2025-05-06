import { useState } from "react";

const ProductionSystemsAndTechnologyParts = () => {
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
        {/* Τίτλος Ενότητας */}
        <h2 className="text-3xl font-bold text-charcoal-dark mb-4 mt-4">
          Συστήματα Παραγωγής & Τεχνολογία
        </h2>
        <div className="w-20 h-1 bg-jdyellow mb-6"></div>
        <p className="text-gray-600 mb-8">
          Ανακαλύψτε τα ανταλλακτικά και τις τεχνολογίες για συστήματα παραγωγής
          που ενισχύουν την παραγωγικότητα και αποδοτικότητα της γεωργίας σας.
          Από εξοπλισμό καθοδήγησης μέχρι εφαρμογές και εξαρτήματα για συγκομιδή
          και όργωμα, έχουμε την τεχνολογία που χρειάζεστε για καλύτερα
          αποτελέσματα.
        </p>

        {/* Ενότητα για Guidance Equipment */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-charcoal-dark mb-4 mt-4">
            Εξοπλισμός Καθοδήγησης (Guidance Equipment)
          </h3>
          <div className="flex flex-wrap gap-6">
            <div className="w-full sm:w-1/2 md:w-1/3">
              <img
                src="/images/machinery/productionEquipment/img3.jpg"
                alt="Guidance Equipment"
                className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform"
                onClick={() =>
                  handleImageClick(
                    "/images/machinery/productionEquipment/img3.jpg"
                  )
                }
              />
            </div>
            <div className="md:w-1/3">
              <img
                src="/images/machinery/productionEquipment/img12.jpg"
                alt="Guidance Equipment"
                className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform"
                onClick={() =>
                  handleImageClick(
                    "/images/machinery/productionEquipment/img12.jpg"
                  )
                }
              />
            </div>
          </div>
          <p className="text-gray-600 mb-4 mt-4">
            Ο εξοπλισμός καθοδήγησης προσφέρει ακριβή καθοδήγηση των μηχανημάτων
            σας, βελτιώνοντας την αποδοτικότητα και μειώνοντας τα λάθη. Ιδανικός
            για την ακρίβεια των καλλιεργειών σας.
          </p>
          <ul className="list-disc pl-5">
            <li>Αυξημένη ακρίβεια και αποδοτικότητα στις εργασίες</li>
            <li>
              Μείωση σφαλμάτων κατά τη διάρκεια της καλλιέργειας και συγκομιδής
            </li>
            <li>Ιδανικό για εξειδικευμένες γεωργικές εργασίες</li>
          </ul>
        </div>

        {/* Ενότητα για Application Equipment */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-charcoal-dark mb-4 mt-4">
            Εξοπλισμός Εφαρμογών (Application Equipment)
          </h3>
          <div className="flex flex-wrap gap-6">
            <div className="w-full sm:w-1/2 md:w-1/3">
              <img
                src="/images/machinery/productionEquipment/img4.jpg"
                alt="Application Equipment"
                className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform"
                onClick={() =>
                  handleImageClick(
                    "/images/machinery/productionEquipment/img4.jpg"
                  )
                }
              />
            </div>
            <div className="md:w-1/3">
              <img
                src="/images/machinery/productionEquipment/img5.jpg"
                alt="Application Equipment"
                className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform"
                onClick={() =>
                  handleImageClick(
                    "/images/machinery/productionEquipment/img5.jpg"
                  )
                }
              />
            </div>
            <div className="md:w-1/3">
              <img
                src="/images/machinery/productionEquipment/img6.jpg"
                alt="Application Equipment"
                className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform"
                onClick={() =>
                  handleImageClick(
                    "/images/machinery/productionEquipment/img6.jpg"
                  )
                }
              />
            </div>
            <div className="md:w-1/3">
              <img
                src="/images/machinery/productionEquipment/img7.jpg"
                alt="Application Equipment"
                className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform"
                onClick={() =>
                  handleImageClick(
                    "/images/machinery/productionEquipment/img7.jpg"
                  )
                }
              />
            </div>
            <div className="md:w-1/3">
              <img
                src="/images/machinery/productionEquipment/img8.jpg"
                alt="Application Equipment"
                className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform"
                onClick={() =>
                  handleImageClick(
                    "/images/machinery/productionEquipment/img8.jpg"
                  )
                }
              />
            </div>
            <div className="md:w-1/3">
              <img
                src="/images/machinery/productionEquipment/img10.jpg"
                alt="Application Equipment"
                className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform"
                onClick={() =>
                  handleImageClick(
                    "/images/machinery/productionEquipment/img10.jpg"
                  )
                }
              />
            </div>
          </div>
          <p className="text-gray-600 mb-4 mt-4">
            Ο εξοπλισμός εφαρμογών χρησιμοποιείται για την ακριβή εφαρμογή
            λιπασμάτων, φυτοφαρμάκων και άλλων χημικών, εξασφαλίζοντας την
            αποτελεσματικότητα και ασφάλεια της εφαρμογής.
          </p>
          <ul className="list-disc pl-5">
            <li>Ακριβής εφαρμογή λιπασμάτων και φυτοφαρμάκων</li>
            <li>
              Βελτιστοποίηση της χρήσης χημικών για μεγαλύτερη αποδοτικότητα
            </li>
            <li>Μειώνει το κόστος και τις επιπτώσεις για το περιβάλλον</li>
          </ul>
        </div>

        {/* Ενότητα για Drapers & Platforms */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-charcoal-dark mb-4 mt-4">
            Drapers & Platforms
          </h3>
          <p className="text-gray-600 mb-4 mt-4">
            Οι πλατφόρμες και οι drapers παρέχουν λύσεις για τη συγκομιδή
            διαφορετικών καλλιεργειών, εξασφαλίζοντας υψηλή ποιότητα και
            αποτελεσματικότητα.
          </p>
          <ul className="list-disc pl-5">
            <li>Αυξημένη απόδοση στη συγκομιδή διαφόρων καλλιεργειών</li>
            <li>Ευκολία στη χρήση και στον χειρισμό</li>
            <li>
              Ιδανικές για καλλιέργειες σιτηρών και άλλες γεωργικές εργασίες
            </li>
          </ul>
        </div>

        {/* Ενότητα για Hay and Forage Baling */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-charcoal-dark mb-4 mt-4">
            Hay and Forage Baling
          </h3>
          <p className="text-gray-600 mb-4 mt-4">
            Οι συσκευαστές χόρτου και σανού είναι ιδανικοί για τη διατήρηση και
            συγκομιδή χόρτων και ζωοτροφών με υψηλή απόδοση και
            αποτελεσματικότητα.
          </p>
          <ul className="list-disc pl-5">
            <li>Ιδανικά για την αποθήκευση και μεταφορά χόρτου</li>
            <li>Αποτελεσματική συγκομιδή και επεξεργασία των ζωοτροφών</li>
            <li>Μεγιστοποιεί την παραγωγή και την ποιότητα των ζωοτροφών</li>
          </ul>
        </div>

        {/* Ενότητα για Tillage Equipment */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-charcoal-dark mb-4 mt-4">
            Tillage Equipment
          </h3>
          <p className="text-gray-600 mb-4 mt-4">
            Ο εξοπλισμός οργώματος χρησιμοποιείται για την προετοιμασία του
            εδάφους, βελτιώνοντας την αποδοτικότητα της καλλιέργειας και τη
            διαχείριση του εδάφους.
          </p>
          <ul className="list-disc pl-5">
            <li>Ιδανικό για την προετοιμασία του εδάφους πριν τη σπορά</li>
            <li>Βελτιώνει τη δομή του εδάφους και την απορρόφηση του νερού</li>
            <li>Αυξάνει την αποδοτικότητα των καλλιεργειών</li>
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

export default ProductionSystemsAndTechnologyParts;
