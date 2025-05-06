import { useState } from "react";

const LawnCareAndUtilityParts = () => {
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
        <h2 className="text-3xl font-bold text-charcoal-dark mb-4">
          Ανταλλακτικά για Φροντίδα Χλοοτάπητα & Οχήματα Χρησιμότητας
        </h2>
        <div className="w-20 h-1 bg-jdyellow mb-6"></div>
        <p className="text-gray-600 mb-8">
          Ανακαλύψτε μια γκάμα υψηλής απόδοσης προϊόντων για τη φροντίδα του
          γκαζόν και τα οχήματα χρησιμότητας, που έχουν σχεδιαστεί για να σας
          βοηθήσουν να επιτύχετε τα καλύτερα αποτελέσματα για τη συντήρηση και
          φροντίδα του κήπου ή του γκαζόν σας. Προμηθευόμαστε αυθεντικά
          ανταλλακτικά για χλοοκοπτικά και οχήματα χρησιμότητας, εξασφαλίζοντας
          άριστη λειτουργία.
        </p>

        <div className="flex flex-wrap gap-6">
          <div className="w-full sm:w-1/2 md:w-1/3">
            <img
              src="/images/machinery/lawnCare/img4.jpeg"
              alt="Lawn Care 4"
              loading="lazy" 
              className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform"
              onClick={() =>
                handleImageClick("/images/machinery/lawnCare/img4.jpeg")
              }
            />
          </div>
          <div className="md:w-1/3">
            <img
              src="/images/machinery/lawnCare/img2.jpg"
              alt="Lawn Care 2"
              className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform"
              onClick={() =>
                handleImageClick("/images/machinery/lawnCare/img2.jpg")
              }
            />
          </div>
          <div className="md:w-1/3">
            <img
              src="/images/machinery/lawnCare/img3.jpg"
              alt="Lawn Care 3"
              loading="lazy" 
              className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform"
              onClick={() =>
                handleImageClick("/images/machinery/lawnCare/img3.jpg")
              }
            />
          </div>
          <div className="md:w-1/3">
            <img
              src="/images/machinery/lawnCare/img5.jpg"
              alt="Lawn Care 5"
              loading="lazy" 
              className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform"
              onClick={() =>
                handleImageClick("/images/machinery/lawnCare/img5.jpg")
              }
            />
          </div>
        </div>

        {/* Ενότητα για Riding Mowers */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-charcoal-dark mb-4">
            Χλοοκοπτικά Ροής (Riding Mowers)
          </h3>
          <p className="text-gray-600 mb-4 mt-4">
            Τα χλοοκοπτικά ροής είναι ιδανικά για μεγαλύτερους κήπους και αυλές,
            προσφέροντας άνετη και αποδοτική εργασία. Είναι κατάλληλα για
            χρήστες που χρειάζονται αποδοτικά και άνετα εργαλεία για τη
            συντήρηση μεγάλων εκτάσεων.
          </p>
          <ul className="list-disc pl-5">
            <li>Άνετη οδήγηση για μεγάλα χρονικά διαστήματα</li>
            <li>Ιδανικά για μεγάλες επίπεδες επιφάνειες</li>
            <li>Μεγάλη ποικιλία διαθέσιμων πλατών κοπής</li>
            <li>Εύκολη χρήση και έλεγχος</li>
          </ul>
        </div>

        {/* Ενότητα για Zero-Turn Mowers */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-charcoal-dark mb-4">
            Zero-Turn Mowers
          </h3>
          <p className="text-gray-600 mb-4 mt-4">
            Τα Zero-Turn Mowers είναι ιδανικά για περιοχές με εμπόδια και στενά
            περάσματα. Χάρη στη δυνατότητα περιστροφής 360° αυξάνεται η
            ευχρηστία και η ακρίβεια κατά την κοπή, ενώ είναι εξαιρετικά
            αποδοτικά για μικρές και μεσαίες επιφάνειες.
          </p>
          <ul className="list-disc pl-5">
            <li>Εξαιρετική ευχρηστία και ακρίβεια στις γωνίες</li>
            <li>Ιδανικά για σημεία με πολλά εμπόδια</li>
            <li>Ταχύτητα και αποδοτικότητα στη χρήση</li>
            <li>Άνεση κατά τη διάρκεια της χρήσης</li>
          </ul>
        </div>

        {/* Ενότητα για Commercial Mowers */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-charcoal-dark mb-4">
            Επαγγελματικά Χλοοκοπτικά (Commercial Mowers)
          </h3>
          <p className="text-gray-600 mb-4 mt-4">
            Τα επαγγελματικά χλοοκοπτικά είναι κατασκευασμένα για σκληρές
            δουλειές και μεγάλης κλίμακας χρήσεις. Διαθέτουν ισχυρούς κινητήρες
            και μεγάλες πλατείες κοπής, κάνοντάς τα κατάλληλα για επαγγελματίες
            τοπίου και μεγάλες εκτάσεις.
          </p>
          <ul className="list-disc pl-5">
            <li>Ισχυροί κινητήρες και αντοχή</li>
            <li>Ιδανικά για μεγάλες εκτάσεις και επαγγελματική χρήση</li>
            <li>Μεγάλες πλατφόρμες κοπής για ταχύτερη εργασία</li>
            <li>Εύκολη συντήρηση και επισκευή</li>
          </ul>
        </div>

        {/* Ενότητα για Gator™ Utility Vehicles */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-charcoal-dark mb-4">
            Gator™ Οχήματα Χρησιμότητας (Utility Vehicles)
          </h3>
          <p className="text-gray-600 mb-4 mt-4">
            Τα Gator™ Utility Vehicles είναι πολύπλευρα οχήματα για
            επαγγελματική και προσωπική χρήση. Σχεδιάστηκαν για να αντέχουν σε
            δύσκολες συνθήκες και είναι ιδανικά για τη μεταφορά και την εργασία
            σε διάφορους τύπους εδάφους.
          </p>
          <ul className="list-disc pl-5">
            <li>Πολύπλευρα για εργασία και αναψυχή</li>
            <li>Ικανότητα εκτός δρόμου και ισχυροί κινητήρες</li>
            <li>Ανθεκτικά σε δύσκολες συνθήκες εδάφους</li>
            <li>Άνετα και ευχρηστα οχήματα</li>
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

export default LawnCareAndUtilityParts;
