import { FC } from "react";
import { 
  FileText, 
  Target, 
  Users, 
  Lightbulb, 
  BarChart3,
  CheckCircle,
  ArrowRight,
  BookOpen,
  PieChart,
  Activity
} from "lucide-react";
import { Link } from "react-router-dom";
import AppHeader from "../../layout/AppHeaders";

const EtudeConseil: FC = () => {
  const services = [
    {
      icon: BarChart3,
      title: "Études de Marché",
      description: "Analyses approfondies de votre marché pour identifier opportunités et tendances stratégiques.",
      features: [
        "Analyse de la concurrence",
        "Étude de la demande",
        "Segmentation du marché",
        "Études de faisabilité"
      ]
    },
    {
      icon: Target,
      title: "Stratégie d'Entreprise",
      description: "Élaboration de plans stratégiques alignés sur votre vision et vos objectifs de croissance.",
      features: [
        "Business plan complet",
        "Plan de développement",
        "Stratégie d'expansion",
        "Roadmap stratégique"
      ]
    },
    {
      icon: PieChart,
      title: "Audit & Diagnostic",
      description: "Évaluation complète de vos processus pour identifier les axes d'amélioration et d'optimisation.",
      features: [
        "Audit organisationnel",
        "Diagnostic financier",
        "Analyse des performances",
        "Recommandations d'actions"
      ]
    },
    {
      icon: Lightbulb,
      title: "Conseil en Management",
      description: "Accompagnement personnalisé pour améliorer votre gestion et développer votre leadership.",
      features: [
        "Coaching dirigeants",
        "Amélioration des processus",
        "Gestion du changement",
        "Optimisation organisationnelle"
      ]
    }
  ];

  const methodologies = [
    {
      title: "Analyse Approfondie",
      description: "Collecte et analyse rigoureuse des données pour une compréhension complète de votre situation",
      icon: BookOpen
    },
    {
      title: "Diagnostic Stratégique",
      description: "Identification des forces, faiblesses, opportunités et menaces de votre organisation",
      icon: Activity
    },
    {
      title: "Recommandations",
      description: "Propositions concrètes et actionnables basées sur les meilleures pratiques du marché",
      icon: Lightbulb
    },
    {
      title: "Accompagnement",
      description: "Suivi et support dans la mise en œuvre des recommandations stratégiques",
      icon: Users
    }
  ];

  const sectors = [
    "Commerce & Distribution",
    "Industrie & Manufacturing",
    "Services Financiers",
    "Technologies & IT",
    "Agriculture & Agrobusiness",
    "Transport & Logistique",
    "Santé & Pharmaceutique",
    "Énergie & Utilities"
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
              <FileText className="w-4 h-4 mr-2" />
              Conseil & Stratégie
            </div>

            {/* Titre */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
              Étude &
              <span className="block text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
                Conseil
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Accompagnement stratégique sur mesure pour transformer votre vision en réalité. Études de marché, diagnostic d'entreprise et conseil en management pour une croissance durable.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <button className="group bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl">
                  <span className="flex items-center justify-center">
                    Demander une Consultation
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
              <BookOpen className="w-4 h-4 mr-2" />
              Services de Conseil
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Expertise
              <span className="block text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text">
                Stratégique
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des solutions d'études et de conseil pour piloter votre croissance
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

      {/* Méthodologie */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Notre
              <span className="block text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text">
                Méthodologie
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {methodologies.map((method, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {method.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {method.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Secteurs d'Expertise */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Secteurs
              <span className="block text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text">
                d'Expertise
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Une expertise reconnue dans de nombreux secteurs d'activité
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {sectors.map((sector, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200"
              >
                <div className="font-semibold text-gray-900">{sector}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-300 to-cyan-200 text-gray-800">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
             <h2 className="text-3xl sm:text-4xl font-bold mb-6 drop-shadow-sm">
                 Prêt à Transformer Votre Stratégie ?
             </h2>
             <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                 Bénéficiez de l'expertise de nos consultants pour atteindre vos objectifs
             </p>
             <Link to="/contact">
                 <button className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
                     <span className="flex items-center justify-center">
                         Demander une Consultation
                         <ArrowRight className="w-5 h-5 ml-2" />
                     </span>
                 </button>
             </Link>
         </div>
     </section>
    </div>
  );
};

export default EtudeConseil;
