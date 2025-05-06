import { useState } from "react";
import { Button } from "../components/ui/button";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "../components/ui/tabs";
import RequestQuoteButton from "../components/home/RequestQuoteButton";
import LawnCareAndUtilityParts from "../components/machinery/LawnCareAndUtilityParts";
import TractorsParts from "../components/machinery/TractorsParts";
import ProductionSystemsAndTechnologyParts from "../components/machinery/ProductionSystemsAndTechnologyParts";
import Layout from "../components/layout/Layout";

const MachineryPage = () => {
  const [openRequestForm, setOpenRequestForm] = useState(false); // Κατάσταση για το Modal του αιτήματος προσφοράς

  const handleRequestQuote = () => {
    setOpenRequestForm(true); // Άνοιγμα του modal για το αίτημα προσφοράς
  };

  return (
    <Layout>
      <div className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-charcoal-dark mb-4">
            Εξοπλισμός John Deere
          </h1>
          <div className="w-24 h-1 bg-jdyellow mx-auto mb-8"></div>
          <p className="text-base sm:text-lg text-gray-600 mb-8">
            Ανακαλύψτε τον αυθεντικό εξοπλισμό John Deere που διαθέτουμε και
            προμηθευόμαστε για τις ανάγκες σας στον τομέα της γεωργίας και της
            κατασκευής.
          </p>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="tractors">
            <div className="flex flex-col sm:flex-row sm:flex-nowrap overflow-x-auto sm:overflow-visible space-x-4 mb-8 justify-center items-center">
              <TabsList className="flex flex-col sm:flex-row w-full sm:w-auto sm:flex-nowrap space-x-0 sm:space-x-4 sm:mb-8 sm:space-y-0 h-auto overflow-y-auto">
                <TabsTrigger
                  value="lawn-care-utility"
                  className="w-full sm:w-auto px-4 py-2 text-sm font-medium text-gray-700 rounded-md sm:border-b-2 sm:border-transparent hover:text-jdgreen focus:outline-none focus:ring-2 focus:ring-jdgreen focus:ring-opacity-50"
                >
                  Φροντίδα Χλοοτάπητα - Οχήματα
                </TabsTrigger>
                <TabsTrigger
                  value="tractors"
                  className="w-full sm:w-auto px-4 py-2 text-sm font-medium text-gray-700 rounded-md sm:border-b-2 sm:border-transparent hover:text-jdgreen focus:outline-none focus:ring-2 focus:ring-jdgreen focus:ring-opacity-50"
                >
                  Τρακτέρ
                </TabsTrigger>
                <TabsTrigger
                  value="production-systems"
                  className="w-full sm:w-auto px-4 py-2 text-sm font-medium text-gray-700 rounded-md sm:border-b-2 sm:border-transparent hover:text-jdgreen focus:outline-none focus:ring-2 focus:ring-jdgreen focus:ring-opacity-50"
                >
                  Συστήματα Παραγωγής & Τεχνολογία
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="lawn-care-utility">
              <LawnCareAndUtilityParts />
            </TabsContent>

            <TabsContent value="tractors">
              <TractorsParts />
            </TabsContent>

            <TabsContent value="production-systems">
              <ProductionSystemsAndTechnologyParts />
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

      {/* Εμφάνιση Modal για Αίτημα Προσφοράς */}
      {openRequestForm && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 max-w-lg w-full">
            <h2 className="text-2xl font-bold text-charcoal-dark mb-4 mt-8">
              Αίτημα Προσφοράς
            </h2>
            <RequestQuoteButton />
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

export default MachineryPage;
