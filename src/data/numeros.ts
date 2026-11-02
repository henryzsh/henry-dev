// Números que aparecem em mais de uma página. Mudou aqui, mudou em todas.
// Eles envelhecem sozinhos: reconfira antes de mostrar o portfólio e anote a data aqui. Última conferência: 01/11/2026.
//   testesMovimento  npx vitest run                       (em movimento-sites-clientes)
//   testesArea       npm test e npm run e2e, somando os dois  (em vendas-e-painel)
//   clientesMedidos  sites de clientes cadastrados no Movimento (Rina e Geh Fit); sitesMedidos soma o do Henry
//   migrationsSugeriu, statusSugeriu  vêm do repositório do Sugeriu (não está nesta máquina): confirme lá
//   linhasTjs, bytesTjs  wc -l public/t.js e gzip -9c public/t.js | wc -c (em movimento-sites-clientes)
//   linhasMovimento      linhas de src/ do Movimento, arredondadas (não reconferido em 01/11/2026)
const clientesMedidos = 2;
export const numeros = {
  clientesMedidos,
  linhasTjs: 122,
  bytesTjs: "1.865",
  linhasMovimento: 930,
  testesMovimento: 134,
  testesSugeriu: 167,
  // 126 da API (Vitest) + 75 do teste de navegador (Playwright).
  testesArea: 201,
  sitesMedidos: clientesMedidos + 1,
  // Sugeriu: mude aqui quando ele for pro ar. Aparece na home, no Sobre e na página dele.
  statusSugeriu: "Em finalização",
  migrationsSugeriu: 27,
  // Diferença de visitantes contra o GoatCounter, antes e depois de tirar as visitas de robô.
  diferencaAntes: "33%",
  diferencaDepois: "13%",
};
