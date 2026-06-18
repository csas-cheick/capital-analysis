import type { Metadata } from "next";
import ITDeveloppementSection from "@/components/sections/services/ITDeveloppementSection";

export const metadata: Metadata = {
  title: "IT & Développement",
  description:
    "Solutions IT sur mesure: logiciels de gestion, intégration et développement d'outils adaptés à vos besoins.",
  alternates: {
    canonical: "/activites/departement-it-developpement",
  },
};

export default function ITDeveloppementRoute() {
  return <ITDeveloppementSection />;
}
