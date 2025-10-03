import React from 'react';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

export default function SectionWrapper({ 
  children, 
  className = "", 
  containerClassName = "container mx-auto px-4 py-8" 
}: SectionWrapperProps) {
  return (
    <section className={className}>
      <div className={containerClassName}>
        {children}
      </div>
    </section>
  );
}