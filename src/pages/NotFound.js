import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "../components/layout/Layout";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-24 flex items-center justify-center">
        <div className="max-w-md text-center">
          <h1 className="text-9xl font-bold text-jdgreen">404</h1>
          <div className="h-1 w-24 bg-jdyellow mx-auto my-6"></div>
          <h2 className="text-3xl font-bold mb-4 text-charcoal-dark">Η Σελίδα Δεν Βρέθηκε</h2>
          <p className="text-lg text-gray-600 mb-8">
            Η σελίδα που ψάχνετε μπορεί να έχει διαγραφεί, να έχει αλλάξει όνομα ή να είναι προσωρινά εκτός λειτουργίας.
          </p>
          <Button asChild className="bg-jdgreen hover:bg-jdgreen-light text-white">
            <Link to="/" className="inline-block px-8 py-3 rounded-lg">
              Επιστροφή στην Αρχική
            </Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
