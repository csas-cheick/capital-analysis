import { FC } from "react";
import {
  Target,
  TrendingUp,
  Users,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import Header from "../components/layout/Header";
import { useScrollReveal } from "../hooks/useScrollReveal";

const GoalsPage: FC = () => {
  const [goalsRef, goalsVisible] = useScrollReveal();
  const [kpiRef, kpiVisible] = useScrollReveal();
  const [roadmapRef, roadmapVisible] = useScrollReveal();

  const goals = [
    {
      icon: Target,
      title: "Excellence Opérationnelle",
      description:
        "Optimiser les processus de nos clients grâce à des audits précis et des solutions logicielles sur mesure.",
    },
    {
      icon: TrendingUp,
      title: "Impact Financier",
      description:
        "Identifier les leviers de valorisation et structurer les meilleures stratégies financières.",
    },
    {
      icon: Users,
      title: "Expansion Régionale",
      description:
        "Faciliter l'accès aux marchés numériques et physiques en Afrique de l'Ouest.",
    },
  ];

  const kpis = [
    { value: "+30%", label: "Productivité après déploiement" },
    { value: "40%", label: "Réduction des coûts" },
    { value: "99%", label: "Conformité réglementaire" },
    { value: "50+", label: "Marchés ouverts" },
  ];

  const roadmap = [
    {
      year: "2023",
      title: "Création",
      description: "Lancement de Capital Analysis au Niger",
    },
    {
      year: "2024",
      title: "CAPEsys",
      description: "Développement de notre solution phare",
    },
    { year: "2025", title: "Expansion", description: "Partenariats régionaux" },
    {
      year: "2026",
      title: "Innovation",
      description: "Nouvelles solutions digitales et IA",
    },
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
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-6">
              <Target className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-gray-300">Vision & Stratégie</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Nos Objectifs
              <span className="block text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
                Stratégiques
              </span>
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed">
              Notre feuille de route pour accompagner la croissance de nos
              clients et contribuer au développement économique régional.
            </p>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section ref={goalsRef} className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div
            className={`max-w-2xl mx-auto text-center mb-16 transition-all duration-700 ${goalsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Trois Axes Prioritaires
            </h2>
            <p className="text-gray-600">
              Les piliers de notre stratégie de développement.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {goals.map((goal, index) => (
              <div
                key={index}
                className={`bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-500 ${
                  goalsVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <goal.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {goal.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {goal.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KPIs Section */}
      <section ref={kpiRef} className="py-20 lg:py-28 bg-[#0a1628]">
        <div className="container mx-auto px-6 lg:px-8">
          <div
            className={`max-w-2xl mx-auto text-center mb-16 transition-all duration-700 ${kpiVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Impact Mesurable
            </h2>
            <p className="text-gray-400">
              Les résultats concrets que nous visons pour nos clients.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {kpis.map((kpi, index) => (
              <div
                key={index}
                className={`text-center p-6 bg-white/5 rounded-xl border border-white/10 transition-all duration-500 ${
                  kpiVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                  {kpi.value}
                </div>
                <p className="text-sm text-gray-400">{kpi.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section ref={roadmapRef} className="py-20 lg:py-28 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div
            className={`max-w-2xl mx-auto text-center mb-16 transition-all duration-700 ${roadmapVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Notre Parcours
            </h2>
            <p className="text-gray-600">
              Les étapes clés de notre développement.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-blue-200 hidden sm:block"></div>

              <div className="space-y-8">
                {roadmap.map((item, index) => (
                  <div
                    key={index}
                    className={`relative flex gap-6 transition-all duration-500 ${
                      roadmapVisible
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-10"
                    }`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    {/* Dot */}
                    <div className="relative flex-shrink-0 hidden sm:block">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-white rounded-xl p-6 shadow-sm">
                      <div className="text-sm font-semibold text-blue-600 mb-1">
                        {item.year}
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-[#0a1628] to-[#0f1f35] relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-cyan-500 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10 lg:p-14">
              <div className="grid lg:grid-cols-5 gap-8 items-center">
                {/* Left content */}
                <div className="lg:col-span-3">
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                    Prêt à atteindre vos objectifs ?
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    Nos experts sont là pour vous accompagner dans la
                    réalisation de vos ambitions. Planifiez un échange sans
                    engagement.
                  </p>
                </div>

                {/* Right CTA */}
                <div className="lg:col-span-2 flex flex-col gap-4">
                  <Link href="/contact" className="w-full">
                    <button className="group w-full bg-white text-[#0a1628] px-6 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2">
                      Planifier un appel
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                  <a
                    href="mailto:contact@capital-analysis.com"
                    className="w-full"
                  >
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

export default GoalsPage;
