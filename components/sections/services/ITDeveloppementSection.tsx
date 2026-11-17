"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  ChevronRight,
  ArrowRight,
  Code,
  Monitor,
  Settings,
  Network,
  Server,
  Smartphone,
  Globe,
  Database,
  ShieldCheck,
  Cpu,
  Headphones,
  Rocket,
} from "lucide-react";

const ease = [0.22, 1, 1, 1] as const;

const services = [
  {
    icon: Monitor,
    title: "Solutions SAGE",
    description:
      "Intégration et accompagnement autour des solutions SAGE pour une gestion comptable et commerciale efficace.",
    features: [
      "Installation et configuration",
      "Formation utilisateurs",
      "Maintenance et support",
      "Migration de données",
    ],
  },
  {
    icon: Code,
    title: "Développement Sur Mesure",
    description:
      "Applications web et mobiles modernes, conçues pour répondre précisément à vos besoins métiers.",
    features: [
      "Applications de gestion",
      "Sites web professionnels",
      "Applications mobiles",
      "API et intégrations",
    ],
  },
  {
    icon: Network,
    title: "Réseaux & Infrastructure",
    description:
      "Conception, déploiement et sécurisation de vos infrastructures réseau et serveurs.",
    features: [
      "Installation serveurs",
      "Sécurisation réseau",
      "Sauvegarde et restauration",
      "VPN et accès distants",
    ],
  },
  {
    icon: Settings,
    title: "Maintenance & Support",
    description:
      "Accompagnement continu pour assurer la performance et la disponibilité de vos systèmes.",
    features: [
      "Support réactif",
      "Mises à jour régulières",
      "Monitoring 24/7",
      "Plans de continuité",
    ],
  },
];

const projects = [
  {
    title: "CAPESYS",
    description:
      "Plateforme complète de gestion des stations-service avec IA prédictive, comptabilité intégrée et rapports avancés.",
    category: "Logiciel",
    image: "/images/portfolio/capesys.png",
    href: "/contact",
  },
  {
    title: "Intégration SAGE",
    description:
      "Déploiement et personnalisation de solutions SAGE pour la comptabilité, la paie et la gestion commerciale.",
    category: "ERP",
    image: "/images/portfolio/sage.jpg",
    href: "/contact",
  },
  {
    title: "Applications Métiers",
    description:
      "Développement d'applications web et mobiles sur mesure pour différents secteurs d'activité.",
    category: "Web & Mobile",
    image: "/images/portfolio/mobile.png",
    href: "/contact",
  },
];

const categories = ["Tous", "Logiciel", "ERP", "Web & Mobile"];

const techStack = [
  { icon: Globe, label: "Développement Web" },
  { icon: Smartphone, label: "Applications Mobiles" },
  { icon: Database, label: "Bases de données" },
  { icon: Server, label: "Cloud & Serveurs" },
  { icon: ShieldCheck, label: "Cybersécurité" },
  { icon: Cpu, label: "Intelligence artificielle" },
];

const commitments = [
  {
    icon: Headphones,
    title: "Support dédié",
    description:
      "Une équipe à votre écoute pour résoudre rapidement vos problèmes.",
  },
  {
    icon: Rocket,
    title: "Livraison maîtrisée",
    description:
      "Des délais maîtrisés grâce à une méthodologie rigoureuse et efficace.",
  },
  {
    icon: ShieldCheck,
    title: "Qualité & fiabilité",
    description:
      "Des solutions testées, documentées et maintenues dans la durée.",
  },
];

export default function ITDeveloppementSection() {
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filteredProjects =
    activeCategory === "Tous"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const introRef = useRef<HTMLDivElement>(null);
  const introInView = useInView(introRef, {
    once: true,
    margin: "-80px",
  });

  const servicesRef = useRef<HTMLDivElement>(null);
  const servicesInView = useInView(servicesRef, {
    once: true,
    margin: "-80px",
  });

  const projectsRef = useRef<HTMLDivElement>(null);
  const projectsInView = useInView(projectsRef, {
    once: true,
    margin: "-80px",
  });

  const techRef = useRef<HTMLDivElement>(null);
  const techInView = useInView(techRef, {
    once: true,
    margin: "-80px",
  });

  const ctaRef = useRef<HTMLDivElement>(null);
  const ctaInView = useInView(ctaRef, {
    once: true,
    amount: 0.2,
  });

  return (
    <main className="min-h-screen bg-white">
      {/* ═══ HERO ═══ */}
      <section className="relative flex min-h-[300px] items-center justify-center overflow-hidden bg-[#0A1628] pt-16">
        <div className="absolute inset-0 bg-[url('/images/principale.svg')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628]/80 to-[#0A1628]/95" />

        <div className="pointer-events-none absolute -right-32 -top-36 h-[350px] w-[350px] rounded-full border border-white/[0.07]" />
        <div className="pointer-events-none absolute -right-16 -top-20 h-[230px] w-[230px] rounded-full border border-white/[0.07]" />

        <div className="relative mx-auto w-full max-w-[1400px] px-6 py-16 text-center lg:px-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="text-4xl font-extrabold uppercase tracking-wider text-white sm:text-5xl lg:text-6xl"
          >
            IT & Développement
          </motion.h1>

          <motion.nav
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6, ease }}
            className="mt-6 flex items-center justify-center gap-2 text-sm text-white/60"
            aria-label="Fil d'Ariane"
          >
            <Link href="/" className="transition-colors hover:text-white">
              Accueil
            </Link>

            <ChevronRight className="h-3.5 w-3.5" />

            <Link
              href="/#services"
              className="transition-colors hover:text-white"
            >
              Activités
            </Link>

            <ChevronRight className="h-3.5 w-3.5" />

            <span className="font-semibold text-[#E87932]">
              IT & Développement
            </span>
          </motion.nav>
        </div>
      </section>

      {/* ═══ INTRODUCTION ═══ */}
      <section className="bg-white py-20 lg:py-28">
        <div ref={introRef} className="mx-auto max-w-[1250px] px-6 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={introInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease }}
            >
              <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#E87932]">
                <Code className="h-4 w-4" />
                Notre département IT
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0A1628] sm:text-4xl">
                Des solutions technologiques pour accélérer votre transformation
                digitale
              </h2>

              <div className="mt-5 h-1 w-16 rounded-full bg-[#E87932]" />

              <p className="mt-6 text-base leading-8 text-[#64748B]">
                Notre département IT conçoit et déploie des solutions
                technologiques sur mesure pour répondre aux défis de votre
                entreprise. Du développement logiciel à l&apos;intégration de
                systèmes, nous mettons l&apos;innovation au service de votre
                performance.
              </p>

              <p className="mt-4 text-base leading-8 text-[#64748B]">
                Avec CAPESYS comme produit phare et notre expertise en solutions
                SAGE, nous accompagnons les entreprises dans leur modernisation
                et leur croissance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={introInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.7, ease }}
              className="relative"
            >
              <Image
                src="/images/services/systemes.jpg"
                alt="IT & Développement - Capital Analysis"
                width={600}
                height={400}
                className="h-auto w-full rounded-2xl object-cover shadow-lg"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />

              <div className="absolute -bottom-6 -left-6 rounded-xl bg-[#E87932] px-6 py-4 text-white shadow-lg">
                <p className="text-3xl font-extrabold">5+</p>
                <p className="text-sm font-medium text-white/90">
                  projets livrés
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ NOS SERVICES ═══ */}
      <section className="bg-[#F4F6F9] py-20 lg:py-28">
        <div ref={servicesRef} className="mx-auto max-w-[1250px] px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease }}
            className="mx-auto mb-14 max-w-3xl text-center"
          >
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#E87932]">
              Nos compétences
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0A1628] sm:text-4xl">
              Nos Services IT
            </h2>

            <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[#E87932]" />

            <p className="mt-6 text-base leading-8 text-[#64748B]">
              Des solutions technologiques complètes pour moderniser votre
              entreprise et optimiser vos processus.
            </p>
          </motion.div>

          <div className="relative mx-auto max-w-4xl">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {services.map((service, i) => {
                const colors = [
                  "bg-[#3B82F6]",
                  "bg-[#0A1628]",
                  "bg-[#E87932]",
                  "bg-[#10B981]",
                ];

                const Icon = service.icon;

                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={servicesInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      delay: 0.2 + i * 0.12,
                      duration: 0.6,
                      ease,
                    }}
                    className={`${colors[i]} rounded-2xl p-8 text-white`}
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                      <Icon className="h-6 w-6 text-white" />
                    </div>

                    <h3 className="text-xl font-bold">{service.title}</h3>

                    <p className="mt-3 text-sm leading-relaxed text-white/80">
                      {service.description}
                    </p>

                    <ul className="mt-5 space-y-2">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm text-white/90"
                        >
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={servicesInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.7, ease }}
              className="absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 sm:flex"
            >
              <div className="flex h-36 w-36 items-center justify-center rounded-full border-4 border-white bg-[#F4F6F9] shadow-xl">
                <div className="text-center">
                  <Code className="mx-auto h-7 w-7 text-[#E87932]" />

                  <p className="mt-1 text-sm font-extrabold uppercase text-[#0A1628]">
                    IT &amp;
                  </p>

                  <p className="text-xs font-bold text-[#E87932]">
                    Développement
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ PORTFOLIO / NOS RÉALISATIONS ═══ */}
      <section className="relative overflow-hidden bg-white py-20 lg:py-28">
        <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#F4F6F9] blur-3xl" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-[#F4F6F9] blur-3xl" />

        <div
          ref={projectsRef}
          className="relative mx-auto max-w-[1400px] px-6 lg:px-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease }}
            className="mx-auto mb-10 max-w-3xl text-center"
          >
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#E87932]">
              Portfolio
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0A1628] sm:text-4xl lg:text-5xl">
              Nos réalisations
            </h2>

            <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[#E87932]" />

            <p className="mt-6 text-base leading-8 text-[#64748B]">
              Découvrez une sélection de projets conçus pour accompagner les
              entreprises dans leur transformation numérique.
            </p>
          </motion.div>

          {/* Filtres */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6, ease }}
            className="mb-12 flex flex-wrap items-center justify-center gap-2 sm:gap-3"
          >
            {categories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={isActive}
                  className={`rounded-md px-5 py-3 text-sm font-semibold transition-all duration-300 sm:px-7 ${
                    isActive
                      ? "bg-[#0A1628] text-white shadow-md"
                      : "bg-[#F4F6F9] text-[#334155] hover:bg-[#E9EDF3]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </motion.div>

          {/* Projets filtrés */}
          <motion.div
            layout
            className="grid gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filteredProjects.map((project, i) => (
              <motion.article
                layout
                key={project.title}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                  ease,
                }}
                className="group min-w-0"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-[#E8EBF0] bg-[#F4F6F9] shadow-[0_5px_20px_rgba(10,22,40,0.08)] transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_15px_35px_rgba(10,22,40,0.13)]">
                  <Image
                    src={project.image}
                    alt={`Aperçu du projet ${project.title}`}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />

                  <div className="absolute left-4 top-4">
                    <span className="rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-[#0A1628] shadow-sm backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="px-1 pt-5">
                  <h3 className="text-xl font-bold tracking-tight text-[#0A1628] transition-colors duration-300 group-hover:text-[#E87932]">
                    {project.title}
                  </h3>

                  <p className="mt-3 min-h-[72px] text-sm leading-6 text-[#64748B]">
                    {project.description}
                  </p>

                  <Link
                    href={project.href}
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#E87932] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D96520] hover:shadow-lg hover:shadow-[#E87932]/20"
                  >
                    Découvrir le projet
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ NOTRE STACK TECHNIQUE ═══ */}
      <section className="bg-white py-20 lg:py-28">
        <div ref={techRef} className="mx-auto max-w-[1250px] px-6 lg:px-10">
          {/* En-tête centré */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={techInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#E87932]">
              Notre expertise technique
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0A1628] sm:text-4xl">
              Des technologies modernes et éprouvées
            </h2>

            <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[#E87932]" />

            <p className="mt-6 text-base leading-8 text-[#64748B]">
              Nous mobilisons des technologies fiables et performantes pour
              concevoir des solutions numériques sécurisées, évolutives et
              adaptées aux enjeux de votre entreprise.
            </p>
          </motion.div>

          {/* Grille des technologies */}
          <div className="mx-auto mt-14 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 lg:gap-6">
            {techStack.map((tech, i) => {
              const Icon = tech.icon;

              return (
                <motion.div
                  key={tech.label}
                  initial={{ opacity: 0, y: 25 }}
                  animate={techInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    delay: 0.15 + i * 0.1,
                    duration: 0.6,
                    ease,
                  }}
                  className="group flex flex-col items-center justify-center rounded-2xl border border-[#E9EDF2] bg-[#F8F9FB] px-5 py-9 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#D8DEE8] hover:bg-white hover:shadow-lg hover:shadow-[#0A1628]/[0.05]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white shadow-sm transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-7 w-7 text-[#E87932]" />
                  </div>

                  <h3 className="mt-5 text-sm font-bold text-[#0A1628] sm:text-base">
                    {tech.label}
                  </h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ POURQUOI NOUS ═══ */}
      <section className="bg-[#F4F6F9] py-20 lg:py-28">
        <div className="mx-auto max-w-[900px] px-6 text-center lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
          >
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#E87932]">
              Nos engagements
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0A1628] sm:text-4xl">
              Pourquoi travailler avec nous ?
            </h2>

            <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[#E87932]" />
          </motion.div>

          <div className="mx-auto mt-12 grid max-w-3xl gap-8 sm:grid-cols-3">
            {commitments.map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.2 + i * 0.1,
                    duration: 0.6,
                    ease,
                  }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#E87932]">
                    <Icon className="h-6 w-6 text-white" />
                  </div>

                  <h3 className="mt-4 text-base font-bold text-[#0A1628]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-[#64748B]">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="bg-[#F4F6F9] px-6 pb-20 lg:px-10 lg:pb-28">
        <div ref={ctaRef} className="mx-auto max-w-[1400px]">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.97 }}
            animate={ctaInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.9, ease }}
            className="relative overflow-hidden rounded-3xl bg-[#0A1628] px-7 py-16 text-center sm:px-12 lg:px-20 lg:py-20"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 45,
                repeat: Infinity,
                ease: "linear",
              }}
              className="pointer-events-none absolute -right-28 -top-40 h-[400px] w-[400px] rounded-full border border-white/[0.08]"
            />

            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 55,
                repeat: Infinity,
                ease: "linear",
              }}
              className="pointer-events-none absolute -right-16 -top-28 h-[300px] w-[300px] rounded-full border border-white/[0.08]"
            />

            <div className="pointer-events-none absolute -bottom-32 -left-24 h-[300px] w-[300px] rounded-full bg-[#E87932]/10 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-3xl">
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                animate={ctaInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2, ease }}
                className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-[#E87932]"
              >
                Lançons votre projet
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={ctaInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.3, ease }}
                className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl"
              >
                Un projet IT en tête ?
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={ctaInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.45, ease }}
                className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/65 sm:text-lg"
              >
                Discutons de vos besoins et trouvons ensemble la solution
                technologique adaptée à vos ambitions.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={ctaInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.6, ease }}
                className="mt-9"
              >
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#E87932] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#E87932]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#f28b47] hover:shadow-xl hover:shadow-[#E87932]/30"
                >
                  Discuter de votre projet
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
