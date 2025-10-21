import { Link } from "react-router-dom";

const SkipToContent = () => {
  return (
    <Link
      to="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-jdgreen text-white px-4 py-2 rounded-md z-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-jdyellow focus:ring-offset-2"
    >
      Skip to main content
    </Link>
  );
};

export default SkipToContent;
