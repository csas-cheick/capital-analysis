import { FC } from "react";
import {
  TrendingUp,
  BarChart3,
  PieChart,
  LineChart,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import Header from "../../components/layout/Header";
import { useScrollReveal } from "../../hooks/useScrollReveal";

const IngenierieFinanciere: FC = () => {
  const [servicesRef, servicesVisible] = useScrollReveal();
  const [processRef, processVisible] = useScrollReveal();

  const services = [
    {
      icon: BarChart3,
      title: "Modélisation Financière",
      description:
        "Création de modèles prévisionnels robustes pour anticiper vos besoins et optimiser vos décisions.",
      features: [
        "Prévisions de trésorerie",
        "Analyse de scénarios",
        "Projections 3-5 ans",
      ],
    },
    {
      icon: PieChart,
      title: "Structuration Financière",
      description:
        "Optimisation de votre structure de capital et recherche de financements adaptés.",
      features: [
        "Levées de fonds",
        "Dossiers bancaires",
        "Négociation investisseurs",
      ],
    },
    {
      icon: LineChart,
      title: "Analyse de Performance",
      description:
        "Analyse de vos indicateurs clés pour identifier les leviers d'amélioration.",
      features: ["Tableaux de bord", "Ratios financiers", "Recommandations"],
    },
  ];

  const process = [
    {
      step: "01",
      title: "Diagnostic",
      description: "Analyse de votre situation actuelle",
    },
    {
      step: "02",
      title: "Stratégie",
      description: "Élaboration d'un plan sur mesure",
    },
    {
      step: "03",
      title: "Mise en œuvre",
      description: "Déploiement des solutions",
    },
    { step: "04", title: "Suivi", description: "Monitoring et optimisation" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#0a1628] overflow-hidden">
        <Header />

        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/30 px-4 py-2 rounded-full mb-6">
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              <span className="text-sm text-emerald-300 font-medium">
                Service
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Ingénierie
              <span className="block text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text">
                Financière
              </span>
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
              Nous accompagnons entreprises et investisseurs dans la conception
              de solutions financières innovantes et adaptées à leurs objectifs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div
            className={`max-w-2xl mb-16 transition-all duration-700 ${servicesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Nos Services
            </h2>
            <p className="text-gray-600">
              Une expertise complète pour optimiser votre stratégie financière.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-500 ${
                  servicesVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className="py-20 lg:py-28 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div
            className={`max-w-2xl mx-auto text-center mb-16 transition-all duration-700 ${processVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Notre Approche
            </h2>
            <p className="text-gray-600">
              Une méthodologie éprouvée pour garantir le succès de vos projets.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <div
                key={index}
                className={`text-center transition-all duration-500 ${
                  processVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl font-bold text-emerald-600/20 mb-4">
                  {item.step}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Optimisez votre stratégie financière
            </h2>
            <p className="text-gray-600 mb-8">
              Discutons de vos objectifs et définissons ensemble la meilleure
              approche.
            </p>
            <Link href="/contact">
              <button className="group bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-all duration-300 flex items-center gap-2 mx-auto">
                Prendre rendez-vous
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IngenierieFinanciere;
