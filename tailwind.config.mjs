import { transform } from "typescript";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "gray-bg": "#21272E"
      },
      keyframes: {
        appear: {
          "0%": {
            opacity: 0,
            top: "1rem"
          },
          "100%": {
            opacity: 1,
            top: "0rem"
          }
        }
      },
      animation: {
        appear: "appear 0.5s ease-in-out"
      }
    }
  },
  plugins: [require("@tailwindcss/typography")]
};
