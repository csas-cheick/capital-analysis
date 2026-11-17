import type { Metadata } from "next";
import EtudeConseilSection from "@/components/sections/services/EtudeConseilSection";

export const metadata: Metadata = {
  title: "Études & Conseil",
  description:
    "Analyses stratégiques approfondies et recommandations pour guider vos décisions d'affaires.",
  alternates: {
    canonical: "/activites/etude-et-conseil",
  },
};

export default function EtudeConseilPage() {
  return <EtudeConseilSection />;
}
