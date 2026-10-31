// Números que aparecem em mais de uma página. Mudou aqui, mudou em todas.
// Eles envelhecem sozinhos: reconfira antes de mostrar o portfólio e anote a data aqui. Última conferência: 31/10/2026.
//   testesMovimento  npx vitest run                       (em movimento-sites-clientes)
//   testesArea       npm test e npm run e2e, somando os dois  (em vendas-e-painel)
//   sitesMedidos     sites cadastrados no Movimento (henry, Rina e Geh Fit)
// Também citados em Movimento.astro: linhas do t.js (wc -l public/t.js), bytes com gzip (gzip -9c public/t.js | wc -c) e as linhas de src/.
export const numeros = {
  testesMovimento: 134,
  testesSugeriu: 167,
  // 123 da API (Vitest) + 74 do teste de navegador (Playwright).
  testesArea: 197,
  sitesMedidos: 3,
  // Diferença de visitantes contra o GoatCounter, antes e depois de tirar as visitas de robô.
  diferencaAntes: "33%",
  diferencaDepois: "13%",
};
