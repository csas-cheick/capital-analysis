import type { Metadata } from "next";
import ITDeveloppementSection from "@/components/sections/services/ITDeveloppementSection";

export const metadata: Metadata = {
  title: "IT & Développement",
  description:
    "Logiciels de gestion sur mesure, intégration SAGE, et solutions technologiques adaptées à vos besoins.",
  alternates: {
    canonical: "/activites/departement-it-developpement",
  },
};

export default function ITDeveloppementPage() {
  return <ITDeveloppementSection />;
}
