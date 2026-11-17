"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "framer-motion";

import {
  ChevronRight,
  ArrowRight,
  TrendingUp,
  BarChart3,
  PieChart,
  LineChart,
  Target,
  ShieldCheck,
  Lightbulb,
  Users,
  Award,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

/* ═══════════════════════════════════════
   SERVICES
═══════════════════════════════════════ */

const services = [
  {
    icon: BarChart3,
    title: "Modélisation Financière",
    description:
      "Création de modèles prévisionnels robustes pour anticiper vos besoins et optimiser vos décisions stratégiques.",
    features: [
      "Prévisions de trésorerie",
      "Analyse de scénarios",
      "Projections à 3-5 ans",
      "Business plans",
    ],
  },
  {
    icon: PieChart,
    title: "Structuration Financière",
    description:
      "Optimisation de votre structure de capital et recherche de financements adaptés à vos ambitions de croissance.",
    features: [
      "Levées de fonds",
      "Dossiers bancaires",
      "Négociation investisseurs",
      "Due diligence",
    ],
  },
  {
    icon: LineChart,
    title: "Analyse de Performance",
    description:
      "Analyse approfondie de vos indicateurs clés pour identifier les leviers d'amélioration et de rentabilité.",
    features: [
      "Tableaux de bord",
      "Ratios financiers",
      "Benchmarking",
      "Recommandations",
    ],
  },
  {
    icon: Target,
    title: "Évaluation & Valorisation",
    description:
      "Estimation de la valeur de vos actifs, entreprises ou projets d'investissement selon les standards internationaux.",
    features: [
      "Valorisation d'entreprise",
      "Études de faisabilité",
      "Analyse d'investissement",
      "Rapports d'évaluation",
    ],
  },
];

/* ═══════════════════════════════════════
   NOS ATOUTS
═══════════════════════════════════════ */

const strengths = [
  {
    icon: ShieldCheck,
    title: "Rigueur & Fiabilité",
    description:
      "Des analyses précises et des recommandations fondées sur des données vérifiées.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Des solutions créatives adaptées aux réalités du marché africain et international.",
  },
  {
    icon: Users,
    title: "Proximité",
    description:
      "Un accompagnement sur mesure avec une équipe à l'écoute de vos besoins spécifiques.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "Une expertise reconnue par nos clients et partenaires depuis notre création.",
  },
];

/* ═══════════════════════════════════════
   PAGE INGÉNIERIE FINANCIÈRE
═══════════════════════════════════════ */

export default function IngenierieFinanciereSection() {
  const [activeService, setActiveService] = useState(0);

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

  const strengthsRef = useRef<HTMLDivElement>(null);
  const strengthsInView = useInView(strengthsRef, {
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
      {/* ═══════════════════════════════════════
          HERO
      ═══════════════════════════════════════ */}

      <section className="relative flex min-h-[220px] items-center justify-center overflow-hidden bg-[#0A1628] pt-16 sm:min-h-[300px]">
        <div className="absolute inset-0 bg-[url('/images/principale.svg')] bg-cover bg-center opacity-10" />

        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628]/80 to-[#0A1628]/95" />

        <div className="pointer-events-none absolute -right-32 -top-36 h-[350px] w-[350px] rounded-full border border-white/[0.07]" />

        <div className="pointer-events-none absolute -right-16 -top-20 h-[230px] w-[230px] rounded-full border border-white/[0.07]" />

        <div className="relative mx-auto w-full max-w-[1400px] px-5 py-10 text-center sm:py-16 lg:px-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="text-3xl font-extrabold uppercase tracking-wider text-white sm:text-5xl lg:text-6xl"
          >
            Ingénierie Financière
          </motion.h1>

          <motion.nav
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6, ease }}
            className="mt-6 flex flex-wrap items-center justify-center gap-2 text-sm text-white/60"
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
              Ingénierie Financière
            </span>
          </motion.nav>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          INTRODUCTION
      ═══════════════════════════════════════ */}

      <section className="bg-white py-12 sm:py-20 lg:py-28">
        <div ref={introRef} className="mx-auto max-w-[1250px] px-5 sm:px-6 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={introInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease }}
            >
              <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#E87932]">
                <TrendingUp className="h-4 w-4" />
                Notre expertise
              </span>

              <h2 className="mt-4 text-2xl font-bold tracking-tight text-[#0A1628] sm:text-3xl lg:text-4xl">
                Des solutions financières sur mesure pour accompagner votre
                croissance
              </h2>

              <div className="mt-5 h-1 w-16 rounded-full bg-[#E87932]" />

              <p className="mt-6 text-sm leading-7 text-[#64748B] sm:text-base sm:leading-8">
                Nous accompagnons entreprises et investisseurs dans la
                conception de solutions financières innovantes. De la
                modélisation à la structuration, en passant par l&apos;analyse
                de performance, notre équipe met son expertise au service de vos
                ambitions.
              </p>

              <p className="mt-4 text-sm leading-7 text-[#64748B] sm:text-base sm:leading-8">
                Notre approche combine rigueur analytique et connaissance
                approfondie des marchés africains pour vous offrir un
                accompagnement stratégique adapté à vos réalités.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={introInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.7, ease }}
              className="relative"
            >
              <Image
                src="/images/services/finance.jpg"
                alt="Ingénierie financière - Capital Analysis"
                width={600}
                height={400}
                className="h-auto w-full rounded-2xl object-cover shadow-lg"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />

              <div className="absolute -bottom-6 left-3 rounded-xl bg-[#E87932] px-6 py-4 text-white shadow-lg sm:-left-6">
                <p className="text-3xl font-extrabold">4+</p>
                <p className="text-sm font-medium text-white/90">
                  années d&apos;expertise
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          NOS SERVICES — ACCORDÉON INTERACTIF
      ═══════════════════════════════════════ */}

      <section className="overflow-hidden bg-[#0A1628] py-12 sm:py-20 lg:py-28">
        <div ref={servicesRef} className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease }}
            className="mx-auto mb-8 max-w-2xl text-center sm:mb-14 lg:mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#E87932]">
              Nos domaines d&apos;expertise
            </span>

            <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
              Nos Services
            </h2>

            <div className="mx-auto mt-5 h-[3px] w-14 rounded-full bg-[#E87932]" />

            <p className="mt-5 text-sm leading-7 text-white/60 sm:text-base">
              Découvrez nos expertises et les solutions que nous développons
              pour répondre à vos enjeux financiers.
            </p>
          </motion.div>

          <div className="flex flex-col gap-3 lg:h-[410px] lg:flex-row lg:gap-4">
            {services.map((service, i) => {
              const Icon = service.icon;
              const isActive = activeService === i;

              return (
                <motion.article
                  key={service.title}
                  layout
                  onMouseEnter={() => setActiveService(i)}
                  onFocus={() => setActiveService(i)}
                  onClick={() => setActiveService(i)}
                  tabIndex={0}
                  role="button"
                  aria-expanded={isActive}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      setActiveService(i);
                    }
                  }}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{
                    opacity: servicesInView ? 1 : 0,
                    y: servicesInView ? 0 : 25,
                  }}
                  transition={{
                    opacity: { delay: 0.15 + i * 0.1, duration: 0.5 },
                    y: { delay: 0.15 + i * 0.1, duration: 0.5, ease },
                    flex: { duration: 0.5, ease },
                  }}
                  className={`relative flex flex-none cursor-pointer flex-col overflow-hidden border border-white/10 bg-white/[0.025] outline-none transition-colors duration-300 hover:bg-white/[0.05] focus-visible:ring-2 focus-visible:ring-white/40 lg:min-h-0 ${
                    isActive ? "lg:flex-[2.3_1_0%]" : "lg:flex-[1_1_0%]"
                  }`}
                >
                  <div className="flex h-full flex-col p-5 sm:p-6 lg:p-8">
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.06]">
                        <Icon className="h-6 w-6 text-white/80" />
                      </div>

                      <motion.div
                        animate={{ rotate: isActive ? 45 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-2xl font-light text-white/50"
                      >
                        +
                      </motion.div>
                    </div>

                    <h3 className="mt-7 text-lg font-bold leading-snug text-white sm:text-xl">
                      {service.title}
                    </h3>

                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          key="details"
                          initial={{ opacity: 0, height: 0, y: 12 }}
                          animate={{ opacity: 1, height: "auto", y: 0 }}
                          exit={{ opacity: 0, height: 0, y: 8 }}
                          transition={{ duration: 0.35, ease }}
                          className="overflow-hidden"
                        >
                          <p className="mt-4 max-w-md text-sm leading-7 text-white/65">
                            {service.description}
                          </p>

                          <div className="my-5 h-px w-full bg-white/10" />

                          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.18em] text-white/45">
                            Nos interventions
                          </p>

                          <ul className="grid gap-3 sm:grid-cols-2">
                            {service.features.map((feature) => (
                              <li
                                key={feature}
                                className="flex items-start gap-2 text-xs leading-5 text-white/75"
                              >
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/50" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="mt-auto hidden pt-6 lg:block">
                      {!isActive && (
                        <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/30">
                          Découvrir
                        </span>
                      )}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>

          <p className="mt-7 text-center text-xs text-white/35">
            Survolez un service pour découvrir les détails de nos prestations.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          NOS ATOUTS — SANS IMAGE, TEXTE CENTRÉ
      ═══════════════════════════════════════ */}

      <section className="bg-white py-12 sm:py-20 lg:py-28">
        <div
          ref={strengthsRef}
          className="mx-auto max-w-[1250px] px-5 sm:px-6 lg:px-10"
        >
          {/* En-tête centré */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={strengthsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#E87932]">
              Pourquoi nous choisir
            </span>

            <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#0A1628] sm:text-3xl lg:text-4xl">
              Ce qui fait notre différence
            </h2>

            <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[#E87932]" />

            <p className="mt-6 text-sm leading-7 text-[#64748B] sm:text-base sm:leading-8">
              Notre engagement repose sur des valeurs essentielles qui guident
              chacune de nos interventions et la relation que nous construisons
              avec nos clients.
            </p>
          </motion.div>

          {/* Grille des atouts */}
          <div className="mx-auto mt-8 grid max-w-5xl grid-cols-2 gap-4 sm:mt-14 sm:gap-5 lg:grid-cols-4">
            {strengths.map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  animate={
                    strengthsInView
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 25 }
                  }
                  transition={{
                    delay: 0.15 + i * 0.1,
                    duration: 0.6,
                    ease,
                  }}
                  className="group flex flex-col items-center rounded-xl border border-[#E9EDF2] bg-[#F8F9FB] px-4 py-6 text-center sm:rounded-2xl sm:px-6 sm:py-9 transition-all duration-300 hover:-translate-y-1 hover:border-[#D8DEE8] hover:bg-white hover:shadow-lg hover:shadow-[#0A1628]/[0.05]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white shadow-sm transition-transform duration-300 group-hover:scale-110 sm:h-14 sm:w-14 sm:rounded-xl">
                    <Icon className="h-5 w-5 text-[#E87932] sm:h-6 sm:w-6" />
                  </div>

                  <h3 className="mt-3 text-sm font-bold text-[#0A1628] sm:mt-5 sm:text-base">
                    {item.title}
                  </h3>

                  <p className="mt-2 hidden text-sm leading-7 text-[#64748B] sm:mt-3 sm:block">
                    {item.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CTA
      ═══════════════════════════════════════ */}

      <section className="bg-[#F4F6F9] px-5 pb-12 sm:px-6 sm:pb-20 lg:px-10 lg:pb-28">
        <div ref={ctaRef} className="mx-auto max-w-[1400px] pt-12 sm:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.97 }}
            animate={ctaInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.9, ease }}
            className="relative overflow-hidden rounded-2xl bg-[#0A1628] px-5 py-10 text-center sm:rounded-3xl sm:px-12 sm:py-16 lg:px-20 lg:py-20"
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
                Passons à l&apos;action
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={ctaInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.3, ease }}
                className="mt-4 text-2xl font-bold leading-tight text-white sm:mt-5 sm:text-3xl lg:text-5xl"
              >
                Optimisez votre stratégie financière dès aujourd&apos;hui.
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={ctaInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.45, ease }}
                className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/65 sm:mt-6 sm:text-base sm:leading-8 lg:text-lg"
              >
                Discutons de vos objectifs et définissons ensemble la meilleure
                approche pour concrétiser vos ambitions financières.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={ctaInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.6, ease }}
                className="mt-6 sm:mt-9"
              >
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#E87932] px-6 py-3 sm:gap-3 sm:px-8 sm:py-4 text-sm font-bold text-white shadow-lg shadow-[#E87932]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#f28b47] hover:shadow-xl hover:shadow-[#E87932]/30"
                >
                  Prendre rendez-vous
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
