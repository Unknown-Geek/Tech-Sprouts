import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Simplified configuration for Vite 6
  server: {
    port: 5174,
  },
});
