import React from 'react';

export default function Services() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-6">Services</h1>
      <section className="max-w-2xl w-full text-center">
        <p className="text-lg mb-4">
          Welcome to the Services page. List and describe your core offerings here.
        </p>
        {/* Example service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-2">Service One</h2>
            <p className="text-gray-700">Description of Service One.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-2">Service Two</h2>
            <p className="text-gray-700">Description of Service Two.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
