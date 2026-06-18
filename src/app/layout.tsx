import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/ui/BackToTop";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://capital-analysis.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Capital Analysis - La perspective de vos chiffres",
    template: "%s | Capital Analysis",
  },
  description:
    "Capital Analysis - Ingénierie financière, solutions IT et accompagnement comptable au Niger et en Afrique de l'Ouest.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Capital Analysis",
    title: "Capital Analysis - La perspective de vos chiffres",
    description:
      "Ingénierie financière, solutions IT et accompagnement comptable au Niger et en Afrique de l'Ouest.",
    images: [
      {
        url: "/og-image",
        width: 1200,
        height: 630,
        alt: "Capital Analysis - La perspective de vos chiffres",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Capital Analysis - La perspective de vos chiffres",
    description:
      "Ingénierie financière, solutions IT et accompagnement comptable au Niger et en Afrique de l'Ouest.",
    images: ["/og-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Capital Analysis",
    url: siteUrl,
    logo: `${siteUrl}/images/logoC.svg`,
    email: "contact@capital-analysis.com",
    telephone: "+22797400012",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Niamey",
      addressCountry: "NE",
    },
  };

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Capital Analysis",
    image: `${siteUrl}/images/logoC.svg`,
    url: siteUrl,
    telephone: "+22797400012",
    email: "contact@capital-analysis.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Niamey",
      addressCountry: "NE",
    },
    areaServed: ["Niger", "Afrique de l'Ouest"],
    openingHours: "Mo-Sa 08:00-18:00",
  };

  return (
    <html lang="fr">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <BackToTop />
        </div>
      </body>
    </html>
  );
}
