import type { Metadata } from "next";
import { MantineProvider, ColorSchemeScript, createTheme } from "@mantine/core";
import "@mantine/core/styles.css";

export const metadata: Metadata = {
  title: "Derek Ma"
};

const theme = createTheme({});

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
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
