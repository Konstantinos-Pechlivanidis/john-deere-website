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

const RequestQuoteButton = () => {
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
    // Στην πραγματική υλοποίηση, η φόρμα θα αποσταλεί στον διακομιστή
    alert(
      "Η φόρμα υποβλήθηκε! Στην πραγματική υλοποίηση, αυτή θα σταλθεί στον διακομιστή σας."
    );
    console.log(formState);
  };

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-md">
      <h3 className="font-bold text-xl mb-4 text-jdgreen">
        Στείλτε μας ένα Μήνυμα
      </h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
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
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
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
          <label
            htmlFor="inquiry"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Τύπος Ερώτησης *
          </label>
          <Select
            onValueChange={handleSelectChange}
            value={formState.inquiry}
            required
          >
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
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
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

        <Button
          type="submit"
          className="w-full bg-jdgreen hover:bg-jdgreen-light"
        >
          Αποστολή Μηνύματος
        </Button>
      </form>
    </div>
  );
};

export default RequestQuoteButton;
