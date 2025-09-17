import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  children: React.ReactNode;
}

interface LinkButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  to: string;
  children: React.ReactNode;
}

const getVariantClasses = (variant: ButtonVariant = 'primary') => {
  switch (variant) {
    case 'primary':
      return 'bg-accent hover:bg-accent/90 text-white dark:bg-accent dark:text-white dark:hover:bg-accent/80';
    case 'secondary':
      return 'bg-secondary text-secondary-foreground hover:bg-secondary/80 dark:bg-secondary dark:text-white dark:hover:bg-secondary/60';
    case 'outline':
      return 'border-2 border-accent text-accent hover:bg-accent/10 dark:border-accent dark:text-white dark:hover:bg-accent/20';
    case 'ghost':
      return 'hover:bg-accent/10 text-accent dark:text-white dark:hover:bg-accent/20';
    default:
      return 'bg-accent hover:bg-accent/90 text-white dark:bg-accent dark:text-white dark:hover:bg-accent/80';
  }
};

const getSizeClasses = (size: ButtonSize = 'md') => {
  switch (size) {
    case 'sm':
      return 'h-9 px-3 text-sm';
    case 'md':
      return 'h-10 px-4 py-2';
    case 'lg':
      return 'h-11 px-6 py-3 text-lg';
    default:
      return 'h-10 px-4 py-2';
  }
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  children,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50';
  const variantClasses = getVariantClasses(variant);
  const sizeClasses = getSizeClasses(size);
  const widthClass = fullWidth ? 'w-full' : '';
  
  return (
    <motion.button
      className={`${baseClasses} ${variantClasses} ${sizeClasses} ${widthClass} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export const LinkButton: React.FC<LinkButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  to,
  children,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50';
  const variantClasses = getVariantClasses(variant);
  const sizeClasses = getSizeClasses(size);
  const widthClass = fullWidth ? 'w-full' : '';
  
  if (to.startsWith('http')) {
    return (
      <motion.a
        href={to}
        className={`${baseClasses} ${variantClasses} ${sizeClasses} ${widthClass} ${className}`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </motion.a>
    );
  }
  
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Link
        to={to}
        className={`${baseClasses} ${variantClasses} ${sizeClasses} ${widthClass} ${className}`}
        {...props}
      >
        {children}
      </Link>
    </motion.div>
  );
};