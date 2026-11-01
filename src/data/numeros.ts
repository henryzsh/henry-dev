// Números que aparecem em mais de uma página. Mudou aqui, mudou em todas.
// Eles envelhecem sozinhos: reconfira antes de mostrar o portfólio e anote a data aqui. Última conferência: 01/11/2026.
//   testesMovimento  npx vitest run                       (em movimento-sites-clientes)
//   testesArea       npm test e npm run e2e, somando os dois  (em vendas-e-painel)
//   sitesMedidos     sites cadastrados no Movimento (henry, Rina e Geh Fit)
//   migrationsSugeriu, statusSugeriu  vêm do repositório do Sugeriu (não está nesta máquina): confirme lá
// Também citados em Movimento.astro: linhas do t.js (wc -l public/t.js), bytes com gzip (gzip -9c public/t.js | wc -c) e as linhas de src/.
export const numeros = {
  testesMovimento: 134,
  testesSugeriu: 167,
  // 126 da API (Vitest) + 75 do teste de navegador (Playwright).
  testesArea: 201,
  sitesMedidos: 3,
  // Sugeriu: mude aqui quando ele for pro ar. Aparece na home, no Sobre e na página dele.
  statusSugeriu: "Em finalização",
  migrationsSugeriu: 27,
  // Diferença de visitantes contra o GoatCounter, antes e depois de tirar as visitas de robô.
  diferencaAntes: "33%",
  diferencaDepois: "13%",
};
