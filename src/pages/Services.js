import Layout from "../components/layout/Layout";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { Wrench, Truck, Package, Globe } from "lucide-react";


const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-jdgreen">
      <div className="text-jdgreen mb-4">
        {icon}
      </div>
      <h3 className="font-bold text-xl mb-2 text-charcoal-dark">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      {/* <Button variant="outline" className="border-jdgreen text-jdgreen hover:bg-jdgreen hover:text-white">
        Learn More
      </Button> */}
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Globe className="h-10 w-10" />,
      title: "Διεθνής Προμήθεια",
      description: "Αξιοποιούμε το παγκόσμιο δίκτυό μας για να προμηθευτούμε αυθεντικά μηχανήματα και ανταλλακτικά John Deere απευθείας από αξιόπιστους προμηθευτές σε όλο τον κόσμο."
    },
    {
      icon: <Truck className="h-10 w-10" />,
      title: "Λογιστική Διαχείριση & Παράδοση",
      description: "Η έμπειρη ομάδα μας εξασφαλίζει ομαλές διαδικασίες εισαγωγής και έγκαιρη παράδοση στον προορισμό σας, σε οποιοδήποτε σημείο της Ελλάδας."
    },
    {
      icon: <Wrench className="h-10 w-10" />,
      title: "Τεχνική Υποστήριξη",
      description: "Οι τεχνικοί μας παρέχουν εξειδικευμένη καθοδήγηση για την επιλογή των κατάλληλων μηχανημάτων και ανταλλακτικών που ανταποκρίνονται στις γεωργικές σας ανάγκες."
    },
    {
      icon: <Package className="h-10 w-10" />,
      title: "Προμήθεια Ανταλλακτικών",
      description: "Μπορούμε να προμηθευτούμε σπάνια και εξειδικευμένα ανταλλακτικά John Deere που δεν είναι διαθέσιμα άμεσα στην ελληνική αγορά μέσω του δικτύου προμηθευτών μας."
    }
  ];

  return (
    <Layout>
      <div className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4 text-charcoal-dark">Οι Υπηρεσίες Μας</h1>
            <div className="w-24 h-1 bg-jdyellow mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 mb-4">
              Παρέχουμε ολοκληρωμένες υπηρεσίες για να υποστηρίξουμε τις γεωργικές σας δραστηριότητες.
              Από την προμήθεια έως την παράδοση, είμαστε ο αξιόπιστος συνεργάτης σας σε κάθε βήμα.
            </p>
          </div>
        </div>
      </div>
      
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold mb-4 text-charcoal-dark">Εξατομικευμένες Λύσεις</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Κάθε γεωργική επιχείρηση έχει μοναδικές ανάγκες. Συνεργαζόμαστε στενά με τους πελάτες μας
              για να αναπτύξουμε λύσεις που να ανταποκρίνονται στις ιδιαίτερες προκλήσεις τους και να βελτιώσουν την αποδοτικότητά τους.
            </p>
            
            <Button asChild className="bg-jdgreen hover:bg-jdgreen-light">
              <Link to="/contact">Επικοινωνήστε Μαζί Μας για Εξατομικευμένες Λύσεις</Link>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-charcoal-dark">Γιατί να Επιλέξετε τις Υπηρεσίες Μας</h2>
              <div className="w-20 h-1 bg-jdyellow mb-6"></div>
              
              <ul className="space-y-4">
                <li className="flex">
                  <div className="mr-3 bg-jdgreen text-white rounded-full p-1 flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-charcoal-dark">Αυθεντικά Προϊόντα</h3>
                    <p className="text-gray-600">Εγγυόμαστε ότι όλα τα μηχανήματα και τα ανταλλακτικά που προμηθευόμαστε είναι αυθεντικά προϊόντα John Deere.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-3 bg-jdgreen text-white rounded-full p-1 flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-charcoal-dark">Εξειδικευμένη Γνώση</h3>
                    <p className="text-gray-600">Η ομάδα μας διαθέτει εκτενή τεχνική γνώση για τα προϊόντα John Deere και τις γεωργικές δραστηριότητες.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-3 bg-jdgreen text-white rounded-full p-1 flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-charcoal-dark">Αξιόπιστη Παράδοση</h3>
                    <p className="text-gray-600">Η εμπειρία μας στη λογιστική εξασφαλίζει έγκαιρη παράδοση των παραγγελιών σας σε όλη την Ελλάδα.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-3 bg-jdgreen text-white rounded-full p-1 flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-charcoal-dark">Ανταγωνιστικές Τιμές</h3>
                    <p className="text-gray-600">Οι άμεσες σχέσεις με τους προμηθευτές μας επιτρέπουν να προσφέρουμε ποιοτικά προϊόντα σε ανταγωνιστικές τιμές.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="/images/img11.jpg" 
                  alt="Agricultural machinery" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="hidden md:block absolute -bottom-6 -left-6 w-40 h-40 bg-jdyellow rounded-lg shadow-lg -z-10"></div>
              <div className="hidden md:block absolute -top-6 -right-6 w-24 h-24 bg-jdgreen rounded-lg shadow-lg -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Services;
