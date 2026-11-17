export type Article = {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imageSrc: string;
};

export const articles: Article[] = [
  {
    title: "Piloter sa tresorerie dans un environnement en mouvement",
    excerpt:
      "Les bons indicateurs pour anticiper vos besoins de financement et renforcer vos decisions de gestion.",
    date: "12 septembre 2026",
    category: "Ingenierie financiere",
    imageSrc: "/images/services/finance.jpg",
  },
  {
    title: "La transformation numerique au service des organisations",
    excerpt:
      "Comment des outils de gestion adaptes permettent de fiabiliser les processus et gagner en efficacite.",
    date: "4 septembre 2026",
    category: "Technologie",
    imageSrc: "/images/services/systemes.jpg",
  },
  {
    title: "Faire de la donnee un levier de decision",
    excerpt:
      "Des analyses structurees pour transformer les informations disponibles en orientations strategiques utiles.",
    date: "28 aout 2026",
    category: "Conseil",
    imageSrc: "/images/services/organisation.jpg",
  },
  {
    title: "Accompagner la croissance des PME par une gestion structuree",
    excerpt:
      "Un suivi comptable rigoureux et des outils adaptes pour soutenir le developpement des petites et moyennes entreprises.",
    date: "15 aout 2026",
    category: "Comptabilite",
    imageSrc: "/images/services/expertise-1.png",
  },
  {
    title: "Optimiser la gestion des stations-service avec CAPESYS",
    excerpt:
      "Decouvrez comment notre solution CAPESYS transforme le suivi operationnel et financier des stations-service.",
    date: "2 aout 2026",
    category: "Technologie",
    imageSrc: "/images/services/expertise-2.png",
  },
  {
    title: "Les cles d'un audit reussi pour votre entreprise",
    excerpt:
      "Un audit bien mene permet d'identifier les forces et les axes d'amelioration de votre organisation.",
    date: "20 juillet 2026",
    category: "Conseil",
    imageSrc: "/images/services/expertise-3.png",
  },
  {
    title: "Structurer son plan de financement : les etapes essentielles",
    excerpt:
      "De l'analyse des besoins a la mobilisation des ressources, les fondamentaux d'un plan solide.",
    date: "8 juillet 2026",
    category: "Ingenierie financiere",
    imageSrc: "/images/services/donnees.jpg",
  },
  {
    title: "Integration SAGE : simplifier votre comptabilite au quotidien",
    excerpt:
      "Comment l'integration d'un ERP adapte permet de gagner en fiabilite et en productivite comptable.",
    date: "25 juin 2026",
    category: "Comptabilite",
    imageSrc: "/images/services/expertise-4.png",
  },
];
