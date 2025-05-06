import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../ui/carousel";

const images = [
  {
    url: "/images/machinery/lawnCare/img4.jpeg", 
    alt: "General",
    mobileUrl: "/images/general/mobile1.jpg", 
  },
  {
    url: "/images/machinery/lawnCare/img2.jpg",
    alt: "General",
    mobileUrl: "/images/general/mobile2.jpg",
  },
  {
    url: "/images/machinery/productionEquipment/img3.jpg",
    alt: "General",
    mobileUrl: "/images/general/mobile3.jpg",
  },
  {
    url: "/images/machinery/productionEquipment/img7.jpg",
    alt: "General",
    mobileUrl: "/images/general/mobile9.jpg",
  },
  {
    url: "/images/machinery/productionEquipment/img10.jpg",
    alt: "General",
    mobileUrl: "/images/general/mobile10.jpg",
  },
  {
    url: "/images/machinery/Tractors/compact/img1.jpg",
    alt: "General",
    mobileUrl: "/images/general/mobile11.jpg",
  },
  {
    url: "/images/machinery/Tractors/utility/img2.jpg",
    alt: "General",
    mobileUrl: "/images/general/mobile1.jpg",
  },
  {
    url: "/images/machinery/Tractors/utility/img3.jpg",
    alt: "General",
    mobileUrl: "/images/general/mobile2.jpg",
  },
  {
    url: "/images/machinery/Tractors/large/img1.jpg",
    alt: "General",
    mobileUrl: "/images/general/mobile3.jpg",
  },
];

const HeroCarousel = () => {
  const [api, setApi] = React.useState(null);
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

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
              {/* Use different images for mobile and desktop */}
              <img
                src={isMobile ? image.mobileUrl : image.url}
                alt={image.alt}
                className="w-full h-full object-cover" // Ensures the image covers the space
              />
              <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
              <div className="absolute top-3/4 left-3/4 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-10">
                {/* <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">{image.alt}</h2> */}
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-lg"
        aria-label="Previous Slide"
      />
      <CarouselNext
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-lg"
        aria-label="Next Slide"
      /> */}

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === current ? "bg-white scale-125" : "bg-white/50"
            }`}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </Carousel>
  );
};

export default HeroCarousel;
