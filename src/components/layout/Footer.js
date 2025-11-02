import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";
import SocialMediaLinks from "../ui/social-media-links";

const Footer = () => {
  const { t } = useTranslation(['layout', 'common']);
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
                alt="Logo"
                className="h-8 w-auto"
              />
              <h3 className="text-xl font-bold text-jdyellow">Ι. & Κ. ΨΩΜΑ Ο.Ε.</h3>
            </div>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              {t('footer.company_description') || 'Εισαγωγέας και διανομέας ανταλλακτικών γεωργικών μηχανημάτων στην Ελλάδα από το 1980. Προσφέρουμε συμβατά ανταλλακτικά για τρακτέρ, στρίπερ, θεριζοαλωνιστικές και βαμβακομηχανές με πανελλαδική αποστολή και τεχνική υποστήριξη.'}
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

            {/* Social Media Links */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-white mb-3">{t('common:follow_us')}</h4>
              <SocialMediaLinks variant="footer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">{t('footer.quick_links') || 'Γρήγοροι Σύνδεσμοι'}</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-jdyellow text-gray-300">{t('navigation.home') || 'Αρχική'}</Link></li>
              <li><Link to="/about" className="hover:text-jdyellow text-gray-300">{t('navigation.about') || 'Σχετικά με Εμάς'}</Link></li>
              <li><Link to="/parts" className="hover:text-jdyellow text-gray-300">{t('navigation.parts') || 'Ανταλλακτικά'}</Link></li>
              <li><Link to="/services" className="hover:text-jdyellow text-gray-300">{t('navigation.services') || 'Υπηρεσίες'}</Link></li>
              <li><Link to="/contact" className="hover:text-jdyellow text-gray-300">{t('navigation.contact') || 'Επικοινωνία'}</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">{t('footer.categories') || 'Κατηγορίες'}</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/parts" className="hover:text-jdyellow text-gray-300">{t('footer.engine') || 'Κινητήρας'}</Link></li>
              <li><Link to="/parts" className="hover:text-jdyellow text-gray-300">{t('footer.hydraulic') || 'Υδραυλικά'}</Link></li>
              <li><Link to="/parts" className="hover:text-jdyellow text-gray-300">{t('footer.electrical') || 'Ηλεκτρικά'}</Link></li>
              <li><Link to="/parts" className="hover:text-jdyellow text-gray-300">{t('footer.cabin_frame') || 'Καμπίνα / Πλαίσιο'}</Link></li>
              <li><Link to="/parts" className="hover:text-jdyellow text-gray-300">{t('footer.brake_clutch') || 'Φρένα & Σασμάν'}</Link></li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">{t('footer.operating_hours') || 'Ώρες Λειτουργίας'}</h4>
            <ul className="text-sm text-gray-300 space-y-2">
              <li className="flex justify-between">
                <span>{t('footer.monday_friday') || 'Δευτέρα - Παρασκευή:'}</span> <span className="text-white">{t('footer.hours_weekdays') || '09:00 - 17:00'}</span>
              </li>
              <li className="flex justify-between">
                <span>{t('footer.saturday') || 'Σάββατο:'}</span> <span className="text-white">{t('footer.hours_saturday') || '09:00 - 14:00'}</span>
              </li>
              <li className="flex justify-between">
                <span>{t('footer.sunday') || 'Κυριακή:'}</span> <span className="text-white">{t('footer.closed') || 'Κλειστά'}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 mt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p>© {currentYear} Ι. & Κ. ΨΩΜΑ Ο.Ε. — {t('footer.all_rights_reserved') || 'Όλα τα δικαιώματα διατηρούνται'}.</p>
              <p className="mt-1">
                {t('footer.business_description') || 'Εισαγωγέας Γεωργικών Ανταλλακτικών'}
              </p>
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/terms" className="hover:text-jdyellow text-gray-400 transition-colors">
                {t('footer.terms_of_use') || 'Όροι Χρήσης'}
              </Link>
              <Link to="/privacy" className="hover:text-jdyellow text-gray-400 transition-colors">
                {t('footer.privacy_policy') || 'Πολιτική Απορρήτου'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
