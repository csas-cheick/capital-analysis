import type { Metadata } from "next";
import SuiviAssistanceComptableSection from "@/components/sections/services/SuiviAssistanceComptableSection";

export const metadata: Metadata = {
  title: "Suivi & Assistance Comptable",
  description:
    "Accompagnement comptable: tenue, conformité fiscale, suivi et assistance pour sécuriser vos obligations.",
  alternates: {
    canonical: "/activites/suivi-et-assistance-comptable",
  },
};

export default function SuiviAssistanceComptableRoute() {
  return <SuiviAssistanceComptableSection />;
}
