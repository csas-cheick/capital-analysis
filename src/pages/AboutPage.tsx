import { FC } from "react";
import {
  Briefcase, // Icône principale de la page (Mallette/Expertise)
  Target, // Mission
  CheckCircle, // Valeur
  Star, // Valeur
  Lightbulb, // Valeur
  Users, // Équipe
  ArrowRight,
  Eye, // Vision
} from "lucide-react";
import Header from "../components/header/Header";

const AboutPage: FC = () => {
  const values = [
    {
      icon: CheckCircle,
      title: "Confiance & Intégrité",
      description: "Notre engagement envers la transparence et l'éthique guide chaque interaction financière et IT.",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      icon: Lightbulb,
      title: "Innovation Continue",
      description: "Nous investissons dans les technologies et les méthodes de pointe pour offrir les meilleures solutions.",
      color: "text-cyan-600",
      bgColor: "bg-cyan-100",
    },
    {
      icon: Star,
      title: "Excellence Opérationnelle",
      description: "Viser la plus haute qualité dans nos livrables logiciels, nos conseils financiers et notre support.",
      color: "text-emerald-600",
      bgColor: "bg-emerald-100",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* ======================================================= */}
      {/* 1. SECTION HERO / TITRE */}
      {/* ======================================================= */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden">
        <Header />
        {/* Effets de fond */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              radial-gradient(circle at 50% 10%, rgba(59, 130, 246, 0.4) 0%, transparent 50%), 
              radial-gradient(circle at 90% 80%, rgba(6, 182, 212, 0.3) 0%, transparent 50%)
            `,
            }}
          ></div>
        </div>

        <div className="relative container mx-auto px-6 text-center">
          {/* Icône principale */}
          <div className="inline-flex items-center justify-center mb-6 p-6 rounded-full bg-blue-600/30 backdrop-blur-sm border-2 border-blue-500/50 shadow-2xl">
            <Briefcase className="w-16 h-16 md:w-20 md:h-20 text-cyan-400" />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent leading-tight">
            À Propos de Capital Analysis
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Nous sommes le partenaire de confiance qui transforme vos défis
            financiers et technologiques en leviers de succès.
          </p>
        </div>
      </section>

      {/* ======================================================= */}
      {/* 2. NOTRE HISTOIRE & MISSION/VISION */}
      {/* ======================================================= */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Colonne Gauche : Histoire */}
            <div>
              <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Target className="w-4 h-4 mr-2" />
                Notre Histoire
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Une Expertise Fondée sur l'Impact
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Créée il y a plus de cinq ans, **Capital Analysis** est née de la conviction que la performance des entreprises africaines repose sur la convergence entre une gestion financière rigoureuse et des solutions technologiques sur mesure.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Nous accompagnons les PME et les grandes entreprises dans l'**optimisation de leurs processus** et la **sécurisation de leur croissance** grâce à notre double compétence unique en Ingénierie Financière et IT.
              </p>
            </div>

            {/* Colonne Droite : Mission & Vision */}
            <div className="space-y-8 p-8 bg-white rounded-2xl shadow-xl border border-gray-100">
              <div className="flex items-start space-x-4">
                <Target className="w-8 h-8 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Notre Mission</h3>
                  <p className="text-gray-600">
                    Fournir des **conseils stratégiques** et des **outils numériques innovants** qui garantissent la pérennité et l'expansion de nos clients en Afrique.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Eye className="w-8 h-8 text-cyan-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Notre Vision</h3>
                  <p className="text-gray-600">
                    Être reconnu comme le leader ouest-africain des solutions intégrées de gestion financière et de développement de logiciels d'entreprise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================= */}
      {/* 3. NOS VALEURS FONDAMENTALES */}
      {/* ======================================================= */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Star className="w-4 h-4 mr-2" />
            Nos Principes
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16">
            Les Valeurs qui Nous Guident
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-8 bg-white rounded-2xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              >
                <div
                  className={`w-16 h-16 ${value.bgColor} rounded-full flex items-center justify-center mx-auto mb-6 border border-opacity-50`}
                >
                  <value.icon className={`w-8 h-8 ${value.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================= */}
      {/* 4. NOTRE ÉQUIPE (Placeholder pour le futur) */}
      {/* ======================================================= */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Users className="w-4 h-4 mr-2" />
            L'Équipe
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Rencontrez Nos Experts
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Notre succès repose sur une équipe de consultants financiers certifiés et de développeurs IT passionnés, dédiés à l'atteinte de vos objectifs.
          </p>

          {/* Placeholder pour les cartes de membres d'équipe */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6 bg-white rounded-xl shadow-md border border-gray-100">
                <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center text-gray-600">
                    <Users className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-lg text-gray-900">Expertise Financière</h4>
                <p className="text-sm text-blue-600">Conseil Stratégique</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md border border-gray-100">
                <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center text-gray-600">
                    <Users className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-lg text-gray-900">Leadership IT</h4>
                <p className="text-sm text-cyan-600">Développement Logiciel</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md border border-gray-100">
                <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center text-gray-600">
                    <Users className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-lg text-gray-900">Support Client</h4>
                <p className="text-sm text-emerald-600">Relation Partenaire</p>
            </div>
          </div>
          
          <button className="group mt-12 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl shadow-blue-500/30">
            <span className="flex items-center text-lg">
              Rejoindre l'Équipe
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;