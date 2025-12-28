import { FC, useState } from "react";
import {
  Fuel,
  BarChart3,
  Users,
  ShoppingCart,
  Truck,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Play,
  Pause,
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import { useScrollReveal } from "../hooks/useScrollReveal";
import backgroundVideo from "../assets/video/capital_petroleum_video.mp4";

const CapitalPetroleum: FC = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  
  const [featuresRef, featuresVisible] = useScrollReveal();
  const [benefitsRef, benefitsVisible] = useScrollReveal();
  const [ctaRef, ctaVisible] = useScrollReveal();

  const features = [
    {
      icon: ShoppingCart,
      title: "Gestion des Ventes",
      description: "Point de vente complet avec facturation automatique et gestion des clients.",
    },
    {
      icon: Fuel,
      title: "Contrôle des Pompes",
      description: "Monitoring en temps réel de toutes les pompes avec calibrage automatique.",
    },
    {
      icon: Truck,
      title: "Gestion des Stocks",
      description: "Suivi précis des niveaux de carburant avec alertes de réapprovisionnement.",
    },
    {
      icon: Users,
      title: "Gestion Clientèle",
      description: "Suivi des comptes clients, règlements et historique des transactions.",
    },
    {
      icon: DollarSign,
      title: "Comptabilité Intégrée",
      description: "Module comptable complet avec rapports financiers automatisés.",
    },
    {
      icon: BarChart3,
      title: "Tableaux de Bord",
      description: "Visualisation en temps réel de tous les indicateurs clés.",
    },
  ];

  const benefits = [
    { title: "Réduction des pertes", value: "-40%", description: "Grâce au suivi précis des stocks" },
    { title: "Gain de temps", value: "70%", description: "Automatisation des processus" },
    { title: "Disponibilité", value: "99.9%", description: "Système fiable et stable" },
  ];

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#0a1628] to-[#0f1f35] overflow-hidden">
        <Header />
        
        {/* Background Video */}
        <div className="absolute inset-0 opacity-20">
          <video
            className="w-full h-full object-cover"
            src={backgroundVideo}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/80 to-[#0a1628]" />

        <div className="relative z-10 container mx-auto px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left - Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/30 px-4 py-2 rounded-full mb-6">
                <Fuel className="w-4 h-4 text-amber-400" />
                <span className="text-sm text-amber-300 font-medium">Solution de Gestion</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Capital
                <span className="text-transparent bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text">
                  Petroleum
                </span>
              </h1>
              
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                La solution complète de gestion pour stations-service. 
                Contrôlez vos pompes, gérez vos stocks, et suivez vos finances 
                en temps réel depuis une seule plateforme.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link to="/contact">
                  <button className="group bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300 flex items-center gap-2">
                    Demander une démo
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
                <a href="#features">
                  <button className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/5 transition-all duration-300">
                    Voir les fonctionnalités
                  </button>
                </a>
              </div>

              {/* Quick stats */}
              <div className="flex gap-8">
                <div>
                  <div className="text-2xl font-bold text-white">99.9%</div>
                  <div className="text-sm text-gray-400">Disponibilité</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">24/7</div>
                  <div className="text-sm text-gray-400">Support</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">Real-time</div>
                  <div className="text-sm text-gray-400">Données</div>
                </div>
              </div>
            </div>

            {/* Right - Video Preview */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <video
                  className="w-full aspect-video object-cover"
                  src={backgroundVideo}
                  autoPlay
                  loop
                  muted={!isVideoPlaying}
                  playsInline
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                <button 
                  onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                  className="absolute bottom-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all"
                >
                  {isVideoPlaying ? (
                    <Pause className="w-5 h-5 text-white" />
                  ) : (
                    <Play className="w-5 h-5 text-white ml-0.5" />
                  )}
                </button>
              </div>
              
              {/* Badge */}
              <div className="absolute -top-3 -right-3 bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                Déployé au Niger
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" ref={featuresRef} className="py-20 lg:py-28 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          
          <div className={`max-w-2xl mx-auto text-center mb-16 transition-all duration-700 ${featuresVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Fonctionnalités Complètes
            </h2>
            <p className="text-gray-600">
              Tout ce dont vous avez besoin pour gérer efficacement votre station-service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-500 ${
                  featuresVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={benefitsRef} className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left - Content */}
            <div className={`transition-all duration-700 ${benefitsVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Pourquoi choisir CapitalPetroleum ?
              </h2>
              
              <p className="text-gray-600 mb-8 leading-relaxed">
                Notre solution est conçue spécifiquement pour les réalités du marché africain, 
                avec une interface intuitive et un support local réactif.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Interface simple et intuitive",
                  "Support technique local 24/7",
                  "Mises à jour régulières",
                  "Formation complète incluse",
                  "Données sécurisées",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <Link to="/contact">
                <button className="group bg-amber-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-600 transition-all duration-300 flex items-center gap-2">
                  Obtenir un devis
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>

            {/* Right - Stats Cards */}
            <div className={`grid gap-4 transition-all duration-700 delay-200 ${benefitsVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 flex items-center gap-6"
                >
                  <div className="text-4xl font-bold text-amber-600">
                    {benefit.value}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{benefit.title}</h4>
                    <p className="text-sm text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-20 lg:py-28 bg-gradient-to-b from-[#0a1628] to-[#0f1f35]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className={`max-w-3xl mx-auto text-center transition-all duration-700 ${ctaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            
            <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Fuel className="w-10 h-10 text-white" />
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Prêt à moderniser votre station ?
            </h2>
            <p className="text-gray-300 mb-8">
              Rejoignez les stations-service qui font confiance à CapitalPetroleum 
              pour optimiser leur gestion quotidienne.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <button className="group bg-amber-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-600 transition-all duration-300 flex items-center gap-2 mx-auto">
                  Demander une démonstration
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <a href="tel:+22797400012">
                <button className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/5 transition-all duration-300">
                  Appelez-nous
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CapitalPetroleum;
