import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Texto do card na lista do blog; sem ele, vale a description.
    resumo: z.string().optional(),
    pubDate: z.coerce.date(),
    categoria: z.enum(["Backend", "Privacidade", "Segurança", "Automação", "Casos"]),
    leitura: z.string(),
  }),
});

export const collections = { blog };
