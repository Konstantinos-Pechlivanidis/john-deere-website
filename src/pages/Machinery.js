import Layout from "../components/layout/Layout";
import { useState } from "react";
import { Button } from "../components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs";
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from "../components/ui/dialog";
import ProductCard from "../components/products/ProductCard";
import RequestQuoteButton from "../components/home/RequestQuoteButton"; // Import the RequestQuoteButton component

// Sample machinery data
const machineryData = {
  tractors: [
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
      featured: false,
    },
  ],
  harvesters: [
    {
      id: "h1",
      name: "Θεριστικό Συνδυαστικό",
      category: "Θεριστικά",
      image: "/images/JD_Combine_Harvester.jpg",
      description: "Υψηλής χωρητικότητας θερισμός με προηγμένη τεχνολογία διαχωρισμού για βελτιωμένη ποιότητα σιτηρών.",
      featured: true,
    },
    {
      id: "h2",
      name: "Θεριστικό Forage",
      category: "Θεριστικά",
      image: "/images/JD_Forage_Harvester.jpg",
      description: "Αποτελεσματική συλλογή και επεξεργασία καλλιεργειών με ακρίβεια κοπής.",
      featured: false,
    },
  ],
  sprayers: [
    {
      id: "s1",
      name: "Αυτοκινούμενος Ψεκαστήρας",
      category: "Ψεκαστήρες",
      image: "/images/JD_Self_Propelled_Sprayer.jpg",
      description: "Προηγμένη τεχνολογία ψεκασμού με ακριβή έλεγχο εφαρμογής και άνετο σταθμό χειρισμού.",
      featured: false,
    },
    {
      id: "s2",
      name: "Τοποθετημένος Ψεκαστήρας",
      category: "Ψεκαστήρες",
      image: "/images/JD_Mounted_Sprayer.jpg",
      description: "Ψεκαστήρας τοποθετημένος σε τρακτέρ για αποδοτική εφαρμογή σε μικρότερα χωράφια και εξειδικευμένα καλλιεργήματα.",
      featured: false,
    },
  ],
};

const Machinery = () => {
  const [open, setOpen] = useState(false);

  const handleRequestQuote = () => {
    setOpen(true); // Show the request quote form
  };

  return (
    <Layout>
      <div className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4 text-charcoal-dark">Γεωργικά Μηχανήματα</h1>
            <div className="w-24 h-1 bg-jdyellow mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 mb-8">
              Ανακαλύψτε την ποικιλία μας από ποιοτικά μηχανήματα John Deere που εισάγονται για την ελληνική αγορά.
              Όλα τα μηχανήματά μας συνοδεύονται από εγγύηση και υπηρεσίες υποστήριξης.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="tractors" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-gray-200 mb-8">
                <TabsTrigger value="tractors" className="data-[state=active]:bg-jdgreen data-[state=active]:text-white">
                  Τρακτέρ
                </TabsTrigger>
                <TabsTrigger value="harvesters" className="data-[state=active]:bg-jdgreen data-[state=active]:text-white">
                  Θεριστικά
                </TabsTrigger>
                <TabsTrigger value="sprayers" className="data-[state=active]:bg-jdgreen data-[state=active]:text-white">
                  Ψεκαστήρες
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="tractors">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {machineryData.tractors.map((tractor) => (
                  <ProductCard key={tractor.id} {...tractor} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="harvesters">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {machineryData.harvesters.map((harvester) => (
                  <ProductCard key={harvester.id} {...harvester} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="sprayers">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {machineryData.sprayers.map((sprayer) => (
                  <ProductCard key={sprayer.id} {...sprayer} />
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-16 bg-gray-50 rounded-lg p-8 shadow-sm">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2 text-charcoal-dark">Χρειάζεστε Εξατομικευμένη Λύση;</h2>
              <p className="text-gray-600">
                Δεν βρήκατε αυτό που ψάχνετε; Μπορούμε να προμηθευτούμε συγκεκριμένα μηχανήματα John Deere ανάλογα με τις ανάγκες σας.
              </p>
            </div>

            {/* Button triggers the visibility of the Request Quote Form */}
            <div className="flex justify-center">
              <Button className="bg-jdgreen hover:bg-jdgreen-light" onClick={handleRequestQuote}>
                Στείλτε μας Αίτημα για Προσφορά
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Conditional rendering of the Request Quote Form */}
      {open && (
        <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogTitle>Αίτημα Προσφοράς</DialogTitle>
          <RequestQuoteButton /> {/* Display the RequestQuoteButton inside the dialog */}
        </DialogContent>
      </Dialog>
      )}
    </Layout>
  );
};

export default Machinery;
