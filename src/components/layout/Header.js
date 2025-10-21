import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "../ui/dialog";
import RequestQuoteButton from "../home/RequestQuoteButton";
import LanguageToggle from "../i18n/LanguageToggle";

const Header = () => {
  const { t } = useTranslation(['common', 'layout']);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [open, setOpen] = useState(false); // State to manage the dialog (pop-up)

  return (
    <>
      {/* Top contact bar */}
      <div className="bg-jdgreen text-white py-2 px-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <div className="flex items-center space-x-6 text-sm">
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-1" />
              <span>+302310512239</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-1" />
              <span>info@psomasst.gr</span>
            </div>
          </div>
          {/* <div className="flex items-center space-x-3">
            <div className="flex items-center cursor-pointer">
              <Globe className="h-4 w-4 mr-1" />
              <span className="text-sm">EL</span>
              <span className="mx-1">|</span>
              <span className="text-sm font-medium">EN</span>
            </div>
          </div> */}
        </div>
      </div>

      {/* Main navigation */}
      <header className="bg-white shadow-sm py-4 px-4 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/images/logos/tractorLogo2.png"
              alt={t('common:alt_texts.logo')}
              className="h-10 w-auto object-contain"
            />
                    <span className="text-black font-bold text-2xl">{t('common:company_name')}</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className="font-medium text-charcoal hover:text-jdgreen transition-colors"
            >
              {t('layout:navigation.home')}
            </Link>
            <Link
              to="/about"
              className="font-medium text-charcoal hover:text-jdgreen transition-colors"
            >
              {t('layout:navigation.about')}
            </Link>

            <Link
              to="/parts"
              className="font-medium text-charcoal hover:text-jdgreen transition-colors"
            >
              {t('layout:navigation.parts')}
            </Link>

            <Link
              to="/services"
              className="font-medium text-charcoal hover:text-jdgreen transition-colors"
            >
              {t('layout:navigation.services')}
            </Link>
            <Link
              to="/contact"
              className="font-medium text-charcoal hover:text-jdgreen transition-colors"
            >
              {t('layout:navigation.contact')}
            </Link>

            {/* Language Toggle - Integrated in Navbar */}
            <div className="flex items-center border-l border-gray-200 pl-6">
              <LanguageToggle />
            </div>

            {/* Button to trigger the pop-up */}
            <Button
              className="bg-jdyellow hover:bg-jdyellow-dark text-charcoal-dark"
              onClick={() => setOpen(true)}
            >
              {t('common:request_quote')}
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              className="text-charcoal p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 px-4 bg-white border-t">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="font-medium text-charcoal hover:text-jdgreen"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('layout:navigation.home')}
              </Link>
              <Link
                to="/about"
                className="font-medium text-charcoal hover:text-jdgreen"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('layout:navigation.about')}
              </Link>
              {/* <Link
                to="/machinery"
                className="font-medium text-charcoal hover:text-jdgreen"
                onClick={() => setMobileMenuOpen(false)}
              >
                Μηχανήματα
              </Link> */}
              <Link
                to="/parts"
                className="font-medium text-charcoal hover:text-jdgreen"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('layout:navigation.parts')}
              </Link>
              <Link
                to="/services"
                className="font-medium text-charcoal hover:text-jdgreen"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('layout:navigation.services')}
              </Link>
              <Link
                to="/contact"
                className="font-medium text-charcoal hover:text-jdgreen"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('layout:navigation.contact')}
              </Link>

              {/* Language Toggle for Mobile */}
              <LanguageToggle variant="mobile" />

              {/* Button to trigger the pop-up */}
              <Button
                className="bg-jdyellow hover:bg-jdyellow-dark text-charcoal-dark w-full"
                onClick={() => setOpen(true)} // Opens the dialog
              >
                {t('common:request_quote')}
              </Button>
            </div>
          </nav>
        )}
      </header>

      {/* ShadCN Dialog for "Αίτημα Προσφοράς" */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogTitle>{t('common:request_quote')}</DialogTitle>
          <RequestQuoteButton />{" "}
          {/* Display the RequestQuoteButton inside the dialog */}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Header;
