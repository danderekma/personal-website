import {
  Container,
  Title,
  Grid,
  TextInput,
  Textarea,
  Space,
  Button
} from "@mantine/core";

import styles from "./Contact.module.css";

export function Contact() {
  return (
    <Container py="sm">
      <Title order={2}>Contact Me</Title>
      <Space h="lg" />
      <Grid>
        <Grid.Col span={3}>
          <TextInput
            classNames={{
              input: styles["TextInput-input"]
            }}
            variant="filled"
            label="Name"
            placeholder="Enter here"
            c="dimmed"
            radius="md"
          />
        </Grid.Col>
        <Grid.Col span={3}>
          <TextInput
            classNames={{
              input: styles["TextInput-input"]
            }}
            variant="filled"
            label="Email"
            placeholder="Enter here"
            c="dimmed"
            radius="md"
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <TextInput
            classNames={{
              input: styles["TextInput-input"]
            }}
            variant="filled"
            label="Subject"
            placeholder="Enter here"
            c="dimmed"
            radius="md"
          />
        </Grid.Col>
        <Grid.Col span={12}>
          <Textarea
            classNames={{
              input: styles["Textarea-input"]
            }}
            variant="filled"
            label="Subject"
            placeholder="Enter here"
            c="dimmed"
            radius="md"
            rows={4}
          />
        </Grid.Col>
        <Grid.Col span={2} offset={10}>
          <Button variant="light" radius="md" fullWidth>
            Submit
          </Button>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
