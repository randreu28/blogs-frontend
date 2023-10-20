import { defineConfig } from "cypress";

export default defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  component: {
    specPattern: "cypress/components/**/*.{ts,tsx}",
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
