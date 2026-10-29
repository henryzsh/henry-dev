import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const GET: APIRoute = async ({ site }) => {
  const posts = await getCollection("blog");
  const caminhos = ["/", "/sobre/", "/movimento/", "/sugeriu/", "/area/", "/blog/", ...posts.map((p) => `/blog/${p.id}/`)];
  const urls = caminhos.map((c) => `  <url><loc>${new URL(c, site)}</loc></url>`).join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
