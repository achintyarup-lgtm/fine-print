import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    standfirst: z.string().optional(),
    description: z.string().optional(),
    date: z.string(), 
    cover: z.string().optional(),
    ogImage: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
