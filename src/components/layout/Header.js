import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Globe, Phone, Mail } from "lucide-react";
import { Button } from "../ui/button";
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from "../ui/dialog";
import RequestQuoteButton from "../home/RequestQuoteButton"; // Import the RequestQuoteButton component

const Header = () => {
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
          <Link to="/" className="flex items-center flex-col sm:flex-row">
            {/* <span className="font-bold text-2xl text-jdgreen">JOHN DEERE</span> */}
            <span className="text-black font-bold text-2xl">Ι&Κ ΨΩΜΑ</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="font-medium text-charcoal hover:text-jdgreen"
            >
              Αρχική
            </Link>
            <Link
              to="/about"
              className="font-medium text-charcoal hover:text-jdgreen"
            >
              Σχετικά με Εμάς
            </Link>

            <Link
              to="/machinery"
              className="font-medium text-charcoal hover:text-jdgreen"
            >
              Μηχανήματα
            </Link>

            <Link
              to="/parts"
              className="font-medium text-charcoal hover:text-jdgreen"
            >
              Ανταλλακτικά
            </Link>

            <Link
              to="/services"
              className="font-medium text-charcoal hover:text-jdgreen"
            >
              Υπηρεσίες
            </Link>
            <Link
              to="/contact"
              className="font-medium text-charcoal hover:text-jdgreen"
            >
              Επικοινωνία
            </Link>

            {/* Button to trigger the pop-up */}
            <Button
              className="bg-jdyellow hover:bg-jdyellow-dark text-charcoal-dark"
              onClick={() => setOpen(true)} // Opens the dialog
            >
              Αίτημα Προσφοράς
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
                Αρχική
              </Link>
              <Link
                to="/about"
                className="font-medium text-charcoal hover:text-jdgreen"
                onClick={() => setMobileMenuOpen(false)}
              >
                Σχετικά με εμάς
              </Link>
              <Link
                to="/machinery"
                className="font-medium text-charcoal hover:text-jdgreen"
                onClick={() => setMobileMenuOpen(false)}
              >
                Μηχανήματα
              </Link>
              <Link
                to="/parts"
                className="font-medium text-charcoal hover:text-jdgreen"
                onClick={() => setMobileMenuOpen(false)}
              >
                Ανταλλακτικά
              </Link>
              <Link
                to="/services"
                className="font-medium text-charcoal hover:text-jdgreen"
                onClick={() => setMobileMenuOpen(false)}
              >
                Υπηρεσίες
              </Link>
              <Link
                to="/contact"
                className="font-medium text-charcoal hover:text-jdgreen"
                onClick={() => setMobileMenuOpen(false)}
              >
                Επικοινωνία
              </Link>

              {/* Button to trigger the pop-up */}
              <Button
                className="bg-jdyellow hover:bg-jdyellow-dark text-charcoal-dark w-full"
                onClick={() => setOpen(true)} // Opens the dialog
              >
                Αίτημα Προσφοράς
              </Button>
            </div>
          </nav>
        )}
      </header>

      {/* ShadCN Dialog for "Αίτημα Προσφοράς" */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogTitle>Αίτημα Προσφοράς</DialogTitle>
          <RequestQuoteButton /> {/* Display the RequestQuoteButton inside the dialog */}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Header;
