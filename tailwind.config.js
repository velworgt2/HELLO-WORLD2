/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-grays": "#131416",
      },

      screens: {
        tablet: "900px",
        table_md: "700px",
        phone: "550px",
      },
    },
  },
  plugins: [],
};
