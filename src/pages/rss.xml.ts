import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

const esc = (t: string) => t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export const GET: APIRoute = async ({ site }) => {
  const posts = (await getCollection("blog")).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  const itens = posts
    .map((p) => {
      const url = new URL(`/blog/${p.id}/`, site);
      return `    <item><title>${esc(p.data.title)}</title><link>${url}</link><guid>${url}</guid><pubDate>${p.data.pubDate.toUTCString()}</pubDate><description>${esc(p.data.description)}</description></item>`;
    })
    .join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0">\n  <channel>\n    <title>Henry Kauã</title>\n    <link>${site}</link>\n    <description>Textos sobre backend, automação e integração, a partir de projetos reais.</description>\n    <language>pt-BR</language>\n${itens}\n  </channel>\n</rss>\n`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
};
