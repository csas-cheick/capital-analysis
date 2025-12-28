import { FC, ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  children?: ReactNode;
}

/**
 * SEO Head component for managing meta tags
 * Uses react-helmet-async for server-side rendering compatibility
 */
const SEOHead: FC<SEOHeadProps> = ({
  title = 'Capital Analysis',
  description = 'Capital Analysis - La perspective de vos chiffres. Solutions d\'ingénierie financière, logiciels de gestion sur mesure et expertise IT au Niger et en Afrique de l\'Ouest.',
  keywords = 'ingénierie financière, IT, développement logiciel, gestion comptable, Niger, Afrique, Capital Analysis, SAGE, CapitalPetroleum',
  image = '/og-image.jpg',
  url = 'https://capital-analysis.com',
  type = 'website',
  children,
}) => {
  const fullTitle = title === 'Capital Analysis' 
    ? 'Capital Analysis - La perspective de vos chiffres' 
    : `${title} | Capital Analysis`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Capital Analysis" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="fr" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:site_name" content="Capital Analysis" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Theme Color */}
      <meta name="theme-color" content="#3b82f6" />
      
      {/* Additional children meta tags */}
      {children}
    </Helmet>
  );
};

export default SEOHead;
