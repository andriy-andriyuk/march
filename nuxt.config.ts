export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxt/ui', '@nuxt/content'],

  // Статична генерація: `nuxt generate` -> .output/public
  // baseURL задається через NUXT_APP_BASE_URL (потрібно для GitHub Pages: /march/)
  nitro: {
    // Явно, бо на збірці Cloudflare Nitro інакше автовизначає cloudflare-module
    // і підміняє наш wrangler.jsonc редиректом на неіснуючий SSR-entry.
    preset: 'static',
    prerender: {
      crawlLinks: true,
      routes: ['/', '/404.html'],
      failOnError: true
    }
  },

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      htmlAttrs: { lang: 'uk' },
      title: 'MARCH — посібник з тактичної медицини',
      meta: [
        {
          name: 'description',
          content:
            'Покроковий посібник з протоколу MARCH простою мовою: турнікет, тампонування рани, ізраїльський бандаж, оклюзійна наклейка, протишокові дії та збереження тепла — з ілюстраціями.'
        }
      ]
    }
  }
})
