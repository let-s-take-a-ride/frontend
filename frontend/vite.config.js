import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import pkg from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // appType: "custom",
  ssr: {
    target: "node",
    noExternal: Object.keys(pkg.dependencies || {}),
    build: {
      outDir: "dist",
    },
    server: {
      middlewareMode: "true",
    },
  },
});
