"use client";

import { FC, useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Quote,
  ChevronLeft,
  ChevronRight,
  Search,
  Lightbulb,
  PencilRuler,
  Handshake,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { homeServices, testimonials as testimonialsData } from "@/data/content";
import { articles } from "@/data/articles";

const heroSlides = [
  {
    eyebrow: "Cabinet de conseil financier et IT",
    title: "La perspective de vos chiffres",
    description:
      "Transformez vos données en décisions stratégiques grâce à notre expertise financière et nos solutions technologiques.",
    href: "/contact",
    action: "Parlons de votre projet",
    imageSrc: "/images/principale.svg",
  },
  {
    eyebrow: "Ingénierie financière",
    title: "Pilotez votre croissance",
    description:
      "Nous structurons et optimisons vos projets pour faire de vos ambitions des résultats durables.",
    href: "/activites/ingenierie-financiere",
    action: "Découvrir l'ingénierie financière",
    videoSrc: "/video/ing_fin.mp4",
  },
  {
    eyebrow: "IT et développement",
    title: "Des outils à votre mesure",
    description:
      "Nous concevons et intégrons des solutions de gestion adaptées à vos processus et à vos objectifs.",
    href: "/activites/departement-it-developpement",
    action: "Découvrir nos solutions IT",
    videoSrc: "/video/it_dev.mp4",
  },
  {
    eyebrow: "Études et conseil",
    title: "Décidez sur des bases solides",
    description:
      "Nos analyses et recommandations donnent à vos projets le cadre stratégique nécessaire pour avancer.",
    href: "/activites/etude-et-conseil",
    action: "Découvrir nos études et conseils",
    imageSrc: "/images/etude.svg",
  },
  {
    eyebrow: "Suivi et assistance comptable",
    title: "Une comptabilité claire",
    description:
      "Nous assurons le suivi de vos obligations et vous accompagnons au quotidien dans votre gestion comptable.",
    href: "/activites/suivi-et-assistance-comptable",
    action: "Découvrir l'assistance comptable",
    imageSrc: "/images/comptable.png",
  },
];

const partners = [
  { name: "Groupe SOS", logoSrc: "/images/partenaires/sos.webp" },
  { name: "HAB Petroleum", logoSrc: "/images/partenaires/hab.jpg" },
  { name: "Santé Horizon" },
  { name: "Oriba Petrolium", logoSrc: "/images/partenaires/oriba.png" },
  { name: "CFG Conseil", logoSrc: "/images/partenaires/cfg.jpg" },
  { name: "Alher Hydrocarbure", logoSrc: "/images/partenaires/alher.png" },
];

const methodology = [
  {
    number: "01",
    icon: Search,
    title: "Comprendre",
    description:
      "Nous prenons le temps de comprendre votre organisation, vos enjeux et vos objectifs avant toute intervention.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Analyser",
    description:
      "Nous étudions votre situation afin d'identifier les contraintes, les opportunités et les axes d'amélioration.",
  },
  {
    number: "03",
    icon: PencilRuler,
    title: "Concevoir",
    description:
      "Nous élaborons des recommandations et des solutions adaptées à vos besoins et à vos ressources.",
  },
  {
    number: "04",
    icon: Handshake,
    title: "Accompagner",
    description:
      "Nous vous accompagnons dans la mise en œuvre et le suivi des solutions retenues.",
  },
];

const ease = [0.25, 0.4, 0.25, 1] as const;

const capesysFeatures = [
  "Gestion des pompes",
  "Suivi des stocks",
  "Comptabilité intégrée",
  "Sécurité avancée",
  "Données temps réel",
  "Support 24/7",
];

function FloatingShapes() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute right-[15%] top-20 h-20 w-20 rounded-full border border-white/10"
        animate={{ y: [0, -30, 0], rotate: [0, 180, 360], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-32 right-[25%] h-3 w-3 rounded-full bg-[#E87932]/40"
        animate={{ y: [0, -40, 0], x: [0, 20, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute right-[10%] top-[40%] h-32 w-32 rounded-full border border-[#E87932]/10"
        animate={{ y: [0, 20, 0], scale: [1, 1.05, 1] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      <motion.div
        className="absolute right-[35%] top-[60%] h-2 w-2 rounded-full bg-white/20"
        animate={{ y: [0, -60, 0], opacity: [0.2, 0.6, 0.2] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />
      <motion.div
        className="absolute right-[45%] top-[30%] h-16 w-16 rotate-45 border border-white/5"
        animate={{ y: [0, -20, 0], rotate: [45, 90, 45] }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />
      <motion.div
        className="absolute -top-10 right-[20%] h-64 w-64 rounded-full bg-[#E87932]/5 blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

function ServiceTiltCard({
  children,
  index,
  isInView,
}: {
  children: React.ReactNode;
  index: number;
  isInView: boolean;
}) {
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.7, delay: index * 0.12, ease }}
    >
      <motion.div
        ref={cardRef}
        animate={{ rotateX: tilt.rx, rotateY: tilt.ry }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        whileHover={{ y: -10 }}
        onMouseMove={(e) => {
          const rect = cardRef.current?.getBoundingClientRect();
          if (!rect) return;
          const x = (e.clientX - rect.left) / rect.width - 0.5;
          const y = (e.clientY - rect.top) / rect.height - 0.5;
          setTilt({ rx: y * -16, ry: x * 16 });
        }}
        onMouseLeave={() => setTilt({ rx: 0, ry: 0 })}
        style={{ perspective: 1200 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

const HomePage: FC = () => {
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);

  const heroRef = useRef<HTMLElement>(null);
  const [spotlight, setSpotlight] = useState({
    x: 0,
    y: 0,
    active: false,
  });

  const aboutRef = useRef<HTMLDivElement>(null);
  const aboutInView = useInView(aboutRef, { once: true, margin: "-100px" });

  const servicesRef = useRef<HTMLDivElement>(null);
  const servicesInView = useInView(servicesRef, {
    once: true,
    margin: "-100px",
  });

  const capesysRef = useRef<HTMLDivElement>(null);
  const capesysInView = useInView(capesysRef, {
    once: true,
    margin: "-100px",
  });

  const methodRef = useRef<HTMLDivElement>(null);
  const methodInView = useInView(methodRef, {
    once: true,
    margin: "-100px",
  });

  const testimonialsRef = useRef<HTMLDivElement>(null);
  const testimonialsInView = useInView(testimonialsRef, {
    once: true,
    margin: "-100px",
  });

  const articlesRef = useRef<HTMLDivElement>(null);
  const articlesInView = useInView(articlesRef, {
    once: true,
    margin: "-100px",
  });

  const ctaRef = useRef<HTMLDivElement>(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroSlide((s) => (s + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const preloadLinks = heroSlides.flatMap((slide) => {
      const source = slide.videoSrc ?? slide.imageSrc;

      if (!source) return [];

      const link = document.createElement("link");
      link.rel = "preload";
      link.as = slide.videoSrc ? "video" : "image";
      link.href = source;
      document.head.appendChild(link);

      return [link];
    });

    return () => {
      preloadLinks.forEach((link) => link.remove());
    };
  }, []);

  const serviceImages = [
    "/images/services/expertise-1.png",
    "/images/services/expertise-2.png",
    "/images/services/expertise-3.png",
    "/images/services/expertise-4.png",
  ];

  const services = homeServices.map((service, index) => ({
    ...service,
    imageSrc: serviceImages[index],
  }));

  const heroSlide = heroSlides[currentHeroSlide];

  const showPreviousHeroSlide = () => {
    setCurrentHeroSlide((s) => (s - 1 + heroSlides.length) % heroSlides.length);
  };

  const showNextHeroSlide = () => {
    setCurrentHeroSlide((s) => (s + 1) % heroSlides.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* ═══ HERO ═══ */}
      <section
        ref={heroRef}
        onMouseMove={(e) => {
          const rect = heroRef.current?.getBoundingClientRect();
          if (!rect) return;

          setSpotlight({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
            active: true,
          });
        }}
        onMouseLeave={() => setSpotlight((s) => ({ ...s, active: false }))}
        className="relative isolate flex min-h-[680px] items-center overflow-hidden bg-[#0A1628] pt-16 text-white"
      >
        {/* Background crossfade */}
        <AnimatePresence>
          <motion.div
            key={`bg-${currentHeroSlide}`}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease }}
            className="absolute inset-0 -z-20"
          >
            {heroSlide.videoSrc ? (
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="h-full w-full object-cover"
              >
                <source src={heroSlide.videoSrc} type="video/mp4" />
              </video>
            ) : heroSlide.imageSrc ? (
              <Image
                src={heroSlide.imageSrc}
                alt="Illustration de nos solutions et expertises"
                fill
                priority
                className="object-cover object-center"
                sizes="100vw"
              />
            ) : (
              <Image
                src="/images/capesys_video_poster.jpg"
                alt="Aperçu de la plateforme CAPESYS"
                fill
                priority
                className="object-cover object-center"
                sizes="100vw"
              />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Overlays */}
        <div className="absolute inset-0 -z-10 bg-[#0A1628]/45" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0A1628] via-[#0A1628]/85 to-[#0A1628]/20" />

        {/* Mouse spotlight */}
        <div
          className="pointer-events-none absolute inset-0 -z-[5] transition-opacity duration-300"
          style={{
            background: `radial-gradient(600px circle at ${spotlight.x}px ${spotlight.y}px, rgba(232, 121, 50, 0.07), transparent 80%)`,
            opacity: spotlight.active ? 1 : 0,
          }}
        />

        <FloatingShapes />

        {/* Hero content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${currentHeroSlide}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="mx-auto w-full max-w-[1400px] px-6 py-16 text-center lg:px-10 lg:py-20"
          >
            <div className="mx-auto max-w-2xl">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.6, ease }}
                className="mb-5 inline-flex border-l-2 border-[#E87932] pl-3 text-xs font-bold uppercase tracking-[0.12em] text-orange-300"
              >
                {heroSlide.eyebrow}
              </motion.span>

              <h1 className="mx-auto min-h-[48px] max-w-xl text-center text-4xl font-bold leading-tight sm:min-h-[60px] sm:text-5xl lg:min-h-[66px] lg:text-[58px]">
                {heroSlide.title.split(" ").map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{
                      delay: 0.25 + i * 0.09,
                      duration: 0.6,
                      ease,
                    }}
                    className="mr-[0.25em] inline-block"
                  >
                    {word}
                  </motion.span>
                ))}
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6, ease }}
                className="mx-auto mt-5 min-h-[56px] max-w-xl text-center text-base leading-relaxed text-white/80 sm:text-lg"
              >
                {heroSlide.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6, ease }}
                className="mt-7 flex flex-col justify-center gap-3 sm:flex-row"
              >
                <Link
                  href={heroSlide.href}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#E87932] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#D56827]"
                >
                  {heroSlide.action}
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/activites/ingenierie-financiere"
                  className="inline-flex items-center justify-center rounded-full border border-white/50 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#0A1628]"
                >
                  Découvrir nos expertises
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation arrows */}
        <button
          onClick={showPreviousHeroSlide}
          type="button"
          aria-label="Présentation précédente"
          className="absolute left-5 top-1/2 hidden h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20 md:grid"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>

        <button
          onClick={showNextHeroSlide}
          type="button"
          aria-label="Présentation suivante"
          className="absolute right-5 top-1/2 hidden h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20 md:grid"
        >
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>

        {/* Progress dots */}
        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-2">
          {heroSlides.map((slide, index) => (
            <button
              key={slide.title}
              type="button"
              aria-label={`Afficher la présentation ${index + 1}`}
              aria-current={currentHeroSlide === index}
              onClick={() => setCurrentHeroSlide(index)}
              className={`relative h-1.5 overflow-hidden rounded-full transition-all ${
                currentHeroSlide === index
                  ? "w-12 bg-white/20"
                  : "w-4 bg-white/30 hover:bg-white/50"
              }`}
            >
              {currentHeroSlide === index && (
                <motion.div
                  key={`progress-${currentHeroSlide}`}
                  className="absolute inset-0 rounded-full bg-[#E87932]"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 5, ease: "linear" }}
                  style={{ transformOrigin: "left" }}
                />
              )}
            </button>
          ))}
        </div>
      </section>

      {/* ═══ PARTENAIRES ═══ */}
      <section className="bg-[#F4F6F9] py-12">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="partner-marquee flex w-max items-center gap-5">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex h-24 w-52 shrink-0 items-center justify-center rounded-[22px] bg-white px-6 shadow-[0_5px_20px_rgba(10,22,40,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_25px_rgba(10,22,40,0.08)]"
              >
                {partner.logoSrc ? (
                  <Image
                    src={partner.logoSrc}
                    alt={partner.name}
                    width={160}
                    height={56}
                    className="h-14 w-40 object-contain"
                  />
                ) : (
                  <span className="text-center text-base font-bold text-[#0A1628]">
                    Santé <span className="text-[#E87932]">Horizon</span>
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ QUI SOMMES-NOUS ═══ */}
      <section className="bg-white py-16 lg:py-20">
        <div
          ref={aboutRef}
          className="mx-auto max-w-[1250px] px-6 text-center lg:px-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease }}
          >
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#E87932]">
              Capital Analysis
            </p>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              animate={aboutInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15, duration: 0.7, ease }}
              className="text-4xl font-extrabold tracking-tight text-[#0A1628] sm:text-5xl"
            >
              Qui sommes-nous ?
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={aboutInView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.8, ease }}
              style={{ transformOrigin: "center" }}
              className="mx-auto mt-5 h-1 w-16 rounded-full bg-[#E87932]"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={aboutInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6, ease }}
              className="mx-auto mt-7 max-w-none text-lg font-medium leading-relaxed text-[#334155] sm:text-xl"
            >
              Un partenaire engagé aux côtés des entreprises pour éclairer leurs
              décisions et accompagner leur développement.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={aboutInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.55, duration: 0.6, ease }}
              className="mx-auto mt-5 max-w-none text-base leading-8 text-[#64748B]"
            >
              Capital Analysis est un cabinet de conseil spécialisé dans
              l&apos;accompagnement financier, comptable et technologique des
              organisations. Nous mettons nos compétences au service de vos
              enjeux pour vous aider à structurer vos activités et améliorer
              votre performance.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ═══ CHIFFRES CLÉS ═══ */}
      <section className="bg-white py-8 lg:py-10">
        <div className="mx-auto grid max-w-[1100px] grid-cols-2 gap-x-6 gap-y-10 px-6 md:grid-cols-4 lg:px-10">
          {[
            { value: "5+", label: "Projets réalisés" },
            { value: "10+", label: "Clients accompagnés" },
            { value: "4+", label: "Années d'expérience" },
            { value: "8+", label: "Partenaires" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease }}
              className="text-center"
            >
              <p className="text-4xl font-extrabold tracking-tight text-[#0A1628] lg:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-[#E87932] sm:text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══ NOS EXPERTISES ═══ */}
      <section ref={servicesRef} className="bg-[#F4F6F9] py-16 lg:py-20">
        <div className="mx-auto max-w-[1250px] px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease }}
            className="mx-auto mb-10 max-w-2xl text-center"
          >
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#E87932]">
              Nos competences en votre service
            </p>

            <h2 className="text-4xl font-extrabold tracking-tight text-[#0A1628] sm:text-5xl">
              Nos expertises
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-[#64748B]">
              Des expertises complémentaires pour accompagner vos projets et
              soutenir durablement votre croissance.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <ServiceTiltCard
                key={service.title}
                index={index}
                isInView={servicesInView}
              >
                <Link
                  href={service.link}
                  className="group flex min-h-[390px] flex-col items-center rounded-[22px] bg-white px-6 pb-7 pt-6 text-center shadow-[0_5px_20px_rgba(10,22,40,0.04)] transition-all duration-300 hover:bg-[#0A1628] hover:shadow-[0_16px_35px_rgba(10,22,40,0.20)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E87932] motion-reduce:transition-none"
                >
                  <div className="mb-5 flex h-[165px] w-full items-center justify-center">
                    <Image
                      src={service.imageSrc}
                      alt={service.title}
                      width={320}
                      height={220}
                      className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <h3 className="text-center text-lg font-bold text-[#0A1628] transition-colors duration-300 group-hover:text-white">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-center text-sm leading-6 text-[#64748B] transition-colors duration-300 group-hover:text-white/70">
                    {service.description}
                  </p>

                  <span className="mt-auto inline-flex min-w-[125px] items-center justify-center gap-2 rounded-full bg-[#0A1628] px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition-all duration-300 group-hover:bg-[#E87932]">
                    Découvrir
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </ServiceTiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CAPESYS ═══ */}
      <section className="bg-white py-16 lg:py-20">
        <div ref={capesysRef} className="mx-auto max-w-[1250px] px-6 lg:px-10">
          <div className="overflow-hidden rounded-[28px] bg-gradient-to-br from-[#0A1628] to-[#142B48] p-7 sm:p-10 lg:p-14">
            <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                animate={capesysInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, ease }}
                className="text-center"
              >
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={capesysInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2, duration: 0.6, ease }}
                  className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#E87932]"
                >
                  Solution de gestion pour stations-service
                </motion.p>

                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  animate={capesysInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3, duration: 0.7, ease }}
                  className="text-3xl font-bold leading-tight text-white sm:text-4xl"
                >
                  Pilotez votre station avec CAPESYS
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={capesysInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4, duration: 0.6, ease }}
                  className="mx-auto mt-5 max-w-xl text-base leading-7 text-white/70"
                >
                  Une plateforme complète pour suivre votre activité, gérer vos
                  stocks et prendre les bonnes décisions, depuis le bureau ou
                  sur le terrain.
                </motion.p>

                {/* Features */}
                <div className="mx-auto mt-8 grid max-w-xl gap-4 text-left sm:grid-cols-2">
                  {capesysFeatures.map((feature, i) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={capesysInView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: 0.5,
                        delay: 0.5 + i * 0.08,
                        ease,
                      }}
                      className="flex items-center gap-2"
                    >
                      <motion.div
                        initial={{ scale: 0, rotate: -30 }}
                        animate={capesysInView ? { scale: 1, rotate: 0 } : {}}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 15,
                          delay: 0.6 + i * 0.08,
                        }}
                      >
                        <CheckCircle className="h-5 w-5 shrink-0 text-[#E87932]" />
                      </motion.div>

                      <span className="text-sm text-white/85">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={capesysInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1, duration: 0.6, ease }}
                  className="mt-9 flex flex-col justify-center gap-3 sm:flex-row"
                >
                  <Link
                    href="/capesys"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#E87932] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#D56827]"
                  >
                    Découvrir CAPESYS
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    Demander une démo
                  </Link>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 80 }}
                animate={capesysInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.9, delay: 0.3, ease }}
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Image
                    src="/images/capesys.png"
                    alt="CAPESYS sur ordinateur et mobile"
                    width={1920}
                    height={1080}
                    className="h-auto w-full object-contain"
                    sizes="(min-width: 1024px) 55vw, 100vw"
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ NOTRE APPROCHE ═══ */}
      <section ref={methodRef} className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-[1250px] px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={methodInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease }}
            className="mx-auto mb-10 text-center"
          >
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#E87932]">
              Accompagnement sur mesure
            </p>

            <h2 className="text-4xl font-extrabold tracking-tight text-[#0A1628] sm:text-5xl">
              Notre approche
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-[#64748B]">
              Chaque organisation a ses propres enjeux. Notre approche nous
              permet de construire un accompagnement cohérent, de l&apos;analyse
              initiale jusqu&apos;à la mise en œuvre.
            </p>
          </motion.div>

          {/* Methodology cards */}
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {methodology.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={methodInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                  ease,
                }}
                className="group text-center"
              >
                {/* Numéro */}
                <div className="relative mx-auto mb-6 flex h-24 items-center justify-center">
                  <span className="text-7xl font-black tracking-tighter text-[#DCE2EA] transition-colors duration-500 group-hover:text-[#FCE9DD]">
                    {String(step.number).padStart(2, "0")}
                  </span>

                  <span className="absolute bottom-1 h-1 w-8 rounded-full bg-[#E87932] transition-all duration-300 group-hover:w-14" />
                </div>

                {/* Titre */}
                <h3 className="text-lg font-bold text-[#0A1628] transition-colors duration-300 group-hover:text-[#E87932]">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mx-auto mt-3 max-w-[260px] text-sm leading-7 text-[#64748B]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TÉMOIGNAGES ═══ */}
      <section ref={testimonialsRef} className="bg-[#F4F6F9] py-16 lg:py-20">
        <div className="mx-auto max-w-[1250px] px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease }}
            className="mx-auto mb-10 max-w-2xl text-center"
          >
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#E87932]">
              Ils nous font confiance
            </p>

            <h2 className="text-4xl font-extrabold tracking-tight text-[#0A1628] sm:text-5xl">
              Témoignages
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-[#64748B]">
              Des collaborations durables fondées sur des décisions plus claires
              et des solutions utiles au quotidien.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonialsData.map((testimonial, index) => {
              const [role, company] = testimonial.position.split(", ");
              const initials = testimonial.name
                .split(" ")
                .map((w) => w[0])
                .join("")
                .slice(0, 2);

              return (
                <motion.article
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 60 }}
                  animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.15,
                    ease,
                  }}
                  whileHover={{
                    y: -8,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    },
                  }}
                  className="group flex flex-col rounded-2xl border border-gray-100 bg-white px-7 pb-8 pt-6 shadow-[0_4px_20px_rgba(10,22,40,0.05)] transition-shadow duration-300 hover:shadow-[0_12px_30px_rgba(10,22,40,0.10)]"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={testimonialsInView ? { scale: 1 } : {}}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 15,
                      delay: 0.3 + index * 0.15,
                    }}
                    className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#E87932] shadow-lg shadow-[#E87932]/25"
                  >
                    <Quote className="h-7 w-7 text-white" aria-hidden="true" />
                  </motion.div>

                  <blockquote className="mt-6 flex-1 text-justify text-[15px] leading-7 text-[#475569]">
                    {testimonial.content}
                  </blockquote>

                  <div className="mt-6 flex flex-col items-center text-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full border-[3px] border-[#E87932]/20 bg-[#0A1628] text-xl font-bold text-white">
                      {initials}
                    </div>

                    <p className="mt-3 text-base font-bold text-[#0A1628]">
                      {testimonial.name}
                    </p>

                    <p className="mt-1 text-sm text-[#64748B]">
                      {role}
                      {company && (
                        <>
                          {", "}
                          <span className="font-bold text-[#E87932]">
                            {company}
                          </span>
                        </>
                      )}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>

          <div className="mt-8 flex items-center justify-center gap-2">
            {testimonialsData.map((testimonial, index) => (
              <span
                key={testimonial.name}
                className={`h-2.5 w-2.5 rounded-full ${
                  index === 0 ? "bg-[#E87932]" : "bg-[#CBD5E1]"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ACTUALITÉS ═══ */}
      <section className="bg-[#F4F6F9] py-16 lg:py-20">
        <div ref={articlesRef} className="mx-auto max-w-[1400px] px-6 lg:px-10">
          {/* En-tête */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={articlesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease }}
            className="mb-10 flex flex-col items-center text-center"
          >
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#E87932]">
              Actualités &amp; publications
            </p>

            <h2 className="text-4xl font-extrabold tracking-tight text-[#0A1628] sm:text-5xl">
              Nos actualités
            </h2>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={articlesInView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.7, ease }}
              className="mt-5 h-1 w-16 rounded-full bg-[#E87932]"
              style={{ transformOrigin: "center" }}
            />

            <p className="mx-auto mt-5 max-w-4xl text-base leading-8 text-[#64748B] sm:text-lg">
              Découvrez nos dernières actualités, nos analyses et les temps
              forts de Capital Analysis. Retrouvez nos conseils, nos projets et
              les évolutions qui façonnent nos domaines d&apos;expertise.
            </p>
          </motion.div>

          {/* Cartes des articles */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {articles.map((article, i) => (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 50 }}
                animate={articlesInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: i * 0.12,
                  ease,
                }}
                className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_4px_20px_rgba(10,22,40,0.06)] transition-shadow duration-300 hover:shadow-[0_12px_30px_rgba(10,22,40,0.12)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={article.imageSrc}
                    alt={article.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <span className="absolute right-3 top-3 rounded-md bg-[#E87932] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                    {article.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col px-5 pb-5 pt-5">
                  <h3 className="text-base font-bold leading-snug text-[#0A1628] transition-colors group-hover:text-[#E87932]">
                    {article.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-[#64748B]">
                    {article.excerpt}
                  </p>

                  <Link
                    href="/actualites"
                    className="mt-4 inline-flex items-center text-sm font-bold text-[#0A1628] transition-colors hover:text-[#E87932]"
                  >
                    Lire plus &raquo;
                  </Link>

                  <div className="mt-auto border-t border-gray-100 pt-4 text-xs text-[#E87932]">
                    <time>{article.date}</time>
                    <span className="mx-2">•</span>
                    <span>Aucun commentaire</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Bouton tous les articles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={articlesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6, ease }}
            className="mt-12 flex justify-center"
          >
            <Link
              href="/actualites"
              className="group inline-flex items-center gap-3 rounded-full bg-[#E87932] px-10 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#D56827] hover:shadow-lg"
            >
              Tous les articles
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══ CTA FINAL ═══ */}
      <section className="bg-[#F4F6F9] py-16 lg:py-20">
        <div ref={ctaRef} className="mx-auto max-w-[1250px] px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.97 }}
            animate={ctaInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, ease }}
            className="relative overflow-hidden rounded-[28px] bg-[#0A1628] px-7 py-14 text-center sm:px-12 lg:px-16 lg:py-16"
          >
            {/* Animated floating orbs */}
            <motion.div
              className="absolute -right-20 -top-32 h-96 w-96 rounded-full border border-white/10"
              animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
              className="absolute -right-10 -top-16 h-64 w-64 rounded-full border border-[#E87932]/20"
              animate={{ scale: [1, 1.2, 1], rotate: [0, -90, 0] }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
              className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-[#E87932]/5 blur-2xl"
              animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative flex flex-col items-center justify-center gap-8">
              <div className="mx-auto max-w-2xl">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={ctaInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3, duration: 0.6, ease }}
                  className="text-xs font-bold uppercase tracking-[0.22em] text-[#E87932]"
                >
                  Passons à l&apos;action
                </motion.p>

                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  animate={ctaInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4, duration: 0.7, ease }}
                  className="mt-4 text-center text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[42px]"
                >
                  Donnons à vos projets les moyens d&apos;aller plus loin.
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={ctaInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5, duration: 0.6, ease }}
                  className="mx-auto mt-5 max-w-xl text-center text-base leading-7 text-white/70"
                >
                  Parlons de vos enjeux et identifions ensemble les solutions
                  adaptées à votre organisation.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={ctaInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6, duration: 0.6, ease }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/contact"
                  className="group relative inline-flex shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full bg-[#E87932] px-7 py-4 text-sm font-bold text-white transition-colors duration-300 hover:bg-[#D56827]"
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                    initial={{ x: "-100%" }}
                    animate={{ x: "200%" }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatDelay: 4,
                      ease: "easeInOut",
                    }}
                  />

                  <span className="relative">Contactez notre équipe</span>

                  <ArrowRight className="relative h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
