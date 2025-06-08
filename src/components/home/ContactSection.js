import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    inquiry: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (value) => {
    setFormState((prev) => ({
      ...prev,
      inquiry: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Η φόρμα υποβλήθηκε!");
    console.log(formState);
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Info */}
          <div>
            <h2 className="text-4xl font-extrabold mb-4 text-charcoal-dark tracking-tight leading-tight">
              Επικοινωνήστε Μαζί μας
            </h2>
            <div className="w-24 h-1 bg-jdyellow mb-6 rounded"></div>

            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Αν χρειάζεστε ανταλλακτικά, θέλετε να υποβάλετε ερώτηση ή να ξεκινήσουμε μια νέα συνεργασία, είμαστε εδώ για να σας εξυπηρετήσουμε με συνέπεια και ταχύτητα.
            </p>

            <div className="bg-gray-50 p-6 rounded-xl shadow-md mb-8">
              <h3 className="text-xl font-bold text-jdgreen mb-4">Ώρες Λειτουργίας</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex justify-between">
                  <span>Δευτέρα - Παρασκευή:</span>
                  <span className="font-medium">9:00 - 17:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Σάββατο:</span>
                  <span className="font-medium">9:00 - 14:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Κυριακή:</span>
                  <span className="font-medium">Κλειστά</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-jdgreen mb-4">Κεντρικά Γραφεία</h3>
              <address className="not-italic text-gray-600 text-sm leading-relaxed">
                <p>Μοναστηρίου 92</p>
                <p>Θεσσαλονίκη, Ελλάδα</p>
                <p className="mt-4 font-semibold text-charcoal-dark">Τηλέφωνο:</p>
                <p>+30 2310 512239</p>
                <p>+30 2310 552678</p>
                <p>+30 6948506485</p>
                <p>+30 6948506486</p>
                <p className="mt-4 font-semibold text-charcoal-dark">Email:</p>
                <p>info@psomasst.gr</p>
              </address>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-gray-50 p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-jdgreen mb-6">Στείλτε μας ένα Μήνυμα</h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Ονοματεπώνυμο *
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="Το ονοματεπώνυμό σας"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Τηλέφωνο
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    placeholder="+30 69X XXX XXXX"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="inquiry" className="block text-sm font-medium text-gray-700 mb-1">
                  Τύπος Ερώτησης *
                </label>
                <Select onValueChange={handleSelectChange} value={formState.inquiry} required>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Επιλέξτε τύπο ερώτησης" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="parts">Ανταλλακτικά</SelectItem>
                    <SelectItem value="partnership">Συνεργασία</SelectItem>
                    <SelectItem value="other">Άλλο</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Μήνυμα *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Πείτε μας πώς μπορούμε να βοηθήσουμε..."
                  required
                  rows={5}
                />
              </div>

              <Button type="submit" className="w-full bg-jdgreen hover:bg-jdgreen-light text-white text-base font-medium rounded-full py-3">
                Αποστολή Μηνύματος
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
