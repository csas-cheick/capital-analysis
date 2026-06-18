import type { NavItem } from "@/types";

export const navigationItems: NavItem[] = [
  { name: "Accueil", href: "/" },
  { name: "À propos", href: "/about" },
  { name: "Objectifs", href: "/objectifs" },
  {
    name: "Activités",
    href: "#",
    children: [
      { name: "Ingénierie financière", href: "/activites/ingenierie-financiere" },
      { name: "IT & Développement", href: "/activites/departement-it-developpement" },
      { name: "Étude & Conseil", href: "/activites/etude-et-conseil" },
      { name: "Assistance comptable", href: "/activites/suivi-et-assistance-comptable" },
    ],
  },
  { name: "CAPEsys", href: "/capesys" },
  { name: "Contact", href: "/contact" },
];
