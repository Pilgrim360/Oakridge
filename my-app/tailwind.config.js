/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Scans App Router files
    './pages/**/*.{js,ts,jsx,tsx,mdx}', // Scans Pages Router files (if used)
    './components/**/*.{js,ts,jsx,tsx,mdx}', // Scans component files
    './src/**/*.{js,ts,jsx,tsx,mdx}', // Scans src directory (if used)
  ],
  theme: {
    extend: {
      colors: {
        // Legacy tokens (kept for backwards compatibility)
        'brand-blue': '#1f4ed8', // primary
        'brand-gold': '#f59e0b', // accent
        'muted': '#6b7280',
        // New palette tokens based on user's request
        'nav-bg': '#2c3e50',        // Header / Navbar background
        'nav-text': '#ffffff',      // Header text
        'hero-bg': '#006466',       // Hero background
        'hero-text': '#ffffff',     // Hero text
        'hero-cta': '#065A60',      // CTA button on hero
        'page-alt': '#f8f9fb',      // Alternate page section background
        'card-bg': '#edeff2',       // Cards / features background
        'card-text': '#415161',     // Cards / features text
        'footer-bg': '#2c3e50',     // Footer background
        'footer-text': '#E2E7ED',   // Footer light text
      },
    }, // Add custom theme settings here (e.g., colors, fonts) if needed
  },
  plugins: [], // Add plugins like @tailwindcss/forms if needed
}