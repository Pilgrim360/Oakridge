// src/components/Footer.tsx
import Link from "next/link";
import { Linkedin, Twitter, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="site-footer border-t border-gray-200">
      {/* Top Section: Four Columns */}
  <div className="mx-auto max-w-7xl px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-200">
        {/* Overview/About */}
        <div>
          <h3 className="text-lg font-semibold mb-3">About Oakridge</h3>
          <p className="text-sm">
            Oakridge is a professional accounting firm dedicated to providing expert financial guidance and business solutions for organizations of all sizes.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="https://linkedin.com/company/oakridge" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5 text-footer-text hover:text-white transition" />
            </a>
            <a href="https://twitter.com/oakridge" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Twitter className="w-5 h-5 text-footer-text hover:text-white transition" />
            </a>
            <a href="https://github.com/oakridge" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="w-5 h-5 text-footer-text hover:text-white transition" />
            </a>
          </div>
        </div>
        {/* Expertise */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Expertise</h3>
          <ul className="text-sm space-y-2">
            <li>Audit & Assurance</li>
            <li>Tax Consulting</li>
            <li>Business Advisory</li>
            <li>Financial Reporting</li>
          </ul>
        </div>
        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Resources</h3>
          <ul className="text-sm space-y-2">
            <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
            <li><Link href="/faq" className="hover:text-white">FAQs</Link></li>
            <li><Link href="/case-studies" className="hover:text-white">Case Studies</Link></li>
            <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
          </ul>
        </div>
        {/* Contact/Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact & Legal</h3>
          <ul className="text-sm space-y-2">
            <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
            <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
      {/* Bottom Section: Copyright & Links */}
      <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm">
          © {new Date().getFullYear()} Oakridge. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm">
          <Link href="/privacy" className="hover:text-white">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-white">
            Terms
          </Link>
          <Link href="/contact" className="hover:text-white">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
