"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  MessageSquare,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

export default function ContactRoute() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const [errorMessage, setErrorMessage] = useState("");

  const formRef = useRef<HTMLDivElement>(null);
  const formInView = useInView(formRef, {
    once: true,
    margin: "-80px",
  });

  const mapRef = useRef<HTMLDivElement>(null);
  const mapInView = useInView(mapRef, {
    once: true,
    margin: "-80px",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setFormData({
          name: "",
          phone: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus("error");
        setErrorMessage(
          data.message || "Une erreur est survenue lors de l'envoi.",
        );
      }
    } catch {
      setStatus("error");
      setErrorMessage(
        "Impossible d'envoyer votre message. Veuillez réessayer.",
      );
    }
  };

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

        <div className="relative mx-auto w-full max-w-[1400px] px-5 py-10 text-center sm:px-6 sm:py-16 lg:px-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="text-3xl font-extrabold uppercase tracking-wider text-white sm:text-5xl lg:text-6xl"
          >
            Contact
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

            <span className="font-semibold text-[#E87932]">Contact</span>
          </motion.nav>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FORMULAIRE DE CONTACT
      ═══════════════════════════════════════ */}
      <section className="bg-white py-12 sm:py-20 lg:py-28">
        <div ref={formRef} className="mx-auto max-w-[900px] px-5 sm:px-6 lg:px-10">
          {/* Introduction avant le formulaire */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={formInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease }}
            className="mb-8 text-center sm:mb-12"
          >
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#E87932] sm:text-sm">
              <MessageSquare className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              Parlons de votre projet
            </span>

            <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#0A1628] sm:mt-4 sm:text-3xl lg:text-4xl">
              Comment pouvons-nous vous aider ?
            </h2>

            <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[#E87932]" />

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:mt-6 sm:text-base sm:leading-8">
              Vous souhaitez en savoir plus sur nos services, discuter
              d&apos;une collaboration ou concrétiser une idée ? Présentez-nous
              votre besoin à travers le formulaire ci-dessous. Notre équipe
              prendra le temps d&apos;étudier votre demande et de vous répondre
              dans les meilleurs délais.
            </p>
          </motion.div>

          {/* Formulaire */}
          <motion.form
            initial={{ opacity: 0, y: 40 }}
            animate={formInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease }}
            onSubmit={handleSubmit}
            className="space-y-5 sm:space-y-7"
          >
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-[#0A1628]"
                >
                  Nom complet *
                </label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Votre nom et prénom"
                  required
                  className="w-full rounded-lg border border-gray-200 bg-[#F8F9FB] px-4 py-3.5 text-sm text-[#0A1628] outline-none transition-all placeholder:text-gray-400 focus:border-[#E87932] focus:bg-white focus:ring-2 focus:ring-[#E87932]/10"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-semibold text-[#0A1628]"
                >
                  Numéro de téléphone
                </label>

                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Votre numéro de téléphone"
                  className="w-full rounded-lg border border-gray-200 bg-[#F8F9FB] px-4 py-3.5 text-sm text-[#0A1628] outline-none transition-all placeholder:text-gray-400 focus:border-[#E87932] focus:bg-white focus:ring-2 focus:ring-[#E87932]/10"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-[#0A1628]"
                >
                  Adresse e-mail *
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="exemple@domaine.com"
                  required
                  className="w-full rounded-lg border border-gray-200 bg-[#F8F9FB] px-4 py-3.5 text-sm text-[#0A1628] outline-none transition-all placeholder:text-gray-400 focus:border-[#E87932] focus:bg-white focus:ring-2 focus:ring-[#E87932]/10"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-semibold text-[#0A1628]"
                >
                  Objet de votre demande *
                </label>

                <input
                  id="subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Objet de votre message"
                  required
                  className="w-full rounded-lg border border-gray-200 bg-[#F8F9FB] px-4 py-3.5 text-sm text-[#0A1628] outline-none transition-all placeholder:text-gray-400 focus:border-[#E87932] focus:bg-white focus:ring-2 focus:ring-[#E87932]/10"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-semibold text-[#0A1628]"
              >
                Votre message *
              </label>

              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Décrivez votre projet, vos besoins ou votre demande..."
                required
                rows={6}
                className="w-full resize-y rounded-lg border border-gray-200 bg-[#F8F9FB] px-4 py-3.5 text-sm leading-7 text-[#0A1628] outline-none transition-all placeholder:text-gray-400 focus:border-[#E87932] focus:bg-white focus:ring-2 focus:ring-[#E87932]/10"
              />
            </div>

            {/* Messages de statut */}
            {status === "success" && (
              <p
                role="status"
                className="rounded-lg bg-green-50 px-4 py-3 text-sm font-medium text-green-700"
              >
                Votre message a été envoyé avec succès. Merci de nous avoir
                contactés !
              </p>
            )}

            {status === "error" && (
              <p
                role="alert"
                className="rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-600"
              >
                {errorMessage}
              </p>
            )}

            {/* Bouton */}
            <div className="flex justify-center pt-2 sm:pt-3">
              <button
                type="submit"
                disabled={status === "sending"}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0A1628] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#0A1628]/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#142B48] hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:gap-3 sm:px-9 sm:py-4"
              >
                {status === "sending" ? (
                  "Envoi en cours..."
                ) : (
                  <>Envoyer le message</>
                )}
              </button>
            </div>

            <p className="text-center text-xs text-slate-400">
              Les informations communiquées seront utilisées uniquement pour
              répondre à votre demande.
            </p>
          </motion.form>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CARTE ET COORDONNÉES
      ═══════════════════════════════════════ */}
      <section className="relative bg-[#F4F6F9]">
        <div ref={mapRef} className="relative">
          {/* Coordonnées au-dessus de la carte sur mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={mapInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="bg-[#0A1628] px-5 py-6 text-white sm:hidden"
          >
            <div className="mx-auto max-w-sm space-y-5">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#E87932]" />
                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-white/45">Notre adresse</p>
                  <p className="text-sm leading-relaxed">Quartier Francophonie<br />Niamey, Niger</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-[#E87932]" />
                <div className="text-sm leading-relaxed">
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-white/45">Téléphone</p>
                  <p>+227 97 40 00 12</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[#E87932]" />
                <div className="text-sm leading-relaxed">
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-white/45">Adresse e-mail</p>
                  <p>contact@capitalanalysis.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="relative h-[300px] w-full sm:h-[450px] lg:h-[500px]">
          <iframe
            title="Localisation de Capital Analysis à Niamey"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3846.123!2d2.1098!3d13.5137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDMwJzQ5LjMiTiAywrAwNic0OS4xIkU!5e0!3m2!1sfr!2sne!4v1700000000000"
            className="h-full w-full border-0 grayscale-[20%]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />

          {/* Carte des coordonnées — desktop uniquement */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={mapInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="absolute left-10 top-1/2 z-10 hidden -translate-y-1/2 rounded-xl bg-[#0A1628] px-8 py-9 text-white shadow-2xl sm:block lg:left-16 lg:px-9 lg:py-10"
          >
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#E87932]" />

                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-white/45">
                    Notre adresse
                  </p>

                  <p className="text-sm leading-relaxed">
                    Quartier Francophonie
                    <br />
                    Niamey, Niger
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-[#E87932]" />

                <div className="text-sm leading-relaxed">
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-white/45">
                    Téléphone
                  </p>

                  <p>+227 97 40 00 12</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[#E87932]" />

                <div className="text-sm leading-relaxed">
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-white/45">
                    Adresse e-mail
                  </p>

                  <p>contact@capitalanalysis.com</p>
                </div>
              </div>
            </div>
          </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          ESPACE AVANT LE FOOTER
      ═══════════════════════════════════════ */}
      <section className="bg-[#F4F6F9] px-5 pb-12 pt-10 sm:px-6 sm:pb-16 sm:pt-14 lg:px-10 lg:pb-20 lg:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease }}
          className="mx-auto max-w-[1400px] border-t border-slate-200 pt-10 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#E87932]">
            Capital Analysis
          </p>

          <h2 className="mt-3 text-xl font-bold text-[#0A1628] sm:text-2xl lg:text-3xl">
            Construisons ensemble vos prochaines réussites.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
            Nous sommes à votre écoute pour vous accompagner dans vos réflexions
            et donner vie à vos ambitions.
          </p>
        </motion.div>
      </section>
    </main>
  );
}
