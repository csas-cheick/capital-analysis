import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const serviceLinks = [
  { label: "Ingénierie financière", href: "/activites/ingenierie-financiere" },
  {
    label: "IT & Développement",
    href: "/activites/departement-it-developpement",
  },
  { label: "Études & Conseil", href: "/activites/etude-et-conseil" },
  {
    label: "Assistance comptable",
    href: "/activites/suivi-et-assistance-comptable",
  },
];

const companyLinks = [
  { label: "À propos", href: "/about" },
  { label: "Nos objectifs", href: "/objectifs" },
  { label: "CAPEsys", href: "/capesys" },
  { label: "Actualités", href: "/actualites" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a1628] text-white">
      <div className="mx-auto max-w-[1400px] px-6 py-12 lg:px-10">
        <div className="grid gap-10 border-b border-white/10 pb-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr] lg:gap-12">
          {/* Identité */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/images/logoC.svg"
                alt="Capital Analysis"
                width={42}
                height={42}
                className="h-10 w-10 object-contain brightness-0 invert"
              />

              <span className="flex flex-col">
                <span className="text-xl font-bold leading-tight">
                  Capital Analysis
                </span>
                <span className="mt-1 text-xs font-medium tracking-wide text-orange-400">
                  La perspective de vos chiffres
                </span>
              </span>
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-6 text-white/60">
              Nous accompagnons les organisations dans leurs enjeux financiers,
              comptables et technologiques.
            </p>
          </div>

          {/* Expertises */}
          <div>
            <h3 className="text-sm font-semibold">Nos expertises</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/60">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-orange-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold">Navigation</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/60">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-orange-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold">Nous contacter</h3>

            <ul className="mt-5 space-y-4 text-sm text-white/60">
              <li>
                <a
                  href="tel:+22797400012"
                  className="flex items-center gap-3 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 shrink-0 text-orange-400" />
                  +227 97 40 00 12
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@capitalanalysis.ne"
                  className="flex items-center gap-3 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 shrink-0 text-orange-400" />
                  contact@capitalanalysis.ne
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 shrink-0 text-orange-400" />
                Niamey, Niger
              </li>
            </ul>

            <Link
              href="/contact"
              className="mt-6 inline-flex text-sm font-semibold text-orange-400 transition-colors hover:text-orange-300"
            >
              Parlons de votre projet
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col gap-3 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Capital Analysis. Tous droits réservés.
          </p>
          <p>La perspective de vos chiffres.</p>
        </div>
      </div>
    </footer>
  );
}
