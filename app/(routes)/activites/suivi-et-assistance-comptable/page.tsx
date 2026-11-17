import type { Metadata } from "next";
import SuiviAssistanceComptableSection from "@/components/sections/services/SuiviAssistanceComptableSection";

export const metadata: Metadata = {
  title: "Suivi & Assistance Comptable",
  description:
    "Tenue de comptabilité, déclarations fiscales, audit et conseil juridique pour votre conformité.",
  alternates: {
    canonical: "/activites/suivi-et-assistance-comptable",
  },
};

export default function SuiviAssistanceComptablePage() {
  return <SuiviAssistanceComptableSection />;
}
