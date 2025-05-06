import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Tractor } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-charcoal text-white pt-12 pb-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Tractor className="h-6 w-6 text-jdyellow mr-2" />
              <h3 className="font-bold text-xl">
                <span className="text-jdyellow">Ι&Κ ΨΩΜΑ</span>
                {/* <span className="text-jdyellow">Ελλάδα</span> */}
              </h3>
            </div>
            <p className="text-gray-300 mb-4">
              Ο αξιόπιστος συνεργάτης σας για υψηλής ποιότητας γεωργικά μηχανήματα και ανταλλακτικά John Deere στην Ελλάδα.
            </p>
            <div className="space-y-2">
            <div className="flex flex-col items-start">
                <Phone className="h-5 w-5 text-jdyellow mr-2" />
                <p className="text-gray-300">+30 2310 512239</p>
                <p className="text-gray-300">+30 2310 552678</p>
                <p className="text-gray-300">+30 6948506485</p>
                <p className="text-gray-300">+30 6948506486</p>
              </div>
              <div className="flex items-start">
                <MapPin className="h-7 w-7 text-jdyellow mr-2 mt-0.5" />
                <p className="text-gray-300">Μοναστηρίου 92, Θεσσαλονίκη, Ελλάδα</p>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-jdyellow mr-2" />
                <p className="text-gray-300">info@psomasst.gr</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Γρήγοροι Σύνδεσμοι</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-jdyellow transition-colors">
                  Αρχική
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-jdyellow transition-colors">
                  Σχετικά με Εμάς
                </Link>
              </li>
              <li>
                <Link to="/parts" className="text-gray-300 hover:text-jdyellow transition-colors">
                  Ανταλλακτικά
                </Link>
              </li>
              <li>
                <Link to="/machinery" className="text-gray-300 hover:text-jdyellow transition-colors">
                  Μηχανήματα
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-jdyellow transition-colors">
                  Υπηρεσίες
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-jdyellow transition-colors">
                  Επικοινωνία
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Προϊόντα</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/machinery" className="text-gray-300 hover:text-jdyellow transition-colors">
                  Τρακτέρ
                </Link>
              </li>
              <li>
                <Link to="/machinery" className="text-gray-300 hover:text-jdyellow transition-colors">
                  Θεριστικά
                </Link>
              </li>
              <li>
                <Link to="/machinery" className="text-gray-300 hover:text-jdyellow transition-colors">
                  Ψεκαστικά
                </Link>
              </li>
              <li>
                <Link to="/parts" className="text-gray-300 hover:text-jdyellow transition-colors">
                  Ανταλλακτικά Κινητήρα
                </Link>
              </li>
              <li>
                <Link to="/parts" className="text-gray-300 hover:text-jdyellow transition-colors">
                  Υδραυλικά Συστήματα
                </Link>
              </li>
              <li>
                <Link to="/parts" className="text-gray-300 hover:text-jdyellow transition-colors">
                  Ηλεκτρονικά & Ελέγχοι
                </Link>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Ώρες Λειτουργίας</h4>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-gray-300">Δευτέρα - Παρασκευή:</span>
                <span className="text-white">9:00 ΠΜ - 17:00 ΜΜ</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-300">Σάββατο:</span>
                <span className="text-white">9:00 ΠΜ - 14:00 ΜΜ</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-300">Κυριακή:</span>
                <span className="text-white">Κλειστά</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 mt-8 border-t border-gray-700 text-center text-gray-400 text-sm px-4">
          <p>© {currentYear} Ι&Κ ΨΩΜΑ. All rights reserved.</p>
          <p className="mt-2">
            Εισαγωγέας Γεωργικών Μηχανημάτων & Ανταλλακτικών John Deere στην Ελλάδα
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
