import type { Metadata } from "next";
import IngenierieFinanciereSection from "@/components/sections/services/IngenierieFinanciereSection";

export const metadata: Metadata = {
  title: "Ingénierie Financière",
  description:
    "Conception de solutions financières innovantes : modélisation, structuration et optimisation de la performance.",
  alternates: {
    canonical: "/activites/ingenierie-financiere",
  },
};

export default function IngenierieFinancierePage() {
  return <IngenierieFinanciereSection />;
}
