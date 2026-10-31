import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

const esc = (t: string) => t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export const GET: APIRoute = async ({ site }) => {
  const posts = (await getCollection("blog")).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  const ultima = (posts[0]?.data.pubDate ?? new Date()).toUTCString();
  const itens = posts
    .map((p) => {
      const url = new URL(`/blog/${p.id}/`, site);
      return `    <item><title>${esc(p.data.title)}</title><link>${url}</link><guid>${url}</guid><pubDate>${p.data.pubDate.toUTCString()}</pubDate><description>${esc(p.data.description)}</description></item>`;
    })
    .join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">\n  <channel>\n    <title>Henry Kauã</title>\n    <link>${site}</link>\n    <atom:link href="${new URL("/rss.xml", site)}" rel="self" type="application/rss+xml"/>\n    <lastBuildDate>${ultima}</lastBuildDate>\n    <description>Textos sobre backend, automação e integração, a partir de projetos reais.</description>\n    <language>pt-BR</language>\n${itens}\n  </channel>\n</rss>\n`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
};
