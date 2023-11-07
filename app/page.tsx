import dynamic from "next/dynamic";

import WelcomeLoading from "@/components/welcome/Loading";
const Welcome = dynamic(() => import("@/components/welcome"), {
  loading: () => <WelcomeLoading />,
  ssr: false
});

import Projects from "@/components/projects";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="bg-white bg-grid-sm-light bg-fixed bg-repeat transition-all dark:bg-gray dark:bg-grid-sm-dark sm:bg-grid-lg-light sm:dark:bg-grid-lg-dark">
      <Welcome />
      <Projects />
      <Contact />
      <footer className="w-full p-4 text-center font-sf-thin text-sm text-black/25 transition-all duration-100 dark:text-white/25 sm:text-base">
        Created with ❤️ by Derek Ma <br /> © 2023
      </footer>
    </main>
  );
}
