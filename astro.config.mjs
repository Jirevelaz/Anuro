// @ts-check
import { defineConfig } from "astro/config"
import tailwind from "@tailwindcss/vite"

export default defineConfig({
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
