const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "grid-lg": "url('../assets/svgs/bg-grid-lg.svg')",
        "grid-sm": "url('../assets/svgs/bg-grid-sm.svg')"
      },
      fontFamily: {
        "sf-bold": ["SF Pro Rounded Bold", ...defaultTheme.fontFamily.sans],
        "sf-regular": [
          "SF Pro Rounded Regular",
          ...defaultTheme.fontFamily.sans
        ],
        "sf-light": ["SF Pro Rounded Light", ...defaultTheme.fontFamily.sans],
        "sf-thin": ["SF Pro Rounded Thin", ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: []
};
