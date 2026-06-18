import type { Metadata } from "next";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Capital Analysis pour vos projets d'ingénierie financière, IT, conseil stratégique et accompagnement comptable.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactRoute() {
  return <ContactSection />;
}
