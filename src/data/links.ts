export const avanco = "https://avancontabilidade.com.br/";
export const github = "https://github.com/henryzsh";
export const linkedin = "https://www.linkedin.com/in/henry-kaua/";
export const email = "henrykaua21@gmail.com";
export const telefone = "+55 85 98835-0966";
export const telefoneLink = "+5585988350966";

/** Links do topo e do rodapé: [nome, destino]. Destino com "#" é seção da home. */
export const navegacao = [["Projetos", "#projetos"], ["Experiência", "#experiencia"], ["Blog", "/blog/"], ["Sobre", "/sobre/"]] as const;

/** Página atual, para marcar o menu. */
export type Atual = "home" | "blog" | "sobre" | "outra";

/** Link do WhatsApp do Henry já com a mensagem pronta (wa.me quer o número sem o "+"). */
export const linkWhatsapp = (texto: string) => `https://wa.me/${telefoneLink.slice(1)}?text=${encodeURIComponent(texto)}`;
