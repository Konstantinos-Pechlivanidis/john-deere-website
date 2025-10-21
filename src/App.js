import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "./lib/ScrollToTop";
import ErrorBoundary from "./components/ErrorBoundary";
import { JohnDeerePageLoader } from "./components/ui/john-deere-loader";
import CookieConsent from "./components/CookieConsent";
import "./i18n/config"; // Initialize i18n

// Lazy load pages for better performance
const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));
const PartsPage = lazy(() => import("./pages/PartsPage"));
const Terms = lazy(() => import("./pages/Terms"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Error500 = lazy(() => import("./pages/500"));

const App = () => (
    <ErrorBoundary>
      <HelmetProvider>
        <Suspense fallback={<JohnDeerePageLoader size="2xl" label="Loading page..." showBranding={true} />}>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <ScrollToTop />
              <Routes>
                <Route path="/" element={
                  <Suspense fallback={<JohnDeerePageLoader size="xl" label="Loading homepage..." showBranding={false} />}>
                    <Index />
                  </Suspense>
                } />
                <Route path="/about" element={
                  <Suspense fallback={<JohnDeerePageLoader size="xl" label="Loading about page..." showBranding={false} />}>
                    <About />
                  </Suspense>
                } />
                <Route path="/parts" element={
                  <Suspense fallback={<JohnDeerePageLoader size="xl" label="Loading parts page..." showBranding={false} />}>
                    <PartsPage />
                  </Suspense>
                } />
                <Route path="/services" element={
                  <Suspense fallback={<JohnDeerePageLoader size="xl" label="Loading services page..." showBranding={false} />}>
                    <Services />
                  </Suspense>
                } />
                <Route path="/contact" element={
                  <Suspense fallback={<JohnDeerePageLoader size="xl" label="Loading contact page..." showBranding={false} />}>
                    <Contact />
                  </Suspense>
                } />
                <Route path="/terms" element={
                  <Suspense fallback={<JohnDeerePageLoader size="xl" label="Loading terms..." showBranding={false} />}>
                    <Terms />
                  </Suspense>
                } />
                <Route path="/privacy" element={
                  <Suspense fallback={<JohnDeerePageLoader size="xl" label="Loading privacy policy..." showBranding={false} />}>
                    <Privacy />
                  </Suspense>
                } />
                <Route path="/500" element={
                  <Suspense fallback={<JohnDeerePageLoader size="xl" label="Loading..." showBranding={false} />}>
                    <Error500 />
                  </Suspense>
                } />
                <Route path="*" element={
                  <Suspense fallback={<JohnDeerePageLoader size="xl" label="Loading..." showBranding={false} />}>
                    <NotFound />
                  </Suspense>
                } />
              </Routes>
            </BrowserRouter>
            <CookieConsent />
          </TooltipProvider>
        </Suspense>
      </HelmetProvider>
    </ErrorBoundary>
);

export default App;