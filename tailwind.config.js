/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#ACC5C5",
        secondary: "#588B8B",
        tertiary: "#FFAF38",
        white_transparant: "rgba(255,255,255,0.95)",
        primary_transparant: "rgba(172, 197, 197, 0.95)",
        primary_transparant_max: "rgba(172, 197, 197, 0.4)",
        secondary_transparant: "rgba(88, 139, 139, 0.95)",
        tertiary_transparant: "rgba(236, 148, 16, 0.95)",
      },
      boxShadow: {
        card: "",
      },
      screens: {
        xs: { max: "450px" },
        sm: { max: "640px" },
      },
      backgroundImage: {
        "hero-Image": "url('./src/assets/herobg.png')",
      },
      keyframes: {
        blink: {
          "0%,100%": { opacity: 0 },
          "50%": { opacity: 1 },
        },
      },
      animation: {
        blink: "blink 1s ease-in-out infinite 3.5s",
      },
    },
  },
  plugins: [],
};
