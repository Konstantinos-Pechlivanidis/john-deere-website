import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const Layout = ({ children }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main 
        className="flex-grow"
        role="main"
        aria-label="Main content"
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
