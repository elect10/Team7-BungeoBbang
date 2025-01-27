import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: "./index.html",
        student: "./student/index.html",
        admin: "./admin/index.html",
      },
    },
    outDir: "dist",
  },
});
