import { FC } from "react";
import { Code, Monitor, Settings, Network, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import { useScrollReveal } from "../../hooks/useScrollReveal";

const ITDeveloppement: FC = () => {
  const [servicesRef, servicesVisible] = useScrollReveal();
  const [projectsRef, projectsVisible] = useScrollReveal();

  const services = [
    {
      icon: Monitor,
      title: "Solutions SAGE",
      description: "Intégration et accompagnement autour des solutions SAGE pour une gestion efficace.",
      features: ["Installation et configuration", "Formation utilisateurs", "Maintenance"],
    },
    {
      icon: Code,
      title: "Développement Sur Mesure",
      description: "Applications web et mobiles modernes adaptées à vos besoins spécifiques.",
      features: ["Applications de gestion", "Sites web", "Applications mobiles"],
    },
    {
      icon: Network,
      title: "Réseaux & Serveurs",
      description: "Configuration et maintenance de vos infrastructures réseau et serveurs.",
      features: ["Installation serveurs", "Sécurisation réseau", "Sauvegarde"],
    },
    {
      icon: Settings,
      title: "Maintenance & Support",
      description: "Accompagnement continu pour assurer la performance de vos systèmes.",
      features: ["Support réactif", "Mises à jour", "Monitoring"],
    },
  ];

  const projects = [
    {
      title: "CapitalPetroleum",
      description: "Plateforme de gestion des stations-service",
      tag: "Logiciel",
    },
    {
      title: "Intégration SAGE",
      description: "Solutions de comptabilité et gestion",
      tag: "ERP",
    },
    {
      title: "Applications Métiers",
      description: "Développements sur mesure",
      tag: "Web & Mobile",
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
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/30 px-4 py-2 rounded-full mb-6">
              <Code className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-300 font-medium">Service</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              IT &
              <span className="block text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
                Développement
              </span>
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
              Logiciels de gestion, création de plateformes digitales et 
              intégration de solutions technologiques pour votre entreprise.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          
          <div className={`max-w-2xl mb-16 transition-all duration-700 ${servicesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Nos Services IT
            </h2>
            <p className="text-gray-600">
              Des solutions technologiques complètes pour moderniser votre entreprise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-500 ${
                  servicesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-blue-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className="py-20 lg:py-28 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          
          <div className={`max-w-2xl mx-auto text-center mb-16 transition-all duration-700 ${projectsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Nos Réalisations
            </h2>
            <p className="text-gray-600">
              Des projets qui font la différence pour nos clients.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-500 ${
                  projectsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <span className="inline-block bg-blue-100 text-blue-600 text-xs font-medium px-3 py-1 rounded-full mb-4">
                  {project.tag}
                </span>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {project.description}
                </p>
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
              Un projet IT en tête ?
            </h2>
            <p className="text-gray-600 mb-8">
              Discutons de vos besoins et trouvons la solution adaptée.
            </p>
            <Link to="/contact">
              <button className="group bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center gap-2 mx-auto">
                Discuter de votre projet
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITDeveloppement;
