import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://capital-analysis.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes = [
    "",
    "/about",
    "/capesys",
    "/contact",
    "/objectifs",
    "/activites/ingenierie-financiere",
    "/activites/departement-it-developpement",
    "/activites/etude-et-conseil",
    "/activites/suivi-et-assistance-comptable",
  ];

  return routes.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8,
  }));
}
