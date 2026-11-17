import { FC, InputHTMLAttributes, TextareaHTMLAttributes, SelectHTMLAttributes } from 'react';
import { LucideIcon } from 'lucide-react';

interface BaseInputProps {
  label?: string;
  error?: string;
  helperText?: string;
  icon?: LucideIcon;
  required?: boolean;
}

interface InputProps extends BaseInputProps, Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: 'sm' | 'md' | 'lg';
}

interface TextareaProps extends BaseInputProps, TextareaHTMLAttributes<HTMLTextAreaElement> {
  rows?: number;
}

interface SelectProps extends BaseInputProps, SelectHTMLAttributes<HTMLSelectElement> {
  options: { value: string; label: string }[];
  placeholder?: string;
}

/**
 * Professional Input component
 */
export const Input: FC<InputProps> = ({
  label,
  error,
  helperText,
  icon: Icon,
  required,
  size = 'md',
  className = '',
  ...props
}) => {
  const sizes = {
    sm: 'py-2 text-sm',
    md: 'py-3 text-base',
    lg: 'py-4 text-lg',
  };

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <div className="relative group">
        {Icon && (
          <Icon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
        )}
        <input
          className={`
            w-full ${Icon ? 'pl-12' : 'pl-4'} pr-4 ${sizes[size]}
            bg-white border-2 border-gray-200 rounded-xl
            text-gray-900 placeholder-gray-400
            transition-all duration-300
            focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 focus:outline-none
            hover:border-gray-300
            ${error ? 'border-red-400 focus:border-red-500 focus:ring-red-500/10' : ''}
            ${className}
          `}
          {...props}
        />
        {/* Focus glow effect */}
        <div className="absolute inset-0 rounded-xl bg-blue-500/5 opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none"></div>
      </div>
      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
      {helperText && !error && <p className="mt-2 text-sm text-gray-500">{helperText}</p>}
    </div>
  );
};

/**
 * Professional Textarea component
 */
export const Textarea: FC<TextareaProps> = ({
  label,
  error,
  helperText,
  icon: Icon,
  required,
  rows = 4,
  className = '',
  ...props
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <div className="relative group">
        {Icon && (
          <Icon className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
        )}
        <textarea
          rows={rows}
          className={`
            w-full ${Icon ? 'pl-12' : 'pl-4'} pr-4 py-3
            bg-white border-2 border-gray-200 rounded-xl
            text-gray-900 placeholder-gray-400
            transition-all duration-300 resize-none
            focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 focus:outline-none
            hover:border-gray-300
            ${error ? 'border-red-400 focus:border-red-500 focus:ring-red-500/10' : ''}
            ${className}
          `}
          {...props}
        />
      </div>
      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
      {helperText && !error && <p className="mt-2 text-sm text-gray-500">{helperText}</p>}
    </div>
  );
};

/**
 * Professional Select component
 */
export const Select: FC<SelectProps> = ({
  label,
  error,
  helperText,
  required,
  options,
  placeholder,
  className = '',
  ...props
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <div className="relative group">
        <select
          className={`
            w-full pl-4 pr-10 py-3
            bg-white border-2 border-gray-200 rounded-xl
            text-gray-900 appearance-none cursor-pointer
            transition-all duration-300
            focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 focus:outline-none
            hover:border-gray-300
            ${error ? 'border-red-400 focus:border-red-500 focus:ring-red-500/10' : ''}
            ${className}
          `}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {/* Custom arrow */}
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
      {helperText && !error && <p className="mt-2 text-sm text-gray-500">{helperText}</p>}
    </div>
  );
};

export default Input;
