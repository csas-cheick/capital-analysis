import { FC, useState, useRef, useEffect } from "react";
import { ChevronDown, Menu, X, Mail, TrendingUp, Code, FileText, Calculator } from "lucide-react";
import { Link } from "react-router-dom";
// Assurez-vous que le chemin d'accès au logo est correct
import logo from "../assets/logoC.svg";

// Définition des interfaces pour le menu
type DropdownItem = {
  name: string;
  href: string;
  description?: string;
  icon?: React.ComponentType<{ className?: string }>;
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
  // État pour adapter le header selon le scroll
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Réf pour détecter les clics à l'extérieur du menu mobile et le fermer
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  // Réf pour le délai de fermeture du dropdown
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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

  // Fonction pour ouvrir le dropdown (annule le délai de fermeture s'il existe)
  const handleDropdownEnter = (itemName: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setActiveDropdown(itemName);
  };

  // Fonction pour fermer le dropdown avec un délai
  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300); // Délai de 300ms avant la fermeture
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

  // Détecter le scroll pour adapter l'apparence du header
  useEffect(() => {
    const handleScroll = () => {
      // Détecter si on a scrollé au-delà de la section hero (environ 600px)
      const scrollPosition = window.scrollY;
      const heroHeight = 600; // Hauteur approximative de la section hero
      
      if (variant === 'hero') {
        setIsScrolled(scrollPosition > heroHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [variant]);


  const navItems: NavItem[] = [
    { name: "Accueil", href: "/", hasDropdown: false },
    { name: "À propos", href: "/about", hasDropdown: false },
    { name: "Objectifs", href: "/objectifs", hasDropdown: false },
    {
      name: "Activités",
      href: "/activites",
      hasDropdown: true,
      dropdownItems: [
        {
          name: "Ingénierie financière",
          href: "/activites/ingenierie-financiere",
          description: "",
          icon: TrendingUp,
        },
        {
          name: "IT & Développement",
          href: "/activites/departement-it-developpement",
          description: "",
          icon: Code,
        },
        {
          name: "Étude & Conseil",
          href: "/activites/etude-et-conseil",
          description: "",
          icon: FileText,
        },
        {
          name: "Suivi et assistance comptable",
          href: "/activites/suivi-et-assistance-comptable",
          description: "",
          icon: Calculator,
        },
      ],
    },
    { name: "Contact", href: "/contact", hasDropdown: false },
  ];

  // Classes conditionnelles selon le variant et le scroll
  const getHeaderClasses = () => {
    const baseClasses = "fixed top-0 left-0 w-full z-50 transition-all duration-300";
    
    if (variant === 'hero') {
      if (isScrolled) {
        // Header avec fond blanc quand on a scrollé
        return `${baseClasses} bg-white shadow-lg border-b border-gray-200`;
      } else {
        // Header transparent sur la section hero
        return `${baseClasses} bg-transparent backdrop-blur-sm`;
      }
    } else {
      // Header avec fond sombre pour les autres pages
      return `${baseClasses} bg-slate-900 shadow-2xl`;
    }
  };

  // Classes de texte adaptives
  const getTextClasses = () => {
    if (variant === 'hero' && isScrolled) {
      return "text-gray-800 hover:text-blue-600 transition-colors duration-200";
    } else if (variant === 'hero') {
      return "text-white/90 hover:text-white transition-colors duration-200";
    } else {
      return "text-white/90 hover:text-white transition-colors duration-200";
    }
  };

  // Classes pour le logo
  const getLogoClasses = () => {
    if (variant === 'hero' && isScrolled) {
      return "text-gray-800"; // Logo sombre sur fond blanc
    } else {
      return "text-white"; // Logo blanc sur fond sombre/transparent
    }
  };

  // Classes pour le bouton mobile
  const getMobileButtonClasses = () => {
    if (variant === 'hero' && isScrolled) {
      return "text-gray-800 hover:text-blue-600";
    } else {
      return "text-white/90 hover:text-white";
    }
  }; 

  return (
    <header className={getHeaderClasses()}>
      {/* Ligne de séparation subtile pour le variant hero, ajustement pour être plus propre */}
      {variant === 'hero' && !isScrolled && (
        <div className="absolute top-[80px] lg:top-[76px] w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent z-40 opacity-70 hidden lg:block"></div>
      )}
      
      <div className="container mx-auto px-4 sm:px-6 relative z-50">
        <div className="flex items-center justify-between py-4">
          
          {/* Logo et Nom */}
          <Link to="/" className={`flex items-center space-x-3 cursor-pointer ${getLogoClasses()}`}>
            <img
              src={logo}
              alt="Capital Analysis Logo"
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
            />
            <div className="hidden sm:block">
              <h1 className={`text-lg sm:text-xl font-extrabold leading-none ${
                variant === 'hero' && isScrolled 
                  ? 'text-gray-800' 
                  : 'bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent'
              }`}>
                Capital Analysis
              </h1>
              <p className={`text-xs opacity-90 leading-none mt-0.5 ${
                variant === 'hero' && isScrolled ? 'text-gray-500' : 'text-gray-400'
              }`}>
                La perspective de vos chiffres
              </p>
            </div>
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative z-[100]"
                onMouseEnter={() => item.hasDropdown && handleDropdownEnter(item.name)}
                onMouseLeave={() => item.hasDropdown && handleDropdownLeave()}
              >
                <Link
                  to={item.href}
                  className={`flex items-center px-4 py-2 font-medium transition-all duration-300 rounded-lg whitespace-nowrap
                    ${item.hasDropdown && activeDropdown === item.name
                      ? "text-blue-400 bg-white/5"
                      : `${getTextClasses()} hover:bg-white/10`
                    }`}
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

                {/* Dropdown Desktop - Design Professionnel */}
                {item.hasDropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-96 bg-white/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-100/50 transition-all duration-500 transform opacity-100 visible origin-top overflow-hidden z-[9999]">
                    {/* En-tête du dropdown */}
                    <div className="px-6 py-4 bg-gradient-to-r from-slate-50 to-blue-50/30 border-b border-gray-100/50">
                      <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                        Nos Services
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        Solutions professionnelles adaptées à vos besoins
                      </p>
                    </div>
                    
                    {/* Liste des services */}
                    <div className="py-2">
                      {item.dropdownItems?.map((dropdownItem) => {
                        const IconComponent = dropdownItem.icon;
                        return (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            className="group flex items-center px-6 py-3 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50/50 transition-all duration-300 border-l-2 border-transparent hover:border-blue-400"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {/* Icône */}
                            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center group-hover:from-blue-200 group-hover:to-cyan-200 transition-all duration-300 group-hover:scale-110">
                              {IconComponent && (
                                <IconComponent className="w-5 h-5 text-blue-600 group-hover:text-blue-700" />
                              )}
                            </div>
                            
                            {/* Contenu */}
                            <div className="ml-4 flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <h4 className="text-sm font-semibold text-gray-900 group-hover:text-blue-900 transition-colors duration-200">
                                  {dropdownItem.name}
                                </h4>
                                <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-blue-500 -rotate-90 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
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
            className={`lg:hidden p-2 hover:bg-white/20 rounded-lg transition-colors duration-200 ${getMobileButtonClasses()}`}
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
        className={`lg:hidden absolute inset-x-0 top-full bg-white shadow-2xl transition-[max-height,opacity] duration-300 overflow-hidden ${
          isMenuOpen ? "opacity-100 max-h-screen" : "opacity-0 max-h-0 pointer-events-none" // Meilleure gestion de l'ouverture
        }`}
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

                  {/* Sous-Menu Mobile - Design Professionnel */}
                  {hasDropdownItems && (
                    <div
                      className={`transition-[max-height,opacity] duration-500 overflow-hidden ${
                        isDropdownOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="mt-2 bg-gradient-to-r from-gray-50 to-blue-50/30 rounded-xl border border-gray-100/50 overflow-hidden">
                        {/* En-tête du sous-menu mobile */}
                        <div className="px-4 py-2 bg-gradient-to-r from-slate-100/50 to-blue-100/30 border-b border-gray-200/30">
                          <p className="text-xs font-medium text-gray-600 uppercase tracking-wider">
                            Nos Services
                          </p>
                        </div>
                        
                        {/* Liste des services mobiles */}
                        <div className="py-1">
                          {item.dropdownItems!.map((dropdownItem) => {
                            const IconComponent = dropdownItem.icon;
                            return (
                              <Link
                                key={dropdownItem.name}
                                to={dropdownItem.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="group flex items-center px-4 py-3 hover:bg-gradient-to-r hover:from-blue-100/50 hover:to-cyan-100/30 transition-all duration-300 border-l-2 border-transparent hover:border-blue-400"
                              >
                                {/* Icône mobile */}
                                <div className="flex-shrink-0 w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all duration-300">
                                  {IconComponent && (
                                    <IconComponent className="w-4 h-4 text-blue-600 group-hover:text-blue-700" />
                                  )}
                                </div>
                                
                                {/* Contenu mobile */}
                                <div className="ml-3 flex-1 min-w-0">
                                  <h5 className="text-sm font-medium text-gray-800 group-hover:text-blue-900 transition-colors duration-200">
                                    {dropdownItem.name}
                                  </h5>
                                </div>
                                
                                {/* Flèche indicatrice */}
                                <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-blue-500 -rotate-90 group-hover:translate-x-0.5 transition-all duration-300" />
                              </Link>
                            );
                          })}
                        </div>
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