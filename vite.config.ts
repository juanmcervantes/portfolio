import { defineConfig } from "vite";

// base './' keeps every asset path relative, so the same build works on
// GitHub Pages (user.github.io/repo/) and on a custom domain later.
export default defineConfig({
  base: "./",
});
