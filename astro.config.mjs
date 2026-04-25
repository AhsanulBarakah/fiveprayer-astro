// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  base: import.meta.env.PUBLIC_BASE || '/',
  adapter: vercel(),
});
