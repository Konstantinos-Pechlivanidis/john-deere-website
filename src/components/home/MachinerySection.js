import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import Carousel from "../parts/Carousel";

const MachinerySection = () => {
  const images = [
    "/images/machinery/lawnCare/img4.jpeg",
    "/images/machinery/lawnCare/img2.jpg",
    "/images/machinery/productionEquipment/img3.jpg",
    "/images/machinery/productionEquipment/img7.jpg",
    "/images/machinery/productionEquipment/img10.jpg",
    "/images/machinery/Tractors/compact/img1.jpg",
    "/images/machinery/Tractors/utility/img2.jpg",
    "/images/machinery/Tractors/utility/img3.jpg",
    "/images/machinery/Tractors/large/img1.jpg",
    "/images/machinery/Tractors/large/img2.jpg",
    "/images/machinery/Tractors/large/img3.jpg",
    // Add more images as needed
  ];
  return (
    <section className="py-4 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-charcoal-dark mb-4">
          Μηχανήματα και Εξοπλισμός
        </h2>
        <div className="w-20 h-1 bg-jdyellow mx-auto mb-6"></div>
        <p className="text-lg text-gray-600 mb-8">
          Εξερευνήστε τα αυθεντικά μηχανήματα John Deere για γεωργία, κατασκευές και άλλα.
          Ανάλογα με τις ανάγκες σας, μπορείτε να βρείτε τα κατάλληλα μηχανήματα και εξοπλισμό
          για να αυξήσετε την αποδοτικότητα και την παραγωγικότητά σας.
        </p>
        {/* Carousel Section */}
        <div className="py-8">
          <div className="container mx-auto px-4">
            <Carousel images={images} />
          </div>
        </div>
        <Link to="/machinery">
          <Button className="bg-jdgreen hover:bg-jdgreen-light text-white">
            Ανακαλύψτε τα Μηχανήματα
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default MachinerySection;
