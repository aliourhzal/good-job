import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "normal-shadow": "-3px -3px 14px -8px #f6fbff, 3px 3px 9px -6px #000000",
        "hover-shadow": "inset -1px -1px 6px -3px #f6fbff, inset 1px 1px 6px -3px #000000"
      },
      colors: {
        "dark-blue": "#043c5b",
        "light-white": "#f6fbff",
        "steel-blue": "#417c9c",
        "hover-orange": "#c9591c",
        "text-orange": "#c34d27"
      }
    }
  },
  plugins: [],
};
export default config;
