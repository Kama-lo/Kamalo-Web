import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 3000,
  },
  resolve: {
    tsconfigPaths: true,
  },
  plugins: [
    tailwindcss(),
    tanstackStart({
      srcDirectory: "src",
      server: { entry: "src/server.ts" },
    }),
    viteReact(),
    nitro({
      // Vercel sets VERCEL=1 during build; locally keep the Node server for preview.
      preset: process.env.VERCEL ? "vercel" : undefined,
    }),
  ],
});
