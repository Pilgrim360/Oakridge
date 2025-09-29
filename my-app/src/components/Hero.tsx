import React from "react";

export default function Hero() {
  return (
    <section className="w-full py-20 bg-white text-center">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-5xl font-bold mb-6 text-gray-900">Welcome to Oakridge</h1>
        <p className="text-xl text-gray-700 mb-8">
          Professional accounting and business advisory services to help your organization thrive.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="/services" className="px-6 py-3 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-800 transition">
            Explore Services
          </a>
          <a href="/contact" className="px-6 py-3 bg-gray-100 text-gray-900 rounded-lg font-semibold border hover:bg-gray-200 transition">
            Contact Us
          </a>
          <a href="/blog" className="px-6 py-3 bg-green-700 text-white rounded-lg font-semibold hover:bg-green-800 transition">
            Visit Our Blog
          </a>
        </div>
      </div>
    </section>
  );
}
