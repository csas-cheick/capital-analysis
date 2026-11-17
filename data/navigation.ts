import type { NavItem } from "@/types";

export const navigationItems: NavItem[] = [
  { name: "Accueil", href: "/" },
  {
    name: "Services",
    href: "#",
    children: [
      { name: "Ingénierie financière", href: "/activites/ingenierie-financiere" },
      { name: "IT & Développement", href: "/activites/departement-it-developpement" },
      { name: "Étude & Conseil", href: "/activites/etude-et-conseil" },
      { name: "Assistance comptable", href: "/activites/suivi-et-assistance-comptable" },
    ],
  },
  { name: "CAPESYS", href: "/capesys" },
  { name: "Actualités", href: "/actualites" },
  { name: "Contact", href: "/contact" },
];
