import adapter from '@sveltejs/adapter-auto';
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
  },
    // Override http methods in the Todo forms
  preprocess: [
      preprocess({
        postcss: true,
      }),
  ],
};

export default config;
