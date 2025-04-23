import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const ProductCard = ({
  id,
  name,
  category,
  image,
  description,
  featured = false,
  url,
}) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden ${
        featured ? "border-2 border-jdyellow" : ""
      }`}
    >
      <div className="relative">
        <img src={image} alt={name} className="w-full h-56 object-cover" />
        {featured && (
          <div className="absolute top-0 right-0 bg-jdyellow text-charcoal-dark py-1 px-3 text-sm font-medium">
            Προτεινόμενο
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="text-sm text-gray-500 mb-1">{category}</div>
        <h3 className="text-xl font-bold text-charcoal-dark mb-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>

        <div className="flex justify-between items-center">
          {/* <Button
            asChild
            variant="ghost"
            className="text-jdgreen hover:text-jdgreen-dark hover:bg-jdgreen-light/10"
          >
            <Link to={url}>Δείτε Λεπτομέρειες</Link>
          </Button> */}
          {/* <Button className="bg-jdgreen hover:bg-jdgreen-light">
            Αίτημα Προσφοράς
          </Button> */}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
