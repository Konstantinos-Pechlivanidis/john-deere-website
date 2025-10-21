import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation resources
import elCommon from './locales/el/common.json';
import elLayout from './locales/el/layout.json';
import elHome from './locales/el/home.json';
import elAbout from './locales/el/about.json';
import elParts from './locales/el/parts.json';
import elServices from './locales/el/services.json';
import elContact from './locales/el/contact.json';
import elCategories from './locales/el/categories.json';
import elLegal from './locales/el/legal.json';

import enCommon from './locales/en/common.json';
import enLayout from './locales/en/layout.json';
import enHome from './locales/en/home.json';
import enAbout from './locales/en/about.json';
import enParts from './locales/en/parts.json';
import enServices from './locales/en/services.json';
import enContact from './locales/en/contact.json';
import enCategories from './locales/en/categories.json';
import enLegal from './locales/en/legal.json';

const resources = {
  el: {
    common: elCommon,
    layout: elLayout,
    home: elHome,
    about: elAbout,
    parts: elParts,
    services: elServices,
    contact: elContact,
    categories: elCategories,
    legal: elLegal,
  },
  en: {
    common: enCommon,
    layout: enLayout,
    home: enHome,
    about: enAbout,
    parts: enParts,
    services: enServices,
    contact: enContact,
    categories: enCategories,
    legal: enLegal,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'el', // default language
    fallbackLng: 'el',

    // Language detection options
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      lookupLocalStorage: 'i18nextLng',
      caches: ['localStorage'],
    },

    // Interpolation options
    interpolation: {
      escapeValue: false, // React already escapes values
    },

    // Namespace configuration
    defaultNS: 'common',
    ns: ['common', 'layout', 'home', 'about', 'parts', 'services', 'contact', 'categories', 'legal'],

    // React i18next options
    react: {
      useSuspense: false, // Disable suspense for better UX
    },
  });

// Update document language when language changes
i18n.on('languageChanged', (lng) => {
  document.documentElement.lang = lng;
});

export default i18n;
