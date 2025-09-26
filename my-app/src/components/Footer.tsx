// src/components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-6 border-t">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Oakridge. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm text-gray-600">
          <Link href="/privacy" className="hover:text-gray-900">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-gray-900">
            Terms
          </Link>
          <Link href="/contact" className="hover:text-gray-900">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
