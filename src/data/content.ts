import type { ServiceItem, Testimonial } from "@/types";

export const homeServices: ServiceItem[] = [
  {
    title: "Ingénierie Financière",
    description:
      "Conception de solutions financières innovantes : modélisation, structuration et optimisation de la performance.",
    link: "/activites/ingenierie-financiere",
  },
  {
    title: "IT & Développement",
    description:
      "Logiciels de gestion sur mesure, intégration SAGE, et solutions technologiques adaptées à vos besoins.",
    link: "/activites/departement-it-developpement",
  },
  {
    title: "Études & Conseil",
    description:
      "Analyses stratégiques approfondies et recommandations pour guider vos décisions d'affaires.",
    link: "/activites/etude-et-conseil",
  },
  {
    title: "Assistance Comptable",
    description:
      "Tenue de comptabilité, déclarations fiscales, audit et conseil juridique pour votre conformité.",
    link: "/activites/suivi-et-assistance-comptable",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Mouhamed Diaou",
    position: "Directeur, Alimentation Fadak",
    content:
      "Capital Analysis a révolutionné notre gestion financière. Leur expertise nous a permis d'optimiser nos flux de trésorerie de manière significative.",
    rating: 5,
  },
  {
    name: "Mouhamed Moucharraf",
    position: "CEO, Tech-Fadak",
    content:
      "Grâce à leurs logiciels de gestion sur mesure, nous avons automatisé nos processus. Un gain de temps et d'efficacité considérable.",
    rating: 5,
  },
  {
    name: "Ibrahim Moussa",
    position: "Fondateur, Tech Solutions",
    content:
      "CAPEsys a transformé la gestion de nos stations-service. Un outil indispensable pour tout gérant moderne.",
    rating: 5,
  },
];
