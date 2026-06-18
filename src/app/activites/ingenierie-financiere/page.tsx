import type { Metadata } from "next";
import IngenierieFinanciereSection from "@/components/sections/services/IngenierieFinanciereSection";

export const metadata: Metadata = {
  title: "Ingénierie Financière",
  description:
    "Services d'ingénierie financière: modélisation, structuration et optimisation des performances financières.",
  alternates: {
    canonical: "/activites/ingenierie-financiere",
  },
};

export default function IngenierieFinanciereRoute() {
  return <IngenierieFinanciereSection />;
}
