"use client";

import { AppShell } from "@mantine/core";

import { Navbar, Welcome } from "@/components";

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
        <AppShell.Main>
          <Welcome />
        </AppShell.Main>
      </AppShell>
    </main>
  );
}
