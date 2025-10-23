import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Carousel,
  CarouselItem,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const images = [
  "/images/parts/General/img2.jpg",
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
  "/images/general/DSC_2525.webp",
  "/images/general/DSC_2526.webp",
  "/images/parts/Brake/brake2.png",
  "/images/parts/Electrical/electrical1.jpg",
  "/images/parts/Electrical/electrical2.jpg",
  "/images/parts/Harvesters/avif1.avif",
  "/images/parts/Harvesters/avif2.avif",
];

const GeneralParts = () => {
  const { t } = useTranslation('parts_components');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const handleImageClick = (src) => {
    setModalImage(src);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalImage("");
    setIsModalOpen(false);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Τίτλος */}
        <div className="text-center mb-12">
          <h2 className='text-4xl font-extrabold text-charcoal-dark mb-3'>
            {t('general.title')}
          </h2>
          <div className="w-20 h-1 bg-jdyellow mx-auto mb-6 rounded" />
          <p className='text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed'>
            {t('general.description')}
          </p>
        </div>

        {/* Carousel */}
        <div className="max-w-6xl mx-auto mb-14">
          <Carousel className="relative">
            <CarouselContent>
              {images.map((img, index) => (
                <CarouselItem
                  key={index}
                  className="w-full sm:h-56 md:h-80 lg:h-[28rem] flex items-center justify-center overflow-hidden rounded-xl"
                >
                  <img
                    src={img}
                    alt={`Part ${index + 1}`}
                    className="max-w-full max-h-full object-contain rounded-md shadow hover:scale-105 transition-transform cursor-pointer"
                    onClick={() => handleImageClick(img)}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow z-10" />
            <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow z-10" />
          </Carousel>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl w-full">
              <img
                src={modalImage}
                alt={t('common.preview')}
                className="w-full h-auto rounded"
              />
              <div className="text-center mt-4">
                <button
                  onClick={handleCloseModal}
                  className="bg-jdyellow hover:bg-jdyellow-dark text-white px-6 py-2 rounded"
                >
                  {t('common.close')}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Επιπλέον πληροφορίες */}
        <div className="max-w-3xl mx-auto text-center text-gray-700 space-y-4 mt-16">
          <p>
            {t('general.additional_info')}
          </p>
          <p>
            {t('general.contact_text')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default GeneralParts;
