"use client";

import { AppShell, NavLink, Stack, Image, Space, Title } from "@mantine/core";
import NextImage from "next/image";

import { IconHome, IconFolder } from "@tabler/icons-react";

import ProfilePicLight from "@/public/images/profile-pic-light.webp";

export default function Home() {
  return (
    <main>
      <AppShell
        navbar={{
          width: 300,
          breakpoint: "sm"
        }}
        padding="md"
      >
        <AppShell.Navbar p="lg" bg="light-gray.0" withBorder={false}>
          <Stack align="center" gap="xs">
            <Space h="lg" />
            <Image
              component={NextImage}
              src={ProfilePicLight}
              alt="profile-pic-light.webp"
              w="60%"
              radius="100%"
            />
            <Space h="lg" />
            <NavLink
              leftSection={<IconHome />}
              label="Home"
              styles={{
                root: {
                  borderRadius: 12
                }
              }}
            />
            <NavLink leftSection={<IconFolder />} label="Projects" />
          </Stack>
        </AppShell.Navbar>
        <AppShell.Main>Main</AppShell.Main>
      </AppShell>
    </main>
  );
}
