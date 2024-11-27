/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode using class strategy
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: {
          50: "#F2F2F2", // Lightest shade (default)
          100: "#FFC8BA", // Specified lighter shade
          200: "#E5B8B0",
          300: "#D8A8A6",
          400: "#C8989C",
          500: "#B88892",
          600: "#A87888",
          700: "#98687E",
          800: "#886874",
          900: "#676561", // Middle shade
          950: "#39393A", // Darkest shade
        },
        accent: {
          50: "#FFF2F0", // Lightest shade (default)
          100: "#FFC8BA", // Specified lighter shade
          200: "#FFB8A5",
          300: "#FFA890",
          400: "#FF9880",
          500: "#FF8870", // Base color
          600: "#FF7860",
          700: "#FF6850",
          800: "#FF5840",
          900: "#FF4830",
          950: "#FF3820", // Darkest shade
        },
        neutral: {
          50: "#E0F7F6", // Lightest shade (default)
          100: "#C0EFEF",
          200: "#A0E7E7",
          300: "#80DFDF",
          400: "#60D7D7",
          500: "#40CFCF",
          600: "#20C7C7",
          700: "#00BFBF",
          800: "#00B7B7",
          900: "#03B5AA", // Middle shade
          950: "#00AFA0", // Darkest shade
        },
        highlight: {
          50: "#FFFDF2", // Lightest shade (default)
          100: "#FFFAE5",
          200: "#FFF5CC",
          300: "#FFF0B3",
          400: "#FFEB99",
          500: "#FFE680", // Base color
          600: "#FFE066",
          700: "#FFDB4D",
          800: "#FFD633",
          900: "#FFD11A",
          950: "#FFCC00", // Darkest shade
        },
      },
    },
  },
  plugins: [],
};
