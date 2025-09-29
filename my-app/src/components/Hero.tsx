import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full py-20 bg-white text-center">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-5xl font-bold mb-6 text-gray-900">Welcome to Oakridge</h1>
        <p className="text-xl text-gray-700 mb-8">
          Professional accounting and business advisory services to help your organization thrive.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/services" className="px-6 py-3 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-800 transition">
            Explore Services
          </Link>
          <Link href="/contact" className="px-6 py-3 bg-gray-100 text-gray-900 rounded-lg font-semibold border hover:bg-gray-200 transition">
            Contact Us
          </Link>
          <Link href="/blog" className="px-6 py-3 bg-green-700 text-white rounded-lg font-semibold hover:bg-green-800 transition">
            Visit Our Blog
          </Link>
        </div>
      </div>
    </section>
  );
}