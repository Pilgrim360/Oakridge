import React from 'react';
import SectionWrapper from '../../components/SectionWrapper';

export default function Services() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <SectionWrapper containerClassName="max-w-2xl w-full text-center py-8">
        <h1 className="text-4xl font-bold mb-6 text-brand-primary">Services</h1>
        <p className="text-lg mb-4 text-brand-charcoal">
          Welcome to the Services page. List and describe your core offerings here.
        </p>
        {/* Example service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow border border-brand-light-steel p-6">
            <h2 className="text-2xl font-semibold mb-2 text-brand-primary">Service One</h2>
            <p className="text-brand-charcoal">Description of Service One.</p>
          </div>
          <div className="bg-white rounded-lg shadow border border-brand-light-steel p-6">
            <h2 className="text-2xl font-semibold mb-2 text-brand-primary">Service Two</h2>
            <p className="text-brand-charcoal">Description of Service Two.</p>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}
