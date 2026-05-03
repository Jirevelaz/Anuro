// @ts-check
import { defineConfig } from "astro/config"
import tailwind from "@tailwindcss/vite"
import sanity from "@sanity/astro"
import netlify from "@astrojs/netlify"

export default defineConfig({
  output: "static",
  adapter: netlify(),
  integrations: [
    sanity({
      projectId: "05wa67le",
      dataset: "production",
      useCdn: false,
    }),
  ],
  vite: {
    plugins: [tailwind()],
    server: {
      host: true,
      allowedHosts: true,
    },
  },
  server: {
    host: "0.0.0.0",
    port: 3000,
    allowedHosts: true,
  },
})
