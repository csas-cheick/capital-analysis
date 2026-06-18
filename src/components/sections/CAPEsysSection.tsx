"use client";

import { FC, ComponentType, useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  BarChart3,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  ClipboardCheck,
  Database,
  Play,
  Pause,
  ShieldCheck,
  Sparkles,
  TriangleAlert,
  Wallet,
  Wrench,
  X,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

type FeatureItem = {
  title: string;
  description: string;
  purpose: string;
  icon: ComponentType<{ className?: string }>;
};

const CAPEsysSection: FC = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [activeScreenshotIndex, setActiveScreenshotIndex] = useState<
    number | null
  >(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  const [beforeAfterRef, beforeAfterVisible] = useScrollReveal();
  const [featuresRef, featuresVisible] = useScrollReveal();
  const [impactRef, impactVisible] = useScrollReveal();
  const [galleryRef, galleryVisible] = useScrollReveal();
  const [videoRefSection, videoVisible] = useScrollReveal();

  const screenshots = [
    {
      src: "/images/screenshots/dashboard-principal.jpg",
      alt: "Tableau de bord principal CAPEsys",
      title: "Tableau de bord principal",
      description: "Vue globale des ventes, stocks et indicateurs clés.",
    },
    {
      src: "/images/screenshots/dashboard-decisionnel.jpg",
      alt: "Tableau de bord décisionnel CAPEsys",
      title: "Tableau de bord décisionnel",
      description: "Analyse des performances réseau et exports de synthèse.",
    },
    {
      src: "/images/screenshots/cloture-shift.jpg",
      alt: "Page de clôture de shift CAPEsys",
      title: "Clôture de Shift",
      description: "Validation quotidienne avec verrouillage infalsifiable.",
    },
    {
      src: "/images/screenshots/tickets-support.jpg",
      alt: "Espace tickets support CAPEsys",
      title: "Tickets de support",
      description: "Suivi des incidents techniques et interventions.",
    },
  ];
  const screenshotCount = screenshots.length;

  useEffect(() => {
    const container = videoContainerRef.current;
    if (!container) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadVideo(true);
          observer.unobserve(container);
        }
      },
      { threshold: 0.2, rootMargin: "200px 0px" },
    );

    observer.observe(container);

    return () => {
      observer.unobserve(container);
    };
  }, []);

  useEffect(() => {
    if (activeScreenshotIndex === null) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveScreenshotIndex(null);
        return;
      }

      if (event.key === "ArrowRight") {
        setActiveScreenshotIndex((current) => {
          if (current === null) {
            return current;
          }
          return (current + 1) % screenshotCount;
        });
        return;
      }

      if (event.key === "ArrowLeft") {
        setActiveScreenshotIndex((current) => {
          if (current === null) {
            return current;
          }
          return (current - 1 + screenshotCount) % screenshotCount;
        });
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeScreenshotIndex, screenshotCount]);

  const toggleVideoPlayback = async () => {
    const video = videoRef.current;

    if (!shouldLoadVideo) {
      setShouldLoadVideo(true);
    }

    if (!video) {
      return;
    }

    if (video.paused) {
      try {
        await video.play();
        setIsVideoPlaying(true);
      } catch {
        setIsVideoPlaying(false);
      }
      return;
    }

    video.pause();
    setIsVideoPlaying(false);
  };

  const beforeItems = [
    {
      title: "Pilotage éclaté",
      description: "Chaque station-service fonctionnait de manière isolée.",
    },
    {
      title: "Saisie papier",
      description:
        "Les ventes et index des pompes étaient notés sur des cahiers.",
    },
    {
      title: "Double ressaisie",
      description:
        "Les données étaient ressaisies dans Excel, avec des erreurs fréquentes.",
    },
    {
      title: "Décision retardée",
      description:
        "Les informations arrivaient au siège par email avec plusieurs jours de retard.",
    },
    {
      title: "Visibilité limitée",
      description:
        "Aucune visibilité temps réel sur les pertes, ruptures ou performances.",
    },
    {
      title: "Décentralisation des données",
      description:
        "Les données étaient dispersées et difficiles à centraliser.",
    },
  ];

  const withItems = [
    {
      title: "Plateforme unifiée",
      description: "Une plateforme web unique pour le terrain et le siège.",
    },
    {
      title: "Saisie unique",
      description: "Saisie unique des opérations, sans double ressaisie.",
    },
    {
      title: "Temps réel",
      description: "Données disponibles en temps réel pour la direction.",
    },
    {
      title: "Clôture verrouillée",
      description:
        "Clôture journalière verrouillée pour garantir l'infalsifiabilité.",
    },
    {
      title: "Pilotage assisté par IA",
      description:
        "Pilotage assisté par IA pour anticiper les ruptures de stock.",
    },
    {
      title: "Expérience multi-écran",
      description:
        "Interface responsive accessible sur desktop, tablette et mobile.",
    },
  ];

  const transformationHighlights: FeatureItem[] = [
    {
      title: "Décision immédiate",
      description: "Données consolidées et exploitables dès la fin du shift.",
      purpose: "La direction pilote en J+0, sans attendre les emails terrain.",
      icon: BarChart3,
    },
    {
      title: "Traçabilité complète",
      description: "Chaque opération est horodatée, attribuée et vérifiable.",
      purpose:
        "La clôture verrouillée renforce le contrôle interne et la conformité.",
      icon: ShieldCheck,
    },
    {
      title: "Ruptures anticipées",
      description:
        "L'IA détecte les tendances de consommation et recommande l'action.",
      purpose:
        "Les équipes passent d'une gestion réactive à une gestion proactive.",
      icon: Sparkles,
    },
  ];

  const keyMetrics = [
    {
      value: "J+0",
      label: "Visibilité décisionnelle pour la direction",
    },
    {
      value: "1 saisie",
      label: "Donnée capturée une seule fois sur le terrain",
    },
    {
      value: "24/7",
      label: "Accès multi-écran desktop, tablette et mobile",
    },
  ];

  const operationalOutcomes: FeatureItem[] = [
    {
      title: "Rythme de pilotage accéléré",
      description:
        "Les informations remontent sans latence, station par station.",
      purpose:
        "Les décisions critiques se prennent dans la journée, pas en décalé.",
      icon: BarChart3,
    },
    {
      title: "Contrôle renforcé",
      description:
        "La clôture verrouillée et la traçabilité réduisent les écarts opérationnels.",
      purpose:
        "Le siège dispose d'un historique fiable pour auditer et corriger.",
      icon: ShieldCheck,
    },
    {
      title: "Performance réseau stabilisée",
      description:
        "Les alertes et recommandations IA limitent les ruptures de stock.",
      purpose:
        "Le service en station devient plus continu et la marge mieux protégée.",
      icon: Sparkles,
    },
  ];

  const features: FeatureItem[] = [
    {
      title: "Gestion des ventes et approvisionnements",
      description:
        "Enregistrer les ventes, les livraisons de carburant et les bons de réception.",
      purpose: "Suivre les flux opérationnels sans perte d'information.",
      icon: BarChart3,
    },
    {
      title: "Suivi des stocks et jaugeage",
      description:
        "Visualiser la quantité restante dans chaque cuve en temps réel.",
      purpose: "Éviter les ruptures imprévues et piloter les seuils d'alerte.",
      icon: Database,
    },
    {
      title: "Clôture journalière (Shift)",
      description:
        "Validation managériale de la journée avec verrouillage des données.",
      purpose:
        "Assurer la traçabilité et empêcher les modifications a posteriori.",
      icon: ClipboardCheck,
    },
    {
      title: "Trésorerie et comptabilité",
      description:
        "Gestion de caisse, crédits clients, factures et écritures comptables.",
      purpose: "Fiabiliser les opérations financières au quotidien.",
      icon: Wallet,
    },
    {
      title: "Reporting et tableaux de bord",
      description:
        "Indicateurs consolidés, états de synthèse et exports décisionnels.",
      purpose: "Donner une vision claire des performances du réseau.",
      icon: ShieldCheck,
    },
    {
      title: "Tickets de support",
      description:
        "Déclaration d'incidents et suivi du traitement par le support.",
      purpose: "Réduire le temps de résolution des pannes terrain.",
      icon: Wrench,
    },
    {
      title: "IA prédictive",
      description:
        "Anticipation des ruptures et recommandations de réapprovisionnement.",
      purpose: "Prendre des décisions proactives avant la rupture.",
      icon: Sparkles,
    },
  ];

  const showPreviousScreenshot = () => {
    setActiveScreenshotIndex((current) => {
      if (current === null) {
        return current;
      }
      return (current - 1 + screenshotCount) % screenshotCount;
    });
  };

  const showNextScreenshot = () => {
    setActiveScreenshotIndex((current) => {
      if (current === null) {
        return current;
      }
      return (current + 1) % screenshotCount;
    });
  };

  return (
    <div className="min-h-screen bg-[#f6f7fb]">
      <section className="relative overflow-hidden bg-[#0c182d] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(245,158,11,0.18),transparent_45%),radial-gradient(circle_at_80%_10%,rgba(59,130,246,0.15),transparent_40%)]" />
        <div className="relative container mx-auto px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-24">
          <div className="max-w-4xl">
            <span className="inline-flex items-center rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-2 text-sm font-medium text-amber-200">
              CAPEsys · Plateforme web complète et responsive
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Digitaliser et centraliser toute la gestion d&apos;un réseau de
              distribution pétrolière
            </h1>
            <p className="mt-6 max-w-3xl text-lg text-slate-300 leading-relaxed">
              CAPEsys remplace les cahiers, les tableurs et les emails par une
              plateforme intelligente, du terrain jusqu&apos;au siège, avec une
              IA prédictive qui anticipe les besoins avant qu&apos;une rupture
              ne survienne.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="#video-capesys">
                <button className="group inline-flex items-center justify-center gap-2 rounded-lg bg-amber-500 px-7 py-3.5 font-semibold text-[#0c182d] transition hover:bg-amber-400">
                  Voir la vidéo
                  <Play className="w-4 h-4" />
                </button>
              </a>
              <a href="#fonctionnalites-capesys">
                <button className="inline-flex items-center justify-center rounded-lg border border-white/25 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10">
                  Explorer les fonctionnalités
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="relative -mt-8 z-10 pb-6 lg:pb-8">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-3">
            {keyMetrics.map((metric) => (
              <article
                key={metric.value + metric.label}
                className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm"
              >
                <p className="text-2xl font-bold text-[#0c182d]">
                  {metric.value}
                </p>
                <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                  {metric.label}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        ref={beforeAfterRef}
        className="py-14 sm:py-16 lg:py-20 bg-white border-b border-slate-100"
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div
            className={`mx-auto max-w-4xl text-center transition-all duration-700 ${
              beforeAfterVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-flex items-center rounded-full border border-amber-300 bg-amber-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-amber-800">
              Avant / Après CAPEsys
            </span>
            <h2 className="mt-4 text-2xl sm:text-4xl font-bold text-slate-900">
              Du pilotage à l&apos;aveugle à une exploitation maîtrisée
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              CAPEsys restructure toute la chaîne opérationnelle: collecte des
              données, contrôle quotidien, consolidation siège et aide à la
              décision.
            </p>
          </div>

          <div
            className={`relative mt-8 sm:mt-10 grid lg:grid-cols-2 gap-5 sm:gap-8 transition-all duration-700 ${
              beforeAfterVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm lg:flex">
              <ArrowRight className="h-4 w-4" />
            </div>

            <div className="rounded-2xl border border-red-200 bg-gradient-to-b from-red-50 to-white p-5 sm:p-7 shadow-sm">
              <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-red-700">
                <TriangleAlert className="w-4 h-4" />
                Avant CAPEsys
              </div>
              <p className="mb-4 sm:mb-6 text-sm text-red-900/70">
                Processus fragmentés, décisions tardives, marge exposée.
              </p>
              <ul className="space-y-3 sm:space-y-4 text-slate-700 leading-relaxed">
                {beforeItems.map((item) => (
                  <li
                    key={item.title}
                    className="rounded-xl border border-red-100 bg-white/80 p-3.5 sm:p-4"
                  >
                    <p className="text-sm sm:text-base font-semibold text-slate-900">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm text-slate-700">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-emerald-200 bg-gradient-to-b from-emerald-50 to-white p-5 sm:p-7 shadow-sm">
              <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700">
                <CheckCircle2 className="w-4 h-4" />
                Avec CAPEsys
              </div>
              <p className="mb-4 sm:mb-6 text-sm text-emerald-900/70">
                Flux unifiés, contrôle renforcé et visibilité temps réel.
              </p>
              <ul className="space-y-3 sm:space-y-4 text-slate-700 leading-relaxed">
                {withItems.map((item) => (
                  <li
                    key={item.title}
                    className="rounded-xl border border-emerald-100 bg-white/80 p-3.5 sm:p-4"
                  >
                    <p className="text-sm sm:text-base font-semibold text-slate-900">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm text-slate-700">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            className={`mt-6 sm:mt-8 grid gap-3 sm:gap-4 md:grid-cols-3 transition-all duration-700 ${
              beforeAfterVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {transformationHighlights.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-5"
              >
                <div className="inline-flex rounded-lg bg-white p-2 text-amber-600 shadow-sm">
                  <item.icon className="h-4 w-4" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                  {item.description}
                </p>
                <p className="mt-2 text-xs font-medium uppercase tracking-wide text-slate-500">
                  {item.purpose}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="fonctionnalites-capesys"
        ref={featuresRef}
        className="py-16 lg:py-20"
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div
            className={`mb-10 transition-all duration-700 ${
              featuresVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Fonctionnalités clés
            </h2>
            <p className="mt-3 max-w-3xl text-slate-600 leading-relaxed">
              Une seule plateforme pour centraliser les opérations terrain, la
              finance, le support et la décision.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="min-w-[860px] w-full text-left">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Fonctionnalité
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Ce que CAPEsys fait
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    À quoi ça sert
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature) => (
                  <tr
                    key={feature.title}
                    className="border-t border-slate-100 align-top"
                  >
                    <td className="px-6 py-5">
                      <div className="flex items-start gap-3">
                        <span className="rounded-lg bg-amber-100 p-2 text-amber-700">
                          <feature.icon className="h-4 w-4" />
                        </span>
                        <span className="font-semibold text-slate-900 leading-snug">
                          {feature.title}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-slate-700 leading-relaxed">
                      {feature.description}
                    </td>
                    <td className="px-6 py-5 text-slate-700 leading-relaxed">
                      {feature.purpose}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section
        ref={impactRef}
        className="py-14 lg:py-16 bg-white border-y border-slate-100"
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div
            className={`rounded-3xl bg-gradient-to-r from-[#0f2342] to-[#142f56] p-8 lg:p-10 text-white transition-all duration-700 ${
              impactVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold">
              Impact opérationnel immédiat
            </h2>
            <p className="mt-3 max-w-3xl text-slate-200 leading-relaxed">
              CAPEsys n&apos;est pas seulement un outil de saisie. C&apos;est un
              levier de gouvernance qui sécurise l&apos;exécution terrain et
              améliore la qualité des décisions au siège.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {operationalOutcomes.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-white/15 bg-white/5 p-5"
                >
                  <div className="inline-flex rounded-lg bg-white/15 p-2 text-amber-200">
                    <item.icon className="h-4 w-4" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-100 leading-relaxed">
                    {item.description}
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-wide text-slate-300">
                    {item.purpose}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section ref={galleryRef} className="py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div
            className={`mb-10 transition-all duration-700 ${
              galleryVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Captures de CAPEsys
            </h2>
            <p className="mt-3 text-slate-600 max-w-3xl">
              Tableau de bord principal, tableau de bord décisionnel, page de
              clôture de shift et espace support.
            </p>
          </div>

          <div className="mx-auto w-full max-w-5xl">
            <button
              type="button"
              onClick={() => setActiveScreenshotIndex(0)}
              className="group relative mx-auto block h-[260px] w-full sm:h-[360px] lg:h-[460px]"
              aria-label="Ouvrir la galerie CAPEsys"
            >
              {screenshots.map((screen, index) => {
                const rotation = [-3.5, 2.5, -1.5, 1.5][index % 4];

                return (
                  <span
                    key={screen.src}
                    className="absolute inset-0"
                    style={{
                      zIndex: screenshotCount - index,
                      transform: `translateY(${index * 14}px) scale(${1 - index * 0.04}) rotate(${rotation}deg)`,
                    }}
                  >
                    <span className="relative block h-full w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
                      <Image
                        src={screen.src}
                        alt={screen.alt}
                        fill
                        className="object-contain bg-slate-100/80"
                        sizes="(max-width: 768px) 100vw, 80vw"
                      />
                    </span>
                  </span>
                );
              })}
            </button>

            <p className="mt-8 text-center text-sm text-slate-600">
              Aperçu en pile. Clique pour ouvrir en plein écran.
            </p>

            <div className="mt-5 flex flex-wrap justify-center gap-3">
              {screenshots.map((screen, index) => (
                <button
                  key={screen.src}
                  type="button"
                  onClick={() => setActiveScreenshotIndex(index)}
                  className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
                >
                  {screen.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="video-capesys"
        ref={videoRefSection}
        className="py-16 lg:py-20 bg-white border-y border-slate-100"
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div
            className={`grid lg:grid-cols-2 gap-10 items-center transition-all duration-700 ${
              videoVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                Démonstration vidéo CAPEsys
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Visualise le parcours complet: saisie terrain, clôture de shift,
                suivi des stocks, reporting siège et alertes IA de
                réapprovisionnement.
              </p>
            </div>

            <div ref={videoContainerRef} className="relative">
              <div className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
                <video
                  ref={videoRef}
                  className="w-full aspect-video object-cover"
                  src={
                    shouldLoadVideo
                      ? "/images/capesys_video_mobile.mp4"
                      : undefined
                  }
                  poster="/images/capesys_video_poster.jpg"
                  preload={shouldLoadVideo ? "metadata" : "none"}
                  loop
                  playsInline
                  onPlay={() => setIsVideoPlaying(true)}
                  onPause={() => setIsVideoPlaying(false)}
                  onEnded={() => setIsVideoPlaying(false)}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />

                <button
                  onClick={toggleVideoPlayback}
                  className="absolute right-4 bottom-4 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-white/15 text-white backdrop-blur-sm transition hover:bg-white/25"
                  aria-label={
                    isVideoPlaying
                      ? "Mettre la vidéo en pause"
                      : "Lire la vidéo"
                  }
                >
                  {isVideoPlaying ? (
                    <Pause className="h-5 w-5" />
                  ) : (
                    <Play className="h-5 w-5 ml-0.5" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 lg:p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              En résumé
            </h2>
            <p className="mt-4 max-w-4xl mx-auto text-slate-600 leading-relaxed">
              CAPEsys est le tableau de bord unique qui relie le terrain à la
              direction: opérations, stocks, finance, support et intelligence
              prédictive dans une même plateforme web sécurisée.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <button className="group inline-flex items-center justify-center gap-2 rounded-lg bg-[#0c182d] px-7 py-3.5 font-semibold text-white transition hover:bg-[#0f2544]">
                  Demander une démo
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </button>
              </Link>
              <a href="tel:+22797400012">
                <button className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-7 py-3.5 font-semibold text-slate-700 transition hover:bg-slate-50">
                  Parler à un conseiller
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {activeScreenshotIndex !== null && (
        <div className="fixed inset-0 z-[120] bg-slate-950/90 backdrop-blur-sm">
          <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-8">
            <div className="relative w-full max-w-7xl">
              <button
                type="button"
                onClick={() => setActiveScreenshotIndex(null)}
                className="absolute -top-12 right-0 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition hover:bg-white/20"
                aria-label="Fermer la galerie"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="relative h-[65vh] sm:h-[72vh] lg:h-[78vh] overflow-hidden rounded-2xl border border-white/15 bg-slate-900/70">
                <Image
                  src={screenshots[activeScreenshotIndex].src}
                  alt={screenshots[activeScreenshotIndex].alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />

                <button
                  type="button"
                  onClick={showPreviousScreenshot}
                  className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-black/35 text-white transition hover:bg-black/55"
                  aria-label="Capture précédente"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>

                <button
                  type="button"
                  onClick={showNextScreenshot}
                  className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-black/35 text-white transition hover:bg-black/55"
                  aria-label="Capture suivante"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>

              <div className="mt-4 text-center text-white">
                <p className="text-base font-semibold">
                  {screenshots[activeScreenshotIndex].title}
                </p>
                <p className="mt-1 text-sm text-slate-300">
                  {screenshots[activeScreenshotIndex].description}
                </p>
                <p className="mt-2 text-xs text-slate-400">
                  {activeScreenshotIndex + 1} / {screenshots.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CAPEsysSection;
