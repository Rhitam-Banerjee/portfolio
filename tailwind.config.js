/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#ACC5C5",
        secondary: "#588B8B",
      },
      boxShadow: {
        card: "",
      },
      screens: {
        xs: { max: "450px" },
        sm: { max: "640px" },
      },
      backgroundImage: {
        "hero-Image": "url('')",
      },
    },
  },
  plugins: [],
};
