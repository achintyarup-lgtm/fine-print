import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    standfirst: z.string().optional(),
    description: z.string().optional(),
    seoTitle: z.string().optional(),
    date: z.string(), 
    cover: z.string().optional(),
    ogImage: z.string().optional(),
    draft: z.boolean().default(false),
    section: z.enum(['investigations', 'news', 'history', 'essays']).default('investigations'),
    channel: z.string().optional(),
    canonical: z.string().optional(),
    coverAlt: z.string().optional(),
  }),
});

export const collections = { blog };
