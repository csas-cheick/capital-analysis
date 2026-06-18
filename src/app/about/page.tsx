import type { Metadata } from "next";
import AboutSection from "@/components/sections/AboutSection";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Découvrez Capital Analysis, cabinet spécialisé en ingénierie financière et solutions IT au Niger.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutRoute() {
  return <AboutSection />;
}
