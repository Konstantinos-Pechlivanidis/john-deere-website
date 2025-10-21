import Header from "./Header";
import Footer from "./Footer";
import SkipToContent from "../SkipToContent";

const Layout = ({ children }) => {

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <SkipToContent />
      <Header />
      <main 
        id="main-content"
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
