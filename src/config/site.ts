export const siteConfig = {
  name: "i.k psoma",
  legalName: "Ι. & Κ. ΨΩΜΑ Ο.Ε.",
  title: "Ανταλλακτικά Γεωργικών Μηχανημάτων | i.k psoma",
  description: "Η i.k psoma, με έδρα τη Θεσσαλονίκη, παρέχει ανταλλακτικά γεωργικών μηχανημάτων, τεχνική καθοδήγηση και άμεση εξυπηρέτηση σε όλη την Ελλάδα.",
  url: process.env.SITE_URL || "https://i-k-psoma.gr",
  ogImage: "/og-default.jpg",
  company: {
    name: "i.k psoma",
    legalName: "Ι. & Κ. ΨΩΜΑ Ο.Ε.",
    phone: "+30 2310 512239",
    email: "info@psomasst.gr",
    address: "Μοναστηρίου 92, Θεσσαλονίκη",
    social: {
      facebook: "https://facebook.com/ikpsoma",
      instagram: "https://instagram.com/ikpsoma",
    },
  },
  keywords: [
    "ανταλλακτικά γεωργικών μηχανημάτων",
    "τεχνική υποστήριξη",
    "Θεσσαλονίκη",
    "πανελλαδική εξυπηρέτηση",
    "i.k psoma",
  ],
  author: {
    name: "i.k psoma",
    url: "https://i-k-psoma.gr",
  },
} as const;
