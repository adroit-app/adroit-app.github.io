// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import { satteri } from "@astrojs/markdown-satteri";

const site = "https://adroit-app.github.io";

export default defineConfig({
  site,
  markdown: {
    processor: satteri(),
  },
  integrations: [
    starlight({
      title: "Adroit",
      description:
        "An Agent Workspace for people who live in Vim: drive any coding agent in its own terminal interface, by hand and the way you edit.",
      logo: {
        light: "./public/logo/adroit-logo-horizontal.svg",
        dark: "./public/logo/adroit-logo-horizontal-light.svg",
        replacesTitle: true,
      },
      favicon: "/favicon.svg",
      head: [
        { tag: "link", attrs: { rel: "apple-touch-icon", href: "/apple-touch-icon.png" } },
        { tag: "meta", attrs: { property: "og:image", content: `${site}/logo/adroit-icon-512.png` } },
        { tag: "meta", attrs: { name: "twitter:card", content: "summary" } },
      ],
      social: [{ icon: "github", label: "GitHub", href: "https://github.com/adroit-app/Adroit" }],
      editLink: {
        baseUrl: "https://github.com/adroit-app/adroit-app.github.io/edit/main/",
      },
      customCss: ["./src/styles/fonts.css", "./src/styles/starlight.css"],
      sidebar: [
        {
          label: "Start here",
          items: [
            { label: "Introduction", slug: "docs" },
            { label: "Install", slug: "docs/install" },
            { label: "Getting started", slug: "docs/getting-started" },
          ],
        },
        {
          label: "Using Adroit",
          items: [
            { label: "The window", slug: "docs/window" },
            { label: "The prompt", slug: "docs/prompt" },
            { label: "Keys", slug: "docs/keys" },
            { label: "Agents and profiles", slug: "docs/agents" },
            { label: "Shells and terminals", slug: "docs/terminals" },
          ],
        },
        {
          label: "Going further",
          items: [
            { label: "Sessions that open sessions", slug: "docs/opening-sessions" },
            { label: "Environments and work machines", slug: "docs/environments" },
            { label: "Neovim configuration", slug: "docs/neovim" },
          ],
        },
        {
          label: "About",
          items: [{ label: "Concept", slug: "docs/concept" }],
        },
      ],
    }),
  ],
});
