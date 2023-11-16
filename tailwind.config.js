/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#39425e",
        secondary: "#8C98BA",
        tertiary: "#FFAF38",
        white_transparant: "rgba(255,255,255,0.95)",
        white_transparant_max: "rgba(255,255,255,0.40)",
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
        "hero-Image": "url('./assets/herobg.png')",
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
