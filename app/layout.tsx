import type { Metadata } from "next";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";

import { theme } from "@/theme";
import styles from "./layout.module.css";
import "@mantine/core/styles.css";

export const metadata: Metadata = {
  title: "Derek Ma"
};

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
      <body className={styles["body"]}>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
