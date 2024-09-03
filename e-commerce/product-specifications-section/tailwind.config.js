/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./_components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "tab-default": "inset 0 1px 0 -1px #D4D4D4, inset 0 -1px 0 0 #D4D4D4",
        "tab-active": "inset 0 1px 0 -1px #4F46E5, inset 0 -1px 0 0 #4F46E5",
        "tab-active-hover/focus": "inset 0 1px 0 -1px #3730A3, inset 0 -1px 0 0 #3730A3",
      },
    },
  },
  plugins: [],
};
