import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full py-20 bg-brand-off-white text-center">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-5xl font-bold mb-6 text-brand-primary">Welcome to Oakridge</h1>
        <p className="text-xl text-brand-charcoal mb-8">
          Professional accounting and business advisory services to help your organization thrive.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/services" className="btn-primary px-6 py-3 rounded-lg font-semibold">
            Explore Services
          </Link>
          <Link href="/contact" className="btn-secondary px-6 py-3 rounded-lg font-semibold">
            Contact Us
          </Link>
          <Link href="/blog" className="px-6 py-3 bg-brand-primary text-white rounded-lg font-semibold hover:bg-brand-primary-dark transition">
            Visit Our Blog
          </Link>
        </div>
      </div>
    </section>
  );
}