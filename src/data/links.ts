export const avanco = "https://avancontabilidade.com.br/";
export const github = "https://github.com/henryzsh";
export const linkedin = "https://www.linkedin.com/in/henry-kaua/";
export const email = "henrykaua21@gmail.com";
export const telefone = "+55 85 98835-0966";

/** Links do topo e do rodapé: [nome, destino]. Destino com "#" é seção da home. */
export const navegacao = [["Projetos", "#projetos"], ["Experiência", "#experiencia"], ["Blog", "/blog/"], ["Sobre", "/sobre/"]] as const;

/** Link do WhatsApp do Henry já com a mensagem pronta. */
export const linkWhatsapp = (texto: string) => `https://wa.me/5585988350966?text=${encodeURIComponent(texto)}`;
