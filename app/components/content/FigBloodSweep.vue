<script setup lang="ts">
withDefaults(defineProps<{ title?: string; caption?: string }>(), {
  title: 'Швидкий огляд тіла',
  caption: 'Швидкий огляд руками («криваве обмацування»): згори вниз, з обох боків, обов’язково зазираючи під тіло та в пахви й пах.'
})

// точки в координатах фігури (200×420)
const points = [
  { n: 1, x: 100, y: 40, label: 'Голова, шия, потилиця' },
  { n: 2, x: 62, y: 108, label: 'Пахви й плечі' },
  { n: 3, x: 100, y: 170, label: 'Груди й спина' },
  { n: 4, x: 100, y: 224, label: 'Живіт, поперек, таз' },
  { n: 5, x: 78, y: 262, label: 'Пах (з обох боків)' },
  { n: 6, x: 122, y: 330, label: 'Ноги до самих стоп' },
  { n: 7, x: 150, y: 190, label: 'Руки до кистей' }
]
</script>

<template>
  <FigFrame :title="title" :caption="caption">
    <svg viewBox="0 0 660 460" role="img" aria-label="Порядок швидкого огляду тіла на кровотечу">
      <g transform="translate(150 20)">
        <FigBody />
        <g v-for="p in points" :key="p.n">
          <circle :cx="p.x" :cy="p.y" r="12" class="text-primary" fill="currentColor" fill-opacity="0.18" />
          <circle :cx="p.x" :cy="p.y" r="12" class="text-primary" fill="none" stroke="currentColor" stroke-width="2" />
          <text
            :x="p.x" :y="p.y + 4.5" text-anchor="middle" font-size="12" font-weight="700"
            class="text-primary fill-current"
          >{{ p.n }}</text>
        </g>
      </g>

      <g>
        <text x="404" y="42" font-size="13" font-weight="600" class="text-highlighted fill-current">
          Що перевіряємо по черзі
        </text>
        <g v-for="(p, i) in points" :key="p.n">
          <circle :cx="414" :cy="72 + i * 34" r="11" class="text-primary" fill="currentColor" fill-opacity="0.12" />
          <text
            :x="414" :y="76 + i * 34" text-anchor="middle" font-size="11.5" font-weight="700"
            class="text-primary fill-current"
          >{{ p.n }}</text>
          <text :x="434" :y="77 + i * 34" font-size="13" class="text-default fill-current">{{ p.label }}</text>
        </g>
        <text x="404" y="330" font-size="12" class="text-muted fill-current">
          Руки після кожної ділянки — до очей:
        </text>
        <text x="404" y="348" font-size="12" class="text-muted fill-current">
          кров на рукавичці видно навіть там,
        </text>
        <text x="404" y="366" font-size="12" class="text-muted fill-current">
          де під одягом її не чути.
        </text>
      </g>
    </svg>
  </FigFrame>
</template>
