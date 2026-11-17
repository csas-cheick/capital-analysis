import { FC, ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

interface SectionHeaderProps {
  badge?: {
    icon?: LucideIcon;
    text: string;
    variant?: 'blue' | 'emerald' | 'purple' | 'orange';
  };
  title: string;
  titleHighlight?: string;
  description?: string;
  centered?: boolean;
  children?: ReactNode;
}

/**
 * Reusable section header component with animations
 */
const SectionHeader: FC<SectionHeaderProps> = ({
  badge,
  title,
  titleHighlight,
  description,
  centered = true,
  children,
}) => {
  const [ref, isVisible] = useScrollReveal();

  const badgeVariants = {
    blue: 'bg-blue-100 text-blue-700',
    emerald: 'bg-emerald-100 text-emerald-700',
    purple: 'bg-purple-100 text-purple-700',
    orange: 'bg-orange-100 text-orange-700',
  };

  const highlightVariants = {
    blue: 'from-blue-600 to-cyan-600',
    emerald: 'from-emerald-600 to-blue-600',
    purple: 'from-purple-600 to-pink-600',
    orange: 'from-orange-600 to-yellow-600',
  };

  return (
    <div
      ref={ref}
      className={`mb-8 sm:mb-12 lg:mb-16 ${centered ? 'text-center' : ''} ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0'
      }`}
    >
      {badge && (
        <div
          className={`inline-flex items-center ${
            badgeVariants[badge.variant || 'blue']
          } px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4 lg:mb-6`}
        >
          {badge.icon && <badge.icon className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />}
          {badge.text}
        </div>
      )}

      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6">
        {title}
        {titleHighlight && (
          <span
            className={`block text-transparent bg-gradient-to-r ${
              highlightVariants[badge?.variant || 'blue']
            } bg-clip-text`}
          >
            {titleHighlight}
          </span>
        )}
      </h2>

      {description && (
        <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>
      )}

      {children}
    </div>
  );
};

export default SectionHeader;
