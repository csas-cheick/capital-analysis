import { FC, useState, useEffect } from "react";
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
  Zap,
  Eye,
  Quote,
  Monitor,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Fuel,
  Gauge,
  Settings,
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import GasStationIcon from '../icons/station_service_carburant.svg.svg'
import backgroundVideo from "../assets/video/capital_petroleum_video.mp4";

const HomePage: FC = () => {
  const [activeService, setActiveService] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);

  const heroSlides = [
    {
      tag: "Solutions Financières & IT de Croissance",
      titleTop: "La Perspective de",
      titleBottom: "Vos Chiffres",
      description:
        "Transformez vos données en décisions stratégiques avec nos solutions d'ingénierie financière, nos logiciels de gestion sur mesure et notre expertise IT de pointe.",
      color: "from-blue-400 to-cyan-400",
      cta: "Démarrer la Transformation",
      statIcon: Zap,
      visualContent: "default",
    },
    {
      tag: "IT & Développement",
      titleTop: "CapitalPetroleum :",
      titleBottom: "Maîtrise de Station",
      description:
        "Automatisez la gestion de votre station-service : stocks, pompes, ventes et reporting financier, pour une efficacité opérationnelle maximale.",
      color: "from-red-400 to-orange-400",
      cta: "Découvrir Capital Petroleum",
      statIcon: Monitor,
      visualContent: "capital_petroleum",
    },
  ];

  const goToNextHeroSlide = () => {
    setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const goToPrevHeroSlide = () => {
    setCurrentHeroSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  };

  const testimonials = [
    {
      name: "Amadou Diallo",
      position: "Directeur Général, TechCorp Niger",
      content:
        "Capital Analysis a révolutionné notre gestion financière. Leur expertise en ingénierie financière nous a permis d'optimiser nos flux de trésorerie de 40%.",
      rating: 5,
      avatar: "AD",
    },
    {
      name: "Fatima Ousmane",
      position: "CEO, InnovateLab",
      content:
        "L'équipe IT de Capital Analysis a développé notre plateforme e-commerce en un temps record. Leur professionnalisme et leur créativité nous ont impressionnés.",
      rating: 5,
      avatar: "FO",
    },
    {
      name: "Ibrahim Moussa",
      position: "CFO, AgriTech Solutions",
      content:
        "Grâce à leurs logiciels de gestion sur mesure, nous avons automatisé 70% de nos processus. Un gain de temps et d'efficacité considérable.",
      rating: 5,
      avatar: "IM",
    },
  ];

  const goToNextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    setIsVisible(true);

    const testimonialInterval = setInterval(() => {
      goToNextTestimonial();
    }, 5000);

    const heroInterval = setInterval(() => {
      goToNextHeroSlide();
    }, 5000);

    return () => {
      clearInterval(testimonialInterval);
      clearInterval(heroInterval);
    };
  }, []);

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
    },
    {
      icon: BarChart3,
      title: "Etude & Conseil",
      description:
        "Des analyses approfondies et des recommandations stratégiques pour guider vos décisions et maximiser votre impact sur le marché.",
      features: [],
      color: "from-blue-500 to-cyan-400",
      bgColor: "bg-blue-500/10",
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
    },
  ];

  const stats = [
    { number: "2", label: "Développements", icon: Users },
    { number: "98%", label: "Taux de Satisfaction", icon: Star },
    { number: "24/7", label: "Support Client", icon: Award },
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

  const activeSlide = heroSlides[currentHeroSlide];

  return (
    <div className="min-h-screen bg-white">
      {/* SECTION HERO */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        {/* Vidéo en arrière-plan */}
        {activeSlide.visualContent === "capital_petroleum" && (
          <video
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-10"
            src={backgroundVideo}
            autoPlay
            loop
            muted
            playsInline
            controls={false}
          ></video>
        )}

        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

        <Header />

        <div className="absolute inset-0 opacity-20 z-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(6, 182, 212, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 40% 80%, rgba(16, 185, 129, 0.2) 0%, transparent 50%)
            `,
            }}
          ></div>
        </div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse z-10"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000 z-10"></div>

        <div className="relative container mx-auto px-6 pt-40 pb-32 z-20">
          <button
            onClick={goToPrevHeroSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all duration-300 z-30 hidden md:block"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={goToNextHeroSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all duration-300 z-30 hidden md:block"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className={`grid lg:grid-cols-2 gap-12 items-center`}>
            <div
              key={currentHeroSlide}
              className={`transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="inline-flex items-center bg-blue-600/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-blue-500/30 shadow-md">
                <activeSlide.statIcon className="w-4 h-4 mr-2" />
                {activeSlide.tag}
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent leading-tight">
                {activeSlide.titleTop}
                <span
                  className={`block text-transparent bg-gradient-to-r ${activeSlide.color} bg-clip-text`}
                >
                  {activeSlide.titleBottom}
                </span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {activeSlide.description}
              </p>

              {/* Bouton CTA */}
              <div className="mb-10">
                <Link to="/contact">
                  <button className="group bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-blue-500/30">
                    <span className="flex items-center text-lg">
                      {activeSlide.cta}
                      <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 divide-x divide-gray-700/50 border border-gray-700/50 rounded-xl p-3 bg-white/5 backdrop-blur-sm">
                {stats.slice(0, 3).map((stat, index) => (
                  <div key={index} className="text-center px-4">
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                      {stat.number}
                    </div>
                    <div className="text-gray-400 text-xs md:text-sm">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Colonne Visuelle (Droite) - Dynamique */}
            <div
              key={`${currentHeroSlide}-visual`}
              className={`relative h-full transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <div className="relative w-full h-80 lg:h-96 flex items-center justify-center">
                {activeSlide.visualContent === "capital_petroleum" ? (
                  <>
                    {/* Contenu visuel pour Capital Petroleum */}
                    {/* Contenu visuel par défaut (diagrammes abstraits) */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img
                        src={GasStationIcon}
                        alt="Icône de Capital Petroleum"
                        className="w-[200px] h-[200px] lg:w-[500px] lg:h-[500px] transform transition-transform duration-1000 ease-out hover:scale-105"
                      />
                    </div>
                    {/* Pompe à essence */}
                    <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-slate-700/70 backdrop-blur-md rounded-full border border-red-400/30 shadow-2xl p-4 flex flex-col items-center justify-center text-center transform rotate-6 animate-float">
                      <Fuel className="w-8 h-8 text-red-400 mb-1" />
                      <span className="text-white font-bold text-xl">Pompe</span>
                      <span className="text-gray-400 text-xs">Gestion</span>
                    </div>

                    {/* Pistolet/Tuyau */}
                    <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-slate-700/70 backdrop-blur-md rounded-xl border border-orange-400/30 shadow-2xl p-3 flex flex-col items-center justify-center text-center transform -rotate-3 animate-float-delay">
                      <ShieldCheck className="w-8 h-8 text-orange-400 mb-1" /> {/* Icône de pistolet, ou alternative */}
                      <span className="text-white font-bold text-xl">99%</span>
                      <span className="text-gray-400 text-xs">Sécurité</span>
                    </div>

                    {/* Jauge de carburant */}
                    <div className="absolute top-10 right-10 w-32 h-32 bg-slate-700/70 backdrop-blur-md rounded-full border border-yellow-400/30 shadow-2xl p-3 flex flex-col items-center justify-center text-center transform -rotate-12 animate-float-delay-2">
                      <Gauge className="w-7 h-7 text-yellow-400 mb-1" />
                      <span className="text-white font-bold text-xl">Stock</span>
                      <span className="text-gray-400 text-xs">Réel</span>
                    </div>

                    {/* Élément Flottant : Gestion / Settings */}
                    <div className="absolute bottom-10 left-10 w-32 h-32 bg-slate-700/70 backdrop-blur-md rounded-xl border border-purple-400/30 shadow-2xl p-3 flex flex-col items-center justify-center text-center transform rotate-12 animate-float-delay-3">
                      <Settings className="w-7 h-7 text-purple-400 mb-1" />
                      <span className="text-white font-bold text-xl">90%</span>
                      <span className="text-gray-400 text-xs">Paramétré</span>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Contenu visuel par défaut (diagrammes abstraits) */}
                    <div className="absolute inset-0 flex items-end justify-center perspective-1000">
                      <div className="w-6 h-20 bg-blue-500 rounded-t-lg shadow-blue-500/50 transform rotate-x-10 rotate-y-5 animate-pulse-slow"></div>
                      <div className="w-6 h-40 bg-cyan-400 rounded-t-lg shadow-cyan-400/50 transform rotate-x-10 rotate-y-0 ml-4 animate-pulse-slow delay-100"></div>
                      <div className="w-6 h-28 bg-emerald-400 rounded-t-lg shadow-emerald-400/50 transform rotate-x-10 rotate-y-3 ml-4 animate-pulse-slow delay-200"></div>
                      <div className="w-6 h-56 bg-blue-400 rounded-t-lg shadow-blue-400/50 transform rotate-x-10 rotate-y-7 ml-4 animate-pulse-slow delay-300"></div>
                      <div className="w-6 h-36 bg-cyan-300 rounded-t-lg shadow-cyan-300/50 transform rotate-x-10 rotate-y-2 ml-4 animate-pulse-slow delay-400"></div>
                    </div>

                    <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-slate-700/70 backdrop-blur-md rounded-full border border-blue-400/30 shadow-2xl p-4 flex flex-col items-center justify-center text-center transform rotate-6 animate-float">
                      <TrendingUp className="w-8 h-8 text-green-400 mb-1" />
                      <span className="text-white font-bold text-xl">+32%</span>
                      <span className="text-gray-400 text-xs">Croissance</span>
                    </div>

                    <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-slate-700/70 backdrop-blur-md rounded-xl border border-emerald-400/30 shadow-2xl p-3 flex flex-col items-center justify-center text-center transform -rotate-3 animate-float-delay">
                      <Banknote className="w-8 h-8 text-emerald-400 mb-1" />
                      <span className="text-white font-bold text-xl">%</span>
                      <span className="text-gray-400 text-xs">Optimisation</span>
                    </div>

                    <div className="absolute top-10 right-10 w-32 h-32 bg-slate-700/70 backdrop-blur-md rounded-full border border-cyan-400/30 shadow-2xl p-3 flex flex-col items-center justify-center text-center transform -rotate-12 animate-float-delay-2">
                      <Monitor className="w-7 h-7 text-cyan-400 mb-1" />
                      <span className="text-white font-bold text-xl">90%</span>
                      <span className="text-gray-400 text-xs">Déploiement</span>
                    </div>

                    <div className="absolute bottom-10 left-10 w-32 h-32 bg-slate-700/70 backdrop-blur-md rounded-xl border border-red-400/30 shadow-2xl p-3 flex flex-col items-center justify-center text-center transform rotate-12 animate-float-delay-3">
                      <ShieldCheck className="w-7 h-7 text-red-400 mb-1" />
                      <span className="text-white font-bold text-xl">99%</span>
                      <span className="text-gray-400 text-xs">Sécurité</span>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Indicateurs de Slide Hero (Clicables) */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
              {heroSlides.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentHeroSlide
                      ? "bg-white w-6"
                      : "bg-gray-500 hover:bg-gray-300"
                  } cursor-pointer`}
                  onClick={() => setCurrentHeroSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section (Inchangée) */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Target className="w-4 h-4 mr-2" />
              Nos Expertises
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Des Solutions
              <span className="block text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text">
                Sur Mesure
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez notre gamme complète de services conçus pour accélérer
              votre croissance et optimiser vos performances financières et
              opérationnelles.
            </p>
           </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 border-l-4 ${
                  activeService === index
                    ? "border-blue-500 shadow-2xl"
                    : "border-transparent"
                }`}
                onMouseEnter={() => setActiveService(index)}
              >
                <div className="flex items-start space-x-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                      {service.description}
                    </p>

                    <div className="grid grid-cols-1 gap-2 mb-6">
                      {service.features.slice(0, 3).map(
                        (feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center text-sm text-gray-700"
                          >
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        )
                      )}
                    </div>

                    <Link
                      to={`/activites/${service.title
                        .toLowerCase()
                        .replace(/\s/g, "-")}`}
                    >
                      <button className="group/btn flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors text-sm">
                        En savoir plus
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section (Inchangée) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="inline-flex items-center bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Eye className="w-4 h-4 mr-2" />
                Notre Vision
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Pourquoi Nous
                <span className="block text-transparent bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text">
                  Choisir ?
                </span>
              </h2>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Chez Capital Analysis, nous combinons expertise technique,
                innovation et accompagnement personnalisé pour transformer vos
                défis en opportunités de croissance durable.
              </p>

              <div className="space-y-8">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {achievement.title}
                      </h4>
                      <p className="text-gray-600">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group text-center border border-gray-100"
                  >
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${
                        index === 0
                          ? "from-blue-500 to-cyan-400"
                          : index === 1
                          ? "from-emerald-500 to-green-400"
                          : index === 2
                          ? "from-purple-500 to-pink-400"
                          : "from-orange-500 to-yellow-400"
                      } rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}
                    >
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-gray-900 mb-3">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 text-base leading-relaxed">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce">
                #1 au Niger
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section (Inchangée) */}
      <section className="py-24 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Quote className="w-4 h-4 mr-2" />
              Témoignages Clients
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ils Nous Font
              <span className="block text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text">
                Confiance
              </span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
              {/* Bouton de navigation PRÉCÉDENT */}
              <button
                onClick={goToPrevTestimonial}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-blue-500/10 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 z-10 hidden md:block"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Bouton de navigation SUIVANT */}
              <button
                onClick={goToNextTestimonial}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-blue-500/10 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 z-10 hidden md:block"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center">
                  <Quote className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="w-6 h-6 text-yellow-400 fill-current"
                      />
                    )
                  )}
                </div>

                <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed italic transition-opacity duration-500">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>

                <div className="flex items-center justify-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonials[currentTestimonial].avatar}
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-gray-900 text-lg">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-gray-600">
                      {testimonials[currentTestimonial].position}
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation dots */}
              <div className="flex justify-center mt-8 space-x-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? "bg-blue-600 w-8"
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