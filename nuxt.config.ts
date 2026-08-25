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

  // Іконки збираємо локально. Інакше в темній темі @nuxt/icon тягне місяць
  // з зовнішнього Iconify API і вставляє свій <style> найпершим у документі,
  // а той оголошує @layer components раніше за base — і preflight Tailwind
  // починає перебивати типографіку .prose-guide: заголовки падають до 16px.
  icon: {
    mode: 'svg',
    serverBundle: { collections: ['lucide'] },
    clientBundle: {
      // scan не бачить іконок, що передаються змінною, і службових іконок
      // самого Nuxt UI — тому вони перелічені явно
      scan: true,
      icons: [
        'lucide:arrow-left', 'lucide:arrow-right', 'lucide:arrow-up-right',
        'lucide:check', 'lucide:chevron-down', 'lucide:chevron-left',
        'lucide:chevron-right', 'lucide:chevron-up', 'lucide:chevrons-left',
        'lucide:chevrons-right', 'lucide:clock', 'lucide:cross', 'lucide:ellipsis',
        'lucide:flag', 'lucide:file', 'lucide:folder', 'lucide:folder-open',
        'lucide:lightbulb', 'lucide:loader-circle', 'lucide:menu', 'lucide:minus',
        'lucide:moon', 'lucide:move-horizontal', 'lucide:octagon-alert',
        'lucide:plus', 'lucide:search', 'lucide:sun', 'lucide:triangle-alert',
        'lucide:upload', 'lucide:x'
      ]
    }
  },

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
