import { avanco, github, linkedin } from "./links";

// Data da última mudança de conteúdo nas páginas fixas. Atualize quando mexer em alguma delas (vai pro sitemap).
export const ATUALIZADO = "2026-10-30";

// Pessoa descrita nos dados estruturados.
export const pessoa = (site: string) => ({
  "@type": "Person",
  "@id": `${site}/#henry`,
  name: "Henry Kauã",
  jobTitle: "Desenvolvedor",
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
