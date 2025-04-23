import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const AboutPreview = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold mb-4 text-charcoal-dark">Ο Αξιόπιστος Συνεργάτης σας στη Γεωργική Μηχανολογία</h2>
            <div className="w-20 h-1 bg-jdyellow mb-6"></div>
            
            <p className="text-gray-600 mb-4">
              Για πάνω από 35 χρόνια, συνδέουμε τις ελληνικές γεωργικές επιχειρήσεις με 
              υψηλής ποιότητας μηχανήματα και ανταλλακτικά John Deere μέσω του εκτεταμένου διεθνούς δικτύου μας.
            </p>
            
            <p className="text-gray-600 mb-6">
              Η εξειδίκευσή μας στη διαχείριση εισαγωγών και η βαθιά κατανόηση της διεθνούς αγοράς και των τοπικών αναγκών της ελληνικής γεωργίας μας επιτρέπει να προσφέρουμε αξιόπιστες λύσεις που ενισχύουν την παραγωγικότητα και την απόδοση των αγροτικών εκμεταλλεύσεων σε όλη την Ελλάδα.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
              <div className="bg-white p-4 rounded shadow-sm">
                <div className="text-jdgreen font-bold text-2xl">500+</div>
                <div className="text-gray-600 text-sm">Πελάτες σε όλη την Ελλάδα & Εξωτερικό</div>
              </div>
              <div className="bg-white p-4 rounded shadow-sm">
                <div className="text-jdgreen font-bold text-2xl">35+</div>
                <div className="text-gray-600 text-sm">Χρόνια Εμπειρίας</div>
              </div>
              <div className="bg-white p-4 rounded shadow-sm">
                <div className="text-jdgreen font-bold text-2xl">20+</div>
                <div className="text-gray-600 text-sm">Διεθνείς Προμηθευτές</div>
              </div>
              <div className="bg-white p-4 rounded shadow-sm">
                <div className="text-jdgreen font-bold text-2xl">1000+</div>
                <div className="text-gray-600 text-sm">Διαθέσιμα Προϊόντα</div>
              </div>
            </div>
            
            <Button asChild className="bg-jdgreen hover:bg-jdgreen-light">
              <Link to="/about">Μάθετε Περισσότερα για Εμάς</Link>
            </Button>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/images/img7.jpg" 
                alt="Η ομάδα μας" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden md:block absolute -bottom-6 -left-6 w-40 h-40 bg-jdyellow rounded-lg shadow-lg -z-10"></div>
            <div className="hidden md:block absolute -top-6 -right-6 w-24 h-24 bg-jdgreen rounded-lg shadow-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
