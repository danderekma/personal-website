import { useState } from "react";
import { AppShell, Stack, Space, Text, Image, NavLink } from "@mantine/core";
import NextImage from "next/image";

import { IconHome, IconFolder, IconPhone } from "@tabler/icons-react";

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
            color="dark"
            styles={{
              root: {
                borderRadius: 12
              }
            }}
          />
        ))}
      </Stack>
    </AppShell.Navbar>
  );
}
