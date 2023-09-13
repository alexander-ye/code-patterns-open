import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx({
      optimize: false,
      extendMarkdownConfig: false,
      customComponentNames: ["pre"],
    }),
    react({ experimentalReactChildren: true }),
  ],
});
