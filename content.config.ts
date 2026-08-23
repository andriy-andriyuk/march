import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    chapters: defineCollection({
      type: 'page',
      source: 'chapters/*.md',
      schema: z.object({
        chapter: z.number(),
        part: z.number(),
        duration: z.string(),
        icon: z.string(),
        letter: z.string().optional(),
        objectives: z.array(z.string())
      })
    })
  }
})
