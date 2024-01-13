import { createTheme } from "@mantine/core";
import localFont from "next/font/local";

const sfRegular = localFont({
  src: "./public/fonts/SF-Pro-Rounded-Regular.woff2"
});
const sfBold = localFont({
  src: "./public/fonts/SF-Pro-Rounded-Bold.woff2"
});

export const theme = createTheme({
  colors: {
    gray: [
      "#FFFFFF",
      "#EFEFEF",
      "#E5E5E5",
      "#BFBFBF",
      "#A7A7A7",
      "#8F8F8F",
      "#787878",
      "#606060",
      "#484848",
      "#303030",
      "#181818"
    ],
    dark: [
      "#E8E9EA",
      "#D1D3D4",
      "#BBBCBF",
      "#A4A6A9",
      "#8D9094",
      "#767A7E",
      "#5F6469",
      "#494D53",
      "#21272E",
      "#1B2128"
    ]
  },
  fontFamily: sfRegular.style.fontFamily,
  headings: {
    fontFamily: sfBold.style.fontFamily,
    fontWeight: "normal"
  }
});
