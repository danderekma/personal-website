import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { remarkReadingTime } from "./remark-reading-time.mjs";
import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon()],
  output: "static",
  adapter: vercel(),
  markdown: {
    remarkPlugins: [remarkReadingTime]
  }
});
