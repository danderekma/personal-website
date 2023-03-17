/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}"
    ],
    darkMode: "class",
    theme: {
        extend: {
            backgroundImage: {
                "grid-lg-light": "url('./public/svgs/bg-grid-lg-light.svg')",
                "grid-lg-dark": "url('./public/svgs/bg-grid-lg-dark.svg')",
                "grid-sm-light": "url('./public/svgs/bg-grid-sm-light.svg')",
                "grid-sm-dark": "url('./public/svgs/bg-grid-sm-dark.svg')"
            },
            fontFamily: {
                "sf-bold": [
                    "SF Pro Rounded Bold",
                    ...defaultTheme.fontFamily.sans
                ],
                "sf-regular": [
                    "SF Pro Rounded Regular",
                    ...defaultTheme.fontFamily.sans
                ],
                "sf-light": [
                    "SF Pro Rounded Light",
                    ...defaultTheme.fontFamily.sans
                ],
                "sf-thin": [
                    "SF Pro Rounded Thin",
                    ...defaultTheme.fontFamily.sans
                ]
            },
            colors: {
                "gray": "#24272E",
                "light-gray": "#EFEFEF",
                "dark-gray": "#1F2227"
            }
        }
    }
};
