import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from '@astrojs/react';
import vercel from "@astrojs/vercel";

import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), db(), react({
    experimentalReactChildren: true
  })],
  site: 'https://toldoperfil.es',
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  }),
  buildOptions: {
    rollupOptions: {
      external: ['resend']
    }
  }
});