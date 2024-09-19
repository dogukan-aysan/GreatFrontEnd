/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./_components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      boxShadow: {
        button:
          "0px 1px 2px 0px rgba(0,0,0,0.06), 0px 1px 3px 0px rgba(0,0,0,0.1), inset 0.5px 0.5px 0px 0px rgba(230,230,230,1), inset -0.5px -0.5px 0px 0px rgba(230,230,230,1);",
        swatche: "0 0 0 1px #444CE7",
      },
    },
  },
  plugins: [],
};
