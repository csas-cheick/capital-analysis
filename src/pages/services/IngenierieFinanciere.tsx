import { FC } from "react";
import { 
  TrendingUp, 
  BarChart3, 
  PieChart, 
  DollarSign, 
  LineChart, 
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import AppHeader from "../../layout/AppHeaders";

const IngenierieFinanciere: FC = () => {
  const services = [
    {
      icon: BarChart3,
      title: "Modélisation Financière",
      description: "Création de modèles prévisionnels robustes pour anticiper vos besoins et optimiser vos décisions d'investissement.",
      features: [
        "Modèles de prévisions de trésorerie",
        "Analyse de scénarios multiples",
        "Projections financières sur 3-5 ans",
        "Évaluation de la rentabilité des projets"
      ]
    },
    {
      icon: PieChart,
      title: "Structuration Financière",
      description: "Optimisation de votre structure de capital et recherche de financements adaptés à votre stratégie de croissance.",
      features: [
        "Structuration de levées de fonds",
        "Montage de dossiers bancaires",
        "Négociation avec investisseurs",
        "Optimisation de la structure de capital"
      ]
    },
    {
      icon: LineChart,
      title: "Analyse de Performance",
      description: "Analyse approfondie de vos indicateurs clés pour identifier les leviers d'amélioration et maximiser votre rentabilité.",
      features: [
        "Tableaux de bord personnalisés",
        "Analyse des ratios financiers",
        "Recommandations stratégiques"
      ]
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Diagnostic Initial",
      description: "Analyse approfondie de votre situation financière actuelle et identification des besoins"
    },
    {
      number: "02",
      title: "Stratégie Sur Mesure",
      description: "Élaboration d'une stratégie financière adaptée à vos objectifs et contraintes"
    },
    {
      number: "03",
      title: "Mise en Œuvre",
      description: "Déploiement des solutions avec accompagnement étape par étape"
    },
    {
      number: "04",
      title: "Suivi & Optimisation",
      description: "Monitoring continu et ajustements pour garantir l'atteinte des objectifs"
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
              <TrendingUp className="w-4 h-4 mr-2" />
              Finance & Stratégie
            </div>

            {/* Titre */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
              Ingénierie
              <span className="block text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
                Financière
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Optimisez votre stratégie financière avec nos experts. Modélisation, structuration et évaluation pour propulser votre croissance et maximiser votre rentabilité.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <button className="group bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl">
                  <span className="flex items-center justify-center">
                    Demander un Devis
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
              <DollarSign className="w-4 h-4 mr-2" />
              Nos Expertises
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Solutions d'Ingénierie
              <span className="block text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text">
                Financière
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des services complets pour optimiser votre gestion financière et accélérer votre croissance
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

      {/* Notre Processus */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Notre
              <span className="block text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text">
                Méthodologie
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
      <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-300 to-cyan-200 text-gray-800">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
             <h2 className="text-3xl sm:text-4xl font-bold mb-6 drop-shadow-sm">
                 Prêt à Optimiser Votre Stratégie Financière ?
             </h2>
             <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                 Contactez nos experts pour une consultation personnalisée
             </p>
             <Link to="/contact">
                 <button className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
                      <span className="flex items-center justify-center">
                          Demander un Devis Gratuit
                          <ArrowRight className="w-5 h-5 ml-2" />
                      </span>
                 </button>
             </Link>
         </div>
     </section>
    </div>
  );
};

export default IngenierieFinanciere;
