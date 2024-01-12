import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  AppShell,
  Stack,
  Space,
  Text,
  Image,
  NavLink,
  Group,
  ActionIcon,
  CloseButton
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
import ProfilePicDark from "@/public/images/profile-pic-dark.webp";

import { NavItem } from "./types";

import styles from "./Navbar.module.css";

const data: NavItem[] = [
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

type Props = {
  toggle: () => void;
};

export function Navbar({ toggle }: Props) {
  const [active, setActive] = useState(0);
  const router = useRouter();

  return (
    <AppShell.Navbar className={styles["navbar"]} p="lg" withBorder={false}>
      <Stack h="100%" align="center" gap="xs">
        <CloseButton
          size="lg"
          variant="transparent"
          hiddenFrom="sm"
          ml="auto"
          onClick={toggle}
        />
        <Space h="md" />
        <Image
          className={styles.dark}
          component={NextImage}
          src={ProfilePicDark}
          alt="profile-pic-dark.webp"
          w="60%"
          radius="100%"
        />
        <Image
          className={styles.light}
          component={NextImage}
          src={ProfilePicLight}
          alt="profile-pic-light.webp"
          w="60%"
          radius="100%"
        />
        <Space h="lg" />
        {data.map((item, index) => (
          <NavLink
            className={styles["navlink"]}
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
          <ActionIcon
            variant="transparent"
            color="dark"
            onClick={() => router.push("https://github.com/danderekma")}
          >
            <IconBrandGithub />
          </ActionIcon>
          <ActionIcon
            variant="transparent"
            color="dark"
            onClick={() =>
              router.push("https://www.linkedin.com/in/danderekma/")
            }
          >
            <IconBrandLinkedin />
          </ActionIcon>
          <ActionIcon
            variant="transparent"
            color="dark"
            onClick={() => router.push("https://twitter.com/danderekma")}
          >
            <IconBrandTwitter />
          </ActionIcon>
        </Group>
        <Space h="md" />
      </Stack>
    </AppShell.Navbar>
  );
}
