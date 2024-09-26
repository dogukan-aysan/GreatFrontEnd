/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./_components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      boxShadow: {
        innerBorder: "0 0 0 1px #E6E6E6",
        innerBorderDisabled: "0 0 0 1px #F5F5F5",
        innerBorderTop: "inset 0 1px 0 0 #E6E6E6",
        badge: "0 1px 3px 0 rgba(0, 0 , 0, .1), 0 1px 2px 0 rgba(0, 0 , 0, .06)",
      },
    },
  },
  plugins: [],
};
