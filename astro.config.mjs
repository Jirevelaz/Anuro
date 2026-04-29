// @ts-check
import { defineConfig } from "astro/config"
import tailwind from "@tailwindcss/vite"

export default defineConfig({
  vite: {
    plugins: [tailwind()],
    server: {
      host: true,
      allowedHosts: true,
      hmr: {
        clientPort: 443,
      },
    },
  },
  server: {
    host: "0.0.0.0",
    port: 3000,
    allowedHosts: true,
  },
})
