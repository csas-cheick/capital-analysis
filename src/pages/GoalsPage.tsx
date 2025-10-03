import { FC } from "react";
import {
  Award, // Icône principale (Récompense/Succès)
  Target, // Croissance/Cible
  TrendingUp, // Amélioration/Performance
  Monitor, // Technologie
  Banknote, // Finance
  Users, // Impact humain
  Map, // Feuille de route
  CheckCircle,
} from "lucide-react";
import Header from "../components/header/Header";

const GoalsPage: FC = () => {
  const strategicGoals = [
    {
      icon: Target,
      title: "Excellence Opérationnelle",
      description: "Optimiser les processus internes de nos clients grâce à des audits précis et des solutions logicielles sur mesure, réduisant les coûts et les erreurs.",
      color: "text-blue-600",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: TrendingUp,
      title: "Maximisation de l'Impact Financier",
      description: "Assurer la croissance pérenne en identifiant les leviers de valorisation et en structurant les meilleures stratégies d'ingénierie financière.",
      color: "text-emerald-600",
      bgColor: "bg-emerald-500/10",
    },
    {
      icon: Users,
      title: "Expansion Régionale et Numérique",
      description: "Faciliter l'accès aux marchés numériques et physiques en Afrique de l'Ouest grâce à une infrastructure IT solide et des conseils stratégiques d'expansion.",
      color: "text-cyan-600",
      bgColor: "bg-cyan-500/10",
    },
  ];

  const clientKPIs = [
    { number: "+30%", label: "Amélioration de la productivité après déploiement logiciel." },
    { number: "40%", label: "Réduction des coûts opérationnels grâce à l'optimisation financière." },
    { number: "99%", label: "Taux de conformité réglementaire et fiscale des clients." },
    { number: "50+", label: "Nouveaux marchés (géographiques ou numériques) ouverts pour nos clients." },
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
              radial-gradient(circle at 70% 30%, rgba(59, 130, 246, 0.4) 0%, transparent 50%), 
              radial-gradient(circle at 10% 90%, rgba(6, 182, 212, 0.3) 0%, transparent 50%)
            `,
            }}
          ></div>
        </div>

        <div className="relative container mx-auto px-6 text-center">
          {/* Icône principale */}
          <div className="inline-flex items-center justify-center mb-6 p-6 rounded-full bg-blue-600/30 backdrop-blur-sm border-2 border-blue-500/50 shadow-2xl">
            <Award className="w-16 h-16 md:w-20 md:h-20 text-cyan-400" />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent leading-tight">
            Nos Objectifs Stratégiques
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Définir des objectifs clairs est la première étape vers un succès
            mesurable. Nous nous engageons à atteindre l'excellence pour vous.
          </p>
        </div>
      </section>

      {/* ======================================================= */}
      {/* 2. OBJECTIFS STRATÉGIQUES */}
      {/* ======================================================= */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Map className="w-4 h-4 mr-2" />
              Axes Stratégiques
            </div>
            <h2 className="text-4xl font-bold text-gray-900 max-w-3xl mx-auto">
              Les Trois Piliers de Notre Engagement
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {strategicGoals.map((goal, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-blue-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className={`w-14 h-14 rounded-xl ${goal.bgColor} flex items-center justify-center mb-6`}>
                  <goal.icon className={`w-7 h-7 ${goal.color}`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
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

      {/* ======================================================= */}
      {/* 3. LES OBJECTIFS DE NOS CLIENTS (KPIs) */}
      {/* ======================================================= */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image/Visuel de Succès */}
            <div className="relative p-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl shadow-2xl">
              <div className="absolute inset-0 opacity-20 bg-center bg-cover rounded-3xl" style={{ backgroundImage: 'url(/path/to/abstract-data-image.jpg)' }}></div>
              <div className="relative text-white text-center py-12">
                <Banknote className="w-16 h-16 mx-auto mb-4" />
                <p className="text-2xl font-light">
                  "Nous ne mesurons pas seulement les chiffres, nous
                  construisons la valeur."
                </p>
              </div>
            </div>

            {/* Liste des KPIs */}
            <div>
              <div className="inline-flex items-center bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Target className="w-4 h-4 mr-2" />
                Résultats Mesurables
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Les Objectifs que Vous Allez Atteindre
              </h2>

              <div className="space-y-6">
                {clientKPIs.map((kpi, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 border-l-4 border-blue-500 bg-gray-50 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <span className="text-2xl font-extrabold text-blue-800 block leading-tight">
                        {kpi.number}
                      </span>
                      <p className="text-gray-600 text-lg">{kpi.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================= */}
      {/* 4. FEUILLE DE ROUTE (Prochaines Étapes) */}
      {/* ======================================================= */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Map className="w-4 h-4 mr-2" />
            L'Avenir
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
            Notre Engagement pour Demain
          </h2>

          <div className="relative max-w-5xl mx-auto">
            {/* Ligne de temps visuelle */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-300"></div>

            <div className="space-y-16">
              {/* Étape 1 */}
              <div className="md:grid md:grid-cols-2 md:gap-12 items-center">
                <div className="text-right md:pr-10">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Phase 1 : Consolidation (Année 1)
                  </h3>
                  <p className="text-gray-600">
                    Déploiement de notre plateforme ERP/CRM de nouvelle génération et standardisation de nos procédures d'audit financier.
                  </p>
                </div>
                <div className="md:col-span-1 flex justify-start md:justify-start">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white border-4 border-white shadow-lg">
                        <Monitor className="w-5 h-5" />
                    </div>
                </div>
              </div>

              {/* Étape 2 */}
              <div className="md:grid md:grid-cols-2 md:gap-12 items-center">
                <div className="md:col-span-1 flex justify-end">
                    <div className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center text-white border-4 border-white shadow-lg">
                        <TrendingUp className="w-5 h-5" />
                    </div>
                </div>
                <div className="text-left md:pl-10">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Phase 2 : Innovation et Expansion (Année 2-3)
                  </h3>
                  <p className="text-gray-600">
                    Lancement de services de Cybersécurité avancés et ouverture de deux nouvelles représentations régionales en Afrique de l'Ouest.
                  </p>
                </div>
              </div>
              
              {/* Étape 3 */}
              <div className="md:grid md:grid-cols-2 md:gap-12 items-center">
                <div className="text-right md:pr-10">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Phase 3 : Leadership (À Long Terme)
                  </h3>
                  <p className="text-gray-600">
                    Être la référence absolue pour l'intégration Finance/IT, garantissant la sécurité et la performance des entreprises sur le continent.
                  </p>
                </div>
                <div className="md:col-span-1 flex justify-start md:justify-start">
                    <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white border-4 border-white shadow-lg">
                        <Award className="w-5 h-5" />
                    </div>
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