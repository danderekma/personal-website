"use client";

import { useRouter } from "next/navigation";
import {
  useMantineColorScheme,
  AppShell,
  Flex,
  ActionIcon,
  Space
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import {
  IconSun,
  IconMoonStars,
  IconBrandGithub,
  IconMenu2
} from "@tabler/icons-react";

import { Navbar, Welcome, Projects } from "@/components";

import styles from "./page.module.css";

export default function Home() {
  const { toggleColorScheme } = useMantineColorScheme();
  const [opened, { toggle }] = useDisclosure();
  const router = useRouter();

  return (
    <main>
      <AppShell
        navbar={{
          width: 300,
          breakpoint: "sm",
          collapsed: { mobile: !opened }
        }}
        padding="md"
      >
        <Navbar toggle={toggle} />
        <AppShell.Main className={styles["appshell-main"]}>
          <Flex justify="end" gap="sm">
            <ActionIcon
              size="xl"
              color="dark"
              variant="transparent"
              mr="auto"
              hiddenFrom="sm"
              onClick={toggle}
            >
              <IconMenu2 />
            </ActionIcon>
            <ActionIcon
              className={styles["action-icon"]}
              size="xl"
              variant="default"
              onClick={() =>
                router.push("https://github.com/danderekma/personal-website")
              }
            >
              <IconBrandGithub />
            </ActionIcon>
            <ActionIcon
              className={styles["action-icon"]}
              size="xl"
              variant="default"
              onClick={toggleColorScheme}
            >
              <IconSun className={styles["light"]} />
              <IconMoonStars className={styles["dark"]} />
            </ActionIcon>
          </Flex>
          <Welcome />
          <Space h="xl" />
          <Projects />
        </AppShell.Main>
      </AppShell>
    </main>
  );
}
