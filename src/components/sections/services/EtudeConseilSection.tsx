import { FC } from "react";
import {
  Search,
  FileText,
  Target,
  Lightbulb,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const EtudeConseil: FC = () => {
  const services = [
    {
      icon: FileText,
      title: "Suivi et Évaluation de Projets",
      description:
        "Pilotez vos projets avec clarté et rigueur. Capital Analysis vous offre un système complet de suivi-évaluation",
      features: [
        "Conception du cadre S&E",
        "Tableau de bord indicateurs (cibles vs réalisations)",
        "Évaluation d'impact et rapports automatisés",
        "Mesure de la performance",
      ],
    },
    {
      icon: Search,
      title: "Études de Marché",
      description:
        "Analyses approfondies pour comprendre votre environnement concurrentiel.",
      features: [
        "Analyse concurrentielle",
        "Études sectorielles",
        "Veille stratégique",
      ],
    },
    {
      icon: Lightbulb,
      title: "Conseil Stratégique",
      description:
        "Accompagnement dans la définition et la mise en œuvre de votre stratégie.",
      features: ["Diagnostic stratégique", "Plan d'action", "Accompagnement"],
    },
  ];

  const approach = [
    { title: "Écoute", description: "Comprendre vos enjeux et objectifs" },
    { title: "Analyse", description: "Étude approfondie de votre situation" },
    {
      title: "Recommandations",
      description: "Solutions concrètes et actionnables",
    },
    { title: "Accompagnement", description: "Suivi de la mise en œuvre" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#0a1628] overflow-hidden">
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
            <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/30 px-4 py-2 rounded-full mb-6">
              <Target className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-300 font-medium">
                Service
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Études &
              <span className="block text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
                Conseil
              </span>
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
              Des analyses approfondies et des recommandations stratégiques pour
              guider vos décisions et maximiser votre impact.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16 transition-all duration-700 opacity-100 translate-y-0">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Nos Services de Conseil
            </h2>
            <p className="text-gray-600">
              Une expertise stratégique pour éclairer vos décisions.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-500 opacity-100 translate-y-0"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-6 h-6 text-purple-600" />
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
                      <CheckCircle className="w-4 h-4 text-purple-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16 transition-all duration-700 opacity-100 translate-y-0">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Notre Approche
            </h2>
            <p className="text-gray-600">
              Une méthodologie structurée pour des résultats concrets.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {approach.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-sm transition-all duration-500 opacity-100 translate-y-0"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 text-purple-600 font-bold">
                  {index + 1}
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
              Besoin d&apos;une étude ou d&apos;un conseil ?
            </h2>
            <p className="text-gray-600 mb-8">
              Parlons de vos enjeux et définissons ensemble la meilleure
              stratégie.
            </p>
            <Link href="/contact">
              <button className="group bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-all duration-300 flex items-center gap-2 mx-auto">
                Demander un conseil
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EtudeConseil;
