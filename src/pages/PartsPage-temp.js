import Layout from "../components/layout/Layout";
import { useState } from "react";
import { Button } from "../components/ui/button";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "../components/ui/tabs";
import RequestQuoteButton from "../components/home/RequestQuoteButton";
import LawnGardenParts from "../components/parts/LawnGardenParts";
import AgricultureParts from "../components/parts/AgricultureParts";
import CommercialMowingParts from "../components/parts/CommercialMowingParts";
import GolfAndSportsTurfParts from "../components/parts/GolfAndSportsTurfParts";
import EngineParts from "../components/parts/EngineParts";
import MaintenanceParts from "../components/parts/MaintenanceParts";

const PartsPage = () => {
  const [openRequestForm, setOpenRequestForm] = useState(false); // Κατάσταση για το Modal του αιτήματος προσφοράς

  const handleRequestQuote = () => {
    setOpenRequestForm(true); // Άνοιγμα του modal για το αίτημα προσφοράς
  };

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
    <Layout>
      <div className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-charcoal-dark mb-4">
            Ανταλλακτικά Μηχανημάτων John Deere
          </h1>
          <div className="w-24 h-1 bg-jdyellow mx-auto mb-8"></div>
          <p className="text-base sm:text-lg text-gray-600 mb-8">
            Ανακαλύψτε τα αυθεντικά ανταλλακτικά John Deere που μπορούμε να
            προμηθεύσουμε για τις ανάγκες σας. Είτε πρόκειται για γεωργικά
            μηχανήματα, είτε για κατασκευαστικά, έχουμε την ικανότητα να
            προμηθευτούμε ό,τι χρειάζεστε άμεσα. Δείτε παρακάτω τις κατηγορίες
            ανταλλακτικών και μάθετε περισσότερα.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-6 m-8">
        <div className="w-full sm:w-1/2 md:w-1/6">
          <img
            src="/images/parts/General/webp1.webp"
            alt="General 1"
            loading="lazy" 
            className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform"
            onClick={() =>
              handleImageClick("/images/parts/General/webp1.webp")
            }
          />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/6">
          <img
            src="/images/parts/General/webp2.webp"
            alt="General 2"
            loading="lazy" 
            className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform"
            onClick={() =>
              handleImageClick("/images/parts/General/webp2.webp")
            }
          />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/6">
          <img
            src="/images/parts/General/img1.jpg"
            alt="General 3"
            loading="lazy" 
            className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform"
            onClick={() =>
              handleImageClick("/images/parts/General/img1.jpg")
            }
          />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/6">
          <img
            src="/images/parts/General/avif1.avif"
            alt="General 4"
            loading="lazy" 
            className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform"
            onClick={() =>
              handleImageClick("/images/parts/General/avif1.avif")
            }
          />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/6">
          <img
            src="/images/parts/General/img2.jpg"
            alt="General 5"
            loading="lazy" 
            className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform"
            onClick={() =>
              handleImageClick("/images/parts/General/img2.jpg")
            }
          />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/6">
          <img
            src="/images/parts/Cultivators/img2.jpg"
            alt="Cultivators 2"
            loading="lazy" 
            className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform"
            onClick={() =>
              handleImageClick("/images/parts/Cultivators/img2.jpg")
            }
          />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/6">
          <img
            src="/images/parts/Cultivators/img1.jpg"
            alt="Cultivators 1"
            loading="lazy" 
            className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform"
            onClick={() =>
              handleImageClick("/images/parts/Cultivators/img1.jpg")
            }
          />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/6">
          <img
            src="/images/parts/Harvesters/avif1.avif"
            alt="Harvesters 1"
            loading="lazy" 
            className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform"
            onClick={() =>
              handleImageClick("/images/parts/Harvesters/avif1.avif")
            }
          />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/6">
          <img
            src="/images/parts/Harvesters/avif2.avif"
            alt="Harvesters 2"
            loading="lazy" 
            className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform"
            onClick={() =>
              handleImageClick("/images/parts/Harvesters/avif2.avif")
            }
          />
        </div>
      </div>

      {/* Modal for Image Zoom */}
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 max-w-lg w-full">
            <img
              src={modalImage}
              alt="Large View"
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

      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="agriculture">
            <div className="flex flex-col sm:flex-row sm:flex-nowrap overflow-x-auto sm:overflow-visible space-x-4 mb-8 justify-center items-center">
              <TabsList className="flex flex-col sm:flex-row w-full sm:w-auto sm:flex-nowrap space-x-0 sm:space-x-4 sm:mb-8 sm:space-y-0 h-auto overflow-y-auto">
                <TabsTrigger
                  value="lawn-garden"
                  className="w-full sm:w-auto px-4 py-2 text-sm font-medium text-gray-700 rounded-md sm:border-b-2 sm:border-transparent hover:text-jdgreen focus:outline-none focus:ring-2 focus:ring-jdgreen focus:ring-opacity-50"
                >
                  Γκαζόν & Κήπος
                </TabsTrigger>
                <TabsTrigger
                  value="agriculture"
                  className="w-full sm:w-auto px-4 py-2 text-sm font-medium text-gray-700 rounded-md sm:border-b-2 sm:border-transparent hover:text-jdgreen focus:outline-none focus:ring-2 focus:ring-jdgreen focus:ring-opacity-50"
                >
                  Γεωργία
                </TabsTrigger>
                {/* <TabsTrigger
                  value="construction"
                  className="w-full sm:w-auto px-4 py-2 text-sm font-medium text-gray-700 rounded-md sm:border-b-2 sm:border-transparent hover:text-jdgreen focus:outline-none focus:ring-2 focus:ring-jdgreen focus:ring-opacity-50"
                >
                  Construction
                </TabsTrigger> */}
                <TabsTrigger
                  value="commercial-mowing"
                  className="w-full sm:w-auto px-4 py-2 text-sm font-medium text-gray-700 rounded-md sm:border-b-2 sm:border-transparent hover:text-jdgreen focus:outline-none focus:ring-2 focus:ring-jdgreen focus:ring-opacity-50"
                >
                 Επαγγελματικά Χλοοκοπτικά
                </TabsTrigger>
                <TabsTrigger
                  value="golf-sports-turf"
                  className="w-full sm:w-auto px-4 py-2 text-sm font-medium text-gray-700 rounded-md sm:border-b-2 sm:border-transparent hover:text-jdgreen focus:outline-none focus:ring-2 focus:ring-jdgreen focus:ring-opacity-50"
                >
                  Αθλητικές Εγκαταστάσεις
                </TabsTrigger>
                <TabsTrigger
                  value="engine"
                  className="w-full sm:w-auto px-4 py-2 text-sm font-medium text-gray-700 rounded-md sm:border-b-2 sm:border-transparent hover:text-jdgreen focus:outline-none focus:ring-2 focus:ring-jdgreen focus:ring-opacity-50"
                >
                  Κινητήρες
                </TabsTrigger>
                {/* <TabsTrigger
                  value="remanufactured"
                  className="w-full sm:w-auto px-4 py-2 text-sm font-medium text-gray-700 rounded-md sm:border-b-2 sm:border-transparent hover:text-jdgreen focus:outline-none focus:ring-2 focus:ring-jdgreen focus:ring-opacity-50"
                >
                  Remanufactured Parts
                </TabsTrigger> */}
                <TabsTrigger
                  value="maintenance"
                  className="w-full sm:w-auto px-4 py-2 text-sm font-medium text-gray-700 rounded-md sm:border-b-2 sm:border-transparent hover:text-jdgreen focus:outline-none focus:ring-2 focus:ring-jdgreen focus:ring-opacity-50"
                >
                  Ανταλλακτικά Συντήρησης
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="lawn-garden">
              <LawnGardenParts />
            </TabsContent>

            <TabsContent value="agriculture">
              <AgricultureParts />
            </TabsContent>

            {/* <TabsContent value="construction">
              <ConstructionParts />
            </TabsContent> */}

            <TabsContent value="commercial-mowing">
              <CommercialMowingParts />
            </TabsContent>

            <TabsContent value="golf-sports-turf">
              <GolfAndSportsTurfParts />
            </TabsContent>

            <TabsContent value="engine">
              <EngineParts />
            </TabsContent>

            {/* <TabsContent value="remanufactured">
              <RemanufacturedParts/>
            </TabsContent> */}

            <TabsContent value="maintenance">
              <MaintenanceParts />
            </TabsContent>
          </Tabs>

          <div className="mt-16 text-center">
            <Button
              onClick={handleRequestQuote}
              className="bg-jdgreen hover:bg-jdgreen-light"
            >
              Στείλτε μας Αίτημα για Προσφορά
            </Button>
          </div>
        </div>
      </div>

      {/* Conditional rendering of the Request Quote Form */}
      {openRequestForm && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 max-w-lg w-full">
            <h2 className="text-2xl font-bold text-charcoal-dark mb-4 mt-8">
              Αίτημα Προσφοράς
            </h2>
            <RequestQuoteButton />{" "}
            {/* Display the RequestQuoteButton component inside the modal */}
            <Button
              className="bg-jdyellow hover:bg-jdyellow-dark mt-4"
              onClick={() => setOpenRequestForm(false)}
            >
              Κλείσιμο
            </Button>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default PartsPage;
