import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "theme-bg": "url('/image/bg.png')",
      },
      fontFamily: {
        poppins: ['var(--poppins)'],
        urbanist: ['var(--urbanist)'],
        bricolage: ['"Bricolage Grotesque"', 'sans-serif'],
      },
      colors: {
        "theme-first-color-alt": "#2B1712",
        "theme-first-color": "#492D26",
        "theme-first-color-light": "#65463E",
        "theme-second-color": "#DDB66F",
        "theme-title-color": "#2E2624",
        "theme-text-color": "#5B4C48",
        "theme-text-color-light": "#847571",
        "main" : "#F5EDD9",
        "blue":"#06B5C5",
        "orange" : "#CC6B49",
        "yellow" : "#E5A632",
        "red": "#981D26",
      },
      boxShadow: {
        "btn-shadow": " 0px 8px 32px 0px rgba(221, 183, 112, 0.25)",
        "btn-shadow-2": "0px 8px 24px 0px rgba(27, 17, 14, 0.50)",
      }

    },
  },
  plugins: [],
};
export default config;
