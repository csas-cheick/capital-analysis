import { FC, useEffect, useState } from 'react';
import logo from '../../assets/logoC.svg';

interface PageLoaderProps {
  minDisplayTime?: number;
}

/**
 * Professional page loader component
 * Displays a branded loading screen while the page content loads
 */
const PageLoader: FC<PageLoaderProps> = ({ minDisplayTime = 800 }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 500); // Fade out duration
    }, minDisplayTime);

    return () => clearTimeout(timer);
  }, [minDisplayTime]);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 transition-opacity duration-500 ${
        isFading ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Loader content */}
      <div className="relative flex flex-col items-center">
        {/* Logo with animation */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
          <img
            src={logo}
            alt="Capital Analysis"
            className="relative w-20 h-20 object-contain animate-pulse"
          />
        </div>

        {/* Brand name */}
        <h1 className="text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent mb-6">
          Capital Analysis
        </h1>

        {/* Loading spinner */}
        <div className="relative">
          <div className="w-12 h-12 border-4 border-blue-500/20 rounded-full"></div>
          <div className="absolute top-0 left-0 w-12 h-12 border-4 border-transparent border-t-blue-500 rounded-full animate-spin"></div>
        </div>

        {/* Loading text */}
        <p className="mt-6 text-gray-400 text-sm tracking-wider">
          Chargement<span className="animate-pulse">...</span>
        </p>
      </div>
    </div>
  );
};

export default PageLoader;
