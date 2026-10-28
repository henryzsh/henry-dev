# henry-dev

Portfólio e blog do Henry Kauã (desenvolvedor backend), em `dev.henrykaua.com.br`.
O site de vendas é outro projeto, em `henrykaua.com.br`.

Astro, só HTML e CSS estáticos: nenhuma página manda JavaScript de framework. Os dois scripts
(menu que esconde ao rolar e filtro do blog) são pequenos e ficam dentro da própria página.

## Comandos

| Comando | O que faz |
|---|---|
| `npm run dev` | servidor local com recarga |
| `npm run build` | gera o site em `dist/` |
| `npm run preview` | serve o `dist/` localmente |
| `npm run deploy` | build e publicação no Cloudflare (Workers com arquivos estáticos) |

## Como é organizado

```
src/layouts/Base.astro     <head>, topo, rodapé e scripts
src/components/            topo, rodapé e as seções da home (components/home)
src/pages/                 index, blog, 404 e sitemap.xml
src/content/blog/*.md      um arquivo por texto do blog
src/data/em-breve.ts       textos planejados que ainda não foram escritos
src/styles/                base.css (comum), home.css e blog.css (por página)
public/                    fonte DM Sans, imagem do painel, favicon, robots e _headers
wrangler.jsonc             Worker só de arquivos estáticos + domínio personalizado
```

## Novo texto no blog

Crie `src/content/blog/nome-do-texto.md` com este cabeçalho (o `resumo` é o texto do card na lista;
sem ele vale a `description`; se o valor tiver `: ` no meio, ponha entre aspas):

```md
---
title: Título do texto
description: Frase para o Google.
resumo: Texto do card na lista do blog.
pubDate: 2026-11-02
categoria: Backend
leitura: 4 min de leitura
---
```

A categoria é uma destas: Backend, Privacidade, Segurança, Automação, Casos. Se o texto estava em
`src/data/em-breve.ts`, apague de lá.

## Deploy

`npm run deploy` publica em `dev.henrykaua.com.br`. No primeiro deploy o Cloudflare cria o DNS e o
certificado desse subdomínio (a zona `henrykaua.com.br` precisa estar na mesma conta).
Depois, no site de vendas, a rota `/dev` deve passar a redirecionar (301) para cá.

## Decisões

Por que Astro, por que um projeto separado do site de vendas e o plano completo estão em
`docs/ARQUITETURA.md` do repositório do site de vendas (privado).
