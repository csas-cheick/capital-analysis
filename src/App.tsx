import { FC, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Footer from "./layout/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import AboutPage from "./pages/AboutPage";
import GoalsPage from "./pages/GoalsPage";
import CapitalPetroleum from "./pages/CapitalPetroleum";
import IngenierieFinanciere from "./pages/services/IngenierieFinanciere"
import ITDeveloppement from "./pages/services/ITDeveloppement";
import EtudeConseil from "./pages/services/EtudeConseil";
import SuiviAssistanceComptable from "./pages/services/SuiviAssistanceComptable";
import PageLoader from "./components/ui/PageLoader";
import BackToTop from "./components/ui/BackToTop";

// Scroll to top component for route changes
const ScrollToTop: FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
};

const App: FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial page load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <HelmetProvider>
      {isLoading && <PageLoader minDisplayTime={800} />}
      <Router>
        <ScrollToTop />
        <div className={`flex flex-col min-h-screen transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
          {/* Pages avec routing */}
          <main className="flex-1">
            <Routes>
              {/* Pages principales */}
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/objectifs" element={<GoalsPage />} />
              
              {/* Page produit CapitalPetroleum */}
              <Route path="/capitalpetroleum" element={<CapitalPetroleum />} />
              
              {/* Pages des services */}
              <Route path="/activites/ingenierie-financiere" element={<IngenierieFinanciere />} />
              <Route path="/activites/departement-it-developpement" element={<ITDeveloppement />} />
              <Route path="/activites/etude-et-conseil" element={<EtudeConseil />} />
              <Route path="/activites/suivi-et-assistance-comptable" element={<SuiviAssistanceComptable />} />
            </Routes>
          </main>

          {/* Footer */}
          <Footer />
          
          {/* Back to Top Button */}
          <BackToTop />
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;
