import { numeros } from "./numeros";

export type Projeto = { href?: string; nome: string; chip: string; desc: string; ev: string };

// Os três primeiros têm página própria com as decisões; os demais ficam só como linha.
export const projetos: Projeto[] = [
  { href: "/movimento/", nome: "Movimento", chip: "No ar", desc: "Analytics sem cookie e sem custo mensal, feito do zero para os sites dos meus clientes.", ev: `R$ 0 por mês · ${numeros.sitesMedidos} sites medidos · diferença de ${numeros.diferencaAntes} para ${numeros.diferencaDepois} contra o GoatCounter · ${numeros.testesMovimento} testes` },
  { href: "/sugeriu/", nome: "Sugeriu", chip: "Em finalização", desc: "Extensão do Chrome que sugere respostas com IA dentro do WhatsApp Web, sem nenhuma chave de IA na extensão.", ev: `${numeros.testesSugeriu} testes unitários · 27 migrations aplicadas do zero num Postgres 17 · dados sensíveis mascarados antes de sair do navegador` },
  { href: "/area/", nome: "Área do cliente", chip: "No ar", desc: "Portal com login Google onde o cliente vê o movimento do site, o vencimento do domínio e as parcelas, pagas online por Pix ou cartão.", ev: `${numeros.testesArea} testes no GitHub Actions · login com PKCE e sessão própria · custo zero além do domínio` },
  { nome: "Agenda Pronta", chip: "PWA", desc: "Painel de horários para uma manicure que gera a arte da semana pronta para o Status do WhatsApp.", ev: "Antes: cerca de 78 edições de imagem por semana. Depois: nenhuma." },
  { nome: "internet-monitor", chip: "IA · Python", desc: "Coleta posts de blogs, ranqueia pelo meu interesse e entrega num painel web ou no Telegram, onde eu voto. Os votos realimentam o ranking.", ev: "Claude só nos ~30 finalistas, depois de uma triagem local por afinidade" },
  { nome: "saas-inbox", chip: "Python · APIs", desc: "Consulta o Gmail por mensagem no Telegram: escrevo \"email da vercel\" e ele devolve os e-mails da Vercel de hoje.", ev: "Gmail API · Telegram Bot API · Docker · resumo agendado no GitHub Actions" },
  { nome: "x-automation", chip: "IA · Bot", desc: "Bot de Telegram que transforma texto, notícia ou foto em post pronto para o X, na voz do usuário, com memória que aprende com as edições.", ev: "Gemini API · modo de teste sem publicar" },
];

export const stack = ["Python", "Node.js", "JavaScript", "TypeScript", "React", "n8n"];
