import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { ATUALIZADO } from "../data/site";

export const GET: APIRoute = async ({ site }) => {
  const posts = await getCollection("blog");
  const dia = (d: Date) => d.toISOString().slice(0, 10);
  const fixas = ["/", "/sobre/", "/movimento/", "/sugeriu/", "/area/", "/blog/", "/privacidade/"].map((c) => [c, ATUALIZADO]);
  const textos = posts.map((p) => [`/blog/${p.id}/`, dia(p.data.pubDate)]);
  const urls = [...fixas, ...textos].map(([c, d]) => `  <url><loc>${new URL(c, site)}</loc><lastmod>${d}</lastmod></url>`).join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
