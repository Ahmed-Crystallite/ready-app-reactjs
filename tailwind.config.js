/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "0.5rem",
        screens: {
          "xs": { "max": "575px" },
          "sm": "576px",
          "md": "768px",
          "lg": "992px",
          "xl": "1200px",
          "2xl": "1400px",
        },
      },
      screens: {
        "xs": { "max": "575px" },
        "sm": "576px",
        "md": "768px",
        "lg": "992px",
        "xl": "1200px",
        "2xl": "1400px",
      },
      fontFamily: {
        sans: ["var(--font-primary)", "sans-serif"],
      },
      colors:{
        "primary" : "#0165FC",
        "secondary" : "#73858F",
        "orange" : "#FDC603"
      }
    },
  },
  plugins: [],
}