"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  ChevronRight,
  ArrowRight,
  Calculator,
  FileCheck,
  ClipboardList,
  TrendingUp,
  CheckCircle,
  ShieldCheck,
  Clock,
  Eye,
  Handshake,
  Scale,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const services = [
  {
    icon: Calculator,
    title: "Tenue Comptable",
    description:
      "Gestion complète de votre comptabilité au quotidien, de la saisie des opérations aux rapprochements bancaires.",
    features: [
      "Saisie des opérations",
      "Rapprochements bancaires",
      "Facturation et recouvrement",
      "Lettrage des comptes",
    ],
  },
  {
    icon: FileCheck,
    title: "États Financiers",
    description:
      "Préparation rigoureuse de vos bilans et états financiers conformes aux normes OHADA.",
    features: [
      "Bilan comptable",
      "Compte de résultat",
      "Annexes réglementaires",
      "Liasses fiscales",
    ],
  },
  {
    icon: ClipboardList,
    title: "Déclarations Fiscales",
    description:
      "Établissement et suivi de toutes vos obligations fiscales et sociales dans les délais.",
    features: [
      "TVA et taxes indirectes",
      "Impôts sur les sociétés",
      "Déclarations sociales",
      "Patente et contributions",
    ],
  },
  {
    icon: TrendingUp,
    title: "Tableaux de Bord",
    description:
      "Outils de pilotage pour une vision claire et actualisée de la santé financière de votre entreprise.",
    features: [
      "Indicateurs clés (KPI)",
      "Suivi de trésorerie",
      "Analyses mensuelles",
      "Reporting personnalisé",
    ],
  },
];

const benefits = [
  "Conformité garantie avec la réglementation OHADA et fiscale en vigueur",
  "Gain de temps pour vous concentrer sur votre cœur de métier",
  "Vision claire et actualisée de votre situation financière",
  "Accompagnement personnalisé et réactif tout au long de l&apos;année",
  "Optimisation de votre gestion fiscale et réduction des risques",
  "Interlocuteur dédié qui connaît votre dossier en profondeur",
];

const strengths = [
  {
    icon: ShieldCheck,
    title: "Conformité",
    description:
      "Respect strict des normes OHADA et de la réglementation fiscale nigérienne.",
  },
  {
    icon: Clock,
    title: "Réactivité",
    description:
      "Un suivi en temps réel et des réponses rapides à toutes vos questions.",
  },
  {
    icon: Eye,
    title: "Transparence",
    description:
      "Une visibilité totale sur vos comptes et votre situation financière.",
  },
  {
    icon: Handshake,
    title: "Proximité",
    description:
      "Un accompagnement humain avec un interlocuteur dédié à votre entreprise.",
  },
];

export default function SuiviAssistanceComptableSection() {
  const introRef = useRef<HTMLDivElement>(null);
  const introInView = useInView(introRef, { once: true, margin: "-80px" });

  const servicesRef = useRef<HTMLDivElement>(null);
  const servicesInView = useInView(servicesRef, {
    once: true,
    margin: "-80px",
  });

  const benefitsRef = useRef<HTMLDivElement>(null);
  const benefitsInView = useInView(benefitsRef, {
    once: true,
    margin: "-80px",
  });

  const strengthsRef = useRef<HTMLDivElement>(null);
  const strengthsInView = useInView(strengthsRef, {
    once: true,
    margin: "-80px",
  });

  const ctaRef = useRef<HTMLDivElement>(null);
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.2 });

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
            Assistance Comptable
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
              Assistance Comptable
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
                <Scale className="h-4 w-4" />
                Notre expertise comptable
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0A1628] sm:text-4xl">
                Une gestion comptable rigoureuse pour sécuriser votre entreprise
              </h2>

              <div className="mt-5 h-1 w-16 rounded-full bg-[#E87932]" />

              <p className="mt-6 text-base leading-8 text-[#64748B]">
                Capital Analysis assure le suivi comptable et fiscal de votre
                entreprise avec rigueur et professionnalisme. De la tenue
                quotidienne de vos comptes à la préparation de vos états
                financiers, nous garantissons la conformité et la fiabilité de
                vos données comptables.
              </p>

              <p className="mt-4 text-base leading-8 text-[#64748B]">
                Notre équipe d&apos;experts vous accompagne tout au long de
                l&apos;année pour vous permettre de vous concentrer sur votre
                cœur de métier en toute sérénité.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={introInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.7, ease }}
              className="relative"
            >
              <Image
                src="/images/services/expertise-3.png"
                alt="Assistance Comptable - Capital Analysis"
                width={600}
                height={400}
                className="h-auto w-full rounded-2xl object-cover shadow-lg"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />

              <div className="absolute -bottom-6 -left-6 rounded-xl bg-[#E87932] px-6 py-4 text-white shadow-lg">
                <p className="text-3xl font-extrabold">100%</p>
                <p className="text-sm font-medium text-white/90">
                  conformité réglementaire
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ NOS SERVICES — GRILLE SWOT ═══ */}
      <section className="bg-[#F4F6F9] py-20 lg:py-28">
        <div ref={servicesRef} className="mx-auto max-w-[1250px] px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease }}
            className="mx-auto mb-14 max-w-3xl text-center"
          >
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#E87932]">
              Nos prestations
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0A1628] sm:text-4xl">
              Nos Services Comptables
            </h2>

            <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[#E87932]" />

            <p className="mt-6 text-base leading-8 text-[#64748B]">
              Un accompagnement complet pour toutes vos obligations comptables
              et fiscales, en conformité avec les normes OHADA.
            </p>
          </motion.div>

          <div className="relative mx-auto max-w-4xl">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {services.map((service, i) => {
                const colors = [
                  "bg-[#0A1628]",
                  "bg-[#E87932]",
                  "bg-[#10B981]",
                  "bg-[#3B82F6]",
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
                  <Calculator className="mx-auto h-7 w-7 text-[#E87932]" />
                  <p className="mt-1 text-sm font-extrabold uppercase text-[#0A1628]">
                    Assistance
                  </p>
                  <p className="text-xs font-bold text-[#E87932]">Comptable</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ POURQUOI NOUS ═══ */}
      <section className="bg-[#0A1628] py-20 lg:py-28">
        <div ref={benefitsRef} className="mx-auto max-w-[1250px] px-6 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={benefitsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease }}
            >
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#E87932]">
                Vos avantages
              </span>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Pourquoi nous confier votre comptabilité ?
              </h2>

              <div className="mt-5 h-1 w-16 rounded-full bg-[#E87932]" />

              <p className="mt-6 text-base leading-8 text-white/60">
                Notre équipe d&apos;experts assure un suivi rigoureux de vos
                finances pour vous permettre de prendre les meilleures
                décisions.
              </p>

              <ul className="mt-8 space-y-4">
                {benefits.map((benefit, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={benefitsInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      delay: 0.3 + i * 0.08,
                      duration: 0.5,
                      ease,
                    }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#E87932]" />
                    <span
                      className="text-sm leading-relaxed text-white/80"
                      dangerouslySetInnerHTML={{ __html: benefit }}
                    />
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={benefitsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.7, ease }}
              className="flex justify-center"
            >
              <div className="w-full max-w-sm rounded-2xl border border-white/10 bg-white/5 p-10 text-center">
                <p className="text-6xl font-extrabold text-white">100%</p>
                <p className="mt-2 text-base text-white/60">
                  Conformité réglementaire
                </p>

                <div className="mt-8 grid grid-cols-2 gap-6 border-t border-white/10 pt-8">
                  <div>
                    <p className="text-3xl font-extrabold text-[#E87932]">4+</p>
                    <p className="mt-1 text-xs text-white/50">
                      Années d&apos;expérience
                    </p>
                  </div>

                  <div>
                    <p className="text-3xl font-extrabold text-[#E87932]">
                      10+
                    </p>
                    <p className="mt-1 text-xs text-white/50">
                      Entreprises accompagnées
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ NOS ATOUTS ═══ */}
      <section className="bg-white py-20 lg:py-28">
        <div
          ref={strengthsRef}
          className="mx-auto max-w-[1250px] px-6 lg:px-10"
        >
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={strengthsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease }}
            >
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#E87932]">
                Nos engagements
              </span>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0A1628] sm:text-4xl">
                Ce qui fait notre différence
              </h2>

              <div className="mt-5 h-1 w-16 rounded-full bg-[#E87932]" />

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {strengths.map((item, i) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={strengthsInView ? { opacity: 1, y: 0 } : {}}
                      transition={{
                        delay: 0.2 + i * 0.1,
                        duration: 0.5,
                        ease,
                      }}
                      className="flex items-start gap-4"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#E87932]/10">
                        <Icon className="h-5 w-5 text-[#E87932]" />
                      </div>

                      <div>
                        <h3 className="text-sm font-bold text-[#0A1628]">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-[#64748B]">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={strengthsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.7, ease }}
            >
              <Image
                src="/images/services/expertise-4.png"
                alt="Expertise comptable Capital Analysis"
                width={600}
                height={400}
                className="h-auto w-full rounded-2xl object-cover shadow-lg"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="bg-[#F4F6F9] px-6 py-20 lg:px-10 lg:py-28">
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
                Prenez les devants
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={ctaInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.3, ease }}
                className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl"
              >
                Confiez-nous votre comptabilité.
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={ctaInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.45, ease }}
                className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/65 sm:text-lg"
              >
                Prenez rendez-vous pour un diagnostic gratuit de votre situation
                comptable et découvrez comment nous pouvons vous accompagner.
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
                  Demander un devis
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
