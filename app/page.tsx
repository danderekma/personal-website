"use client";

import { AppShell } from "@mantine/core";

import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main>
      <AppShell
        navbar={{
          width: 300,
          breakpoint: "sm"
        }}
        padding="md"
      >
        <Navbar />
        <AppShell.Main>Main</AppShell.Main>
      </AppShell>
    </main>
  );
}
