// src/components/Header.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // icon library (lucide-react is lightweight)

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-nav-bg text-nav-text shadow-sm">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        
        {/* Logo / Brand */}
        <Link href="/" className="text-xl font-bold text-nav-text">
          Oakridge
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-nav-text/90 hover:text-nav-text transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="rounded-lg bg-hero-cta px-4 py-2 text-hero-text font-medium hover:bg-hero-cta/90 transition-colors"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-nav-text"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="md:hidden bg-nav-bg text-nav-text shadow-md px-6 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-nav-text/90 hover:text-nav-text transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-lg bg-hero-cta px-4 py-2 text-hero-text font-medium hover:bg-hero-cta/90 transition-colors text-center"
            onClick={() => setIsOpen(false)}
          >
            Get Started
          </Link>
        </nav>
      )}
    </header>
  );
}
