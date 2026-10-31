# Regras deste repositório

- Textos em pt-BR, sem travessão (— ou –). Clientes sempre no masculino.
- Mexeu no conteúdo de sobre, movimento, sugeriu, area, privacidade ou da home? Atualize `ATUALIZADO` em `src/data/site.ts` (data do sitemap).
- Os números das páginas de projeto ficam em `src/data/numeros.ts`. Reconfira com os comandos do comentário antes de publicar.
- Nenhum script embutido no HTML: o CSP em `public/_headers` não deixa. Script vai em arquivo.
- Ao trocar uma imagem ou a fonte, mude também o nome do arquivo: eles ficam 30 dias no cache do navegador.

## Servidor de desenvolvimento

Suba em segundo plano com `astro dev --background`. Gerencie com `astro dev stop`, `astro dev status` e `astro dev logs`.
