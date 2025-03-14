
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'gold';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

const Button = ({
  variant = 'primary',
  size = 'md',
  children,
  className,
  ...props
}: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-enactus-blue text-white hover:bg-blue-600 focus-visible:ring-blue-500",
    secondary: "bg-enactus-darkGray text-white hover:bg-[#394454] focus-visible:ring-enactus-darkGray",
    outline: "border border-enactus-gold text-enactus-gold hover:bg-enactus-yellow-light focus-visible:ring-enactus-gold",
    gold: "bg-enactus-gold text-white hover:bg-enactus-yellow-dark focus-visible:ring-enactus-gold",
  };
  
  const sizes = {
    sm: "h-9 px-3 text-sm",
    md: "h-10 px-5 py-2",
    lg: "h-12 px-8 py-3 text-lg",
  };

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
