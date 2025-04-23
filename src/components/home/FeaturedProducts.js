import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import ProductCard from "../products/ProductCard";

// Sample data with updated descriptions for "Trending" and "Available on Request"
const trendingMachinery = [
  {
    id: "m1",
    name: "Τρακτέρ John Deere 6330",
    category: "Τρακτέρ",
    image: "/images/JD_6330.jpg", 
    description: "Autoquard TLS (Αναρτηση Μπροστινου αξονα) Common Rail, Ετος κατασκευης 2009 (καινουριο), 2300 Ωρες, 113 HP",
    featured: true,
  },
  {
    id: "m2",
    name: "Τρακτέρ John Deere 6420",
    category: "Τρακτέρ",
    image: "/images/JD_6420.jpg", 
    description: "TLS (Αναρτηση μπροστινου αξονα) Command Arm Autopower, Ετος κατασκευης 2002, 120 HP, Αεροφρενα",
    featured: true,
  },
];

const availableOnRequestParts = [
  {
    id: "p1",
    name: "Ανταλλακτικά Μηχανής",
    category: "Ανταλλακτικά",
    image: "/images/img7.jpg", 
    description: "Αυθεντικά ανταλλακτικά John Deere για άψογη λειτουργία και μακροχρόνια χρήση.",
    featured: true,
  },
  {
    id: "p2",
    name: "Ανταλλακτικά Υδραυλικού Συστήματος",
    category: "Ανταλλακτικά",
    image: "/images/img8.jpg", 
    description: "Ανταλλακτικά για μέγιστη απόδοση και αξιοπιστία στο υδραυλικό σύστημα των μηχανημάτων.",
    featured: false,
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3 text-charcoal-dark">Δημοφιλή Προϊόντα</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ανακαλύψτε τα πιο δημοφιλή μηχανήματα και ανταλλακτικά John Deere για τον τρέχοντα μήνα και τη δυνατότητα να παραγγείλετε ό,τι χρειάζεστε.
          </p>
        </div>

        <Tabs defaultValue="machinery" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-gray-200">
              <TabsTrigger
                value="machinery"
                className="data-[state=active]:bg-jdgreen data-[state=active]:text-white"
              >
                Μηχανήματα
              </TabsTrigger>
              <TabsTrigger
                value="parts"
                className="data-[state=active]:bg-jdgreen data-[state=active]:text-white"
              >
                Ανταλλακτικά
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="machinery">
            {/* Κάρτες στο κέντρο και responsive */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 justify-center">
              {trendingMachinery.map((machine) => (
                <ProductCard key={machine.id} {...machine} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="parts">
            {/* Κάρτες στο κέντρο και responsive */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 justify-center">
              {availableOnRequestParts.map((part) => (
                <ProductCard key={part.id} {...part} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default FeaturedProducts;
