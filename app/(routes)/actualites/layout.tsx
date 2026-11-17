import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Actualites",
  description:
    "Les analyses, conseils et perspectives de Capital Analysis sur la finance, la gestion et la technologie.",
  alternates: {
    canonical: "/actualites",
  },
};

export default function ActualitesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
