import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Button } from "../components/ui/button";

// Components ανά κατηγορία
import GeneralParts from "../components/partsCategories/GeneralParts";
import EngineParts from "../components/partsCategories/EngineParts";
import TransmissionParts from "../components/partsCategories/TransmissionParts";
import DifferentialParts from "../components/partsCategories/DifferentialParts";
import FilterParts from "../components/partsCategories/FilterParts";
import ClutchParts from "../components/partsCategories/ClutchParts";
import HydraulicParts from "../components/partsCategories/HydraulicParts";
import BrakeParts from "../components/partsCategories/BrakeParts";
import ElectricalParts from "../components/partsCategories/ElectricalParts";
import CabinFrameParts from "../components/partsCategories/CabinFrameParts";

// Mapping κατηγοριών -> Component
const categoryComponents = {
  γενικα: <GeneralParts />,
  κινητηρας: <EngineParts />,
  σασμαν: <TransmissionParts />,
  διαφορικο: <DifferentialParts />,
  φιλτρα: <FilterParts />,
  συμπλεκτης: <ClutchParts />,
  υδραυλικο: <HydraulicParts />,
  φρενα: <BrakeParts />,
  ηλεκτρολογικο: <ElectricalParts />,
  καμπινα: <CabinFrameParts />,
};

const PartsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("γενικα");

  return (
    <Layout>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          {/* Τίτλος */}
          <h1 className="text-4xl font-extrabold text-charcoal-dark mb-4 tracking-tight">
            Ανταλλακτικά για Γεωργικά Μηχανήματα
          </h1>
          <div className="w-20 h-1 bg-jdyellow mx-auto mb-6 rounded" />

          {/* Περιγραφή */}
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Περιηγηθείτε εύκολα σε επιλεγμένες κατηγορίες ανταλλακτικών. Δείτε
            φωτογραφίες, χαρακτηριστικά και πρακτικές πληροφορίες για να
            επιλέξετε αυτό που σας ταιριάζει. Αν δεν είστε σίγουροι, ξεκινήστε
            από την επιλογή <strong>Γενικά</strong>.
          </p>

          {/* Επιλογή Κατηγορίας */}
          <div className="bg-gray-50 shadow-inner border border-gray-200 rounded-xl p-6 max-w-xl mx-auto mb-12">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 text-left">
              Επιλέξτε κατηγορία ανταλλακτικών:
            </h3>
            <Select onValueChange={setSelectedCategory} defaultValue="γενικα">
              <SelectTrigger className="w-full bg-white border-gray-300 shadow-sm hover:shadow-md transition focus:ring-jdgreen focus:border-jdgreen rounded-md text-left">
                <SelectValue placeholder="Κατηγορία ανταλλακτικών" />
              </SelectTrigger>
              <SelectContent className="z-50">
                <SelectItem value="γενικα">Γενικά</SelectItem>
                <SelectItem value="κινητηρας">Κινητήρας</SelectItem>
                <SelectItem value="σασμαν">Σασμάν</SelectItem>
                <SelectItem value="διαφορικο">Διαφορικό</SelectItem>
                <SelectItem value="φιλτρα">Φίλτρα</SelectItem>
                <SelectItem value="συμπλεκτης">Συμπλέκτης</SelectItem>
                <SelectItem value="φρενα">Φρένα</SelectItem>
                <SelectItem value="υδραυλικο">Υδραυλικό</SelectItem>
                <SelectItem value="ηλεκτρολογικο">
                  Ηλεκτρολογικό Υλικό
                </SelectItem>
                <SelectItem value="καμπινα">Καμπίνα - Πλαίσιο</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Εμφάνιση Επιλεγμένου Component */}
          <div className="mt-12">
            {categoryComponents[selectedCategory] || <GeneralParts />}
          </div>

          <Button
            asChild
            className="bg-jdgreen hover:bg-jdgreen-light text-white px-6 rounded-full shadow-md text-base font-medium"
          >
            <Link to="/contact">Επικοινωνήστε μαζί μας</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default PartsPage;
