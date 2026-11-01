import React from 'react';
import { cn } from './container';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'cream' | 'champagne' | 'outline' | 'glass';
  children: React.ReactNode;
}

export function Card({
  variant = 'cream',
  className,
  children,
  ...props
}: CardProps) {
  const variantStyles = {
    cream: 'bg-cream border border-nude-200/60 shadow-luxury',
    champagne: 'bg-champagne-100 border border-nude-200/80 shadow-luxury',
    outline: 'bg-transparent border border-nude-300/70',
    glass: 'bg-cream/80 backdrop-blur-md border border-white/50 shadow-luxury',
  };

  return (
    <div
      className={cn(
        'rounded-2xl p-6 sm:p-8 transition-all duration-300',
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
