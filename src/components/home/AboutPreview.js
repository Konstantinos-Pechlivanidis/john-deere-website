import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { Users, PackageCheck, Award } from "lucide-react";

const AboutPreview = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl font-extrabold mb-4 text-charcoal-dark tracking-tight leading-tight">
              Ο Αξιόπιστος Συνεργάτης σας στα Ανταλλακτικά Γεωργικών Μηχανημάτων
            </h2>
            <div className="w-24 h-1 bg-jdyellow mb-8 rounded"></div>

            <p className="text-gray-600 text-lg mb-4 leading-relaxed">
              Για περισσότερες από τέσσερις δεκαετίες, στεκόμαστε δίπλα στους επαγγελματίες του αγροτικού τομέα, 
              προσφέροντας άμεση πρόσβαση σε ανταλλακτικά υψηλής ποιότητας για κάθε είδους γεωργικό μηχάνημα.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Με ευρύ διεθνές δίκτυο προμηθευτών και βαθιά γνώση της αγοράς, εντοπίζουμε ακόμη και τα πιο εξειδικευμένα εξαρτήματα, εξασφαλίζοντας ταχύτητα, αξιοπιστία και προσωπική εξυπηρέτηση.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              {[
                {
                  icon: <Users className="w-6 h-6 text-jdgreen" />,
                  value: "3.000+",
                  label: "Πελάτες σε Ελλάδα & Εξωτερικό",
                },
                {
                  icon: <Award className="w-6 h-6 text-jdgreen" />,
                  value: "40+",
                  label: "Χρόνια Εμπειρίας",
                },
                {
                  icon: <PackageCheck className="w-6 h-6 text-jdgreen" />,
                  value: "10.000+",
                  label: "Διαθέσιμα Ανταλλακτικά",
                },
              ].map((stat, i) => (
                <div key={i} className="bg-white p-5 rounded-lg shadow-md flex flex-col items-center text-center">
                  <div className="mb-2">{stat.icon}</div>
                  <div className="text-jdgreen font-bold text-2xl">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            <Button asChild className="bg-jdgreen hover:bg-jdgreen-light text-white px-6 py-3 rounded-full shadow-md text-base font-medium">
              <Link to="/about">Μάθετε Περισσότερα για Εμάς</Link>
            </Button>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
              <img
                src="/images/general/mobile4.jpg"
                alt="Η ομάδα μας"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="hidden md:block absolute -bottom-8 -left-8 w-40 h-40 bg-jdyellow rounded-xl shadow-lg -z-10"></div>
            <div className="hidden md:block absolute -top-6 -right-6 w-24 h-24 bg-jdgreen rounded-xl shadow-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
