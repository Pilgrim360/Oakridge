import React from 'react';
import SectionWrapper from './SectionWrapper';
import SectionTitle from './SectionTitle';

export default function Overview() {
  return (
    <SectionWrapper className="bg-brand-off-white py-16">
      <div className="max-w-4xl mx-auto">
        <SectionTitle centered subtitle="Expert Accounting and Business Advisory">
          About Oakridge
        </SectionTitle>
        <div className="prose prose-lg mx-auto text-center">
          <p className="text-brand-charcoal text-lg leading-relaxed mb-6">
            At Oakridge, we specialize in comprehensive accounting and business advisory services
            designed to help organizations of all sizes achieve their financial goals. Our expertise
            spans across multiple service areas including tax planning and compliance, financial
            statement preparation, bookkeeping and payroll services, and strategic business consulting.
          </p>
          <p className="text-brand-charcoal text-lg leading-relaxed mb-6">
            We pride ourselves on our specialization in small to medium-sized enterprises, offering
            personalized solutions that address the unique challenges faced by growing businesses.
            Our team combines deep industry knowledge with cutting-edge technology to deliver
            accurate, timely, and actionable financial insights.
          </p>
          <p className="text-brand-charcoal text-lg leading-relaxed">
            Whether you need assistance with regulatory compliance, financial forecasting, cash flow
            management, or strategic tax planning, Oakridge provides the expertise and dedication
            to support your organization's financial health and growth objectives.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}