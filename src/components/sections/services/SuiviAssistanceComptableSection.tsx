import { FC } from "react";
import {
  Calculator,
  FileCheck,
  ClipboardList,
  TrendingUp,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const SuiviAssistanceComptable: FC = () => {
  const services = [
    {
      icon: Calculator,
      title: "Tenue Comptable",
      description: "Gestion complète de votre comptabilité au quotidien.",
      features: [
        "Saisie des opérations",
        "Rapprochements bancaires",
        "Facturation",
      ],
    },
    {
      icon: FileCheck,
      title: "États Financiers",
      description:
        "Préparation de vos bilans et états financiers réglementaires.",
      features: ["Bilan comptable", "Compte de résultat", "Annexes"],
    },
    {
      icon: ClipboardList,
      title: "Déclarations Fiscales",
      description: "Établissement et suivi de vos obligations fiscales.",
      features: ["TVA", "Impôts sur les sociétés", "Déclarations sociales"],
    },
    {
      icon: TrendingUp,
      title: "Tableaux de Bord",
      description: "Outils de pilotage pour une vision claire de vos finances.",
      features: [
        "Indicateurs clés",
        "Suivi de trésorerie",
        "Analyses mensuelles",
      ],
    },
  ];

  const benefits = [
    "Conformité garantie avec la réglementation en vigueur",
    "Gain de temps pour vous concentrer sur votre activité",
    "Vision claire et actualisée de votre situation financière",
    "Accompagnement personnalisé et réactif",
    "Optimisation de votre gestion fiscale",
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
            <div className="inline-flex items-center gap-2 bg-teal-500/20 border border-teal-500/30 px-4 py-2 rounded-full mb-6">
              <Calculator className="w-4 h-4 text-teal-400" />
              <span className="text-sm text-teal-300 font-medium">Service</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Suivi &
              <span className="block text-transparent bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text">
                Assistance Comptable
              </span>
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
              Une gestion comptable rigoureuse et un accompagnement sur mesure
              pour assurer la santé financière de votre entreprise.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16 transition-all duration-700 opacity-100 translate-y-0">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Nos Services Comptables
            </h2>
            <p className="text-gray-600">
              Un accompagnement complet pour toutes vos obligations comptables
              et fiscales.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-500 opacity-100 translate-y-0"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-6 h-6 text-teal-600" />
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
                      <CheckCircle className="w-4 h-4 text-teal-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 lg:py-28 bg-[#0a1628]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="transition-all duration-700 opacity-100 translate-x-0">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Pourquoi nous confier votre comptabilité ?
              </h2>
              <p className="text-gray-400 mb-8">
                Notre équipe d&apos;experts assure un suivi rigoureux de vos
                finances pour vous permettre de prendre les meilleures
                décisions.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="transition-all duration-700 delay-200 opacity-100 translate-x-0">
              <div className="bg-gradient-to-br from-teal-500/10 to-cyan-500/10 border border-teal-500/20 rounded-2xl p-8">
                <div className="text-center">
                  <div className="text-5xl font-bold text-white mb-2">100%</div>
                  <p className="text-gray-400 mb-6">Conformité réglementaire</p>

                  <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-700">
                    <div>
                      <div className="text-2xl font-bold text-teal-400">
                        15+
                      </div>
                      <p className="text-sm text-gray-500">
                        Années d&apos;expérience
                      </p>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-teal-400">
                        50+
                      </div>
                      <p className="text-sm text-gray-500">
                        Entreprises accompagnées
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Confiez-nous votre comptabilité
            </h2>
            <p className="text-gray-600 mb-8">
              Prenez rendez-vous pour un diagnostic gratuit de votre situation
              comptable.
            </p>
            <Link href="/contact">
              <button className="group bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-700 transition-all duration-300 flex items-center gap-2 mx-auto">
                Demander un devis
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SuiviAssistanceComptable;
