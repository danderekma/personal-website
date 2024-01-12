"use client";

import {
  useMantineColorScheme,
  AppShell,
  Flex,
  ActionIcon
} from "@mantine/core";

import { IconSun, IconMoonStars } from "@tabler/icons-react";

import { Navbar, Welcome, Projects } from "@/components";

import styles from "./page.module.css";

export default function Home() {
  const { toggleColorScheme } = useMantineColorScheme();

  return (
    <main>
      <AppShell
        navbar={{
          width: 300,
          breakpoint: "sm"
        }}
        padding="md"
      >
        <Navbar />
        <AppShell.Main className={styles["appshell-main"]}>
          <Flex justify="end">
            <ActionIcon size="xl" variant="subtle" onClick={toggleColorScheme}>
              <IconSun className={styles["light"]} />
              <IconMoonStars className={styles["dark"]} />
            </ActionIcon>
          </Flex>
          <Welcome />
          <Projects />
        </AppShell.Main>
      </AppShell>
    </main>
  );
}
