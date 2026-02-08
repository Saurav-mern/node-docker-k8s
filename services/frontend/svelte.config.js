import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      fallback: "index.html", // Change this from 404.html
      pages: "build",
      assets: "build",
      strict: false, // Setting to false helps during initial setup
    }),
  },
};

export default config;
