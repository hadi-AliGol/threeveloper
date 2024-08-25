import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { glslify } from "vite-plugin-glslify";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), glslify()],
  assetsInclude: ["**/*.glb"],
  server: {
    host: true,
    port: 80,
    hmr: {
      clientPort: 443,
    },
  },
  preview: {
    port: 8080
  }
});
