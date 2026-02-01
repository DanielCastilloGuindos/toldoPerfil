import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from '@astrojs/react';
import vercel from "@astrojs/vercel";



import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react({
    experimentalReactChildren: true
  }), sitemap()],
  site: 'https://toldoperfil.es',
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: false
    }
  }),
  buildOptions: {
    rollupOptions: {
      external: ['resend']
    }
  }
});