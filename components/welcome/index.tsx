import { useRouter } from "next/navigation";
import {
  Container,
  Text,
  Title,
  Space,
  Group,
  ActionIcon
} from "@mantine/core";

import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter
} from "@tabler/icons-react";

export function Welcome() {
  const router = useRouter();

  return (
    <Container size="xl" py="xl">
      <Text fz="xl">Hey there! 👋</Text>
      <Title order={1}>I'm Derek Ma</Title>
      <Title order={3}>Software Engineer and Student at UC Davis</Title>
      <Space h="md" />
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
      <Space h="xl" />
      <Text>Hello</Text>
    </Container>
  );
}
