import { defineCollection, defineContentConfig, z } from '@nuxt/content';

export default defineContentConfig({
  collections: {
    content: defineCollection({
      source: '**/**.md',
      type: 'page',
      schema: z.object({
        title: z.string(),
        subtitle: z.string(),
        tags: z.union([z.array(z.string()), z.string()]),
        time: z.union([z.string().date(), z.string().datetime()]),
        date: z.union([z.string().date(), z.string().datetime()]),
      }),
    })
  }
})
