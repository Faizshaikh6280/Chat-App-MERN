import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import csp from "vite-plugin-csp";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    csp({
      policies: {
        "img-src": ["'self'", "data:", "https://avatar.iran.liara.run"],
      },
    }),
  ],
  server: {
    port: "3000",
    proxy: {
      "/api": {
        target: "http://localhost:5000",
      },
    },
  },
});
