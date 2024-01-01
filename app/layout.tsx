import localFont from "next/font/local";
import type { Metadata } from "next";
import { MantineProvider, ColorSchemeScript, createTheme } from "@mantine/core";
import "@mantine/core/styles.css";

export const metadata: Metadata = {
  title: "Derek Ma"
};

const sfRegular = localFont({
  src: "../public/fonts/SF-Pro-Rounded-Regular.woff2"
});

const theme = createTheme({
  primaryColor: "dark",
  fontFamily: sfRegular.style.fontFamily,
  colors: {
    "light-gray": [
      "#f5f5f5",
      "#e7e7e7",
      "#cdcdcd",
      "#b2b2b2",
      "#9a9a9a",
      "#8b8b8b",
      "#848484",
      "#717171",
      "#656565",
      "#575757"
    ]
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
