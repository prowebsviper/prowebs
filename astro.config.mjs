import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import partytown from '@astrojs/partytown';

export default defineConfig({
  build: {
    inlineStylesheets: 'always',
  },
  integrations: [
    tailwind(),
    partytown({
      config: {
        forward: [],
      },
    }),
  ],
});
