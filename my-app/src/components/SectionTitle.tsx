import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
  centered?: boolean;
  subtitle?: string;
}

export default function SectionTitle({
  children,
  as: Component = 'h2',
  className = '',
  centered = false,
  subtitle,
}: SectionTitleProps) {
  const alignmentClasses = centered ? 'text-center' : '';
  const combinedClasses = `relative pb-4 mb-8 ${alignmentClasses} ${className}`.trim();

  return (
    <div className={combinedClasses}>
      <Component className="text-3xl md:text-4xl font-bold text-brand-primary">
        {children}
      </Component>
      {subtitle && (
        <p className="mt-2 text-md md:text-lg text-brand-slate">
          {subtitle}
        </p>
      )}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-brand-primary rounded-full" />
    </div>
  );
}