import { Container, Text, Title, Space } from "@mantine/core";

export function Welcome() {
  return (
    <Container py="sm">
      <Text fz="xl">Hey there! 👋</Text>
      <Title order={1}>I'm Derek Ma</Title>
      <Title order={3}>Software Engineer and Student at UC Davis</Title>
      <Space h="md" />
      <Text c="dimmed">
        I'm currently a third year undergraduate studying Computer Science at
        the University of California, Davis with interests in mobile and full
        stack web development.
      </Text>
    </Container>
  );
}
