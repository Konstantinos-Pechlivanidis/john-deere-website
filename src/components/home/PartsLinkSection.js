import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import Carousel from "../layout/Carousel";

const PartsLinkSection = () => {
  const images = [
    "/images/parts/General/img2.jpg",
  "/images/parts/General/img3.jpg",
  "/images/parts/General/avif1.avif",
  "/images/parts/General/avif2.avif",
  "/images/parts/Engine/engine1.jpg",
  "/images/parts/Engine/engine2.avif",
  "/images/parts/Engine/engine3.jpg",
  "/images/parts/Transmision/transmission1.webp",
  "/images/parts/Transmision/transmission2.jpg",
  "/images/parts/Transmision/transmission3.jpg",
  "/images/parts/Differential/differential1.png",
  "/images/parts/Differential/differential2.jpg",
  "/images/parts/Clutch/clutch1.jpg",
  "/images/parts/Clutch/clutch2.jpg",
  "/images/parts/Hydraulic/hydraulic1.jpg",
  "/images/parts/Hydraulic/hydraulic2.jpg",
  "/images/parts/Hydraulic/hydraulic3.png",
  "/images/parts/Filter/filter1.jpg",
  "/images/parts/Filter/filter2.jpg",
  "/images/parts/Brake/brake2.png",
  "/images/parts/Electrical/electrical1.jpg",
  "/images/parts/Electrical/electrical2.jpg",
  "/images/parts/Harvesters/avif1.avif",
  "/images/parts/Harvesters/avif2.avif",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        {/* Τίτλος */}
        <h2 className="text-4xl font-extrabold text-charcoal-dark mb-4 tracking-tight">
          Ανταλλακτικά για Γεωργικά Μηχανήματα
        </h2>
        <div className="w-24 h-1 bg-jdyellow mx-auto mb-8 rounded"></div>

        {/* Περιγραφή */}
        <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed mb-12">
          Προσφέρουμε μεγάλη ποικιλία ανταλλακτικών για <strong>τρακτέρ</strong>, <strong>στρίπερ</strong>, 
          <strong> βαμβακομηχανές</strong> και <strong>θεριζοαλωνιστικές</strong>. 
          Αναλαμβάνουμε τον εντοπισμό του κατάλληλου εξαρτήματος και την άμεση αποστολή του σε όλη την Ελλάδα.
        </p>

        {/* Κατηγορίες */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Τρακτέρ & Ελκυστήρες",
              desc: "Πλήρης γκάμα ανταλλακτικών: φίλτρα, σασμάν, υδραυλικά, ηλεκτρικά και άλλα.",
            },
            {
              title: "Βαμβακομηχανές & Στρίπερ",
              desc: "Ανταλλακτικά για μηχανές συγκομιδής βάμβακος και στρίπερ με έμφαση στην αξιοπιστία.",
            },
            {
              title: "Θεριζοαλωνιστικές Μηχανές",
              desc: "Εξαρτήματα για κομπίνες, harvester και μηχανήματα συγκομιδής σιτηρών.",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-gray-50 hover:bg-white transition shadow-sm hover:shadow-lg border border-gray-200 rounded-xl p-6 text-left"
            >
              <h3 className="text-xl font-semibold text-charcoal-dark mb-2">{card.title}</h3>
              <p className="text-gray-600 text-sm">{card.desc}</p>
            </div>
          ))}
        </div>

        {/* Carousel */}
        <div className="mb-16">
          <Carousel images={images} />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link to="/parts">
            <Button className="px-6 py-3 bg-jdgreen hover:bg-jdgreen-light text-white text-base font-medium rounded-full shadow-md transition">
              Δείτε Όλα τα Ανταλλακτικά
            </Button>
          </Link>
          <Link to="/contact">
            <Button
              variant="outline"
              className="px-6 py-3 border-2 border-jdgreen text-jdgreen hover:bg-jdgreen-light hover:text-white font-medium rounded-full transition"
            >
              Ζητήστε το Ανταλλακτικό που Χρειάζεστε
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PartsLinkSection;
