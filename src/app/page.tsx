import type { Metadata } from "next";
import HomeSection from "@/components/sections/HomeSection";

export const metadata: Metadata = {
  title: "Accueil",
  description:
    "Capital Analysis accompagne votre croissance avec des services en ingénierie financière, IT, conseil et comptabilité.",
  alternates: {
    canonical: "/",
  },
};

export default function HomeRoute() {
  return <HomeSection />;
}
