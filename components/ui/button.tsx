import React from 'react';
import { cn } from './container';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'gold' | 'espresso' | 'outline' | 'ghost' | 'telegram' | 'instagram';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'gold',
      size = 'md',
      fullWidth = false,
      className,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium tracking-luxury transition-all duration-300 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] select-none';

    const variantStyles = {
      gold: 'bg-gold text-espresso-950 hover:bg-gold-dark hover:shadow-luxury-gold shadow-sm font-semibold',
      espresso:
        'bg-espresso-800 text-champagne-100 hover:bg-espresso-900 hover:shadow-luxury',
      outline:
        'border border-espresso-800/30 text-espresso-900 hover:bg-espresso-900 hover:text-champagne-100 hover:border-transparent',
      ghost: 'text-espresso-800 hover:bg-champagne-200/70',
      telegram:
        'bg-[#2AABEE] text-white hover:bg-[#229ED9] shadow-sm hover:shadow-md font-semibold',
      instagram:
        'bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white hover:opacity-95 shadow-sm font-semibold',
    };

    const sizeStyles = {
      sm: 'text-xs uppercase px-4 py-2',
      md: 'text-xs md:text-sm uppercase px-6 py-3',
      lg: 'text-sm uppercase px-8 py-4',
    };

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          fullWidth && 'w-full',
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
