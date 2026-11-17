"use client";

import { useRef } from "react";
import type { FC } from "react";
import {
  ArrowRight,
  ChevronRight,
  CheckCircle,
  Fuel,
  BarChart3,
  TrendingUp,
  Wallet,
  Shield,
  Sparkles,
  Brain,
  Blocks,
  Star,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const pillars = [
  {
    icon: Fuel,
    title: "Gestion",
    subtitle: "de vos stations",
  },
  {
    icon: BarChart3,
    title: "Contrôle",
    subtitle: "de vos opérations",
  },
  {
    icon: TrendingUp,
    title: "Performance",
    subtitle: "de votre réseau",
  },
];

const challenges = [
  "Suivi en temps réel des opérations, maîtrise des stocks et des mouvements de carburant, réduction des écarts et des pertes.",
  "Automatisation des ventes et des encaissements, gestion des ventes à crédit, fiabilisation des flux financiers.",
  "Pilotage de la performance, suivi des revenus et des coûts, supervision centralisée de plusieurs stations et accompagnement de la croissance du réseau.",
  "Traçabilité des opérations, sécurisation des données, contrôle des accès et disponibilité d'une information fiable pour une prise de décision rapide.",
];

const platformFeatures = [
  "Visualisez l'activité de vos stations et consultez vos principaux indicateurs opérationnels et financiers depuis un même espace.",
  "Structurez vos opérations quotidiennes, du suivi des ventes et des stocks jusqu'à la clôture des shifts à partir des index des pompes.",
  "Suivez les encaissements, les ventes à crédit, les dépenses et les opérations comptables pour rapprocher terrain et données financières.",
  "Gérez plusieurs stations depuis une même plateforme, centralisez leurs données et comparez leurs performances à l'échelle du réseau.",
  "Analysez vos données et exploitez l'intelligence artificielle pour anticiper la consommation et les besoins de réapprovisionnement.",
  "Gérez les utilisateurs (gérant, superviseur, comptable), leurs droits et la traçabilité des opérations, avec une plateforme évolutive et intégrable.",
];

const accountingModules = [
  {
    title: "Plan Comptable",
    description: "Gestion des comptes et de leur structure.",
  },
  {
    title: "Journaux & Écritures",
    description: "Saisie et consultation des écritures comptables.",
  },
  {
    title: "États Comptables",
    description: "Accès aux états nécessaires.",
  },
  {
    title: "Suivi Financier",
    description: "Rapprochement des données opérationnelles et financières.",
  },
];

const aiFeatures = [
  {
    title: "Prédire la consommation",
    description:
      "Analysez les tendances de consommation et obtenez une estimation des volumes susceptibles d'être distribués dans les prochains jours.",
  },
  {
    title: "Anticiper les ruptures",
    description:
      "Identifiez les stations et carburants présentant un risque de rupture afin d'intervenir avant que le stock ne devienne critique.",
  },
  {
    title: "Planifier les commandes",
    description:
      "Estimation des besoins à venir et détermination des quantités à commander en fonction de la consommation et du stock disponible.",
  },
];

const whyCapesys = [
  {
    icon: Star,
    title: "Une solution pensée pour votre métier",
    description:
      "CAPESYS répond aux réalités des stations-service et centralise vos opérations dans une seule plateforme.",
  },
  {
    icon: Shield,
    title: "Une gestion plus maîtrisée",
    description:
      "Suivez vos ventes, stocks, caisses et opérations avec des données centralisées pour mieux contrôler votre activité.",
  },
  {
    icon: Wallet,
    title: "Une comptabilité intégrée",
    description:
      "Reliez les opérations quotidiennes au suivi comptable pour une gestion financière plus fluide.",
  },
  {
    icon: Brain,
    title: "De l'intelligence pour anticiper",
    description:
      "L'IA analyse vos données de consommation pour vous aider à anticiper les besoins et mieux planifier vos approvisionnements.",
  },
  {
    icon: Blocks,
    title: "Une solution qui évolue avec vous",
    description:
      "Ajoutez progressivement de nouveaux modules, services et intégrations selon l'évolution de votre réseau.",
  },
];

const clients = [
  { name: "Groupe SOS", logoSrc: "/images/partenaires/sos.webp" },
  { name: "Oriba Petroleum", logoSrc: "/images/partenaires/oriba.png" },
  { name: "HAB Petroleum", logoSrc: "/images/partenaires/hab.jpg" },
  { name: "Alher Hydrocarbure", logoSrc: "/images/partenaires/alher.png" },
];

const CAPEsysSection: FC = () => {
  const contextRef = useRef<HTMLDivElement>(null);
  const contextInView = useInView(contextRef, {
    once: true,
    margin: "-80px",
  });

  const platformRef = useRef<HTMLDivElement>(null);
  const platformInView = useInView(platformRef, {
    once: true,
    margin: "-80px",
  });

  const shiftRef = useRef<HTMLDivElement>(null);
  const shiftInView = useInView(shiftRef, {
    once: true,
    margin: "-80px",
  });

  const accountingRef = useRef<HTMLDivElement>(null);
  const accountingInView = useInView(accountingRef, {
    once: true,
    margin: "-80px",
  });

  const reportRef = useRef<HTMLDivElement>(null);
  const reportInView = useInView(reportRef, {
    once: true,
    margin: "-80px",
  });

  const aiRef = useRef<HTMLDivElement>(null);
  const aiInView = useInView(aiRef, {
    once: true,
    margin: "-80px",
  });

  const whyRef = useRef<HTMLDivElement>(null);
  const whyInView = useInView(whyRef, {
    once: true,
    margin: "-80px",
  });

  const offerRef = useRef<HTMLDivElement>(null);
  const offerInView = useInView(offerRef, {
    once: true,
    margin: "-80px",
  });

  const trialRef = useRef<HTMLDivElement>(null);
  const trialInView = useInView(trialRef, {
    once: true,
    margin: "-80px",
  });

  return (
    <main className="min-h-screen bg-white">
      {/* ═══ HERO ═══ */}
      <section className="relative flex min-h-[220px] items-center justify-center overflow-hidden bg-[#0A1628] pt-16 sm:min-h-[300px]">
        <div className="absolute inset-0 opacity-20">
          <svg
            className="h-full w-full"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="capesys-grid"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="30" cy="30" r="1.5" fill="rgba(232,121,50,0.3)" />
                <line
                  x1="0"
                  y1="30"
                  x2="60"
                  y2="30"
                  stroke="rgba(255,255,255,0.05)"
                  strokeWidth="0.5"
                />
                <line
                  x1="30"
                  y1="0"
                  x2="30"
                  y2="60"
                  stroke="rgba(255,255,255,0.05)"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#capesys-grid)" />
          </svg>
        </div>

        <div className="absolute -right-32 top-10 h-72 w-72 rounded-full border border-white/5" />
        <div className="absolute -right-16 top-24 h-48 w-48 rounded-full border border-[#E87932]/10" />

        <div className="relative px-5 py-10 text-center sm:py-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="text-3xl font-extrabold uppercase tracking-wider text-white sm:text-5xl lg:text-6xl"
          >
            CAPE<span className="text-[#E87932]">SYS</span>
          </motion.h1>

          <motion.nav
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease }}
            className="mt-4 flex items-center justify-center gap-1 text-sm text-white/70"
            aria-label="Fil d'Ariane"
          >
            <Link href="/" className="transition-colors hover:text-white">
              Accueil
            </Link>

            <ChevronRight className="h-3.5 w-3.5" />

            <span className="font-semibold text-[#E87932]">CAPESYS</span>
          </motion.nav>
        </div>
      </section>

      {/* ═══ INTRO — VOTRE RÉSEAU, VOS DONNÉES, VOS DÉCISIONS ═══ */}
      <section className="relative bg-white py-12 sm:py-16 lg:py-20">
        <div className="absolute inset-0 bg-[url('/images/capesys-background.png')] bg-cover bg-center opacity-10" />
        <div className="relative mx-auto max-w-[1250px] px-5 text-center sm:px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
          >
            <h2 className="text-2xl font-extrabold leading-tight text-[#0A1628] sm:text-3xl md:text-4xl lg:text-5xl">
              Votre Réseau
              <span className="mx-1 text-[#E87932] sm:mx-3">-</span>
              <span className="text-[#E87932]">Vos Données</span>
              <span className="mx-1 text-[#E87932] sm:mx-3">-</span>
              <span className="text-[#0A1628]">Vos Décisions</span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#64748B] sm:mt-6 sm:text-lg">
              CAPESYS : La plateforme digitale pour piloter votre réseau de
              stations-service en temps réel.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8, ease }}
            className="mx-auto mt-10 max-w-3xl"
          >
            <Image
              src="/images/capesys-1.png"
              alt="CAPESYS sur ordinateur et mobile"
              width={1920}
              height={1080}
              className="h-auto w-full object-contain"
              sizes="(min-width: 1024px) 60vw, 100vw"
              priority
            />
          </motion.div>

          <div className="mx-auto mt-8 grid max-w-3xl grid-cols-3 gap-4 sm:mt-12 sm:gap-6">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.3 + i * 0.1,
                  duration: 0.6,
                  ease,
                }}
                className="flex flex-col items-center text-center"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E87932] sm:h-16 sm:w-16">
                  <pillar.icon className="h-5 w-5 text-white sm:h-7 sm:w-7" />
                </div>

                <p className="mt-2 text-sm font-extrabold uppercase text-[#0A1628] sm:mt-3 sm:text-lg">
                  {pillar.title}
                </p>

                <p className="text-xs text-[#64748B] sm:text-sm">{pillar.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CONTEXTE & ENJEUX ═══ */}
      <section className="relative bg-[#E87932] py-12 sm:py-16 lg:py-20">
        <div className="absolute inset-0 bg-[url('/images/capesys-background.png')] bg-cover bg-center opacity-5" />
        <div
          ref={contextRef}
          className="relative mx-auto max-w-[900px] px-5 text-center sm:px-6 lg:px-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={contextInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease }}
          >
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
              Contexte & Enjeux
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/90 sm:mt-5 sm:text-base">
              Gérer un réseau de stations-service exige aujourd&apos;hui une
              maîtrise précise des flux, des stocks, des ventes et des finances,
              avec une visibilité en temps réel sur l&apos;ensemble des
              opérations. Cette complexité fait émerger plusieurs défis majeurs
              pour les exploitants :
            </p>
          </motion.div>

          <div className="mx-auto mt-6 max-w-2xl space-y-3 text-left sm:mt-8 sm:space-y-4">
            {challenges.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={contextInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: 0.3 + i * 0.1,
                  duration: 0.5,
                  ease,
                }}
                className="flex items-start gap-2 sm:gap-3"
              >
                <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-[#0A1628] sm:mt-1 sm:h-5 sm:w-5" />

                <p className="text-xs leading-relaxed text-white/90 sm:text-sm">{item}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={contextInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.7, ease }}
            className="mx-auto mt-8 max-w-2xl rounded-xl bg-[#0A1628]/20 p-4 sm:mt-10 sm:rounded-2xl sm:p-6"
          >
            <p className="text-base font-bold leading-relaxed text-white sm:text-lg">
              <span className="font-extrabold">
                CAPE<span className="text-[#0A1628]">SYS</span>
              </span>{" "}
              transforme cette complexité en une gestion plus simple, plus
              visible et mieux maîtrisée.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ QUI SOMMES-NOUS ═══ */}
      <section className="relative bg-white py-12 sm:py-16 lg:py-20">
        <div className="absolute inset-0 bg-[url('/images/capesys-background.png')] bg-cover bg-center opacity-5" />
        <div className="relative mx-auto max-w-[1250px] px-5 text-center sm:px-6 lg:px-10">
          <h2 className="text-2xl font-extrabold text-[#0A1628] sm:text-3xl lg:text-4xl">
            Qui sommes-nous ?
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-[#64748B] sm:mt-5 sm:text-base">
            CAPESYS est une solution développée par Capital Analysis, cabinet de
            conseil financier & IT. Nous accompagnons les entreprises dans la
            transformation de leurs activités grâce à une approche combinant
            expertise métier, technologie et conseil.
          </p>

          <div className="mx-auto mt-8 flex justify-center sm:mt-10">
            <Image
              src="/images/capital-analysis.png"
              alt="Capital Analysis"
              width={200}
              height={200}
              className="h-auto w-28 rounded-full object-cover sm:w-40"
            />
          </div>

          <div className="mx-auto mt-8 grid max-w-3xl gap-4 text-left sm:mt-10 sm:grid-cols-2 sm:gap-5">
            {[
              {
                title: "Ingénierie financière",
                desc: "Des solutions pour mieux structurer et piloter vos finances.",
              },
              {
                title: "IT & Développement",
                desc: "Des solutions digitales et logiciels adaptés à vos besoins.",
              },
              {
                title: "Études & Conseil",
                desc: "Des analyses et recommandations pour éclairer vos décisions.",
              },
              {
                title: "Assistance comptable",
                desc: "Un accompagnement pour une gestion comptable plus fiable et structurée.",
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-[#E87932]" />

                <div>
                  <p className="font-bold text-[#0A1628]">{item.title} :</p>

                  <p className="text-sm text-[#64748B]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PLATEFORME — CENTRALISER ET PILOTER ═══ */}
      <section className="relative bg-[#E87932] py-12 sm:py-16 lg:py-20">
        <div className="absolute inset-0 bg-[url('/images/capesys-background.png')] bg-cover bg-center opacity-5" />
        <div
          ref={platformRef}
          className="relative mx-auto max-w-[1250px] px-5 sm:px-6 lg:px-10"
        >
          <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-[1fr_1fr]">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={platformInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease }}
            >
              <Image
                src="/images/capesys.png"
                alt="CAPESYS tableau de bord"
                width={700}
                height={450}
                className="h-auto w-full rounded-lg object-contain"
                sizes="(min-width: 1024px) 45vw, 100vw"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={platformInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.7, ease }}
            >
              <h2 className="text-2xl font-extrabold uppercase text-[#0A1628] sm:text-3xl lg:text-4xl">
                CAPE<span className="text-white">SYS</span>
              </h2>

              <p className="mt-3 text-base leading-relaxed text-white sm:mt-4 sm:text-lg">
                Centraliser et piloter l&apos;ensemble de vos stations-service
                depuis une plateforme unique.
              </p>
            </motion.div>
          </div>

          <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4">
            {platformFeatures.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={platformInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: 0.3 + i * 0.08,
                  duration: 0.5,
                  ease,
                }}
                className="flex items-start gap-2 rounded-lg bg-white/10 px-4 py-3 sm:gap-3 sm:rounded-xl sm:px-5 sm:py-4"
              >
                <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-[#0A1628] sm:h-5 sm:w-5" />

                <p className="text-xs leading-relaxed text-white/95 sm:text-sm">
                  {feature}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CLÔTURE JOURNALIÈRE ═══ */}
      <section className="relative bg-white py-12 sm:py-16 lg:py-20">
        <div className="absolute inset-0 bg-[url('/images/capesys-background.png')] bg-cover bg-center opacity-5" />
        <div
          ref={shiftRef}
          className="relative mx-auto max-w-[1250px] px-5 sm:px-6 lg:px-10"
        >
          <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={shiftInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease }}
            >
              <h2 className="text-2xl font-extrabold text-[#0A1628] sm:text-3xl lg:text-4xl">
                De l&apos;ouverture à la clôture,
                <br />
                <span className="text-[#E87932]">gardez le contrôle.</span>
              </h2>

              <p className="mt-5 text-base leading-relaxed text-[#64748B]">
                CAPESYS accompagne les équipes dans chaque étape de la journée
                d&apos;exploitation, des relevés de début de shift jusqu&apos;à
                la clôture et au contrôle des opérations.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-[#64748B]">
                CAPESYS structure la clôture journalière de votre station et
                automatise les principaux calculs d&apos;exploitation. Les
                relevés d&apos;index permettent de calculer les volumes et les
                ventes, tandis que les opérations de la journée sont contrôlées
                avant la clôture.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-[#64748B]">
                Les stocks sont rapprochés entre jauge, stock théorique et stock
                réel afin de faciliter l&apos;identification des écarts.
              </p>

              <div className="mt-6 rounded-xl border-l-4 border-[#E87932] bg-[#F4F6F9] p-5">
                <p className="text-sm font-bold text-[#0A1628]">
                  À chaque clôture, le responsable reçoit automatiquement le
                  récapitulatif de la journée par e-mail.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={shiftInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8, ease }}
              className="flex justify-center"
            >
              <Image
                src="/images/capesys-2.png"
                alt="CAPESYS clôture de shift"
                width={600}
                height={400}
                className="h-auto w-full max-w-md rounded-lg object-contain"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ COMPTABILITÉ INTÉGRÉE ═══ */}
      <section className="relative bg-[#F4F6F9] py-12 sm:py-16 lg:py-20">
        <div className="absolute inset-0 bg-[url('/images/capesys-background.png')] bg-cover bg-center opacity-5" />
        <div
          ref={accountingRef}
          className="relative mx-auto max-w-[1250px] px-5 sm:px-6 lg:px-10"
        >
          <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={accountingInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease }}
            >
              <h2 className="text-2xl font-extrabold text-[#0A1628] sm:text-3xl lg:text-4xl">
                Votre exploitation et votre comptabilité,
                <br />
                <span className="text-[#E87932]">au même endroit.</span>
              </h2>

              <Image
                src="/images/capesys.png"
                alt="CAPESYS comptabilité"
                width={600}
                height={380}
                className="mt-6 h-auto w-full rounded-lg object-contain"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={accountingInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.7, ease }}
            >
              <p className="text-base leading-relaxed text-[#64748B]">
                CAPESYS intègre la gestion comptable directement dans votre
                plateforme pour éviter la multiplication des outils et assurer
                une continuité entre les opérations de vos stations et leur
                traitement comptable.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {accountingModules.map((mod, i) => (
                  <motion.div
                    key={mod.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={accountingInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      delay: 0.4 + i * 0.1,
                      duration: 0.5,
                      ease,
                    }}
                    className="border-l-4 border-[#E87932] bg-white px-5 py-4 shadow-sm"
                  >
                    <p className="text-sm font-extrabold uppercase text-[#0A1628]">
                      {mod.title}
                    </p>

                    <p className="mt-1 text-sm text-[#64748B]">
                      {mod.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ RAPPORTS ═══ */}
      <section className="relative bg-[#E87932] py-12 sm:py-16 lg:py-20">
        <div className="absolute inset-0 bg-[url('/images/capesys-background.png')] bg-cover bg-center opacity-5" />
        <div
          ref={reportRef}
          className="relative mx-auto max-w-[900px] px-5 text-center sm:px-6 lg:px-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={reportInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease }}
          >
            <h2 className="text-2xl font-extrabold text-[#0A1628] sm:text-3xl lg:text-4xl">
              Tous vos rapports,{" "}
              <span className="text-white">prêts à être exploités.</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/90">
              CAPESYS centralise vos documents et états de gestion pour vous
              permettre de consulter, générer, imprimer, importer ou télécharger
              vos rapports à tout moment.
            </p>
          </motion.div>

          <div className="mx-auto mt-8 max-w-2xl space-y-3 text-left">
            {[
              "Retrouvez les récapitulatifs journaliers, rapports de ventes, états de stock et mouvements de carburant.",
              "Générez et imprimez vos bons de livraison, bons de réception, factures et documents commerciaux.",
              "Accédez aux états commerciaux, états de stock et documents comptables nécessaires au suivi de votre activité.",
            ].map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={reportInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5, ease }}
                className="flex items-start gap-3"
              >
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#0A1628]" />

                <p className="text-sm leading-relaxed text-white/90">{text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={reportInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.5, ease }}
            className="mt-8 flex justify-center gap-3"
          >
            <span className="rounded-lg bg-white px-4 py-2 text-sm font-bold text-[#E87932]">
              PDF
            </span>

            <span className="rounded-lg bg-white px-4 py-2 text-sm font-bold text-green-600">
              XLS
            </span>
          </motion.div>
        </div>
      </section>

      {/* ═══ IA PRÉDICTIVE ═══ */}
      <section className="relative bg-[#0A1628] py-12 sm:py-16 lg:py-20">
        <div className="absolute inset-0 bg-[url('/images/capesys-background.png')] bg-cover bg-center opacity-5" />
        <div
          ref={aiRef}
          className="relative mx-auto max-w-[1250px] px-5 sm:px-6 lg:px-10"
        >
          <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={aiInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease }}
            >
              <Image
                src="/images/capesys-4.png"
                alt="CAPESYS IA prédictive"
                width={600}
                height={400}
                className="h-auto w-full rounded-lg object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={aiInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.15, duration: 0.7, ease }}
            >
              <h2 className="text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
                Ne vous contentez plus de suivre vos stocks.
                <br />
                <span className="text-[#E87932]">Anticipez vos besoins.</span>
              </h2>

              <p className="mt-5 text-base leading-relaxed text-white/70">
                CAPESYS analyse l&apos;historique de consommation de vos
                stations pour anticiper les besoins en carburant, détecter les
                risques de rupture et vous aider à planifier vos
                réapprovisionnements.
              </p>

              <div className="mt-6 space-y-3 sm:mt-8 sm:space-y-4">
                {aiFeatures.map((feature, i) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={aiInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      delay: 0.3 + i * 0.12,
                      duration: 0.6,
                      ease,
                    }}
                    className="rounded-lg border border-white/10 bg-white/5 p-4 sm:rounded-xl sm:p-5"
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E87932] sm:h-10 sm:w-10">
                        <Sparkles className="h-4 w-4 text-white sm:h-5 sm:w-5" />
                      </div>

                      <div>
                        <h3 className="text-sm font-bold uppercase text-white">
                          {feature.title}
                        </h3>

                        <p className="mt-1 text-sm leading-relaxed text-white/60">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ POURQUOI CAPESYS ═══ */}
      <section className="relative bg-[#F4F6F9] py-12 sm:py-16 lg:py-20">
        <div className="absolute inset-0 bg-[url('/images/capesys-background.png')] bg-cover bg-center opacity-5" />
        <div
          ref={whyRef}
          className="relative mx-auto max-w-[1250px] px-5 sm:px-6 lg:px-10"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={whyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease }}
            className="text-center text-2xl font-extrabold text-[#0A1628] sm:text-3xl lg:text-4xl"
          >
            Pourquoi choisir CAPE<span className="text-[#E87932]">SYS</span> ?
          </motion.h2>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {whyCapesys.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={whyInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: 0.2 + i * 0.08,
                  duration: 0.5,
                  ease,
                }}
                className="flex items-start gap-4"
              >
                <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-[#E87932]" />

                <div>
                  <p className="font-bold uppercase text-[#0A1628]">
                    {item.title}
                  </p>

                  <p className="mt-1 text-sm leading-relaxed text-[#64748B]">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 sm:mt-14">
            <h3 className="text-center text-xl font-extrabold text-[#0A1628] sm:text-2xl lg:text-3xl">
              Clients déjà actifs :
            </h3>

            <div className="mt-6 grid grid-cols-2 gap-4 sm:mt-8 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-6">
              {clients.map((client) => (
                <div
                  key={client.name}
                  className="flex h-16 items-center justify-center rounded-xl bg-white px-3 shadow-sm sm:h-24 sm:w-40 sm:rounded-2xl sm:px-4"
                >
                  <Image
                    src={client.logoSrc}
                    alt={client.name}
                    width={120}
                    height={60}
                    className="h-10 w-full object-contain sm:h-14"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ OFFRES & MODALITÉS ═══ */}
      <section className="relative bg-[#E87932] py-12 sm:py-16 lg:py-20">
        <div className="absolute inset-0 bg-[url('/images/capesys-background.png')] bg-cover bg-center opacity-5" />
        <div
          ref={offerRef}
          className="relative mx-auto max-w-[1250px] px-5 sm:px-6 lg:px-10"
        >
          <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={offerInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease }}
            >
              <h2 className="text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
                Offres & modalités
              </h2>

              <p className="mt-5 text-base leading-relaxed text-white/90">
                Chaque réseau a ses propres besoins. Nous proposons des formules
                flexibles, adaptées à la taille de votre parc de stations et à
                votre mode de fonctionnement.
              </p>

              <p className="mt-4 text-base leading-relaxed text-white/90">
                <span className="font-bold">
                  Solution SaaS ou hébergement dédié
                </span>
                , avec un socle fonctionnel complet et la possibilité
                d&apos;ajouter progressivement des services complémentaires :
                paiements mobiles, IoT, espace client et autres fonctionnalités
                selon vos besoins.
              </p>

              <p className="mt-6 text-lg font-bold text-white">
                Mise en œuvre / formation / maintenance incluses.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={offerInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8, ease }}
            >
              <Image
                src="/images/capesys.png"
                alt="CAPESYS desktop et mobile"
                width={700}
                height={450}
                className="h-auto w-full object-contain"
                sizes="(min-width: 1024px) 45vw, 100vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ ESSAI GRATUIT — CTA ═══ */}
      <section className="relative bg-[#0A1628] py-12 sm:py-16 lg:py-24">
        <div className="absolute inset-0 bg-[url('/images/capesys-background.png')] bg-cover bg-center opacity-5" />
        <div
          ref={trialRef}
          className="relative mx-auto max-w-[1250px] px-5 text-center sm:px-6 lg:px-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={trialInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease }}
          >
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl md:text-4xl lg:text-5xl">
              Obtenez un essai gratuit
              <br />
              sans engagement
            </h2>

            <p className="mt-3 text-base text-[#E87932] sm:mt-4 sm:text-lg">
              30 jours jusqu&apos;à 2 stations
            </p>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/80">
              Testez gratuitement la solution pendant 30 jours sur 2 stations,
              sans engagement. Découvrez concrètement ses bénéfices dans vos
              opérations quotidiennes.
            </p>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/80">
              Opérations, stocks, clôture, comptabilité, reporting : tout est
              réuni pour piloter votre réseau. Testez la solution en conditions
              réelles et constatez la différence.
            </p>
          </motion.div>

          <div className="mx-auto mt-8 grid max-w-2xl grid-cols-3 gap-4 sm:mt-10 sm:gap-6">
            {[
              {
                icon: Star,
                title: "Simplifiez",
                subtitle: "votre gestion",
              },
              {
                icon: Shield,
                title: "Maîtrisez",
                subtitle: "vos opérations",
              },
              {
                icon: TrendingUp,
                title: "Développez",
                subtitle: "votre réseau",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={trialInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: 0.4 + i * 0.1,
                  duration: 0.5,
                  ease,
                }}
                className="flex flex-col items-center text-center"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E87932] sm:h-14 sm:w-14">
                  <item.icon className="h-5 w-5 text-white sm:h-6 sm:w-6" />
                </div>

                <p className="mt-2 text-xs font-extrabold uppercase text-white sm:mt-3 sm:text-sm">
                  {item.title}
                </p>

                <p className="text-[10px] text-white/70 sm:text-xs">{item.subtitle}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={trialInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.6, ease }}
            className="mt-8 space-y-1 sm:mt-10"
          >
            <p className="text-xl font-bold text-white sm:text-2xl">+227 97 40 00 12</p>

            <p className="text-xl font-bold text-white sm:text-2xl">+216 53 414 178</p>

            <p className="mt-2 text-xs text-white/60 sm:text-sm">
              capesys.capital-analysis.com
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={trialInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.6, ease }}
            className="mt-6 flex flex-col justify-center gap-3 sm:mt-8 sm:flex-row"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#E87932] px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#D56827] sm:px-8 sm:py-4"
            >
              Demander un essai gratuit
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>

            <a
              href="tel:+22797400012"
              className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10 sm:px-8 sm:py-4"
            >
              Parler à un conseiller
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default CAPEsysSection;
