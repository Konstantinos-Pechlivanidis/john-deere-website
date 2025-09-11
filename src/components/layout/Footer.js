import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4 space-x-2">
              <img
                src="/images/logos/tractorLogo.png"
                alt="Λογότυπο"
                className="h-8 w-auto"
              />
              <h3 className="text-xl font-bold text-jdyellow">Ι. & Κ. ΨΩΜΑ</h3>
            </div>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              Ο αξιόπιστος συνεργάτης σας για αυθεντικά ανταλλακτικά και γεωργικά μηχανήματα John Deere στην Ελλάδα.
            </p>

            <div className="space-y-3 text-sm text-gray-300">
              <div>
                <Phone className="inline-block h-4 w-4 text-jdyellow mr-2" />
                +30 2310 512239 / +30 2310 552678
              </div>
              <div>
                <Phone className="inline-block h-4 w-4 text-jdyellow mr-2" />
                +30 6948506485 / +30 6948506486
              </div>
              <div>
                <MapPin className="inline-block h-4 w-4 text-jdyellow mr-2" />
                Μοναστηρίου 92, Θεσσαλονίκη
              </div>
              <div>
                <Mail className="inline-block h-4 w-4 text-jdyellow mr-2" />
                info@psomasst.gr
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Γρήγοροι Σύνδεσμοι</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-jdyellow text-gray-300">Αρχική</Link></li>
              <li><Link to="/about" className="hover:text-jdyellow text-gray-300">Σχετικά με Εμάς</Link></li>
              <li><Link to="/parts" className="hover:text-jdyellow text-gray-300">Ανταλλακτικά</Link></li>
              <li><Link to="/services" className="hover:text-jdyellow text-gray-300">Υπηρεσίες</Link></li>
              <li><Link to="/contact" className="hover:text-jdyellow text-gray-300">Επικοινωνία</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Κατηγορίες</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/parts" className="hover:text-jdyellow text-gray-300">Κινητήρας</Link></li>
              <li><Link to="/parts" className="hover:text-jdyellow text-gray-300">Υδραυλικά</Link></li>
              <li><Link to="/parts" className="hover:text-jdyellow text-gray-300">Ηλεκτρικά</Link></li>
              <li><Link to="/parts" className="hover:text-jdyellow text-gray-300">Καμπίνα / Πλαίσιο</Link></li>
              <li><Link to="/parts" className="hover:text-jdyellow text-gray-300">Φρένα & Σασμάν</Link></li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Ώρες Λειτουργίας</h4>
            <ul className="text-sm text-gray-300 space-y-2">
              <li className="flex justify-between">
                <span>Δευτέρα - Παρασκευή:</span> <span className="text-white">09:00 - 17:00</span>
              </li>
              <li className="flex justify-between">
                <span>Σάββατο:</span> <span className="text-white">09:00 - 14:00</span>
              </li>
              <li className="flex justify-between">
                <span>Κυριακή:</span> <span className="text-white">Κλειστά</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 mt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>© {currentYear} Ι. & Κ. ΨΩΜΑ — All rights reserved.</p>
          <p className="mt-1">
            Εισαγωγέας Γεωργικών Ανταλλακτικών
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
