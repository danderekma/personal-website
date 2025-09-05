/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        "light-gray": "#21272E",
        "dark-gray": "#1B2128",
        "alabaster-white": "#FAFAFA"
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
