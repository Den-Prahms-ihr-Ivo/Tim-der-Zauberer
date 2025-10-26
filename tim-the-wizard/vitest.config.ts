import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: ["./src/shared/test/setup.ts"],
    globals: true,
    css: false,
    coverage: { reporter: ["text", "html"] },
  },
});
