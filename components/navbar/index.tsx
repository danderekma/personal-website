import { useState } from "react";
import {
  AppShell,
  Stack,
  Space,
  Text,
  Image,
  NavLink,
  Group,
  ActionIcon
} from "@mantine/core";
import NextImage from "next/image";

import {
  IconHome,
  IconFolder,
  IconPhone,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter
} from "@tabler/icons-react";

import ProfilePicLight from "@/public/images/profile-pic-light.webp";

import { NavItem } from "./types";

const navItems: NavItem[] = [
  {
    icon: <IconHome />,
    label: "Home"
  },
  {
    icon: <IconFolder />,
    label: "Projects"
  },
  {
    icon: <IconPhone />,
    label: "Contact"
  }
];

export function Navbar() {
  const [active, setActive] = useState(0);

  return (
    <AppShell.Navbar p="lg" withBorder={false}>
      <Stack h="100%" align="center" gap="xs">
        <Space h="md" />
        <Image
          component={NextImage}
          src={ProfilePicLight}
          alt="profile-pic-light.webp"
          w="60%"
          radius="100%"
        />
        <Space h="lg" />
        {navItems.map((item, index) => (
          <NavLink
            key={item.label}
            active={index === active}
            leftSection={item.icon}
            label={
              <Text fz="lg" fw={active === index ? "bold" : "normal"}>
                {item.label}
              </Text>
            }
            onClick={() => setActive(index)}
            styles={{
              root: {
                borderRadius: 12
              }
            }}
          />
        ))}
        <Space m="auto" />
        <Group gap="xs">
          <ActionIcon
            variant="transparent"
            color="dark"
            onClick={() =>
              router.push(
                "https://www.facebook.com/profile.php?id=100010707514748"
              )
            }
          >
            <IconBrandFacebook />
          </ActionIcon>
          <ActionIcon
            variant="transparent"
            color="dark"
            onClick={() => router.push("https://www.instagram.com/danderekma/")}
          >
            <IconBrandInstagram />
          </ActionIcon>
          <ActionIcon variant="transparent" color="dark">
            <IconBrandGithub />
          </ActionIcon>
          <ActionIcon variant="transparent" color="dark">
            <IconBrandLinkedin />
          </ActionIcon>
          <ActionIcon variant="transparent" color="dark">
            <IconBrandTwitter />
          </ActionIcon>
        </Group>
        <Space h="md" />
      </Stack>
    </AppShell.Navbar>
  );
}
