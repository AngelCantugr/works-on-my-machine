import path, { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import { defineConfig } from "astro/config";
import markdoc from "@astrojs/markdoc";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import remarkCodeTitles from "remark-code-titles";

// Full Astro Configuration API Documentation:
// https://docs.astro.build/reference/configuration-reference

// https://astro.build/config
export default defineConfig(
  /** @type {import('astro').AstroUserConfig} */ {
    output: "static",
    site: "https://blog.angelcantugr.dev", // Your public domain, e.g.: https://my-site.dev/. Used to generate sitemaps and canonical URLs.
    base: "/", // Use "/" for custom domains, not a subpath
    server: {
      // port: 4321, // The port to run the dev server on.
    },
    markdown: {
      syntaxHighlight: "shiki",
      shikiConfig: {
        theme: "css-variables",
      },
      remarkPlugins: [remarkCodeTitles],
    },
    integrations: [
      mdx(),
      markdoc(),
      svelte(),
      tailwind({
        applyBaseStyles: false,
      }),
      // sitemap disabled temporarily due to Deno compatibility issues
      // sitemap({
      //   filter: (page) => !page.includes('/drafts/')
      // }),
    ],
    vite: {
      plugins: [],
      resolve: {
        alias: {
          $: path.resolve(__dirname, "./src"),
        },
      },
      optimizeDeps: {
        allowNodeBuiltins: true,
      },
    },
  },
);
