import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";

const AgricultureParts = () => {
  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-charcoal-dark mb-4">
          Ανταλλακτικά για Γεωργικά Μηχανήματα
        </h2>
        <p className="text-gray-600 mb-4">
          Ανακαλύψτε τα αυθεντικά ανταλλακτικά για τα γεωργικά σας μηχανήματα.
          Είτε πρόκειται για τρακτέρ, θεριστικά ή άλλα γεωργικά εργαλεία, έχουμε
          ότι χρειάζεστε για να διασφαλίσετε τη μέγιστη απόδοση και τη
          μακροχρόνια λειτουργία τους.
        </p>
      </div>
      <div className="container mx-auto px-4">
        <Tabs defaultValue="tractors-cultivators">
          {/* Tabs for navigation */}
          <div className="flex flex-col sm:flex-row sm:flex-nowrap overflow-x-auto sm:overflow-visible space-x-4 mb-8 justify-center items-center">
            <TabsList className="flex flex-col sm:flex-row w-full sm:w-auto sm:flex-nowrap space-x-0 sm:space-x-4 sm:mb-8 sm:space-y-0 h-auto overflow-y-auto">
              <TabsTrigger
                value="tractors-cultivators"
                className="w-full sm:w-auto px-4 py-2 text-sm font-medium text-gray-700 rounded-md sm:border-b-2 sm:border-transparent hover:text-jdgreen focus:outline-none focus:ring-2 focus:ring-jdgreen focus:ring-opacity-50"
              >
                Τρακτέρ & Καλλιεργητικά
              </TabsTrigger>
              <TabsTrigger
                value="harvesters"
                className="w-full sm:w-auto px-4 py-2 text-sm font-medium text-gray-700 rounded-md sm:border-b-2 sm:border-transparent hover:text-jdgreen focus:outline-none focus:ring-2 focus:ring-jdgreen focus:ring-opacity-50"
              >
                Θεριστικά
              </TabsTrigger>
              <TabsTrigger
                value="mowing-machines"
                className="w-full sm:w-auto px-4 py-2 text-sm font-medium text-gray-700 rounded-md sm:border-b-2 sm:border-transparent hover:text-jdgreen focus:outline-none focus:ring-2 focus:ring-jdgreen focus:ring-opacity-50"
              >
                Μηχανήματα Σποράς
              </TabsTrigger>
              <TabsTrigger
                value="hydraulic-systems"
                className="w-full sm:w-auto px-4 py-2 text-sm font-medium text-gray-700 rounded-md sm:border-b-2 sm:border-transparent hover:text-jdgreen focus:outline-none focus:ring-2 focus:ring-jdgreen focus:ring-opacity-50"
              >
                Υδραυλικά Συστήματα
              </TabsTrigger>
              <TabsTrigger
                value="wheels-sweepers"
                className="w-full sm:w-auto px-4 py-2 text-sm font-medium text-gray-700 rounded-md sm:border-b-2 sm:border-transparent hover:text-jdgreen focus:outline-none focus:ring-2 focus:ring-jdgreen focus:ring-opacity-50"
              >
                Τροχοί & Σαρώθρα
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Tractors & Cultivators Content */}
          <TabsContent value="tractors-cultivators">
            <div className="text-gray-600">
              <h3 className="text-xl font-semibold text-charcoal-dark mb-4">
                Τρακτέρ και Καλλιεργητικά
              </h3>
              <p className="mb-4">
                Ανταλλακτικά για τρακτέρ και καλλιεργητικά εργαλεία που
                διασφαλίζουν την καλή λειτουργία και απόδοση των μηχανημάτων
                σας. Είτε πρόκειται για αλλαγή ανταλλακτικών, είτε για
                συντήρηση, έχουμε ότι χρειάζεστε.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Ανταλλακτικά για τρακτέρ: εξασφαλίστε την πλήρη
                  λειτουργικότητα και αποδοτικότητα του μηχανήματος.
                </li>
                <li>
                  Ανταλλακτικά για καλλιεργητικά εργαλεία: από συντηρητικά μέχρι
                  νέα εξαρτήματα για μέγιστη αποδοτικότητα.
                </li>
              </ul>
            </div>
          </TabsContent>

          {/* Harvesters Content */}
          <TabsContent value="harvesters">
            <div className="text-gray-600">
              <h3 className="text-xl font-semibold text-charcoal-dark mb-4">
                Θεριστικά
              </h3>
              <p className="mb-4">
                Εξειδικευμένα ανταλλακτικά για θεριστικά μηχανήματα, για
                βελτιωμένη ποιότητα και αυξημένη αποδοτικότητα στον θερισμό των
                καλλιεργειών.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Ανταλλακτικά για θεριστικά: βελτίωση της ποιότητας του
                  θερισμού.
                </li>
                <li>
                  Συμπληρωματικά εξαρτήματα για μεγαλύτερη απόδοση και
                  αξιοπιστία κατά τη διάρκεια της θεριστικής περιόδου.
                </li>
              </ul>
            </div>
          </TabsContent>

          {/* Sowing Machines Content */}
          <TabsContent value="mowing-machines">
            <div className="text-gray-600">
              <h3 className="text-xl font-semibold text-charcoal-dark mb-4">
                Μηχανήματα Σποράς
              </h3>
              <p className="mb-4">
                Ανταλλακτικά για μηχανήματα σποράς για ακριβή και αποτελεσματική
                σπορά, βοηθώντας να αυξήσετε την παραγωγή και την αποδοτικότητα.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Ανταλλακτικά για μηχανήματα σποράς: ακριβής και αποτελεσματική
                  σπορά.
                </li>
                <li>
                  Εξαρτήματα που βελτιώνουν τη διανομή του σπόρου για
                  μεγιστοποίηση της παραγωγής.
                </li>
              </ul>
            </div>
          </TabsContent>

          {/* Hydraulic Systems Content */}
          <TabsContent value="hydraulic-systems">
            <div className="text-gray-600">
              <h3 className="text-xl font-semibold text-charcoal-dark mb-4">
                Υδραυλικά και Μηχανικά Συστήματα
              </h3>
              <p className="mb-4">
                Ανταλλακτικά για υδραυλικά και μηχανικά συστήματα για βελτιωμένη
                απόδοση και μεγαλύτερη διάρκεια ζωής των μηχανημάτων σας.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Ανταλλακτικά υδραυλικών συστημάτων για μέγιστη απόδοση και
                  αξιοπιστία.
                </li>
                <li>
                  Μηχανικά μέρη που διασφαλίζουν την άριστη λειτουργία του
                  εξοπλισμού σας.
                </li>
              </ul>
            </div>
          </TabsContent>

          {/* Wheels and Sweepers Content */}
          <TabsContent value="wheels-sweepers">
            <div className="text-gray-600">
              <h3 className="text-xl font-semibold text-charcoal-dark mb-4">
                Τροχοί και Σαρώθρα
              </h3>
              <p className="mb-4">
                Ανταλλακτικά για τροχούς και σαρώθρα, για βελτίωση της
                λειτουργίας του μηχανήματος και την αποδοτική εφαρμογή του στις
                καλλιέργειες.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Ανταλλακτικά για τροχούς για αυξημένη σταθερότητα και απόδοση.
                </li>
                <li>
                  Εξαρτήματα σαρώθρων για αποτελεσματική εφαρμογή και βελτιωμένη
                  σπορά.
                </li>
              </ul>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default AgricultureParts;
