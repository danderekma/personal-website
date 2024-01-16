import { Container, Title, Grid, TextInput, Space } from "@mantine/core";

import styles from "./Contact.module.css";

export function Contact() {
  return (
    <Container py="sm">
      <Title order={2}>Contact Me</Title>
      <Space h="lg" />
      <Grid columns={4}>
        <Grid.Col span={1}>
          <TextInput
            classNames={{
              input: styles["TextInput-input"]
            }}
            variant="filled"
            label="Name"
            placeholder="Enter here"
          />
        </Grid.Col>
        <Grid.Col span={1}>
          <TextInput
            classNames={{
              input: styles["TextInput-input"]
            }}
            variant="filled"
            label="Email"
            placeholder="Enter here"
          />
        </Grid.Col>
        <Grid.Col span={2}>
          <TextInput
            classNames={{
              input: styles["TextInput-input"]
            }}
            variant="filled"
            label="Subject"
            placeholder="Enter here"
          />
        </Grid.Col>
      </Grid>
    </Container>
  );
}
