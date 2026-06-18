import type { Metadata } from "next";
import GoalsSection from "@/components/sections/GoalsSection";

export const metadata: Metadata = {
  title: "Objectifs",
  description:
    "Nos objectifs: aider les entreprises à structurer leur pilotage financier et digitaliser leurs opérations.",
  alternates: {
    canonical: "/objectifs",
  },
};

export default function GoalsRoute() {
  return <GoalsSection />;
}
