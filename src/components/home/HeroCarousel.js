import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

// Ορισμός των εικόνων για μεγάλες και μικρές οθόνες
const images = [
  {
    url: "/images/img4.jpg", // Μεγάλες οθόνες
    alt: "Τρακτέρ John Deere",
    mobileUrl: "/images/img6.jpg", // Μικρές οθόνες
  },
  {
    url: "/images/img3.jpg",
    alt: "Τρακτέρ John Deere",
    mobileUrl: "/images/img11.jpg",
  },
  {
    url: "/images/img2.jpg",
    alt: "Τρακτέρ John Deere",
    mobileUrl: "/images/img12.jpg",
  },
  {
    url: "/images/img1.jpg",
    alt: "Τρακτέρ John Deere",
    mobileUrl: "/images/img10.jpg",
  },
];

const HeroCarousel = () => {
  const [api, setApi] = React.useState(null);
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  // Εντοπισμός μεγέθους οθόνης
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  // Auto-advance carousel every 5 seconds
  React.useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <Carousel className="w-full h-full" setApi={setApi} opts={{ loop: true }}>
      <CarouselContent className="h-full">
        {images.map((image, index) => (
          <CarouselItem key={index} className="h-full relative">
            <div className="h-full w-full relative">
              {/* Χρήση διαφορετικής εικόνας ανάλογα με το μέγεθος της οθόνης */}
              <img
                src={isMobile ? image.mobileUrl : image.url}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-10">
                {/* <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">{image.alt}</h2> */}
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious
        className="absolute left-4 bg-white/70 hover:bg-white border-none z-20"
        aria-label="Προηγούμενη διαφάνεια"
      />
      <CarouselNext
        className="absolute right-4 bg-white/70 hover:bg-white border-none z-20"
        aria-label="Επόμενη διαφάνεια"
      />

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === current ? "bg-white scale-125" : "bg-white/50"
            }`}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Μετάβαση στη διαφάνεια ${index + 1}`}
          />
        ))}
      </div>
    </Carousel>
  );
};

export default HeroCarousel;
