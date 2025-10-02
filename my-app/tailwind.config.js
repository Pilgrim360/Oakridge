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
        'brand-primary': '#006466',
        'brand-primary-dark': '#065A60',
        'brand-slate': '#415161',
        'brand-charcoal': '#2c3e50',
        'brand-light-steel': '#E2E7ED',
        'brand-silver': '#edeff2',
        'brand-off-white': '#f8f9fb',
      },
    }, // Add custom theme settings here (e.g., colors, fonts) if needed
  },
  plugins: [], // Add plugins like @tailwindcss/forms if needed
}