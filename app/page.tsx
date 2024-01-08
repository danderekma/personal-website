"use client";

import {
  useMantineColorScheme,
  AppShell,
  Flex,
  ActionIcon
} from "@mantine/core";

import { IconSun, IconMoonStars } from "@tabler/icons-react";

import { Navbar, Welcome } from "@/components";
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
        <AppShell.Main>
          <Flex justify="end">
            <ActionIcon size="xl" variant="default" onClick={toggleColorScheme}>
              <IconSun className={styles.light} />
              <IconMoonStars className={styles.dark} />
            </ActionIcon>
          </Flex>
          <Welcome />
        </AppShell.Main>
      </AppShell>
    </main>
  );
}
