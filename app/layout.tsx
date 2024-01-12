import type { Metadata } from "next";
import localFont from "next/font/local";
import { MantineProvider, ColorSchemeScript, createTheme } from "@mantine/core";
import "@mantine/core/styles.css";

export const metadata: Metadata = {
  title: "Derek Ma"
};

const sfRegular = localFont({
  src: "../public/fonts/SF-Pro-Rounded-Regular.woff2"
});
const sfBold = localFont({
  src: "../public/fonts/SF-Pro-Rounded-Bold.woff2"
});

const theme = createTheme({
  colors: {
    gray: [
      "#FFFFFF",
      "#EFEFEF",
      "#D7D7D7",
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

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
