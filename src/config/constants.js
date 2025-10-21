// Application constants and configuration
export const APP_CONFIG = {
  name: 'Ι. & Κ. ΨΩΜΑ Ο.Ε.',
  version: '1.0.0',
  description: 'Αξιόπιστα Ανταλλακτικά Γεωργικών Μηχανημάτων',
  contact: {
    phone: '+302310512239',
    email: 'info@psomasst.gr',
    address: 'Ελλάδα'
  }
};

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  PARTS: '/parts',
  SERVICES: '/services',
  CONTACT: '/contact'
};

export const IMAGE_CONFIG = {
  lazy: true,
  decoding: 'async',
  loading: 'lazy'
};

export const PERFORMANCE_CONFIG = {
  carouselInterval: 5000,
  resizeDebounce: 100,
  imageOptimization: true
};
