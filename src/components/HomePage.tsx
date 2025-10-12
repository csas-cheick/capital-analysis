import { FC, useState, useEffect, useCallback } from "react";
import {
  ArrowRight,
  BarChart3,
  TrendingUp,
  Users,
  Banknote,
  Star,
  CheckCircle,
  Award,
  Target,
  Eye,
  Quote,
  Monitor,
  ShieldCheck,
  Fuel,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import backgroundVideo from "../assets/video/capital_petroleum_video.mp4";

const HomePage: FC = () => {
  const [activeService, setActiveService] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Mouhamed Diaou",
      position: "Alimentation Fadak",
      content:
        "Capital Analysis a révolutionné notre gestion financière. Leur expertise en ingénierie financière nous a permis d'optimiser nos flux de trésorerie de 40%.",
      rating: 5,
      avatar: "MD",
    },
    {
      name: "Mouhamed Moucharraf",
      position: "Tech-Fadak",
      content:
        "Grâce à leurs logiciels de gestion sur mesure, nous avons automatisé 70% de nos processus. Un gain de temps et d'efficacité considérable.",
      rating: 5,
      avatar: "MM",
    },
    {
      name: "Ibrahim Moussa",
      position: "Tech Solutions",
      content:
        "Grâce à leurs logiciels de gestion sur mesure, nous avons automatisé 70% de nos processus. Un gain de temps et d'efficacité considérable.",
      rating: 5,
      avatar: "IM",
    },
  ];

  const goToNextTestimonial = useCallback(() => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const goToPrevTestimonial = useCallback(() => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  }, [testimonials.length]);

  useEffect(() => {
    setIsVisible(true);

    const testimonialInterval = setInterval(() => {
      goToNextTestimonial();
    }, 5000);

    return () => {
      clearInterval(testimonialInterval);
    };
  }, [goToNextTestimonial]);

  const services = [
    {
      icon: Banknote,
      title: "Ingénierie Financière",
      description:
        "Nous accompagnons entreprises, investisseurs et institutions dans la conception de solutions financières innovantes et adaptées, alliant rigueur analytique et vision stratégique.",
      features: [
        "Modélisation et prévisions",
        "Structuration financière",
        "Analyse et optimisation de la performance",
      ],
      color: "from-emerald-500 to-green-400",
      bgColor: "bg-emerald-500/10",
      link: "/activites/ingenierie-financiere",
    },
    {
      icon: Monitor,
      title: "IT & Développement",
      description:
        "Logiciel de gestion, création de plateformes digitales performantes et intégration de solutions technologiques avancées.",
      features: [
        "Logiciel de gestion : SAGE",
        "Plateforme de gestion des stations service : CapitalPetroleum",
        "Fourniture & Installation de matériel informatique",
      ],
      color: "from-red-500 to-orange-400",
      bgColor: "bg-red-500/10",
      link: "/activites/departement-it-developpement",
    },
    {
      icon: BarChart3,
      title: "Etude & Conseil",
      description:
        "Des analyses approfondies et des recommandations stratégiques pour guider vos décisions et maximiser votre impact sur le marché.",
      features: [],
      color: "from-blue-500 to-cyan-400",
      bgColor: "bg-blue-500/10",
      link: "/activites/etude-et-conseil",
    },
    {
      icon: Users,
      title: "Suivi & Assistance Comptable",
      description:
        "Accompagnement complet de votre comptabilité avec des experts dédiés à votre réussite et conformité.",
      features: [
        "Tenue de comptabilité",
        "Déclarations fiscales",
        "Audit contrôle de gestion",
        "Conseil juridique",
      ],
      color: "from-purple-500 to-pink-400",
      bgColor: "bg-purple-500/10",
      link: "/activites/suivi-et-assistance-comptable",
    },
  ];

  const stats = [
    { number: "2", label: "Développements", icon: Users },
    { number: "98%", label: "Taux de Satisfaction", icon: Star },
    { number: "24/7", label: "Support Client", icon: Award },
    { number: "100%", label: "Clients Satisfaits", icon: CheckCircle },
  ];

  const achievements = [
    {
      title: "Innovation Technologique",
      description: "Solutions digitales primées en Afrique de l'Ouest",
    },
    {
      title: "Équipe Experte",
      description:
        "Consultants certifiés et formés aux dernières technologies",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* SECTION HERO PRINCIPAL - CAPITAL ANALYSIS */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">

        <Header />

        <div className="absolute top-4 left-2 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse z-10"></div>
        {/* Cercle décoratif animé en bas à droite */}
        <div className="absolute bottom-4 right-2 w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000 z-10"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 sm:pt-32 sm:pb-16 lg:pt-40 lg:pb-32 z-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
            <div
              className={`transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="inline-flex items-center bg-blue-600/20 text-blue-300 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4 lg:mb-6 backdrop-blur-sm border border-blue-500/30 shadow-md">
                <BarChart3 className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                <span className="truncate">Solutions Financières & IT de Croissance</span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 lg:mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent leading-tight">
                La Perspective de
                <span className="block text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
                  Vos Chiffres
                </span>
              </h1>

              <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-300 mb-4 sm:mb-6 lg:mb-8 leading-relaxed">
                Transformez vos données en décisions stratégiques avec nos solutions d'ingénierie financière, nos logiciels de gestion sur mesure et notre expertise IT de pointe.
              </p>

              {/* Bouton CTA responsive */}
              <div className="mb-6 sm:mb-8 lg:mb-10">
                <Link to="/contact">
                  <button className="group bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-4 py-2 sm:px-6 sm:py-2.5 lg:px-8 lg:py-3 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-blue-500/30 w-full sm:w-auto">
                    <span className="flex items-center justify-center text-sm sm:text-base lg:text-lg">
                      Démarrer la Transformation
                      <ArrowRight className="w-4 h-4 sm:w-4 sm:h-4 lg:w-5 lg:h-5 ml-2 lg:ml-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                </Link>
              </div>

              {/* Stats grid responsive */}
              <div className="grid grid-cols-3 divide-x divide-gray-700/50 border border-gray-700/50 rounded-lg sm:rounded-xl p-2 sm:p-3 bg-white/5 backdrop-blur-sm">
                {stats.slice(0, 3).map((stat, index) => (
                  <div key={index} className="text-center px-1 sm:px-2 lg:px-4">
                    <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-white mb-0.5 sm:mb-1">
                      {stat.number}
                    </div>
                    <div className="text-gray-400 text-xs sm:text-xs lg:text-sm leading-tight">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Colonne Visuelle responsive */}
            <div
              className={`relative h-48 sm:h-64 md:h-72 lg:h-80 xl:h-96 transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              } hidden md:block lg:block`}
            >
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Contenu visuel par défaut (diagrammes abstraits) */}
                <div className="absolute inset-0 flex items-end justify-center perspective-1000">
                  <div className="w-6 h-20 bg-blue-500 rounded-t-lg shadow-blue-500/50 transform rotate-x-10 rotate-y-5 animate-pulse-slow"></div>
                  <div className="w-6 h-40 bg-cyan-400 rounded-t-lg shadow-cyan-400/50 transform rotate-x-10 rotate-y-0 ml-4 animate-pulse-slow delay-100"></div>
                  <div className="w-6 h-28 bg-emerald-400 rounded-t-lg shadow-emerald-400/50 transform rotate-x-10 rotate-y-3 ml-4 animate-pulse-slow delay-200"></div>
                  <div className="w-6 h-56 bg-blue-400 rounded-t-lg shadow-blue-400/50 transform rotate-x-10 rotate-y-7 ml-4 animate-pulse-slow delay-300"></div>
                  <div className="w-6 h-36 bg-cyan-300 rounded-t-lg shadow-cyan-300/50 transform rotate-x-10 rotate-y-2 ml-4 animate-pulse-slow delay-400"></div>
                </div>

                {/* Badges flottants responsives */}
                <div className="absolute top-1/4 left-1/4 w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 bg-slate-700/70 backdrop-blur-md rounded-full border border-blue-400/30 shadow-2xl p-2 sm:p-3 lg:p-4 flex flex-col items-center justify-center text-center transform rotate-6 animate-float">
                  <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 text-green-400 mb-0.5 lg:mb-1" />
                  <span className="text-white font-bold text-sm sm:text-base lg:text-lg xl:text-xl">Croissance</span>
                </div>

                <div className="absolute bottom-1/4 right-1/4 w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 bg-slate-700/70 backdrop-blur-md rounded-xl border border-emerald-400/30 shadow-2xl p-2 sm:p-3 lg:p-4 flex flex-col items-center justify-center text-center transform -rotate-3 animate-float-delay">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 text-emerald-400 mb-0.5 lg:mb-1" />
                  <span className="text-white font-bold text-sm sm:text-base lg:text-lg xl:text-xl">Optimisation</span>
                </div>

                <div className="absolute top-5 right-5 w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 bg-slate-700/70 backdrop-blur-md rounded-full border border-cyan-400/30 shadow-2xl p-2 sm:p-3 lg:p-4 flex flex-col items-center justify-center text-center transform -rotate-12 animate-float-delay-2">
                  <Monitor className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 text-cyan-400 mb-0.5 lg:mb-1" />
                  <span className="text-white font-bold text-sm sm:text-base lg:text-lg xl:text-xl">Déploiement</span>
                </div>

                <div className="absolute bottom-5 left-5 w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 bg-slate-700/70 backdrop-blur-md rounded-xl border border-red-400/30 shadow-2xl p-2 sm:p-3 lg:p-4 flex flex-col items-center justify-center text-center transform rotate-12 animate-float-delay-3">
                  <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 text-red-400 mb-0.5 lg:mb-1" />
                  <span className="text-white font-bold text-sm sm:text-base lg:text-lg xl:text-xl">Sécurité</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SÉPARATEUR ENTRE LES DEUX HERO */}
      <section className="relative py-8 sm:py-12 lg:py-16 bg-gradient-to-r from-slate-100 via-white to-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Ligne de séparation avec éléments décoratifs */}
          <div className="flex items-center justify-center space-x-4 sm:space-x-6 lg:space-x-8">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-300 to-slate-400"></div>
            
            {/* Badge central */}
            <div className="flex items-center space-x-2 sm:space-x-3 bg-white rounded-full px-4 py-2 sm:px-6 sm:py-3 shadow-lg border border-slate-200">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-slate-600 font-medium text-xs sm:text-sm">Nos Solutions</span>
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse delay-300"></div>
            </div>
            
            <div className="flex-1 h-px bg-gradient-to-r from-slate-400 via-slate-300 to-transparent"></div>
          </div>

          {/* Points décoratifs */}
          <div className="flex justify-center mt-6 sm:mt-8 space-x-2 sm:space-x-3">
            <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-400 rounded-full opacity-60"></div>
            <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-slate-400 rounded-full opacity-40"></div>
            <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-emerald-400 rounded-full opacity-60"></div>
          </div>
        </div>
      </section>

      {/* SECTION CAPITAL PETROLEUM - HERO PROFESSIONNEL */}
      <section className="relative bg-gradient-to-br from-slate-800 via-emerald-900 to-slate-900 text-white overflow-hidden">
        {/* Vidéo en arrière-plan */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-15"
          src={backgroundVideo}
          autoPlay
          loop
          muted
          playsInline
          controls={false}
        ></video>

        <div className="absolute inset-0 bg-black opacity-40 z-10"></div>

        {/* Éléments de décoration spécifiques au petroleum */}
        <div className="absolute top-8 right-8 w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-emerald-500/10 rounded-full blur-3xl animate-pulse z-10"></div>
        <div className="absolute bottom-8 left-8 w-24 h-24 sm:w-36 sm:h-36 lg:w-44 lg:h-44 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000 z-10"></div>

        {/* Container principal */}
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 xl:py-32 z-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
            
            {/* Contenu textuel */}
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center bg-emerald-600/20 text-emerald-300 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 backdrop-blur-sm border border-emerald-500/30 shadow-md">
                <Fuel className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                <span>Solution de Gestion Pétrolière</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                <span className="text-white">CapitalPetroleum</span>
                <span className="block text-transparent bg-gradient-to-r from-emerald-400 to-orange-400 bg-clip-text">
                  Maîtrise Totale
                </span>
              </h2>

              <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                Solution complète de gestion automatisée pour stations-service : contrôle des stocks, supervision des pompes, reporting financier en temps réel et optimisation opérationnelle.
              </p>

              {/* Fonctionnalités clés */}
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-emerald-500/20">
                  <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Monitor className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm sm:text-base text-gray-200">Gestion Pompes</span>
                </div>
                <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-orange-500/20">
                  <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm sm:text-base text-gray-200">Stocks & Inventaire</span>
                </div>
                <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-blue-500/20">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Banknote className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm sm:text-base text-gray-200">Reporting Financier</span>
                </div>
                <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-purple-500/20">
                  <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm sm:text-base text-gray-200">Sécurité Avancée</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link to="/contact">
                  <button className="group bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white px-6 py-3 sm:px-8 sm:py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-emerald-500/30 w-full sm:w-auto">
                    <span className="flex items-center justify-center text-sm sm:text-base">
                      Demander une Démo
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                </Link>
                <Link to="/capitalpetroleum">
                  <button className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 sm:px-8 sm:py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-white/20 w-full sm:w-auto">
                    <span className="flex items-center justify-center text-sm sm:text-base">
                      Voir les Fonctionnalités
                      <Eye className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:scale-110 transition-transform" />
                    </span>
                  </button>
                </Link>
              </div>
            </div>

            {/* Contenu visuel */}
            <div className="order-1 lg:order-2 relative">
              <div className="relative bg-gradient-to-br from-emerald-900/50 to-slate-900/50 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-10 border border-emerald-500/20 shadow-2xl">
                
                {/* Logo/Badge central */}
                <div className="text-center mb-6 sm:mb-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-gradient-to-br from-emerald-500 to-orange-500 rounded-full shadow-2xl shadow-emerald-500/30 mb-4">
                    <Fuel className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">CapitalPetroleum</h3>
                  <p className="text-sm sm:text-base text-emerald-300">Station Management System</p>
                </div>

                {/* Stats en grille */}
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-emerald-500/10">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-emerald-400 mb-1">99.9%</div>
                    <div className="text-xs sm:text-sm text-gray-300">Disponibilité</div>
                  </div>
                  <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-orange-500/10">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-400 mb-1">24/7</div>
                    <div className="text-xs sm:text-sm text-gray-300">Surveillance</div>
                  </div>
                  <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-blue-500/10">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-400 mb-1">Real-time</div>
                    <div className="text-xs sm:text-sm text-gray-300">Reporting</div>
                  </div>
                  <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-purple-500/10">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-400 mb-1">99%</div>
                    <div className="text-xs sm:text-sm text-gray-300">Efficacité</div>
                  </div>
                </div>

                {/* Badge certifié */}
                <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg animate-pulse">
                  Déployé
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section Responsive */}
      <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <div className="inline-flex items-center bg-blue-100 text-blue-700 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4 lg:mb-6">
              <Target className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
              Nos Expertises
            </div>
            {/* Titre responsive progressif */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6">
              Des Solutions
              <span className="block text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text">
                Sur Mesure
              </span>
            </h2>
            {/* Description responsive */}
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Découvrez notre gamme complète de services conçus pour accélérer
              votre croissance et optimiser vos performances financières et
              opérationnelles.
            </p>
           </div>

          {/* Grille services responsive améliorée */}
          <div className="grid gap-4 sm:gap-6 lg:gap-8 md:grid-cols-2">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group bg-white rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-1 sm:hover:-translate-y-2 border-l-4 ${
                  activeService === index
                    ? "border-blue-500 shadow-2xl"
                    : "border-transparent"
                }`}
                onMouseEnter={() => setActiveService(index)}
              >
                <div className="flex items-start space-x-3 sm:space-x-4 lg:space-x-6">
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 bg-gradient-to-r ${service.color} rounded-lg lg:rounded-xl xl:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg flex-shrink-0`}
                  >
                    <service.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 text-white" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2 lg:mb-3 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-3 lg:mb-4 leading-relaxed text-xs sm:text-sm lg:text-base">
                      {service.description}
                    </p>

                    {service.features.length > 0 && (
                      <div className="grid grid-cols-1 gap-1 lg:gap-2 mb-3 lg:mb-4">
                        {service.features.slice(0, 3).map(
                          (feature, featureIndex) => (
                            <div
                              key={featureIndex}
                              className="flex items-start text-xs lg:text-sm text-gray-700"
                            >
                              <CheckCircle className="w-3 h-3 lg:w-4 lg:h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                              <span className="leading-tight">{feature}</span>
                            </div>
                          )
                        )}
                      </div>
                    )}

                    <Link to={service.link}>
                      <button className="group/btn flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors text-xs sm:text-sm">
                        En savoir plus
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Pourquoi Nous Choisir Responsive */}
      <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Layout responsive amélioré */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-start">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center bg-emerald-100 text-emerald-700 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4 lg:mb-6">
                <Eye className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                Notre Vision
              </div>

              {/* Titre responsive progressif */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-8">
                Pourquoi Nous
                <span className="block text-transparent bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text">
                  Choisir ?
                </span>
              </h2>

              {/* Description responsive */}
              <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 mb-4 sm:mb-6 lg:mb-8 leading-relaxed">
                Chez Capital Analysis, nous combinons expertise technique,
                innovation et accompagnement personnalisé pour transformer vos
                défis en opportunités de croissance durable.
              </p>

              <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3 sm:space-x-4 group">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-lg lg:rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-1 lg:mb-2">
                        {achievement.title}
                      </h4>
                      <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              {/* Stats Grid responsive améliorée */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6 xl:gap-8">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-white to-gray-50 rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 group text-center border border-gray-100"
                  >
                    <div
                      className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 xl:w-16 xl:h-16 bg-gradient-to-r ${
                        index === 0
                          ? "from-blue-500 to-cyan-400"
                          : index === 1
                          ? "from-emerald-500 to-green-400"
                          : index === 2
                          ? "from-purple-500 to-pink-400"
                          : "from-orange-500 to-yellow-400"
                      } rounded-lg lg:rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3 lg:mb-4 xl:mb-6 group-hover:scale-110 transition-transform`}
                    >
                      <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 xl:w-8 xl:h-8 text-white" />
                    </div>
                    <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-1 sm:mb-2 lg:mb-3">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Badge flottant responsive */}
              <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 lg:-top-4 lg:-right-4 xl:-top-6 xl:-right-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 sm:px-3 sm:py-1 lg:px-4 lg:py-2 rounded-full text-xs sm:text-xs lg:text-sm font-bold shadow-lg animate-bounce">
                #1 au Niger
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Témoignages Responsive */}
      <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <div className="inline-flex items-center bg-blue-100 text-blue-700 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4 lg:mb-6">
              <Quote className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
              Témoignages Clients
            </div>
            {/* Titre responsive progressif */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6">
              Ils Nous Font
              <span className="block text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text">
                Confiance
              </span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Card témoignage responsive */}
            <div className="relative bg-white rounded-lg sm:rounded-xl lg:rounded-2xl xl:rounded-3xl p-6 sm:p-8 lg:p-10 xl:p-12 shadow-2xl">
              {/* Boutons navigation desktop */}
              <button
                onClick={goToPrevTestimonial}
                className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 p-2 lg:p-3 rounded-full bg-blue-500/10 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 z-10 hidden md:block"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
              </button>

              <button
                onClick={goToNextTestimonial}
                className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 p-2 lg:p-3 rounded-full bg-blue-500/10 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 z-10 hidden md:block"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
              </button>

              {/* Icône citation responsive */}
              <div className="absolute -top-3 sm:-top-4 lg:-top-6 left-1/2 transform -translate-x-1/2">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                </div>
              </div>

              <div className="text-center">
                {/* Étoiles responsive */}
                <div className="flex justify-center mb-3 sm:mb-4 lg:mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-yellow-400 fill-current"
                      />
                    )
                  )}
                </div>

                {/* Citation responsive */}
                <blockquote className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 mb-4 sm:mb-6 lg:mb-8 leading-relaxed italic transition-opacity duration-500">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>

                {/* Profil auteur responsive */}
                <div className="flex items-center justify-center space-x-2 sm:space-x-3 lg:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base lg:text-lg">
                    {testimonials[currentTestimonial].avatar}
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-gray-900 text-sm sm:text-base lg:text-lg">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-xs sm:text-sm lg:text-base text-gray-600 leading-tight">
                      {testimonials[currentTestimonial].position}
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation dots responsive */}
              <div className="flex justify-center mt-4 sm:mt-6 lg:mt-8 space-x-2 sm:space-x-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? "bg-blue-600 w-6 sm:w-8"
                        : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;