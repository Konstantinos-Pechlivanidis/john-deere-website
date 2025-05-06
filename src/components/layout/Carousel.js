import { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel"; // Using ShadCN carousel

const CarouselComponent = ({ images }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  // Function to handle the image click to open the modal
  const handleImageClick = (imageSrc) => {
    setModalImage(imageSrc);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalImage("");
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* ShadCN Carousel */}
      <Carousel className="my-carousel">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem
              key={index}
              className="relative w-full sm:h-48 md:h-96 lg:h-96 flex items-center justify-center overflow-hidden rounded-lg"
            >
              <img
                src={image}
                alt={`Carousel-${index}`}
                className="max-w-full max-h-full object-contain cursor-pointer transition-transform hover:scale-105"
                onClick={() => handleImageClick(image)}
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation buttons */}
        <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-lg">
          &#8249;
        </CarouselPrevious>
        <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-lg">
          &#8250;
        </CarouselNext>
      </Carousel>

      {/* Modal for Image Zoom */}
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 max-w-lg w-full">
            <img
              src={modalImage}
              alt="Modal View"
              loading="lazy" 
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
    </div>
  );
};

export default CarouselComponent;
