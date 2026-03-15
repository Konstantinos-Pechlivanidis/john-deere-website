const BASE_URL = process.env.SITE_URL || "https://i-k-psoma.gr";

export const SEO_BRAND_NAME = "i.k psoma";
export const LEGAL_COMPANY_NAME = "Ι. & Κ. ΨΩΜΑ Ο.Ε.";

const normalizePath = (path = "/") => {
  if (!path) return "/";
  return path.startsWith("/") ? path : `/${path}`;
};

export const getAbsoluteUrl = (path = "/") => `${BASE_URL}${normalizePath(path)}`;

const withBrand = (pageTitle) => `${pageTitle} | ${SEO_BRAND_NAME}`;

export const SEO_DEFAULTS = {
  baseUrl: BASE_URL,
  locale: "el_GR",
  siteName: SEO_BRAND_NAME,
  ogImage: "/images/logos/tractorLogo2.png",
  title: withBrand("Ανταλλακτικά Γεωργικών Μηχανημάτων"),
  description:
    "Η i.k psoma, με έδρα τη Θεσσαλονίκη, παρέχει ανταλλακτικά γεωργικών μηχανημάτων, τεχνική καθοδήγηση και άμεση εξυπηρέτηση σε όλη την Ελλάδα.",
  keywords: [
    "ανταλλακτικά γεωργικών μηχανημάτων",
    "τεχνική υποστήριξη αγροτικών μηχανημάτων",
    "Θεσσαλονίκη",
    "πανελλαδική εξυπηρέτηση",
    SEO_BRAND_NAME,
  ],
};

export const ROUTE_SEO = {
  home: {
    title: withBrand("Ανταλλακτικά Γεωργικών Μηχανημάτων"),
    description:
      "Η i.k psoma, με έδρα τη Θεσσαλονίκη, παρέχει ανταλλακτικά γεωργικών μηχανημάτων, τεχνική καθοδήγηση και άμεση εξυπηρέτηση σε όλη την Ελλάδα.",
    canonical: "/",
    ogImage: "/images/general/DSC_2519.webp",
  },
  about: {
    title: withBrand("Σχετικά με εμάς"),
    description:
      "Γνωρίστε την i.k psoma και την πορεία της από το 1980, με εμπειρία στην προμήθεια ανταλλακτικών γεωργικών μηχανημάτων και σταθερή υποστήριξη πελατών στην Ελλάδα.",
    canonical: "/about",
    ogImage: "/images/general/DSC_2509.webp",
  },
  parts: {
    title: withBrand("Κατηγορίες ανταλλακτικών"),
    description:
      "Βρείτε ανταλλακτικά για κινητήρα, μετάδοση, υδραυλικά και άλλες κατηγορίες, με τεχνική υποστήριξη και αποστολή από Θεσσαλονίκη σε όλη την Ελλάδα.",
    canonical: "/parts",
    ogImage: "/images/general/DSC_2519.webp",
  },
  services: {
    title: withBrand("Υπηρεσίες & τεχνική υποστήριξη"),
    description:
      "Η i.k psoma προσφέρει εύρεση ανταλλακτικών, τεχνική υποστήριξη και αξιόπιστη παράδοση, καλύπτοντας τις ανάγκες επαγγελματιών του αγροτικού τομέα πανελλαδικά.",
    canonical: "/services",
    ogImage: "/images/general/DSC_2523.webp",
  },
  contact: {
    title: withBrand("Επικοινωνία"),
    description:
      "Επικοινωνήστε με την i.k psoma στη Θεσσαλονίκη για διαθεσιμότητα ανταλλακτικών, τεχνικές διευκρινίσεις και άμεση εξυπηρέτηση πελατών σε όλη την Ελλάδα.",
    canonical: "/contact",
    ogImage: "/images/general/DSC_2523.webp",
  },
  terms: {
    title: withBrand("Όροι χρήσης"),
    description:
      "Διαβάστε τους όρους χρήσης της ιστοσελίδας της i.k psoma σχετικά με την πρόσβαση στο περιεχόμενο, τις υπηρεσίες και τα δικαιώματα χρήσης.",
    canonical: "/terms",
  },
  privacy: {
    title: withBrand("Πολιτική απορρήτου"),
    description:
      "Ενημερωθείτε για την πολιτική απορρήτου της i.k psoma και για τον τρόπο συλλογής, χρήσης και προστασίας προσωπικών δεδομένων σύμφωνα με τον GDPR.",
    canonical: "/privacy",
  },
  notFound: {
    title: withBrand("Σελίδα δεν βρέθηκε (404)"),
    description:
      "Η σελίδα που αναζητάτε δεν είναι διαθέσιμη. Επιστρέψτε στην αρχική της i.k psoma για να συνεχίσετε την πλοήγηση.",
  },
  error500: {
    title: withBrand("Προσωρινό σφάλμα διακομιστή"),
    description:
      "Παρουσιάστηκε προσωρινό τεχνικό πρόβλημα στην ιστοσελίδα της i.k psoma. Παρακαλούμε δοκιμάστε ξανά σε λίγο.",
    canonical: "/500",
  },
};
