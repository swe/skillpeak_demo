import React from 'react';

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
}

export const H1: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <h1 className={`text-5xl font-bold tracking-tight text-gray-900 ${className}`}>
    {children}
  </h1>
);

export const H2: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <h2 className={`text-4xl font-bold tracking-tight text-gray-900 ${className}`}>
    {children}
  </h2>
);

export const H3: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <h3 className={`text-3xl font-bold tracking-tight text-gray-900 ${className}`}>
    {children}
  </h3>
);

export const H4: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <h4 className={`text-2xl font-bold tracking-tight text-gray-900 ${className}`}>
    {children}
  </h4>
);

export const H5: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <h5 className={`text-xl font-bold tracking-tight text-gray-900 ${className}`}>
    {children}
  </h5>
);

export const H6: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <h6 className={`text-lg font-bold tracking-tight text-gray-900 ${className}`}>
    {children}
  </h6>
);

export const Paragraph: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <p className={`text-base text-gray-600 leading-relaxed ${className}`}>
    {children}
  </p>
);

export const Small: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <small className={`text-sm text-gray-500 ${className}`}>
    {children}
  </small>
);

export const Lead: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <p className={`text-xl text-gray-600 leading-relaxed ${className}`}>
    {children}
  </p>
);

export const Muted: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <p className={`text-sm text-gray-500 ${className}`}>
    {children}
  </p>
);

export const Blockquote: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <blockquote className={`border-l-4 border-gray-200 pl-4 italic text-gray-600 ${className}`}>
    {children}
  </blockquote>
);

export const Code: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <code className={`font-mono text-sm bg-gray-100 px-1 py-0.5 rounded ${className}`}>
    {children}
  </code>
);

export const Pre: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <pre className={`font-mono text-sm bg-gray-100 p-4 rounded-lg overflow-x-auto ${className}`}>
    {children}
  </pre>
); 