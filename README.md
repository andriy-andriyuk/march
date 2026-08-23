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

## Тулчейн

Node і npm закріплені точними версіями — інакше збірка на Cloudflare падає:

- [.nvmrc](.nvmrc) → **24.18.1** (цей Node несе в собі npm 11.16.0);
- `packageManager: npm@11.16.0` у [package.json](package.json).

Лок-файл прив'язаний до версії npm, що його згенерувала: npm 10.9.2 і 11.6.1
відхиляють лок від npm 11.16.0 і навпаки (вони по-різному записують
optional-peer-залежності wasm-бінарників). Тому оновлювати залежності треба саме
тим самим npm:

```bash
npx npm@11.16.0 install
```

Перевірка перед пушем — чистий `npm ci` у копії лише з відстежуваних файлів:

```bash
rsync -a --exclude node_modules --exclude .nuxt --exclude .output \
  --exclude .data --exclude dist --exclude .git ./ /tmp/march-ci/
cd /tmp/march-ci && npx npm@11.16.0 ci && npm run generate
```

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

Шкала за межами `prose` — та сама, що в `waveio`:

- hero `text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight`;
- заголовок розділу `text-4xl font-semibold tracking-tight`;
- заголовок секції `text-3xl sm:text-4xl font-semibold tracking-tight`;
- заголовок картки `text-lg font-semibold`, опис `text-sm leading-6 text-muted`;
- мітка блоку («Що ви дізнаєтесь», callout) `text-sm font-semibold` у кольорі тону;
- `font-bold` не використовується — максимум `font-semibold`.

Кольори — лише з токенів теми: `var(--ui-text)` для тексту (заголовки колір не
задають, а успадковують), `var(--ui-text-highlighted)` для `strong` і дрібних
міток, `var(--ui-text-muted)` для другорядного, маркери списків — `primary-500`.
`text-toned` і `text-dimmed` не використовуються.

Ілюстрація має ту саму «оправу», що діаграми waveio: смужка із заголовком згори,
схема, підпис під роздільником розміром примітки — усе в
[FigFrame](app/components/FigFrame.vue).

**Важливо:** у frontmatter значення з двокрапкою беруться в лапки —
інакше YAML не розпарситься й розділ мовчки зникне зі збірки.

## Деплой

- **Cloudflare Workers** — `wrangler.jsonc`; там же `build.command`, тому
  `npx wrangler deploy` сам робить `npm run generate` перед завантаженням
  `.output/public` (у Workers Builds окремого build-кроку може не бути)
- **GitHub Pages** — ручний workflow `.github/workflows/deploy-pages.yml`
  (`NUXT_APP_BASE_URL=/march/`)
