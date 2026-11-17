"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { articles } from "@/data/articles";

const ease = [0.22, 1, 0.36, 1] as const;

export default function ActualitesRoute() {
  const ctaRef = useRef<HTMLDivElement>(null);
  const ctaInView = useInView(ctaRef, {
    once: true,
    amount: 0.2,
  });

  return (
    <main className="overflow-hidden">
      {/* ═══════════════════════════════════════
    HERO
══════════════════════════════════════ */}
      <section className="relative flex min-h-[220px] items-center justify-center overflow-hidden bg-[#0A1628] pt-16 sm:min-h-[300px]">
        <div className="absolute inset-0 bg-[url('/images/principale.svg')] bg-cover bg-center opacity-10" />

        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628]/80 to-[#0A1628]/95" />

        <div className="relative px-5 py-10 text-center sm:py-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="text-3xl font-extrabold uppercase tracking-wider text-white sm:text-5xl lg:text-6xl"
          >
            Actualités
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

            <span className="font-semibold text-[#E87932]">Actualités</span>
          </motion.nav>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          ACTUALITÉS
      ═══════════════════════════════════════ */}
      <section className="bg-[#F4F6F9] py-12 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-10">
          {/* En-tête */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease }}
            className="mx-auto mb-8 max-w-3xl text-center sm:mb-14"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E87932] sm:text-sm">
              Notre blog
            </span>

            <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#0A1628] sm:text-3xl md:text-4xl lg:text-5xl">
              Restez connectés
            </h2>

            <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[#E87932]" />

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:mt-6 sm:text-base sm:leading-8 lg:text-lg">
              Découvrez nos dernières actualités, nos analyses et nos réflexions
              autour de l’innovation, de la technologie et des transformations
              qui façonnent le monde de demain.
            </p>
          </motion.div>

          {/* Grille des articles */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:grid-cols-4">
            {articles.map((article, index) => (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.1,
                  ease,
                }}
                className="group flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:rounded-2xl"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={article.imageSrc}
                    alt={article.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <span className="absolute left-2 top-2 rounded-full bg-[#E87932] px-2 py-1 text-[9px] font-semibold text-white sm:left-4 sm:top-4 sm:px-3 sm:py-1.5 sm:text-xs">
                    {article.category}
                  </span>
                </div>

                {/* Contenu */}
                <div className="flex flex-1 flex-col p-3 sm:p-5 lg:p-6">
                  <h3 className="text-xs font-bold leading-snug text-[#0A1628] transition-colors duration-300 group-hover:text-[#E87932] sm:text-base lg:text-lg">
                    {article.title}
                  </h3>

                  <p className="mt-2 hidden flex-1 text-sm leading-7 text-slate-500 sm:mt-3 sm:line-clamp-3 sm:block">
                    {article.excerpt}
                  </p>

                  <div className="mt-3 border-t border-slate-100 pt-3 sm:mt-6 sm:pt-4">
                    <Link
                      href="/actualites"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0A1628] transition-colors hover:text-[#E87932] sm:gap-2 sm:text-sm"
                    >
                      Lire plus
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>

                    <div className="mt-2 flex items-center justify-between gap-1 text-[9px] text-slate-400 sm:mt-4 sm:gap-2 sm:text-xs">
                      <span>{article.date}</span>
                      <span>Aucun commentaire</span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CTA
      ═══════════════════════════════════════ */}
      <section className="bg-[#F4F6F9] px-5 pb-12 sm:px-6 sm:pb-20 lg:px-10 lg:pb-28">
        <div ref={ctaRef} className="mx-auto max-w-[1400px]">
          <motion.div
            initial={{
              opacity: 0,
              y: 50,
              scale: 0.97,
            }}
            animate={
              ctaInView
                ? {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }
                : {}
            }
            transition={{
              duration: 0.9,
              ease,
            }}
            className="relative overflow-hidden rounded-2xl bg-[#0A1628] px-5 py-10 text-center sm:rounded-3xl sm:px-12 sm:py-16 lg:px-20 lg:py-20"
          >
            {/* Cercles décoratifs */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 45,
                repeat: Infinity,
                ease: "linear",
              }}
              className="pointer-events-none absolute -right-28 -top-40 h-[400px] w-[400px] rounded-full border border-white/[0.08]"
            />

            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 55,
                repeat: Infinity,
                ease: "linear",
              }}
              className="pointer-events-none absolute -right-16 -top-28 h-[300px] w-[300px] rounded-full border border-white/[0.08]"
            />

            <div className="pointer-events-none absolute -bottom-32 -left-24 h-[300px] w-[300px] rounded-full bg-[#E87932]/10 blur-3xl" />

            {/* Contenu CTA */}
            <div className="relative z-10 mx-auto max-w-3xl">
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                animate={ctaInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2, ease }}
                className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-[#E87932]"
              >
                Construisons ensemble
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={ctaInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.3, ease }}
                className="mt-4 text-2xl font-bold leading-tight text-white sm:mt-5 sm:text-3xl lg:text-5xl"
              >
                Donnons à vos projets les moyens d’aller plus loin.
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={ctaInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.45, ease }}
                className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/65 sm:mt-6 sm:text-base sm:leading-8 lg:text-lg"
              >
                Vous avez une idée, un projet ou un besoin spécifique ?
                Échangeons ensemble pour imaginer des solutions adaptées à vos
                ambitions.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={ctaInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.6, ease }}
                className="mt-6 sm:mt-9"
              >
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#E87932] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[#E87932]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#f28b47] hover:shadow-xl hover:shadow-[#E87932]/30 sm:gap-3 sm:px-8 sm:py-4"
                >
                  Parlons de votre projet
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
