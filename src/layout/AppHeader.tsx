import { FC, useState } from "react";
import { ChevronDown, Menu, X, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logoC.svg";

// Définition des interfaces pour le menu
type DropdownItem = {
  name: string;
  href: string;
};

type NavItem = {
  name: string;
  href: string;
  hasDropdown: boolean;
  dropdownItems?: DropdownItem[];
};

interface HeaderProps {
  variant?: 'hero' | 'page'; // 'hero' pour la page d'accueil, 'page' pour les autres pages
}

const AppHeader: FC<HeaderProps> = ({ variant = 'hero' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems: NavItem[] = [
    { name: "Accueil", href: "/", hasDropdown: false },
    { name: "À propos", href: "/about", hasDropdown: false },
    { name: "Objectifs", href: "/objectifs", hasDropdown: false },
    {
      name: "Activités",
      href: "#activites",
      hasDropdown: true,
      dropdownItems: [
        {
          name: "Logiciel de gestion",
          href: "/activites/logiciel-de-gestion",
        },
        {
          name: "Ingénierie financière",
          href: "/activites/ingenierie-financiere",
        },
        {
          name: "Suivi et assistance comptable",
          href: "/activites/suivi-et-assistance-comptable",
        },
        {
          name: "Département IT & Développement",
          href: "/activites/departement-it-developpement",
        },
      ],
    },
    { name: "Contact", href: "/contact", hasDropdown: false },
  ];

  const toggleMobileDropdown = (itemName: string) => {
    setMobileDropdownOpen(itemName === mobileDropdownOpen ? null : itemName);
  };

  // Classes conditionnelles selon le variant
  const headerClasses = variant === 'hero' 
    ? "absolute top-0 left-0 w-full z-50" 
    : "relative w-full z-50 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 shadow-lg";
  
  const containerClasses = variant === 'hero' 
    ? "container mx-auto relative z-10" 
    : "container mx-auto relative z-10";

  const textColorClasses = variant === 'hero' 
    ? "text-white/90 hover:text-white/100" 
    : "text-white/90 hover:text-white/100";

  return (
    <>
      <header className={headerClasses}>
        {/* Ligne de séparation pour le variant hero */}
        {variant === 'hero' && (
          <div className="absolute top-[80px] lg:top-[76px] w-full h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent z-40 opacity-70"></div>
        )}
        
        <div className={containerClasses}>
          <div className="flex items-center justify-between py-4 px-6">
            <Link to="/" className="flex items-center space-x-3 cursor-pointer">
              <img
                src={logo}
                alt="Capital Analysis"
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
              />
              <div className="hidden sm:block">
                <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
                  Capital Analysis
                </h1>
                <p className="text-xs text-gray-400 opacity-90">
                  la perspective de vos chiffres
                </p>
              </div>
            </Link>

            {/* Navigation desktop */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() =>
                    item.hasDropdown && setActiveDropdown(item.name)
                  }
                  onMouseLeave={() =>
                    item.hasDropdown && setActiveDropdown(null)
                  }
                >
                  <Link
                    to={item.href}
                    className={`flex items-center px-4 py-2 font-medium transition-all duration-300 rounded-lg 
                    ${
                      item.hasDropdown && activeDropdown === item.name
                        ? "text-blue-400"
                        : `${textColorClasses} hover:bg-white/10`
                    }`}
                  >
                    {item.name}
                    {item.hasDropdown && (
                      <ChevronDown
                        className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                          activeDropdown === item.name
                            ? "rotate-180 text-blue-400"
                            : ""
                        }`}
                      />
                    )}
                  </Link>

                  {/* Dropdown */}
                  {item.hasDropdown && activeDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-2 w-72 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl border border-gray-100 transition-all duration-300">
                      {item.dropdownItems?.map((dropdownItem, dropdownIndex) => (
                        <Link
                          key={dropdownIndex}
                          to={dropdownItem.href}
                          className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50/80 transition-all duration-200 first:rounded-t-xl last:rounded-b-xl"
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="hidden lg:block">
              <Link to="/contact">
                <button className="group bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-6 py-2 rounded-xl font-semibold transition-colors duration-300 transform hover:scale-105 shadow-xl">
                  <span className="flex items-center">
                    Nous contacter
                    <Mail className="w-4 h-4 ml-2" />
                  </span>
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 text-white hover:bg-white/20 rounded-lg transition-colors duration-200"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        <div
          className={`lg:hidden absolute inset-x-0 top-full bg-white shadow-2xl transition-all duration-300 ${
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div className="container mx-auto px-6 py-6">
            <nav className="space-y-2">
              {navItems.map((item, index) => {
                const hasDropdown =
                  item.hasDropdown && item.dropdownItems && item.dropdownItems.length > 0;
                const isDropdownOpen = mobileDropdownOpen === item.name;

                return (
                  <div key={index} className="space-y-1">
                    <Link
                      to={!hasDropdown ? item.href : "#"}
                      onClick={() => {
                        if (hasDropdown) {
                          toggleMobileDropdown(item.name);
                        } else {
                          setIsMenuOpen(false);
                        }
                      }}
                      className="flex justify-between items-center px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium"
                    >
                      <span>{item.name}</span>
                      {hasDropdown && (
                        <ChevronDown
                          className={`w-4 h-4 ml-2 transition-transform duration-200 ${
                            isDropdownOpen ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </Link>

                    {hasDropdown && isDropdownOpen && (
                      <div className="pl-6 space-y-1">
                        {item.dropdownItems!.map(
                          (dropdownItem, dropdownIndex) => (
                            <Link
                              key={dropdownIndex}
                              to={dropdownItem.href}
                              onClick={() => setIsMenuOpen(false)}
                              className="block px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium"
                            >
                              {dropdownItem.name}
                            </Link>
                          )
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            <div className="mt-6 pt-6 border-t border-gray-100 space-y-3">
              <Link to="/contact">
                <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold py-3 rounded-xl shadow-lg flex items-center justify-center space-x-2 hover:from-blue-700 hover:to-cyan-600 transition-all duration-300">
                  <Mail className="w-4 h-4" />
                  <span>Nous contacter</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default AppHeader;