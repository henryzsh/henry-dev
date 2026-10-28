---
title: Como contar visitantes sem cookie e sem guardar o IP
description: Como o Movimento conta visitantes únicos sem cookie e sem guardar o IP, usando um hash que muda todo dia.
resumo: "O truque de um hash que muda todo dia: dá pra saber quantas pessoas visitaram um site sem identificar ninguém e sem banner de cookies. É assim que o Movimento faz."
pubDate: 2026-10-26
categoria: Privacidade
leitura: 5 min de leitura
---

Eu vendo sites sem mensalidade e queria que cada cliente soubesse quantas pessoas visitam o site dele. As ferramentas prontas ou custavam por mês, ou exigiam banner de cookies, ou limitavam o número de sites. Então criei o Movimento. A parte mais interessante dele é como ele conta visitantes únicos sem identificar ninguém.

## O problema de contar gente

Contar "visitas" é fácil: cada acesso soma um. Contar **pessoas** é mais difícil, porque a mesma pessoa pode voltar ao site cinco vezes no mesmo dia. O jeito tradicional é gravar um cookie no navegador e reconhecer quem volta. Só que cookie pede aviso, consentimento e dá trabalho ao dono do site.

A outra saída é guardar o endereço IP, mas o IP é um dado pessoal e eu não quero guardá-lo em lugar nenhum.

## A ideia: um código que muda todo dia

Em vez de guardar o IP, o Movimento guarda só um hash dele, misturado com outras informações e com um segredo do dia:

`visitante = sha256(sal_do_dia + ip + user_agent + site)`

E o `sal_do_dia` também não é fixo: ele é calculado como `HMAC(segredo, data)`. O resultado é que:

- O IP nunca é gravado. Só o hash vai pro banco.
- No mesmo dia, a mesma pessoa gera o mesmo código, então eu consigo contar ela uma vez só.
- No dia seguinte o sal muda, e o código dela muda junto. Não dá pra seguir ninguém de um dia pro outro.

É a mesma técnica que ferramentas como o Plausible e o Pirsch usam.

## O que se perde (e por que tudo bem)

Esse método tem um custo: quem visita o site na segunda e na terça é contado como duas pessoas diferentes. Para o dono de um site de uma página, isso não atrapalha. O que ele quer saber é quantas pessoas chegaram naquele dia, de onde vieram e quantas clicaram no WhatsApp, e isso o hash responde bem.

## Os detalhes que fazem o número bater

Contar direito pede alguns cuidados além do hash:

- **Robôs:** o Movimento filtra pelo user-agent e também pela rede de origem da visita (provedor de internet ou servidor de nuvem). Essa informação é usada na hora e não é guardada.
- **Recarregar a página:** a mesma página aberta de novo em menos de 10 segundos não conta de novo.
- **Fuso:** as datas são gravadas em UTC e mostradas no fuso de Fortaleza, para o "hoje" do painel ser o "hoje" do cliente.

## O que eu aprendi

Privacidade e boa medição não precisam brigar. Com um hash que muda todo dia, eu consigo números úteis para o dono do negócio sem cookie, sem banner e sem guardar nada que identifique quem visitou. E o custo de infraestrutura ficou em R$ 0 por mês, porque tudo roda no plano grátis do Cloudflare.
