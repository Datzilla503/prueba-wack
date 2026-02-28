/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A',  // Blue
        secondary: '#EAB308',  // Yellow
        accent: '#FACC15',     // Amber
        background: '#1F1F1F', // Dark background
        surface: '#2B2B2B',    // Surface gray
        error: '#DC2626',      // Red
        success: '#4ADE80',    // Green
        warning: '#FBBF24',    // Orange
      },
    },
  },
  plugins: [],
};