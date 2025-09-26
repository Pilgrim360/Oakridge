import Image from "next/image";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center py-20 bg-gray-50">
      <div className="text-center max-w-2xl px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Oakridge
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          We provide consulting services that help your business thrive.
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="/services"
            className="px-6 py-3 bg-brand-blue text-white rounded-lg hover:bg-brand-gold transition"
          >
            Explore Services
          </a>
          <a
            href="/contact"
            className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-200 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
