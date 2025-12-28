import { FC, useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

/**
 * Professional back to top button component
 * Appears when user scrolls down and smoothly scrolls back to top
 */
const BackToTop: FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled more than 400px
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-8 right-8 z-50
        w-12 h-12 rounded-full
        bg-gradient-to-r from-blue-600 to-cyan-500
        text-white shadow-lg shadow-blue-500/30
        flex items-center justify-center
        transition-all duration-300 transform
        hover:scale-110 hover:shadow-xl hover:shadow-blue-500/40
        focus:outline-none focus:ring-4 focus:ring-blue-500/30
        ${isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10 pointer-events-none'
        }
      `}
      aria-label="Retour en haut"
    >
      <ArrowUp className="w-5 h-5" />
      
      {/* Animated ring */}
      <span className="absolute inset-0 rounded-full border-2 border-blue-400 animate-ping opacity-20"></span>
    </button>
  );
};

export default BackToTop;
