import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { X, Cookie } from 'lucide-react';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowBanner(false);
    // Initialize analytics here if needed
    // gtag('consent', 'update', { analytics_storage: 'granted' });
  };

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 p-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Cookie className="h-6 w-6 text-jdgreen" />
          <div className="text-sm text-gray-700">
            <p className="font-medium">Χρησιμοποιούμε cookies</p>
            <p>Χρησιμοποιούμε cookies για να βελτιώσουμε την εμπειρία σας στον ιστότοπό μας. 
              Συνεχίζοντας την περιήγηση, συμφωνείτε με τη χρήση cookies.</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button
            onClick={declineCookies}
            variant="outline"
            size="sm"
            className="text-gray-600"
          >
            Απόρριψη
          </Button>
          <Button
            onClick={acceptCookies}
            size="sm"
            className="bg-jdgreen hover:bg-jdgreen-light text-white"
          >
            Αποδοχή
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
