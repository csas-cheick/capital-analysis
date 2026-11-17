"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  ChevronRight,
  ArrowRight,
  Search,
  FileText,
  Target,
  Lightbulb,
  ClipboardCheck,
  BarChart3,
  Users,
  BookOpen,
  Compass,
  MessageCircle,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const services = [
  {
    icon: FileText,
    title: "Suivi & Évaluation de Projets",
    description:
      "Pilotez vos projets avec clarté et rigueur grâce à un système complet de suivi-évaluation.",
    features: [
      "Conception du cadre S&E",
      "Tableau de bord indicateurs",
      "Évaluation d'impact",
      "Rapports automatisés",
    ],
    color: "#E87932",
  },
  {
    icon: Search,
    title: "Études de Marché",
    description:
      "Analyses approfondies pour comprendre votre environnement concurrentiel et identifier les opportunités.",
    features: [
      "Analyse concurrentielle",
      "Études sectorielles",
      "Veille stratégique",
      "Benchmarking",
    ],
    color: "#0A1628",
  },
  {
    icon: Lightbulb,
    title: "Conseil Stratégique",
    description:
      "Accompagnement dans la définition et la mise en œuvre de votre stratégie de développement.",
    features: [
      "Diagnostic stratégique",
      "Plan d'action",
      "Accompagnement terrain",
      "Pilotage du changement",
    ],
    color: "#64748B",
  },
  {
    icon: ClipboardCheck,
    title: "Études de Faisabilité",
    description:
      "Évaluation rigoureuse de la viabilité technique, économique et financière de vos projets.",
    features: [
      "Analyse technique",
      "Projections financières",
      "Étude des risques",
      "Recommandations",
    ],
    color: "#3B82F6",
  },
];

const approach = [
  {
    step: "01",
    title: "Écoute",
    description:
      "Comprendre vos enjeux, vos objectifs et les contraintes de votre environnement.",
  },
  {
    step: "02",
    title: "Analyse",
    description:
      "Étudier votre situation à travers des données fiables et des méthodes éprouvées.",
  },
  {
    step: "03",
    title: "Recommandations",
    description:
      "Proposer des solutions concrètes, actionnables et adaptées à vos réalités.",
  },
  {
    step: "04",
    title: "Accompagnement",
    description:
      "Suivre la mise en œuvre et ajuster les actions pour garantir des résultats durables.",
  },
];

const strengths = [
  {
    icon: BarChart3,
    title: "Rigueur analytique",
    description:
      "Des méthodologies éprouvées et des analyses fondées sur des données fiables.",
  },
  {
    icon: Users,
    title: "Expertise multisectorielle",
    description:
      "Une connaissance approfondie de plusieurs secteurs d'activité en Afrique de l'Ouest.",
  },
  {
    icon: BookOpen,
    title: "Connaissance du terrain",
    description:
      "Une compréhension fine des réalités économiques et sociales locales.",
  },
  {
    icon: Compass,
    title: "Vision stratégique",
    description:
      "Des recommandations orientées résultats pour maximiser votre impact.",
  },
];

const sectors = [
  {
    icon: MessageCircle,
    title: "Énergie & Hydrocarbures",
    description:
      "Études sectorielles et accompagnement stratégique pour le secteur pétrolier.",
  },
  {
    icon: Users,
    title: "Institutions & ONG",
    description:
      "Suivi-évaluation de programmes, études d'impact et cadres logiques.",
  },
  {
    icon: Lightbulb,
    title: "Commerce & Services",
    description:
      "Études de marché, analyses concurrentielles et plans de développement.",
  },
];

export default function EtudeConseilSection() {
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

  const approachRef = useRef<HTMLDivElement>(null);
  const approachInView = useInView(approachRef, {
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
      {/* HERO */}
      <section className="relative flex min-h-[220px] items-center justify-center overflow-hidden bg-[#0A1628] pt-16 sm:min-h-[340px]">
        <div className="absolute inset-0 bg-[url('/images/principale.svg')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628]/75 to-[#0A1628]/95" />

        <div className="pointer-events-none absolute -right-32 -top-36 h-[350px] w-[350px] rounded-full border border-white/[0.07]" />
        <div className="pointer-events-none absolute -right-16 -top-20 h-[230px] w-[230px] rounded-full border border-white/[0.07]" />
        <div className="pointer-events-none absolute -bottom-40 -left-28 h-[350px] w-[350px] rounded-full border border-white/[0.05]" />

        <div className="relative mx-auto w-full max-w-[1400px] px-5 py-10 text-center sm:py-20 lg:px-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="text-3xl font-extrabold uppercase tracking-wider text-white sm:text-5xl lg:text-6xl"
          >
            Études & Conseil
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
              Études & Conseil
            </span>
          </motion.nav>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="bg-white py-12 sm:py-20 lg:py-28">
        <div ref={introRef} className="mx-auto max-w-[1250px] px-5 sm:px-6 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              animate={introInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease }}
            >
              <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#E87932]">
                <Target className="h-4 w-4" />
                Notre expertise
              </span>

              <h2 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-[#0A1628] sm:text-3xl lg:text-4xl">
                Des analyses stratégiques pour éclairer vos décisions
              </h2>

              <div className="mt-5 h-1 w-16 rounded-full bg-[#E87932]" />

              <p className="mt-6 text-sm leading-7 text-[#64748B] sm:text-base sm:leading-8">
                Capital Analysis vous accompagne dans la compréhension de votre
                environnement et l&apos;identification des meilleures
                opportunités. Nos études approfondies et nos conseils
                stratégiques vous donnent les clés pour prendre des décisions
                éclairées.
              </p>

              <p className="mt-4 text-sm leading-7 text-[#64748B] sm:text-base sm:leading-8">
                De l&apos;étude de marché au suivi-évaluation de projets, notre
                équipe met son expertise au service de votre réussite avec une
                approche rigoureuse et pragmatique.
              </p>

              <Link
                href="/contact"
                className="group mt-8 inline-flex items-center gap-3 text-sm font-bold text-[#0A1628] transition-colors hover:text-[#E87932]"
              >
                Discutons de votre projet
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 35 }}
              animate={introInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.7, ease }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src="/images/services/organisation.jpg"
                  alt="Études et conseil - Capital Analysis"
                  width={700}
                  height={500}
                  className="h-[350px] w-full object-cover sm:h-[430px]"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/25 to-transparent" />
              </div>

              <div className="absolute -bottom-6 -left-4 rounded-xl bg-[#E87932] px-6 py-4 text-white shadow-xl sm:-left-6">
                <p className="text-3xl font-extrabold">10+</p>
                <p className="text-sm font-medium text-white/90">
                  études réalisées
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* NOS SERVICES */}
      <section className="bg-[#F4F6F9] py-12 sm:py-20 lg:py-28">
        <div ref={servicesRef} className="mx-auto max-w-[1250px] px-5 sm:px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease }}
            className="mx-auto mb-14 max-w-3xl text-center"
          >
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#E87932]">
              Nos domaines d&apos;intervention
            </span>

            <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#0A1628] sm:text-3xl lg:text-4xl">
              Nos Services de Conseil
            </h2>

            <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[#E87932]" />

            <p className="mt-6 text-sm leading-7 text-[#64748B] sm:text-base sm:leading-8">
              Une expertise stratégique pour éclairer vos décisions et maximiser
              l&apos;impact de vos projets.
            </p>
          </motion.div>

          <div className="relative mx-auto max-w-4xl">
            <div className="grid gap-5 sm:grid-cols-2">
              {services.map((service, i) => {
                const Icon = service.icon;

                return (
                  <motion.article
                    key={service.title}
                    initial={{ opacity: 0, y: 25 }}
                    animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      delay: 0.15 + i * 0.1,
                      duration: 0.6,
                      ease,
                    }}
                    style={{ backgroundColor: service.color }}
                    className="rounded-xl p-5 text-white shadow-sm transition-transform duration-300 hover:-translate-y-1 sm:rounded-2xl sm:p-7 lg:p-8"
                  >
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-white/15">
                      <Icon className="h-6 w-6 text-white" />
                    </div>

                    <h3 className="text-xl font-bold leading-snug">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-white/80">
                      {service.description}
                    </p>

                    <ul className="mt-5 space-y-2.5">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2.5 text-sm text-white/90"
                        >
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white/70" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.article>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={servicesInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.6, ease }}
              className="absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 sm:block"
            >
              <div className="flex h-28 w-28 items-center justify-center rounded-full border-[5px] border-[#F4F6F9] bg-white shadow-lg">
                <div className="text-center">
                  <Target className="mx-auto h-6 w-6 text-[#E87932]" />
                  <p className="mt-1 text-xs font-extrabold uppercase text-[#0A1628]">
                    Études
                  </p>
                  <p className="text-[10px] font-bold text-[#E87932]">
                    & Conseil
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* NOTRE APPROCHE */}
      <section className="bg-[#0A1628] py-12 sm:py-20 lg:py-28">
        <div ref={approachRef} className="mx-auto max-w-[1250px] px-5 sm:px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={approachInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease }}
            className="mx-auto mb-14 max-w-3xl text-center"
          >
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#E87932]">
              Méthodologie
            </span>

            <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
              Notre Approche
            </h2>

            <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[#E87932]" />

            <p className="mt-6 text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
              Une méthodologie structurée en quatre étapes pour des résultats
              concrets et mesurables.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            {approach.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 25 }}
                animate={approachInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: 0.15 + i * 0.1,
                  duration: 0.6,
                  ease,
                }}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] p-5 text-center sm:rounded-2xl sm:p-7 transition-colors duration-300 hover:bg-white/[0.08]"
              >
                <span className="text-3xl font-extrabold text-[#E87932]/25 sm:text-5xl transition-colors duration-300 group-hover:text-[#E87932]/50">
                  {item.step}
                </span>

                <h3 className="mt-4 text-lg font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/60">
                  {item.description}
                </p>

                <div className="mx-auto mt-6 h-1 w-8 rounded-full bg-[#E87932]/60 transition-all duration-300 group-hover:w-14 group-hover:bg-[#E87932]" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NOS ATOUTS */}
      <section className="bg-white py-12 sm:py-20 lg:py-28">
        <div
          ref={strengthsRef}
          className="mx-auto max-w-[1250px] px-5 sm:px-6 lg:px-10"
        >
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={strengthsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease }}
            >
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#E87932]">
                Pourquoi nous choisir
              </span>

              <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#0A1628] sm:text-3xl lg:text-4xl">
                Ce qui fait notre différence
              </h2>

              <div className="mt-5 h-1 w-16 rounded-full bg-[#E87932]" />

              <p className="mt-6 max-w-xl text-sm leading-7 text-[#64748B] sm:text-base sm:leading-8">
                Notre valeur repose sur une combinaison de rigueur
                méthodologique, de connaissance du terrain et de vision
                stratégique.
              </p>

              <div className="mt-9 grid gap-7 sm:grid-cols-2">
                {strengths.map((item, i) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 18 }}
                      animate={strengthsInView ? { opacity: 1, y: 0 } : {}}
                      transition={{
                        delay: 0.15 + i * 0.1,
                        duration: 0.5,
                        ease,
                      }}
                      className="flex items-start gap-4"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E87932]/10">
                        <Icon className="h-5 w-5 text-[#E87932]" />
                      </div>

                      <div>
                        <h3 className="text-sm font-bold text-[#0A1628]">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-[#64748B]">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={strengthsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.7, ease }}
              className="relative"
            >
              <Image
                src="/images/services/expertise-2.png"
                alt="Expertise et accompagnement Capital Analysis"
                width={650}
                height={500}
                className="h-[350px] w-full rounded-2xl object-cover shadow-lg sm:h-[430px]"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <div className="absolute -bottom-5 -right-4 h-28 w-28 rounded-2xl border-[8px] border-white bg-[#E87932] sm:-right-6" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTEURS D'INTERVENTION */}
      <section className="bg-[#F4F6F9] py-12 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-[1100px] px-5 sm:px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#E87932]">
              Secteurs d&apos;intervention
            </span>

            <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#0A1628] sm:text-3xl lg:text-4xl">
              Des expertises adaptées à votre secteur
            </h2>

            <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[#E87932]" />

            <p className="mt-6 text-sm leading-7 text-[#64748B] sm:text-base sm:leading-8">
              Nous adaptons nos analyses et nos recommandations aux spécificités
              de chaque secteur d&apos;activité.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-10 sm:grid-cols-3">
            {sectors.map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.15 + i * 0.1,
                    duration: 0.6,
                    ease,
                  }}
                  className="group flex flex-col items-center text-center"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0A1628] transition-colors duration-300 group-hover:bg-[#E87932]">
                    <Icon className="h-7 w-7 text-white" />
                  </div>

                  <h3 className="mt-5 text-base font-bold text-[#0A1628]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#64748B]">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F4F6F9] px-5 pb-12 sm:px-6 sm:pb-20 lg:px-10 lg:pb-28">
        <div ref={ctaRef} className="mx-auto max-w-[1400px]">
          <motion.div
            initial={{ opacity: 0, y: 35, scale: 0.98 }}
            animate={ctaInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, ease }}
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
                Échangeons ensemble
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={ctaInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.3, ease }}
                className="mt-4 text-2xl font-bold leading-tight text-white sm:mt-5 sm:text-3xl lg:text-5xl"
              >
                Besoin d&apos;une étude ou d&apos;un conseil stratégique ?
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={ctaInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.45, ease }}
                className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/65 sm:mt-6 sm:text-base sm:leading-8 lg:text-lg"
              >
                Parlons de vos enjeux et définissons ensemble la meilleure
                stratégie pour atteindre vos objectifs.
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
                  Demander un conseil
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
