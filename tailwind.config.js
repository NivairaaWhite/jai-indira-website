/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F7F5EE",
        ink: "#171A18",
        forest: "#173B2B",
        leaf: "#2E6547",
        sand: "#E9E4D7",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        soft: "0 12px 40px -16px rgba(23, 26, 24, 0.12)",
        card: "0 8px 28px -12px rgba(23, 26, 24, 0.1)",
      },
    },
  },
  plugins: [],
};
