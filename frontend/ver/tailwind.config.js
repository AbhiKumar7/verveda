// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          100: "#DDE4DB",
          200: "#C7D0C4",
          300: "#AAB5A9",
          400: "#7D897D",
          500: "#5B675B",
        },
        gold: {
          100: "#D8C8A5",
          200: "#C4B28A",
          300: "#9A8455",
          400: "#7D683C",
          500: "#6A5732",
        },
        ivory: "#F8F6F2",
        charcoal: "#2E2E2E",
      },
      fontFamily: {
        serif: ['EB Garamond', 'serif'],
        sans: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}