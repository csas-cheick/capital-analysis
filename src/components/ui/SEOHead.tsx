import { FC, ReactNode } from "react";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
  children?: ReactNode;
}

/**
 * Legacy SEO helper kept for compatibility; metadata is now managed by Next.js.
 */
const SEOHead: FC<SEOHeadProps> = ({
  title = "Capital Analysis",
  description = "Capital Analysis - La perspective de vos chiffres. Solutions d'ingénierie financière, logiciels de gestion sur mesure et expertise IT au Niger et en Afrique de l'Ouest.",
  keywords = "ingénierie financière, IT, développement logiciel, gestion comptable, Niger, Afrique, Capital Analysis, SAGE, CAPEsys",
  image = "/og-image.jpg",
  url = "https://capital-analysis.com",
  type = "website",
  children,
}) => {
  void title;
  void description;
  void keywords;
  void image;
  void url;
  void type;
  void children;
  return null;
};

export default SEOHead;
