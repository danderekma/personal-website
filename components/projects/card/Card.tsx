import { Title, Text, Grid } from "@mantine/core";

import { Props } from "./types";

import styles from "./Card.module.css";

export function Card({ name, description, image }: Props) {
  return (
    <Grid className={styles["Grid-root"]} columns={5} align="center">
      <Grid.Col span={{ base: 5, lg: 2 }}>{image}</Grid.Col>
      <Grid.Col span={{ base: 5, lg: 3 }} p="xl">
        <Title order={3} mb={5}>
          {name}
        </Title>
        <Text c="dimmed">{description}</Text>
      </Grid.Col>
    </Grid>
  );
}
