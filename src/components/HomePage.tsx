import { FC, useState, useEffect, useCallback } from "react";
import {
  ArrowRight,
  BarChart3,
  Users,
  Banknote,
  Star,
  CheckCircle,
  Quote,
  Monitor,
  Fuel,
  ChevronLeft,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Play,
  Pause,
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import backgroundVideo from "../assets/video/capital_petroleum_video.mp4";
import { useScrollReveal } from "../hooks/useScrollReveal";

const HomePage: FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  
  // Scroll reveal hooks
  const [petroleumRef, petroleumVisible] = useScrollReveal();
  const [servicesRef, servicesVisible] = useScrollReveal();
  const [testimonialsRef, testimonialsVisible] = useScrollReveal();
  const [ctaRef, ctaVisible] = useScrollReveal();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const testimonials = [
    {
      name: "Mouhamed Diaou",
      position: "Directeur, Alimentation Fadak",
      content: "Capital Analysis a révolutionné notre gestion financière. Leur expertise nous a permis d'optimiser nos flux de trésorerie de manière significative.",
      rating: 5,
    },
    {
      name: "Mouhamed Moucharraf",
      position: "CEO, Tech-Fadak",
      content: "Grâce à leurs logiciels de gestion sur mesure, nous avons automatisé nos processus. Un gain de temps et d'efficacité considérable.",
      rating: 5,
    },
    {
      name: "Ibrahim Moussa",
      position: "Fondateur, Tech Solutions",
      content: "CapitalPetroleum a transformé la gestion de nos stations-service. Un outil indispensable pour tout gérant moderne.",
      rating: 5,
    },
  ];

  const goToNextTestimonial = useCallback(() => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const goToPrevTestimonial = useCallback(() => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    const interval = setInterval(goToNextTestimonial, 6000);
    return () => clearInterval(interval);
  }, [goToNextTestimonial]);

  const services = [
    {
      icon: Banknote,
      title: "Ingénierie Financière",
      description: "Conception de solutions financières innovantes : modélisation, structuration et optimisation de la performance.",
      link: "/activites/ingenierie-financiere",
    },
    {
      icon: Monitor,
      title: "IT & Développement",
      description: "Logiciels de gestion sur mesure, intégration SAGE, et solutions technologiques adaptées à vos besoins.",
      link: "/activites/departement-it-developpement",
    },
    {
      icon: BarChart3,
      title: "Études & Conseil",
      description: "Analyses stratégiques approfondies et recommandations pour guider vos décisions d'affaires.",
      link: "/activites/etude-et-conseil",
    },
    {
      icon: Users,
      title: "Assistance Comptable",
      description: "Tenue de comptabilité, déclarations fiscales, audit et conseil juridique pour votre conformité.",
      link: "/activites/suivi-et-assistance-comptable",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      
      {/* ═══════════════════════════════════════════════════════════
          HERO SECTION - Clean & Professional
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen bg-[#0a1628] overflow-hidden">
        <Header />

        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0a1628]/95 to-[#0a1628]" />
        
        {/* Subtle geometric pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 lg:px-8 pt-32 lg:pt-40 pb-20">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Badge */}
            <div 
              className={`inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-sm text-gray-300">Cabinet de Conseil Financier & IT</span>
            </div>

            {/* Main headline */}
            <h1 
              className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-[1.1] transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              La Perspective de
              <span className="block text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
                Vos Chiffres
              </span>
            </h1>

            {/* Subtitle */}
            <p 
              className={`text-lg sm:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Nous transformons vos données en décisions stratégiques grâce à notre expertise 
              en ingénierie financière et nos solutions technologiques innovantes.
            </p>

            {/* CTA Buttons */}
            <div 
              className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <Link to="/contact">
                <button className="group bg-white text-[#0a1628] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center gap-2">
                  Parlons de votre projet
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link to="/about">
                <button className="group border border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/5 transition-all duration-300">
                  En savoir plus
                </button>
              </Link>
            </div>

            {/* Stats */}
            <div 
              className={`grid grid-cols-3 gap-8 max-w-xl mx-auto transition-all duration-700 delay-400 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-1">2+</div>
                <div className="text-sm text-gray-500">Projets</div>
              </div>
              <div className="text-center border-x border-white/10">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-1">98%</div>
                <div className="text-sm text-gray-500">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-1">3 ans</div>
                <div className="text-sm text-gray-500">Expérience</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/40 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          CAPITAL PETROLEUM - Premium Product Showcase
      ═══════════════════════════════════════════════════════════ */}
      <section ref={petroleumRef} className="relative py-24 lg:py-32 bg-gradient-to-b from-[#0a1628] to-[#0f1f35] overflow-hidden">
        
        {/* Accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />

        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left - Video/Visual */}
            <div 
              className={`relative transition-all duration-700 ${
                petroleumVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-amber-500/10">
                <video
                  className="w-full aspect-video object-cover"
                  src={backgroundVideo}
                  autoPlay
                  loop
                  muted={!isVideoPlaying}
                  playsInline
                />
                
                {/* Video overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 via-transparent to-transparent" />
                
                {/* Play/Pause button */}
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

                {/* Badge */}
                <div className="absolute top-4 left-4 bg-amber-500 text-[#0a1628] px-3 py-1 rounded-full text-sm font-semibold">
                  Produit Phare
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div 
              className={`transition-all duration-700 delay-200 ${
                petroleumVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              {/* Logo/Title */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center">
                  <Fuel className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">CapitalPetroleum</h2>
                  <p className="text-amber-400 text-sm">Station Management System</p>
                </div>
              </div>

              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Solution complète de gestion pour stations-service. Contrôlez vos pompes, 
                gérez vos stocks, et suivez vos finances en temps réel depuis une seule plateforme.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  "Gestion des pompes",
                  "Suivi des stocks",
                  "Reporting financier",
                  "Sécurité avancée",
                  "Données temps réel",
                  "Support 24/7"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/capitalpetroleum">
                  <button className="group bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300 flex items-center gap-2">
                    Découvrir CapitalPetroleum
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
                <Link to="/contact">
                  <button className="border border-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/5 transition-all duration-300">
                    Demander une démo
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SERVICES - Clean Grid Layout
      ═══════════════════════════════════════════════════════════ */}
      <section ref={servicesRef} className="py-24 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          
          {/* Section Header */}
          <div 
            className={`max-w-2xl mx-auto text-center mb-16 transition-all duration-700 ${
              servicesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Nos Expertises
            </h2>
            <p className="text-lg text-gray-600">
              Des solutions complètes pour accompagner la croissance de votre entreprise.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <Link 
                key={index} 
                to={service.link}
                className={`group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-blue-100 ${
                  servicesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-100 transition-colors flex-shrink-0">
                    <service.icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center text-blue-600 font-medium text-sm group-hover:gap-2 transition-all">
                      En savoir plus
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          TESTIMONIALS - Minimalist Carousel
      ═══════════════════════════════════════════════════════════ */}
      <section ref={testimonialsRef} className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          
          <div 
            className={`max-w-3xl mx-auto transition-all duration-700 ${
              testimonialsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Quote icon */}
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center">
                <Quote className="w-8 h-8 text-blue-600" />
              </div>
            </div>

            {/* Testimonial content */}
            <div className="text-center mb-8">
              <blockquote className="text-2xl sm:text-3xl text-gray-900 font-medium leading-relaxed mb-8">
                "{testimonials[currentTestimonial].content}"
              </blockquote>
              
              {/* Rating */}
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                ))}
              </div>

              {/* Author */}
              <div>
                <div className="font-semibold text-gray-900">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-gray-500">
                  {testimonials[currentTestimonial].position}
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={goToPrevTestimonial}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              
              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentTestimonial 
                        ? "bg-blue-600 w-6" 
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={goToNextTestimonial}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          CTA SECTION - Contact
      ═══════════════════════════════════════════════════════════ */}
      <section ref={ctaRef} className="py-24 lg:py-32 bg-gradient-to-br from-[#0a1628] to-[#0f1f35] relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-cyan-500 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div 
            className={`max-w-4xl mx-auto transition-all duration-700 ${
              ctaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10 lg:p-14">
              <div className="grid lg:grid-cols-5 gap-8 items-center">
                
                {/* Left content */}
                <div className="lg:col-span-3">
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                    Prêt à transformer votre entreprise ?
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Contactez-nous pour discuter de vos besoins et découvrir comment nous pouvons vous accompagner.
                  </p>
                  
                  {/* Contact info */}
                  <div className="flex flex-wrap gap-6 text-gray-400 text-sm">
                    <a href="tel:+22797400012" className="flex items-center gap-2 hover:text-white transition-colors">
                      <Phone className="w-4 h-4" />
                      <span>+227 97 40 00 12</span>
                    </a>
                    <a href="mailto:contact@capitalanalysis.ne" className="flex items-center gap-2 hover:text-white transition-colors">
                      <Mail className="w-4 h-4" />
                      <span>contact@capitalanalysis.ne</span>
                    </a>
                  </div>
                </div>
                
                {/* Right CTA */}
                <div className="lg:col-span-2 flex flex-col gap-4">
                  <Link to="/contact" className="w-full">
                    <button className="group w-full bg-white text-[#0a1628] px-6 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2">
                      Nous contacter
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                  <a href="mailto:contact@capitalanalysis.ne" className="w-full">
                    <button className="w-full border border-white/20 text-white px-6 py-4 rounded-xl font-semibold hover:bg-white/5 transition-all duration-300">
                      Envoyer un email
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
