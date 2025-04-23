import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    inquiry: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (value) => {
    setFormState(prev => ({
      ...prev,
      inquiry: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Στην πραγματική υλοποίηση, η φόρμα θα αποσταλεί στον διακομιστή
    alert("Η φόρμα υποβλήθηκε! Στην πραγματική υλοποίηση, αυτή θα σταλθεί στον διακομιστή σας.");
    console.log(formState);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-charcoal-dark">Επικοινωνήστε Μαζί Μας</h2>
            <div className="w-20 h-1 bg-jdyellow mb-6"></div>
            
            <p className="text-gray-600 mb-8">
              Είτε ψάχνετε για συγκεκριμένα μηχανήματα John Deere, χρειάζεστε ανταλλακτικά, 
              ή θέλετε να συζητήσετε για τη συνεργασία μας, η ομάδα μας είναι έτοιμη να σας βοηθήσει.
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
              <h3 className="font-bold text-xl mb-4 text-jdgreen">Ώρες Λειτουργίας</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span className="text-gray-600">Δευτέρα - Παρασκευή:</span>
                  <span className="font-medium">8:00 ΠΜ - 6:00 ΜΜ</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Σάββατο:</span>
                  <span className="font-medium">9:00 ΠΜ - 2:00 ΜΜ</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Κυριακή:</span>
                  <span className="font-medium">Κλειστά</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-xl mb-4 text-jdgreen">
                Κεντρικά Γραφεία
              </h3>
              <address className="not-italic text-gray-600">
                <p>123 Οδός Αγροτικών Μηχανημάτων</p>
                <p>Αθήνα, 12345</p>
                <p>Ελλάδα</p>
                <p className="mt-4">Τηλέφωνο: +30 210 1234567</p>
                <p>Ηλεκτρονικό Ταχυδρομείο: info@greekjdeere.com</p>
              </address>
            </div>
          </div>
          
          <div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-xl mb-4 text-jdgreen">Στείλτε μας ένα Μήνυμα</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
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
                    className="w-full"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Διεύθυνση Ηλεκτρονικού Ταχυδρομείου *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Αριθμός Τηλεφώνου
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      placeholder="+30 123 4567890"
                      className="w-full"
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
                      <SelectItem value="machinery">Ερώτηση για Μηχανήματα</SelectItem>
                      <SelectItem value="parts">Ερώτηση για Ανταλλακτικά</SelectItem>
                      <SelectItem value="partnership">Ευκαιρία Συνεργασίας</SelectItem>
                      <SelectItem value="support">Τεχνική Υποστήριξη</SelectItem>
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
                    placeholder="Παρακαλώ περιγράψτε πώς μπορούμε να σας βοηθήσουμε..."
                    required
                    rows={5}
                    className="w-full"
                  />
                </div>
                
                <Button type="submit" className="w-full bg-jdgreen hover:bg-jdgreen-light">
                  Αποστολή Μηνύματος
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
