// @ts-check
import { defineConfig } from "astro/config"
import tailwind from "@tailwindcss/vite"
import sanity from "@sanity/astro"

export default defineConfig({
  integrations: [
    sanity({
      projectId: "05wa67le",
      dataset: "production",
      useCdn: false,
    }),
  ],
  vite: {
    // @ts-expect-error - Type mismatch between Astro's bundled Vite and Tailwind's Vite types
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
