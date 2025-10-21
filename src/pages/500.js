import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { AlertTriangle, Home, RefreshCw } from 'lucide-react';

const Error500 = () => {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <Layout>
      <SEO
        title="Σφάλμα Διακομιστή - 500"
        description="Προσωρινό πρόβλημα με τον διακομιστή. Παρακαλώ δοκιμάστε ξανά σε λίγο."
        noindex={true}
      />
      <div className="container mx-auto px-4 py-24 flex items-center justify-center">
        <div className="max-w-md text-center">
          <div className="text-red-500 mb-6">
            <AlertTriangle className="h-24 w-24 mx-auto" />
          </div>
          <h1 className="text-6xl font-bold text-jdgreen mb-4">500</h1>
          <div className="h-1 w-24 bg-jdyellow mx-auto my-6"></div>
          <h2 className="text-3xl font-bold mb-4 text-charcoal-dark">
            Σφάλμα Διακομιστή
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Προσωρινό πρόβλημα με τον διακομιστή. Η ομάδα μας έχει ειδοποιηθεί και εργάζεται για την επίλυση του προβλήματος.
          </p>
          <div className="space-y-4">
            <Button 
              onClick={handleReload}
              className="bg-jdgreen hover:bg-jdgreen-light text-white mr-4"
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              Δοκιμή Ξανά
            </Button>
            <Button asChild variant="outline">
              <Link to="/" className="inline-flex items-center">
                <Home className="h-4 w-4 mr-2" />
                Αρχική Σελίδα
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Error500;
