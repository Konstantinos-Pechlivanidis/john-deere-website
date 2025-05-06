import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import Carousel from "../layout/Carousel";

const PartsLinkSection = () => {
  const images = [
    "/images/parts/General/webp1.webp",
    "/images/parts/General/img1.jpg",
    "/images/parts/General/avif1.avif",
    "/images/parts/General/img2.jpg",
    "/images/parts/General/img3.jpg",
    "/images/parts/General/webp2.webp",
    "/images/parts/General/webp3.webp",
  ];
  return (
    <section className="py-4">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-charcoal-dark mb-4">
          Ανταλλακτικά John Deere
        </h2>
        <div className="w-20 h-1 bg-jdyellow mx-auto mb-6"></div>
        <p className="md:w-1/2 m-auto text-lg text-gray-600 mb-8">
          Αναζητάτε ανταλλακτικά για το γεωργικό ή κατασκευαστικό σας μηχάνημα;
          Επισκεφτείτε τη σελίδα ανταλλακτικών και ανακαλύψτε την ποικιλία μας
          σε αυθεντικά ανταλλακτικά για κάθε ανάγκη σας.
        </p>

        {/* Carousel Section */}
        <div className="py-8">
          <div className="container mx-auto px-4">
            <Carousel images={images} />
          </div>
        </div>

        <Link to="/parts">
          <Button className="bg-jdgreen hover:bg-jdgreen-light text-white mb-8">
            Ανακαλύψτε τα Ανταλλακτικά μας
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default PartsLinkSection;
