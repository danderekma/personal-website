import {
  Container,
  Title,
  SimpleGrid,
  Space,
  Image,
  Flex
} from "@mantine/core";
import { useRouter } from "next/navigation";
import NextImage from "next/image";

import { Card } from "./card/Card";

import AggieExplorer from "@/public/images/aggie-explorer.jpeg";
import NVSI from "@/public/images/nvsi.svg";
import TrainingTool from "@/public/images/training-tool.svg";

import styles from "./Projects.module.css";

export function Projects() {
  const router = useRouter();

  return (
    <Container py="sm">
      <Title order={2}>Projects</Title>
      <Space h="lg" />
      <SimpleGrid
        cols={{
          base: 1,
          xs: 2
        }}
        spacing="xl"
      >
        <Card
          name="AggieExplorer"
          description="A full-stack web application developed to provide grading distributions and enrollment statistics for UC Davis students."
          image={
            <Image
              className={styles["image"]}
              component={NextImage}
              src={AggieExplorer}
              alt="aggie-explorer.jpeg"
              h={250}
              fit="cover"
              radius="lg"
              onClick={() =>
                router.push(
                  "https://codelabdavis.medium.com/aggieexplorer-605c9d67965c"
                )
              }
            />
          }
        />
        <Card
          name="UC Davis New Vietnam Studies Initiative"
          description="A landing page for the New Vietnam Studies Initiative at UC Davis created with Next.js."
          image={
            <Image
              className={styles["image"]}
              component={NextImage}
              src={NVSI}
              alt="nvsi.svg"
              h={250}
              fit="cover"
              radius="lg"
              onClick={() => router.push("https://newvietnam.ucdavis.edu")}
            />
          }
        />
        <Card
          name="CodeLab Training Tool"
          description="An internal training tool that allows associates to create and consume educational material and track personal progress."
          image={
            <Flex
              bg="white"
              h={250}
              justify="center"
              align="center"
              styles={{
                root: {
                  borderRadius: "var(--mantine-radius-lg)"
                }
              }}
            >
              <Image
                className={styles["image"]}
                component={NextImage}
                src={TrainingTool}
                alt="training-tool.svg"
                onClick={() =>
                  router.push(
                    "https://codelabdavis.medium.com/training-tool-a547c6d311a0"
                  )
                }
              />
            </Flex>
          }
        />
      </SimpleGrid>
    </Container>
  );
}
