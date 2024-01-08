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
  primaryShade: 5,
  fontFamily: sfRegular.style.fontFamily,
  headings: {
    fontFamily: sfBold.style.fontFamily
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
