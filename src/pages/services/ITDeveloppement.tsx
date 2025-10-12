import { FC } from "react";
import { 
  Code, 
  Monitor, 
  Smartphone, 
  Database, 
  Cpu,
  CheckCircle,
  ArrowRight,
  Settings,
  Network
} from "lucide-react";
import { Link } from "react-router-dom";
import AppHeader from "../../layout/AppHeaders";

const ITDeveloppement: FC = () => {
  const services = [
    {
      icon: Monitor,
      title: "Solutions SAGE",
      description: "Intégration, paramétrage et accompagnement autour des solutions SAGE pour une gestion efficace et centralisée de votre activité.",
      features: [
        "Installation et configuration des modules SAGE",
        "Formation des utilisateurs",
        "Assistance et maintenance",
        "Optimisation des processus de gestion"
      ]
    },
    {
      icon: Code,
      title: "Développement Web & Mobile",
      description: "Conception et développement d’applications web et mobiles modernes adaptées aux besoins de votre entreprise.",
      features: [
        "Applications de gestion (comptabilité, RH, stock, etc.)",
        "Applications web responsive",
        "Applications mobiles iOS / Android",
        "Plateformes e-commerce"
      ]
    },
    {
    icon: Network,
    title: "Réseaux & Serveurs",
    description: "Conception, configuration et maintenance de vos infrastructures réseau et serveurs pour garantir sécurité et performance.",
    features: [
      "Installation et configuration de serveurs (Windows, Linux)",
      "Gestion des réseaux locaux (LAN, Wi-Fi)",
      "Sécurisation et supervision du réseau",
      "Sauvegarde et restauration des systèmes"
    ]
    },
    {
      icon: Settings,
      title: "Maintenance & Support",
      description: "Accompagnement continu et maintenance de vos systèmes informatiques pour assurer leur performance.",
      features: [
        "Support technique réactif",
        "Mises à jour régulières",
        "Monitoring proactif",
        "Intervention sur site"
      ]
    }
  ];

  const projects = [
    {
      icon: Monitor,
      title: "CapitalPetroleum",
      description: "Plateforme complète de gestion des stations-service",
      tags: ["Web"]
    },
    {
      icon: Database,
      title: "SAGE Integration",
      description: "Solutions de comptabilité et gestion d'entreprise",
      tags: ["Desktop"]
    },
    {
      icon: Smartphone,
      title: "Applications Métiers",
      description: "Développement sur mesure pour divers secteurs",
      tags: ["Mobile", "Web"]
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Analyse des Besoins",
      description: "Étude approfondie de vos processus et identification des solutions optimales"
    },
    {
      number: "02",
      title: "Conception & Design",
      description: "Création de maquettes et architecture technique validées avec vous"
    },
    {
      number: "03",
      title: "Développement",
      description: "Réalisation par nos équipes avec tests et validations régulières"
    },
    {
      number: "04",
      title: "Déploiement & Formation",
      description: "Mise en production et accompagnement de vos équipes"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <AppHeader />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        {/* Éléments décoratifs */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center bg-blue-600/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-blue-500/30">
              <Code className="w-4 h-4 mr-2" />
              IT & Technologies
            </div>

            {/* Titre */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
              Département IT &
              <span className="block text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
                Développement
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Solutions digitales innovantes et sur mesure. Du développement d'applications à l'intégration de systèmes, nous transformons vos défis technologiques en opportunités de croissance.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <button className="group bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl">
                  <span className="flex items-center justify-center">
                    Démarrer un Projet
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </Link>
              <a href="#services">
                <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-white/20">
                  Nos Services
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Détaillés */}
      <section id="services" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* En-tête de section */}
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Cpu className="w-4 h-4 mr-2" />
              Nos Services IT
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Solutions
              <span className="block text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text">
                Technologiques
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des technologies de pointe pour digitaliser et optimiser votre entreprise
            </p>
          </div>

          {/* Grille de services */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nos Engagements */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Nos
              <span className="block text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text">
                Engagements
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des principes qui guident chacune de nos réalisations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {/* Engagement 1 - Performance */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 lg:p-8 hover:shadow-xl transition-all duration-300 border border-blue-100 group">
              <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Cpu className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Performance garantie
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Des solutions rapides et fiables pour optimiser vos opérations
              </p>
            </div>

            {/* Engagement 2 - Sécurité */}
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-6 lg:p-8 hover:shadow-xl transition-all duration-300 border border-emerald-100 group">
              <div className="w-14 h-14 bg-gradient-to-r from-emerald-600 to-green-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Database className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Sécurité avant tout
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Protection complète de vos données et systèmes critiques
              </p>
            </div>

            {/* Engagement 3 - Simplicité */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 lg:p-8 hover:shadow-xl transition-all duration-300 border border-purple-100 group">
              <div className="w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Monitor className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Simplicité d'utilisation
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Interfaces claires et intuitives pour vos équipes
              </p>
            </div>

            {/* Engagement 4 - Évolution */}
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-6 lg:p-8 hover:shadow-xl transition-all duration-300 border border-orange-100 group">
              <div className="w-14 h-14 bg-gradient-to-r from-orange-600 to-yellow-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Settings className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Évolution continue
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Systèmes modulaires et prêts pour l'avenir
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projets Phares */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Projets
              <span className="block text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text">
                Réalisés
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <project.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre Processus */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Notre
              <span className="block text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text">
                Processus
              </span>
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {step.number}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 mt-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-100 to-blue-200 text-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                 Prêt à Digitaliser Votre Entreprise ?
              </h2>
              <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                 Discutons de votre projet et créons ensemble la solution parfaite.
              </p>
              <Link to="/contact">
                  <button className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
                      <span className="flex items-center justify-center">
                          Démarrer un Projet
                          <ArrowRight className="w-5 h-5 ml-2" />
                      </span>
                  </button>
              </Link>
          </div>
     </section>
    </div>
  );
};

export default ITDeveloppement;
