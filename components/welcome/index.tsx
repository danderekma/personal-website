import { Container, Text, Title, Space } from "@mantine/core";

export function Welcome() {
  return (
    <Container size="xl" py="xl">
      <Text fz="xl">Hey there! 👋</Text>
      <Title order={1}>I'm Derek Ma</Title>
      <Title order={3}>Software Engineer and Student at UC Davis</Title>
      <Space h="xl" />
      <Text>Hello</Text>
    </Container>
  );
}
