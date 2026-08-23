# Протокол MARCH — посібник з домедичної допомоги

Статичний сайт-посібник українською: 14 розділів про порядок дій MARCH
(масивна кровотеча → дихальні шляхи → дихання → кровообіг → тепло і голова)
з покроковими ілюстраціями — турнікет, тампонування рани, ізраїльський бандаж,
оклюзійна наклейка, тазовий бандаж, утеплення, картка пораненого.

> Навчальний матеріал. Не замінює очного курсу з тактичної медицини.

## Стек

Той самий, що й у проєкті `vision`:

- **Nuxt 4** + **Vue 3**, статична генерація (`nitro.preset: 'static'`)
- **@nuxt/ui 3** (Tailwind CSS v4, іконки `lucide`), тема: `primary: red`, `neutral: zinc`
- **@nuxt/content 3** — розділи як Markdown у `content/chapters/*.md`
- Власна типографіка `.prose-guide` в `app/assets/css/main.css` (розміри й кольори
  перенесені з проєкту `waveio`, без `@tailwindcss/typography`)

## Команди

```bash
npm install
npm run dev        # локальна розробка
npm run generate   # статична збірка -> .output/public
npm run preview:static
```

## Структура

```
content/chapters/*.md          розділи посібника (frontmatter: chapter, part, letter, objectives…)
app/pages/index.vue            головна: літери MARCH, застереження, зміст
app/pages/chapters/[slug].vue  сторінка розділу
app/components/content/Fig*.vue  ілюстрації (inline SVG, MDC-компоненти)
app/components/content/Callout.vue  блоки-застереження ::callout{type="danger"}
app/components/FigFrame.vue    рамка ілюстрації з підписом
app/components/FigPanel.vue    панель-крок усередині SVG
app/components/FigBody.vue     схематична фігура людини
app/utils/guide.ts             частини посібника
```

### Ілюстрації в Markdown

```md
::fig-tourniquet-steps
::

::callout{type="danger" title="Заголовок"}
Текст застереження.
::
```

Усі SVG використовують кольори теми (`text-primary`, `text-muted`, `text-emerald-500`),
тому коректно виглядають і в світлій, і в темній темі. На екранах вужчих за 640px
[FigFrame](app/components/FigFrame.vue) не стискає схему, а дає гортати її вбік —
інакше підписи всередині SVG стають нечитабельними.

### Типографіка

Основний текст розділів описаний класом `.prose-guide`:

| Елемент | Десктоп | Мобільний (≤640px) |
|---|---|---|
| `p`, `li` | 16px / 1.8 | **17px / 1.75** |
| `h1` розділу | 36px, semibold | те саме |
| `h2` | 24px / 700 | те саме |
| `h3` | 20px / 650 | те саме |
| Таблиці | 14px | 15px |
| Підписи, примітки (`.guide-note`) | 14px / 1.6 | 15px / 1.65 |

Кольори — з токенів теми: `var(--ui-text)` для тексту, `var(--ui-text-highlighted)`
для `strong`, `var(--ui-text-muted)` для другорядного, маркери списків — `primary-500`.

**Важливо:** у frontmatter значення з двокрапкою беруться в лапки —
інакше YAML не розпарситься й розділ мовчки зникне зі збірки.

## Деплой

- **Cloudflare Pages** — `wrangler.jsonc`, каталог `.output/public`
- **GitHub Pages** — ручний workflow `.github/workflows/deploy-pages.yml`
  (`NUXT_APP_BASE_URL=/march/`)
