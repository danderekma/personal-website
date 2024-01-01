import { useState } from "react";
import { AppShell, Stack, Space, Text, Image, NavLink } from "@mantine/core";
import NextImage from "next/image";

import { IconHome, IconFolder, IconPhone } from "@tabler/icons-react";

import ProfilePicLight from "@/public/images/profile-pic-light.webp";

const data = [
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

export default function Navbar() {
  const [active, setActive] = useState(0);

  return (
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
        {data.map((link, index) => (
          <NavLink
            key={link.label}
            active={index === active}
            leftSection={link.icon}
            label={
              <Text fz="xl" fw={active === index ? "bold" : "normal"}>
                {link.label}
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
      </Stack>
    </AppShell.Navbar>
  );
}
