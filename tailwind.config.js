/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        fullHD: { raw: "(min-width: 1900px)" },
      },
    },
  },
  plugins: [],
};
