/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0D9488", // teal-600
          dark: "#14B8A6",    // teal-500
          light: "#CCFBF1",   // teal-100
        },
        secondary: {
          DEFAULT: "#0F172A", // slate-900
          light: "#1E293B",   // slate-800
          accent: "#22C55E",  // green-500
        },
        accent: "#F59E0B",    // amber-500
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'premium': '0 10px 30px -10px rgba(0, 0, 0, 0.1)',
        'premium-dark': '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
}



