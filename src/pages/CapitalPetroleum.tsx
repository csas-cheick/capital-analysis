import { FC } from "react";
import {
  Fuel,
  BarChart3,
  Users,
  ShoppingCart,
  Truck,
  DollarSign,
  Settings,
  Shield,
  Zap,
  CheckCircle,
  ArrowRight,
  Play,
  Monitor,
  Cloud,
  Globe
} from "lucide-react";
import { Link } from "react-router-dom";
import AppHeader from "../layout/AppHeaders";
import backgroundVideo from "../assets/video/capital_petroleum_video.mp4";

const CapitalPetroleum: FC = () => {
  const features = [
    {
      icon: ShoppingCart,
      title: "Gestion des Ventes",
      description: "Système de point de vente (POS) complet avec gestion des transactions en temps réel",
      highlights: [
        "Vente au comptant et à crédit",
        "Facturation automatique",
        "Gestion des clients",
      ]
    },
    {
      icon: Fuel,
      title: "Gestion des Pompes",
      description: "Monitoring et contrôle en temps réel de toutes les pompes à carburant",
      highlights: [
        "Suivi des volumes distribués",
        "Calibrage automatique",
        "Alertes",
        "Historique des transactions"
      ]
    },
    {
      icon: Truck,
      title: "Gestion des Stocks",
      description: "Suivi précis des niveaux de carburant",
      highlights: [
        "Inventaire en temps réel",
        "Alertes de réapprovisionnement",
        "Gestion des cuves et de jaugeage",
        "Traçabilité complète"
      ]
    },
    {
      icon: Users,
      title: "Gestion de la Clientèle",
      description: "Module permettant la gestion complète des clients et de leurs transactions.",
      highlights: [
        "Suivi des soldes clients",
        "Gestion des règlements clients",
        "Suivi des mouvements clients",
        "Impression des relevés et factures"
      ]
    },
    {
      icon: DollarSign,
      title: "Comptabilité Intégrée",
      description: "Module comptable complet pour un suivi financier précis",
      highlights: [
        "Comptabilité automatisée",
        "Rapports financiers",
        "Gestion de trésorerie",
        "Exports comptables"
      ]
    },
    {
      icon: BarChart3,
      title: "Tableaux de Bord",
      description: "Visualisation en temps réel de tous les indicateurs clés",
      highlights: [
        "Dashboard personnalisable",
        "Statistiques en temps réel",
        "Graphiques interactifs",
        "Rapports exportables"
      ]
    }
  ];

  const technicalFeatures = [
    {
      icon: Cloud,
      title: "Cloud & Multi-Sites",
      description: "Architecture cloud permettant la gestion de plusieurs stations depuis n'importe où"
    },
    {
      icon: Globe,
      title: "Applications web",
      description: "Applications web pour gérer votre station en mobilité"
    },
    {
      icon: Shield,
      title: "Sécurité Avancée",
      description: "Authentification multi-facteurs et chiffrement des données sensibles"
    },
    {
      icon: Zap,
      title: "Performance Optimale",
      description: "Système ultra-rapide capable de traiter des milliers de transactions"
    }
  ];

  const screenshots = [
    {
      title: "Dashboard Principal",
      description: "Vue d'ensemble des ventes, stocks et performances en temps réel",
      image: "/images/screenshots/dashboard.jpg" // Placeholder
    },
    {
      title: "Point de Vente",
      description: "Interface intuitive pour les transactions rapides et efficaces",
      image: "/images/screenshots/pos.jpg" // Placeholder
    },
    {
      title: "Gestion des Stocks",
      description: "Suivi détaillé des niveaux de carburant et alertes automatiques",
      image: "/images/screenshots/stock.jpg" // Placeholder
    },
    {
      title: "Rapports & Statistiques",
      description: "Analyses approfondies et rapports personnalisables",
      image: "/images/screenshots/reports.jpg" // Placeholder
    }
  ];

  const benefits = [
    {
      title: "Gain de Temps",
      description: "Automatisation de 80% des tâches administratives répétitives",
      percentage: "80%"
    },
    {
      title: "Réduction des Pertes",
      description: "Diminution des écarts de stock et des erreurs de caisse",
      percentage: "95%"
    },
    {
      title: "Augmentation du CA",
      description: "Amélioration du chiffre d'affaires grâce à une meilleure gestion",
      percentage: "35%"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <AppHeader />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-24 bg-gradient-to-br from-slate-800 via-emerald-900 to-slate-900 text-white overflow-hidden">
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
        {/* Éléments décoratifs */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Logo/Badge */}
            <div className="inline-flex items-center bg-emerald-600/20 text-emerald-300 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-emerald-500/30">
              <Fuel className="w-4 h-4 mr-2" />
              Solution de Gestion Complète
            </div>

            {/* Titre */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
              <span className="block text-transparent bg-gradient-to-r from-emerald-400 to-orange-400 bg-clip-text">
                CapitalPetroleum
              </span>
            </h1>

            {/* Sous-titre */}
            <p className="text-xl sm:text-2xl text-emerald-100 mb-4 font-semibold">
              Logiciel de Gestion de Stations-Service
            </p>

            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              La solution tout-en-un pour gérer efficacement votre station-service. 
              Gestion des ventes, stocks, pompes, personnel et comptabilité dans une seule plateforme moderne et intuitive.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <button className="group bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl">
                  <span className="flex items-center justify-center">
                    Demander une Démo
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </Link>
              <a href="#video">
                <button className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-white/20">
                  <span className="flex items-center justify-center">
                    <Play className="w-5 h-5 mr-2" />
                    Voir la Vidéo
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Vidéo de Présentation */}
      <section id="video" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Découvrez
              <span className="block text-transparent bg-gradient-to-r from-emerald-600 to-orange-600 bg-clip-text">
                CapitalPetroleum en Action
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Vidéo de démonstration complète de toutes les fonctionnalités
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
              {/* Video Player */}
              <div className="aspect-video">
                <video
                  controls
                  className="w-full h-full object-cover"
                  poster="/images/video-thumbnail.jpg"
                >
                  <source src="/assets/video/capital_petroleum_video.mp4" type="video/mp4" />
                  Votre navigateur ne supporte pas la lecture de vidéos.
                </video>
              </div>

              {/* Play Overlay (optionnel - apparaît avant le play) */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-emerald-900/50 to-slate-900/50 backdrop-blur-sm pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Play className="w-10 h-10 text-white ml-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fonctionnalités Principales */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Settings className="w-4 h-4 mr-2" />
              Fonctionnalités
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Une Solution
              <span className="block text-transparent bg-gradient-to-r from-emerald-600 to-orange-600 bg-clip-text">
                Complète & Puissante
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tout ce dont vous avez besoin pour gérer efficacement votre station-service
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-emerald-200 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-orange-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {feature.description}
                </p>

                <ul className="space-y-2">
                  {feature.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Captures d'Écran */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Interface
              <span className="block text-transparent bg-gradient-to-r from-emerald-600 to-orange-600 bg-clip-text">
                Moderne & Intuitive
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez l'interface de CapitalPetroleum à travers ces captures d'écran
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {screenshots.map((screenshot, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                {/* Placeholder pour l'image - remplacer par de vraies captures */}
                <div className="aspect-video bg-gradient-to-br from-emerald-100 via-gray-100 to-orange-100 flex items-center justify-center relative overflow-hidden">
                  <Monitor className="w-20 h-20 text-emerald-600/20 group-hover:scale-110 transition-transform duration-300" />
                  
                  {/* Badge "Coming Soon" ou nombre */}
                  <div className="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Capture {index + 1}
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/0 to-orange-600/0 group-hover:from-emerald-600/10 group-hover:to-orange-600/10 transition-all duration-300" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                    {screenshot.title}
                  </h3>
                  <p className="text-gray-600">
                    {screenshot.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Note pour les vraies images */}
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500 italic">
              * Les captures d'écran réelles seront ajoutées prochainement
            </p>
          </div>
        </div>
      </section>

      {/* Caractéristiques Techniques */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Technologies
              <span className="block text-transparent bg-gradient-to-r from-emerald-600 to-orange-600 bg-clip-text">
                de Pointe
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {technicalFeatures.map((feature, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bénéfices Chiffrés */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-emerald-50 to-orange-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Résultats
              <span className="block text-transparent bg-gradient-to-r from-emerald-600 to-orange-600 bg-clip-text">
                Mesurables
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des gains concrets pour votre station-service
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-5xl font-bold text-transparent bg-gradient-to-r from-emerald-600 to-orange-600 bg-clip-text mb-4">
                  {benefit.percentage}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-emerald-600 via-emerald-700 to-slate-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Prêt à Transformer Votre Station-Service ?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Rejoignez les dizaines de stations qui font déjà confiance à CapitalPetroleum
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <button className="bg-emerald-800 hover:bg-emerald-900 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 border border-emerald-500">
                Obtenir un Devis
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CapitalPetroleum;
