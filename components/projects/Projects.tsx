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
import { IconScale } from "@tabler/icons-react";

import styles from "./Projects.module.css";

export function Projects() {
  const router = useRouter();

  return (
    <Container id="projects" py="sm">
      <Title order={2}>Projects</Title>
      <Space h="lg" />
      <SimpleGrid
        cols={{
          base: 1,
          xs: 2
        }}
        spacing="xl"
        verticalSpacing="xl"
      >
        <Card
          name="AggieExplorer"
          description="A full-stack web application developed to provide grading distributions and enrollment statistics for UC Davis students."
          image={
            <Image
              className={styles["Image-root"]}
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
              className={styles["Image-root"]}
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
              className={styles["Flex-root"]}
              bg="white"
              h={250}
              justify="center"
              align="center"
              onClick={() =>
                router.push(
                  "https://codelabdavis.medium.com/training-tool-a547c6d311a0"
                )
              }
            >
              <Image
                component={NextImage}
                src={TrainingTool}
                alt="training-tool.svg"
              />
            </Flex>
          }
        />
        <Card
          name="Balancing the Scale"
          description="A static web page dedicated to bringing about environmental awareness of modern artificial intelligence technologies."
          image={
            <Flex
              className={styles["Flex-root"]}
              bg="white"
              h={250}
              justify="center"
              align="center"
              onClick={() => router.push("https://balancingthescale.tech/")}
            >
              <IconScale color="black" size={72} />
            </Flex>
          }
        />
      </SimpleGrid>
    </Container>
  );
}
