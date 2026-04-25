// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  output: import.meta.env.VERCEL ? 'server' : 'static',
  base: import.meta.env.PUBLIC_BASE || '/',
  adapter: import.meta.env.VERCEL ? vercel() : undefined,
});
