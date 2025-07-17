import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  variant?: 'default' | 'bordered' | 'elevated';
}

export const Card = ({ children, className = '', ...props }: CardProps) => (
  <div className={`rounded-2xl bg-white/80 backdrop-blur-md shadow-md border border-[var(--color-gray-200)] p-6 ${className}`} {...props}>
    {children}
  </div>
);

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export const CardHeader: React.FC<CardHeaderProps> = ({
  children,
  className = ''
}) => {
  return (
    <div className={`mb-4 ${className}`}>
      {children}
    </div>
  );
};

interface CardBodyProps {
  children: React.ReactNode;
  className?: string;
}

export const CardBody: React.FC<CardBodyProps> = ({
  children,
  className = ''
}) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

export const CardFooter: React.FC<CardFooterProps> = ({
  children,
  className = ''
}) => {
  return (
    <div className={`mt-4 ${className}`}>
      {children}
    </div>
  );
}; 