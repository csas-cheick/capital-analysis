import type { Metadata } from "next";
import EtudeConseilSection from "@/components/sections/services/EtudeConseilSection";

export const metadata: Metadata = {
  title: "Études & Conseil",
  description:
    "Études stratégiques et conseil pour orienter vos décisions business et accélérer votre croissance.",
  alternates: {
    canonical: "/activites/etude-et-conseil",
  },
};

export default function EtudeConseilRoute() {
  return <EtudeConseilSection />;
}
