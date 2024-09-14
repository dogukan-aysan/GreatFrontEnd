/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./_components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {},
      boxShadow: {
        swatche: "0 0 0 1px #444CE7",
        selectedImage: "inset 3px 3px 0px 0px rgba(79,70,229,1), inset -3px -3px 0px 0px rgba(79,70,229,1)",
      },
    },
  },
  plugins: [],
};
