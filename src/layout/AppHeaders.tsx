import { FC, useState, useRef, useEffect } from "react";
import { ChevronDown, Menu, X, Mail } from "lucide-react";
import { Link } from "react-router-dom";
// Assurez-vous que le chemin d'accès au logo est correct
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
  // 'hero' pour la page d'accueil (transparent/sombre), 'page' pour les autres pages (fond plein)
  variant?: 'hero' | 'page';
}

/**
 * Composant d'en-tête de l'application
 * @param {HeaderProps} props - Les propriétés du composant.
 */
const Header: FC<HeaderProps> = ({ variant = 'hero' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // État pour le dropdown desktop : stocke le nom de l'élément actif ou null
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  // État pour le dropdown mobile : stocke le nom de l'élément ouvert ou null
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);
  
  // Réf pour détecter les clics à l'extérieur du menu mobile et le fermer
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    // Optionnel : fermer le dropdown mobile quand on ferme le menu principal
    if (isMenuOpen) {
      setMobileDropdownOpen(null);
    }
  };

  const toggleMobileDropdown = (itemName: string) => {
    setMobileDropdownOpen(itemName === mobileDropdownOpen ? null : itemName);
  };

  // Fermer le menu mobile lors d'un clic en dehors
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Si le menu est ouvert et le clic est en dehors du conteneur du menu
      if (isMenuOpen && mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        // Optionnel : s'assurer que le clic n'était pas sur le bouton d'ouverture
        const menuButton = document.getElementById('mobile-menu-button');
        if (menuButton && menuButton.contains(event.target as Node)) {
             return;
        }
        setIsMenuOpen(false);
        setMobileDropdownOpen(null); // Ferme également le sous-menu
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);


  const navItems: NavItem[] = [
    { name: "Accueil", href: "/", hasDropdown: false },
    { name: "À propos", href: "/about", hasDropdown: false },
    { name: "Objectifs", href: "/objectifs", hasDropdown: false },
    {
      name: "Activités",
      href: "/activites", // Peut être un lien vers une page d'activités ou '#'
      hasDropdown: true,
      dropdownItems: [
        {
          name: "Ingénierie financière",
          href: "/activites/ingenierie-financiere",
        },
        {
          name: "IT & Développement",
          href: "/activites/departement-it-developpement",
        },
        {
          name: "Étude & Conseil",
          href: "/activites/etude-et-conseil",
        },
        {
          name: "Suivi et assistance comptable",
          href: "/activites/suivi-et-assistance-comptable",
        },
      ],
    },
    { name: "Contact", href: "/contact", hasDropdown: false },
  ];

  // Classes conditionnelles selon le variant
  const headerClasses = variant === 'hero'
    ? "absolute top-0 left-0 w-full z-50 transition-all duration-300"
    : "sticky top-0 left-0 w-full z-50 bg-slate-900 shadow-2xl transition-all duration-300"; // Ajout de 'sticky' pour un header fixe sur les pages intérieures
  
  // Sur un variant 'hero', le texte est blanc par défaut. Sur 'page', il est également blanc (car le fond est sombre).
  const textColorClasses = "text-white/90 hover:text-white transition-colors duration-200";
  
  // Sur le variant 'page', on pourrait vouloir que le logo soit également visible sur un fond blanc si la variante était inversée.
  const logoClasses = variant === 'hero' ? "text-white" : "text-white"; 

  return (
    <header className={headerClasses}>
      {/* Ligne de séparation subtile pour le variant hero, ajustement pour être plus propre */}
      {variant === 'hero' && (
        <div className="absolute top-[80px] lg:top-[76px] w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent z-40 opacity-70 hidden lg:block"></div>
      )}
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex items-center justify-between py-4">
          
          {/* Logo et Nom */}
          <Link to="/" className={`flex items-center space-x-3 cursor-pointer ${logoClasses}`}>
            <img
              src={logo}
              alt="Capital Analysis Logo"
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
            />
            <div className="hidden sm:block">
              <h1 className="text-lg sm:text-xl font-extrabold bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent leading-none">
                Capital Analysis
              </h1>
              <p className="text-xs text-gray-400 opacity-90 leading-none mt-0.5">
                La perspective de vos chiffres
              </p>
            </div>
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => item.hasDropdown && setActiveDropdown(null)}
              >
                <Link
                  // Si c'est un dropdown, on utilise '#' pour ne pas naviguer au hover. L'utilisateur doit cliquer.
                  // Mais ici, je garde le href initial, car la navigation est gérée par le hover/clic.
                  to={item.href}
                  className={`flex items-center px-4 py-2 font-medium transition-all duration-300 rounded-lg whitespace-nowrap
                    ${item.hasDropdown && activeDropdown === item.name
                      ? "text-blue-400 bg-white/5" // Style actif/ouvert
                      : `${textColorClasses} hover:bg-white/10` // Style normal
                    }`}
                  // Empêche la navigation au clic si c'est un dropdown (pour ouvrir le sous-menu) - non nécessaire avec onMouseEnter
                  onClick={(e) => item.hasDropdown && e.preventDefault()}
                >
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronDown
                      className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                        activeDropdown === item.name
                          ? "rotate-180 text-blue-400"
                          : ""
                      }`}
                      aria-hidden="true"
                    />
                  )}
                </Link>

                {/* Dropdown Desktop */}
                {item.hasDropdown && activeDropdown === item.name && (
                  <div 
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl border border-gray-100 transition-all duration-300 transform opacity-100 visible origin-top"
                    // On peut ajouter onMouseLeave ici si on veut fermer dès que la souris quitte le div parent
                  >
                    {item.dropdownItems?.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        to={dropdownItem.href}
                        className="block px-4 py-3 text-gray-800 hover:text-blue-600 hover:bg-blue-50/80 transition-all duration-200 text-sm first:rounded-t-xl last:rounded-b-xl"
                        onClick={() => setActiveDropdown(null)} // Fermer le dropdown après clic
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Bouton Contact Desktop */}
          <div className="hidden lg:block">
            <Link to="/contact">
              <button className="group bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-5 py-2.5 rounded-full font-semibold transition-all duration-300 shadow-lg shadow-blue-500/50 hover:shadow-blue-500/70">
                <span className="flex items-center">
                  Nous contacter
                  <Mail className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform duration-200" />
                </span>
              </button>
            </Link>
          </div>

          {/* Bouton Menu Mobile */}
          <button
            id="mobile-menu-button"
            onClick={toggleMenu}
            className="lg:hidden p-2 text-white hover:bg-white/20 rounded-lg transition-colors duration-200"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu-content"
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Menu Mobile Content */}
      <div
        id="mobile-menu-content"
        ref={mobileMenuRef} // Référence pour la gestion du clic extérieur
        className={`lg:hidden absolute inset-x-0 top-full bg-white shadow-2xl transition-all duration-300 overflow-hidden ${
          isMenuOpen ? "opacity-100 max-h-screen" : "opacity-0 max-h-0 pointer-events-none" // Meilleure gestion de l'ouverture
        }`}
        style={{ transitionProperty: "max-height, opacity" }} // Pour une transition plus fluide sur max-height
      >
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <nav className="space-y-1">
            {navItems.map((item) => {
              const hasDropdownItems =
                item.hasDropdown && item.dropdownItems && item.dropdownItems.length > 0;
              const isDropdownOpen = mobileDropdownOpen === item.name;

              return (
                <div key={item.name} className="space-y-0.5">
                  <Link
                    // Si c'est un dropdown sans items, ou un élément normal, on navigue vers son href.
                    // Si c'est un dropdown AVEC items, on utilise '#' et l'onClick pour toggle le sous-menu.
                    to={!hasDropdownItems ? item.href : "#"}
                    onClick={(e) => {
                      if (hasDropdownItems) {
                        e.preventDefault(); // Empêche la navigation si c'est un dropdown
                        toggleMobileDropdown(item.name);
                      } else {
                        // Ferme le menu après la navigation
                        setIsMenuOpen(false);
                      }
                    }}
                    className="flex justify-between items-center px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium"
                    aria-expanded={hasDropdownItems ? isDropdownOpen : undefined}
                  >
                    <span>{item.name}</span>
                    {hasDropdownItems && (
                      <ChevronDown
                        className={`w-4 h-4 ml-2 transition-transform duration-200 ${
                          isDropdownOpen ? "rotate-180" : ""
                        }`}
                        aria-hidden="true"
                      />
                    )}
                  </Link>

                  {/* Sous-Menu Mobile */}
                  {hasDropdownItems && (
                    <div
                      className={`pl-4 transition-all duration-300 overflow-hidden ${
                        isDropdownOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                      }`}
                      style={{ transitionProperty: "max-height, opacity" }}
                    >
                      <div className="border-l-2 border-blue-200 ml-4 pl-2 space-y-0.5">
                        {item.dropdownItems!.map(
                          (dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.href}
                              onClick={() => setIsMenuOpen(false)} // Ferme le menu principal après la navigation
                              className="block px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-100/70 rounded-lg transition-all duration-200 text-sm font-normal"
                            >
                              {dropdownItem.name}
                            </Link>
                          )
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Bouton Contact Mobile */}
          <div className="mt-4 pt-4 border-t border-gray-100">
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
              <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold py-3 rounded-xl shadow-lg flex items-center justify-center space-x-2 hover:from-blue-700 hover:to-cyan-600 transition-all duration-300">
                <Mail className="w-4 h-4" />
                <span>Nous contacter</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;