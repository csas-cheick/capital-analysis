import { FC } from "react";
import { Target, Users, Award, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import Header from "../components/layout/Header";
import { useScrollReveal } from "../hooks/useScrollReveal";

const AboutPage: FC = () => {
  const [missionRef, missionVisible] = useScrollReveal();
  const [valuesRef, valuesVisible] = useScrollReveal();
  const [teamRef, teamVisible] = useScrollReveal();

  const values = [
    {
      icon: CheckCircle,
      title: "Intégrité",
      description: "Transparence et éthique dans chaque interaction.",
    },
    {
      icon: Target,
      title: "Excellence",
      description: "Qualité maximale dans tous nos livrables.",
    },
    {
      icon: Users,
      title: "Proximité",
      description: "Accompagnement personnalisé de chaque client.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#0a1628] overflow-hidden">
        <Header />

        {/* Subtle pattern */}
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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              À Propos de
              <span className="block text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
                Capital Analysis
              </span>
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed">
              Cabinet de conseil en ingénierie financière et solutions IT, nous
              accompagnons les entreprises du Niger et d&apos;Afrique de
              l&apos;Ouest dans leur transformation et leur croissance.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section ref={missionRef} className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left - Content */}
            <div
              className={`transition-all duration-700 ${missionVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
            >
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-6">
                <Target className="w-4 h-4" />
                Notre Mission
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Transformer les données en décisions stratégiques
              </h2>

              <p className="text-gray-600 leading-relaxed mb-6">
                Depuis notre création, nous nous engageons à fournir des
                solutions financières et technologiques de haute qualité. Notre
                expertise couvre l&apos;ingénierie financière, le développement
                de logiciels sur mesure, et le conseil stratégique.
              </p>

              <p className="text-gray-600 leading-relaxed mb-8">
                Notre approche combine rigueur analytique et innovation
                technologique pour répondre aux défis uniques de chaque
                entreprise que nous accompagnons.
              </p>

              <div className="flex flex-wrap gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">
                    2+
                  </div>
                  <div className="text-sm text-gray-500">Projets réalisés</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">
                    3 ans
                  </div>
                  <div className="text-sm text-gray-500">D&apos;expérience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">
                    98%
                  </div>
                  <div className="text-sm text-gray-500">Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Right - Visual */}
            <div
              className={`transition-all duration-700 delay-200 ${missionVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            >
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 lg:p-12">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                      <Award className="w-8 h-8 text-blue-600 mb-3" />
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Expertise
                      </h4>
                      <p className="text-sm text-gray-500">Finance & IT</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                      <Users className="w-8 h-8 text-cyan-600 mb-3" />
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Équipe
                      </h4>
                      <p className="text-sm text-gray-500">Dédiée</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm col-span-2">
                      <Target className="w-8 h-8 text-emerald-600 mb-3" />
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Objectif
                      </h4>
                      <p className="text-sm text-gray-500">
                        Votre réussite est notre priorité
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative element */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-600/10 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-20 lg:py-28 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div
            className={`max-w-2xl mx-auto text-center mb-16 transition-all duration-700 ${valuesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Nos Valeurs
            </h2>
            <p className="text-gray-600">
              Les principes qui guident notre travail au quotidien.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-all duration-500 ${
                  valuesVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div
            className={`max-w-2xl mx-auto text-center mb-16 transition-all duration-700 ${teamVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Notre Équipe
            </h2>
            <p className="text-gray-600">
              Des experts passionnés au service de votre réussite.
            </p>
          </div>

          <div
            className={`bg-gradient-to-br from-[#0a1628] to-[#0f1f35] rounded-3xl p-10 lg:p-16 text-center transition-all duration-700 delay-200 ${teamVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Notre équipe réunit des consultants financiers expérimentés, des
              développeurs talentueux et des experts en gestion
              d&apos;entreprise, tous unis par la volonté d&apos;accompagner nos
              clients vers le succès.
            </p>

            <Link href="/contact">
              <button className="group bg-white text-[#0a1628] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 mx-auto">
                Rejoignez-nous
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Prêt à collaborer ?
            </h2>
            <p className="text-gray-600 mb-8">
              Discutons de vos projets et découvrez comment nous pouvons vous
              accompagner.
            </p>
            <Link href="/contact">
              <button className="group bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center gap-2 mx-auto">
                Contactez-nous
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
