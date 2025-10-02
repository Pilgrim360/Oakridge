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
        'brand-blue': '#1f4ed8', // primary
        'brand-gold': '#f59e0b', // accent
        'muted': '#6b7280',
      },
    }, // Add custom theme settings here (e.g., colors, fonts) if needed
  },
  plugins: [], // Add plugins like @tailwindcss/forms if needed
}