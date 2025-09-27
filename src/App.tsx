import { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./layout/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import AboutPage from "./pages/AboutPage";
import GoalsPage from "./pages/GoalsPage";

const App: FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Header toujours présent */}
        {/* <Header /> */}

        {/* Pages */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/objectifs" element={<GoalsPage />} />
          </Routes>
        </main>

        {/* Footer toujours présent */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
