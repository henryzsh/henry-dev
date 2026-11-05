import { getCollection } from "astro:content";
import { avanco, github, linkedin } from "./links";

// Textos do blog, do mais novo para o mais antigo.
export const postsRecentes = async () => (await getCollection("blog")).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

// Data por extenso em UTC (a pubDate é meia-noite UTC).
export const dia = (d: Date) => d.toLocaleDateString("pt-BR", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

// Data da última mudança de conteúdo nas páginas fixas. Atualize quando mexer em alguma delas (vai pro sitemap).
export const ATUALIZADO = "2026-11-05";

// Tempo de leitura do texto do blog: palavras do .md divididas por 200 por minuto, no mínimo 1.
export const leitura = (texto = "") => `${Math.max(1, Math.round(texto.split(/\s+/).filter(Boolean).length / 200))} min de leitura`;

// Pessoa descrita nos dados estruturados.
export const pessoa = (site: string) => ({
  "@type": "Person",
  "@id": `${site}/#henry`,
  name: "Henry Kauã",
  jobTitle: "Assistente de TI",
  url: `${site}/`,
  address: { "@type": "PostalAddress", addressLocality: "Fortaleza", addressRegion: "CE", addressCountry: "BR" },
  worksFor: { "@type": "Organization", name: "Avanço Contabilidade", url: avanco },
  sameAs: [github, linkedin],
  knowsAbout: ["Python", "Node.js", "JavaScript", "TypeScript", "React", "n8n", "Automação de processos", "Integração de sistemas"],
});

export const migalhas = (site: string, itens: [string, string][]) => ({
  "@type": "BreadcrumbList",
  itemListElement: itens.map(([name, caminho], i) => ({ "@type": "ListItem", position: i + 1, name, item: `${site}${caminho}` })),
});
