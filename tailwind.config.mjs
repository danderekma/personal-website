/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "gray-bg": "#21272E"
      }
    }
  },
  plugins: [require("@tailwindcss/typography")]
};
