import type { Metadata } from "next";
import CAPEsysSection from "@/components/sections/CAPEsysSection";

export const metadata: Metadata = {
  title: "CAPEsys",
  description:
    "CAPEsys digitalise la gestion des stations-service: ventes, stocks, clôture journalière, reporting et pilotage IA.",
  alternates: {
    canonical: "/capesys",
  },
};

export default function CAPEsysRoute() {
  return <CAPEsysSection />;
}
