import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import HeroCarousel from "./HeroCarousel";

const Hero = () => {
  return (
    <section 
      className="relative bg-gradient-to-r from-charcoal/90 to-jdgreen/80 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 z-0">
        <HeroCarousel />
      </div>
      
      <div className="container mx-auto px-4 py-20 md:py-32 lg:py-72 relative z-10">
        <div className="max-w-3xl">
          {/* Adjust the font size for mobile, tablet, and desktop */}
          <h1 
            id="hero-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Αξιόπιστες Λύσεις στη Γεωργική Μηχανολογία John Deere
          </h1>
          {/* Adjust the paragraph font size */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8">
            Εισαγωγέας & Διανομέας Εξοπλισμού John Deere
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              asChild
              size="lg" 
              className="bg-jdyellow hover:bg-jdyellow-light text-charcoal-dark font-semibold px-8"
            >
              <Link to="/parts">Δείτε Προϊόντα</Link>
            </Button>
            <Button 
              asChild
              size="lg" 
              variant="outline" 
              className="bg-transparent text-white border-white hover:bg-white/10 font-semibold px-8"
            >
              <Link to="/contact">Επικοινωνήστε Μαζί Μας</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
