import { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

const App: FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
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
      </div>
    </Router>
  );
};

export default App;
