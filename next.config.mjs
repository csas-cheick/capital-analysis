/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  async redirects() {
    return [
      {
        source: "/AboutPage",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/GoalsPage",
        destination: "/objectifs",
        permanent: true,
      },
      {
        source: "/services/IngenierieFinanciere",
        destination: "/activites/ingenierie-financiere",
        permanent: true,
      },
      {
        source: "/services/ITDeveloppement",
        destination: "/activites/departement-it-developpement",
        permanent: true,
      },
      {
        source: "/services/EtudeConseil",
        destination: "/activites/etude-et-conseil",
        permanent: true,
      },
      {
        source: "/services/SuiviAssistanceComptable",
        destination: "/activites/suivi-et-assistance-comptable",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
