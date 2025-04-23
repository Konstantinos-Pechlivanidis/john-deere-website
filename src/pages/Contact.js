import Layout from "../components/layout/Layout";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import ContactSection from "../components/home/ContactSection";

const Contact = () => {
  return (
    <Layout>
      <div className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4 text-charcoal-dark">Επικοινωνήστε Μαζί Μας</h1>
            <div className="w-24 h-1 bg-jdyellow mx-auto mb-8"></div>
            <p className="text-lg text-gray-600">
              Έχετε ερωτήσεις για τα προϊόντα ή τις υπηρεσίες μας; Η ομάδα μας είναι εδώ για να σας βοηθήσει και να βρει την καλύτερη λύση για εσάς.
            </p>
          </div>
        </div>
      </div>
      
      {/* Contact Section with a clean layout */}
      <ContactSection />
      
      {/* Google Map with location */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.178923578502!2d22.91864827549504!3d40.64798614153284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a8399a5c325edd%3A0xd96ea9fb3b707b4a!2sPsoma%2C%20I.%2C%20%26%20K.%20O.E.!5e0!3m2!1sen!2sgr!4v1745445074056!5m2!1sen!2sgr" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Εταιρική Τοποθεσία"
            ></iframe>
          </div>
        </div>
      </div>
      
      {/* Call to Action for contacting the company */}
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-charcoal-dark">Μην Διστάσετε να Επικοινωνήσετε</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Αν χρειάζεστε βοήθεια ή έχετε οποιαδήποτε ερώτηση για τα μηχανήματα ή τα ανταλλακτικά μας, επικοινωνήστε μαζί μας και το έμπειρο προσωπικό μας θα σας εξυπηρετήσει άμεσα.
          </p>
          <Button asChild className="bg-jdgreen hover:bg-jdgreen-light text-white px-8 py-3 rounded-lg">
            <Link to="/contact">Στείλτε μας Μήνυμα</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
