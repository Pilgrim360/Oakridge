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
        'brand-blue': '#1e40af', // Professional blue
        'brand-gold': '#fbbf24', // Gold accent
      },
    }, // Add custom theme settings here (e.g., colors, fonts) if needed
  },
  plugins: [], // Add plugins like @tailwindcss/forms if needed
}