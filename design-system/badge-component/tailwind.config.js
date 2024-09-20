/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./_components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        badges: "repeat(3, minmax(0, auto))",
      },
      boxShadow: {
        badgeInnerBorder: "0 0 0 1px",
      },
    },
  },
  plugins: [],
};
