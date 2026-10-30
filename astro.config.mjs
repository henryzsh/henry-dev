// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://dev.henrykaua.com.br',
  markdown: { smartypants: false },
  // Script sempre em arquivo, nunca embutido no HTML: assim o CSP não precisa de 'unsafe-inline' em script-src.
  vite: { build: { assetsInlineLimit: 0 } },
});
