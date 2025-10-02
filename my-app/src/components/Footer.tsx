// src/components/Footer.tsx
import Link from "next/link";
import { Linkedin, Twitter, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal border-t border-brand-slate">
      {/* Top Section: Four Columns */}
      <div className="mx-auto max-w-7xl px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-brand-slate">
        {/* Overview/About */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">About Oakridge</h3>
          <p className="text-sm text-brand-light-steel">
            Oakridge is a professional accounting firm dedicated to providing expert financial guidance and business solutions for organizations of all sizes.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="https://linkedin.com/company/oakridge" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5 text-brand-silver hover:text-brand-primary transition" />
            </a>
            <a href="https://twitter.com/oakridge" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Twitter className="w-5 h-5 text-brand-silver hover:text-brand-primary transition" />
            </a>
            <a href="https://github.com/oakridge" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="w-5 h-5 text-brand-silver hover:text-white transition" />
            </a>
          </div>
        </div>
        {/* Expertise */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Expertise</h3>
          <ul className="text-sm text-brand-light-steel space-y-2">
            <li>Audit & Assurance</li>
            <li>Tax Consulting</li>
            <li>Business Advisory</li>
            <li>Financial Reporting</li>
          </ul>
        </div>
        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Resources</h3>
          <ul className="text-sm text-brand-light-steel space-y-2">
            <li><Link href="/blog" className="hover:text-white transition">Blog</Link></li>
            <li><Link href="/faq" className="hover:text-white transition">FAQs</Link></li>
            <li><Link href="/case-studies" className="hover:text-white transition">Case Studies</Link></li>
            <li><Link href="/careers" className="hover:text-white transition">Careers</Link></li>
          </ul>
        </div>
        {/* Contact/Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Contact & Legal</h3>
          <ul className="text-sm text-brand-light-steel space-y-2">
            <li><Link href="/contact" className="hover:text-white transition">Contact Us</Link></li>
            <li><Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-white transition">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
      {/* Bottom Section: Copyright & Links */}
      <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-brand-silver">
          © {new Date().getFullYear()} Oakridge. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm text-brand-silver">
          <Link href="/privacy" className="hover:text-white transition">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-white transition">
            Terms
          </Link>
          <Link href="/contact" className="hover:text-white transition">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
