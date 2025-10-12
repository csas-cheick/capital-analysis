import { FC } from "react";
import { 
  Calculator, 
  FileText, 
  TrendingUp, 
  Shield, 
  Users,
  CheckCircle,
  ArrowRight,
  BookOpen,
  ClipboardCheck,
  Scale,
  Building
} from "lucide-react";
import { Link } from "react-router-dom";
import AppHeader from "../../layout/AppHeaders";

const SuiviAssistanceComptable: FC = () => {
  const services = [
    {
      icon: Calculator,
      title: "Tenue de Comptabilité",
      description: "Gestion complète de votre comptabilité générale et auxiliaire avec rigueur et conformité totale.",
      features: [
        "Saisie des écritures comptables",
        "Lettrage et rapprochements",
        "États financiers mensuels",
        "Grand livre et balance"
      ]
    },
    {
      icon: FileText,
      title: "Déclarations Fiscales",
      description: "Préparation et dépôt de toutes vos déclarations fiscales dans les délais réglementaires.",
      features: [
        "TVA et impôts sur les sociétés",
        "Déclarations sociales",
        "Taxes professionnelles",
        "Optimisation fiscale"
      ]
    },
    {
      icon: ClipboardCheck,
      title: "Audit & Contrôle de Gestion",
      description: "Vérification de vos comptes et mise en place de tableaux de bord pour un pilotage efficace.",
      features: [
        "Audit comptable",
        "Contrôle de gestion",
        "Tableaux de bord",
        "Analyse des écarts"
      ]
    },
    {
      icon: Scale,
      title: "Conseil Juridique & Fiscal",
      description: "Accompagnement dans vos décisions juridiques et optimisation de votre situation fiscale.",
      features: [
        "Conseil en droit des sociétés",
        "Optimisation fiscale",
        "Restructurations",
        "Conformité réglementaire"
      ]
    }
  ];

  const advantages = [
    {
      icon: Shield,
      title: "Conformité Garantie",
      description: "Respect strict des normes comptables et fiscales en vigueur au Niger et dans la zone UEMOA"
    },
    {
      icon: TrendingUp,
      title: "Optimisation Continue",
      description: "Identification proactive des opportunités d'optimisation fiscale et financière"
    },
    {
      icon: Users,
      title: "Équipe Dédiée",
      description: "Des experts comptables certifiés à votre écoute pour un accompagnement personnalisé"
    }
  ];

  const packages = [
    {
      name: "Essentiel",
      description: "Pour les petites entreprises",
      price: "Sur Devis",
      features: [
        "Tenue de comptabilité",
        "Déclarations fiscales de base",
        "États financiers trimestriels",
        "Support par email"
      ],
      highlighted: false
    },
    {
      name: "Professionnel",
      description: "Pour les PME en croissance",
      price: "Sur Devis",
      features: [
        "Tenue de comptabilité complète",
        "Toutes déclarations fiscales",
        "États financiers mensuels",
        "Conseil fiscal inclus",
        "Tableaux de bord",
        "Support prioritaire"
      ],
      highlighted: true
    },
    {
      name: "Entreprise",
      description: "Pour les grandes structures",
      price: "Sur Devis",
      features: [
        "Service comptable complet",
        "Audit & contrôle de gestion",
        "Conseil stratégique",
        "Optimisation fiscale avancée",
        "Reporting personnalisé",
        "Accompagnement sur site",
        "Support 24/7"
      ],
      highlighted: false
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Analyse de Vos Besoins",
      description: "Évaluation de votre situation comptable et définition de vos besoins spécifiques"
    },
    {
      number: "02",
      title: "Mise en Place",
      description: "Configuration des outils, récupération des données et paramétrage"
    },
    {
      number: "03",
      title: "Gestion Quotidienne",
      description: "Prise en charge de votre comptabilité au quotidien avec rigueur"
    },
    {
      number: "04",
      title: "Reporting & Conseil",
      description: "Points réguliers et conseils pour optimiser votre gestion"
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
              <Calculator className="w-4 h-4 mr-2" />
              Expertise Comptable
            </div>

            {/* Titre */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
              Suivi & Assistance
              <span className="block text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
                Comptable
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Accompagnement complet de votre comptabilité avec des experts dédiés à votre réussite. Conformité, optimisation et conseil pour une gestion financière sereine et performante.
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
              <BookOpen className="w-4 h-4 mr-2" />
              Services Comptables
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Expertise
              <span className="block text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text">
                Comptable Complète
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Une gamme complète de services pour votre tranquillité d'esprit
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

      {/* Forfaits */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Nos
              <span className="block text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text">
                Formules
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des solutions adaptées à chaque taille d'entreprise
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative rounded-2xl p-8 border-2 transition-all duration-300 ${
                  pkg.highlighted
                    ? "border-blue-500 shadow-2xl scale-105 bg-gradient-to-br from-blue-50 to-white"
                    : "border-gray-200 shadow-lg hover:shadow-xl bg-white"
                }`}
              >
                {pkg.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Le Plus Populaire
                    </span>
                  </div>
                )}

                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <Building className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 text-center mb-2">
                  {pkg.name}
                </h3>
                <p className="text-gray-600 text-center mb-4">
                  {pkg.description}
                </p>

                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-gray-900">
                    {pkg.price}
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link to="/contact">
                  <button
                    className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                      pkg.highlighted
                        ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:from-blue-700 hover:to-cyan-600 shadow-lg"
                        : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                    }`}
                  >
                    Choisir cette Formule
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre Processus */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Comment Nous
              <span className="block text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text">
                Travaillons
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

      {/* Avantages */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <advantage.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {advantage.title}
                </h3>
                <p className="text-gray-600">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-300 to-cyan-200 text-gray-800">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
             <h2 className="text-3xl sm:text-4xl font-bold mb-6 drop-shadow-sm">
                 Confiez Votre Comptabilité aux Experts
             </h2>
             <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                 Concentrez-vous sur votre cœur de métier, nous nous occupons du reste
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

export default SuiviAssistanceComptable;
