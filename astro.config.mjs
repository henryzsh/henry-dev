// @ts-check
import { defineConfig } from 'astro/config';
import { satteri } from '@astrojs/markdown-satteri';

export default defineConfig({
  site: 'https://dev.henrykaua.com.br',
  // Aspas retas no blog: sem isso o Astro troca por aspas curvas.
  markdown: { processor: satteri({ features: { smartPunctuation: false } }) },
  // Script sempre em arquivo, nunca embutido no HTML: assim o CSP não precisa de 'unsafe-inline' em script-src.
  vite: { build: { assetsInlineLimit: 0 } },
});
