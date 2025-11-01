export const siteConfig = {
  name: "Ι. & Κ. ΨΩΜΑ Ο.Ε.",
  title: "Ι. & Κ. ΨΩΜΑ Ο.Ε. - Ανταλλακτικά John Deere",
  description: "Ο αξιόπιστος συνεργάτης σας για συμβατά ανταλλακτικά και εξαρτήματα για γεωργικά μηχανήματα τύπου John Deere στην Ελλάδα. Δεν είμαστε επίσημος αντιπρόσωπος John Deere.",
  url: process.env.SITE_URL || "https://i-k-psoma.gr",
  ogImage: "/og-default.jpg",
  company: {
    name: "Ι. & Κ. ΨΩΜΑ Ο.Ε.",
    phone: "+30 2310 512239",
    email: "info@psomasst.gr",
    address: "Μοναστηρίου 92, Θεσσαλονίκη",
    social: {
      facebook: "https://facebook.com/ikpsoma",
      instagram: "https://instagram.com/ikpsoma",
    },
  },
  keywords: [
    "John Deere",
    "ανταλλακτικά",
    "γεωργικά μηχανήματα",
    "Ελλάδα",
    "Θεσσαλονίκη",
    "Ι. & Κ. ΨΩΜΑ",
    "tractor parts",
    "agricultural machinery",
  ],
  author: {
    name: "Ι. & Κ. ΨΩΜΑ Ο.Ε.",
    url: "https://i-k-psoma.gr",
  },
} as const;
