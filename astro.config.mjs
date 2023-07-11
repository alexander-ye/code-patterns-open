import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import remarkToc from "remark-toc";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx({
      remarkPlugins: [remarkToc],
    }),
    react(),
  ],
  markdown: {
    // Applied to .md and .mdx files
    remarkPlugins: [remarkToc],
  },
});
