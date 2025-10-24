import React, { useState, useEffect, useCallback } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../ui/carousel";

const images = [
  {
    url: "/images/general/img4.webp", 
    alt: "General",
    mobileUrl: "/images/general/mobile1.webp", 
  },
  {
    url: "/images/general/img28_1.webp",
    alt: "General",
    mobileUrl: "/images/general/mobile3.webp",
  },
  {
    url: "/images/general/img29.webp",
    alt: "General",
    mobileUrl: "/images/general/mobile9.webp",
  },
  {
    url: "/images/general/img20_1.webp",
    alt: "General",
    mobileUrl: "/images/general/mobile10.webp",
  },
];

const HeroCarousel = () => {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Optimize resize handler with useCallback
  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  useEffect(() => {
    // Set initial mobile state
    setIsMobile(window.innerWidth <= 768);
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", handleSelect);
    
    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  useEffect(() => {
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
                loading={index === 0 ? "eager" : "lazy"}
                className="w-full h-full object-cover"
                decoding="async"
              />
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

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
