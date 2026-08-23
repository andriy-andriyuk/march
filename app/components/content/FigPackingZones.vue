<script setup lang="ts">
withDefaults(defineProps<{ caption?: string }>(), {
  caption: 'Тампонують те, що не перетиснути турнікетом: шия, пахва, пах, сідниця. У груди, живіт і череп бинт не запихають ніколи.'
})

const good = [
  { x: 100, y: 74, r: 14, label: 'шия (обережно, без здавлювання)' },
  { x: 64, y: 104, r: 15, label: 'пахва' },
  { x: 136, y: 104, r: 15, label: '' },
  { x: 78, y: 244, r: 16, label: 'пах і сідниця' },
  { x: 122, y: 244, r: 16, label: '' }
]

const bad = [
  { x: 100, y: 150, rx: 34, ry: 40, label: 'груди' },
  { x: 100, y: 214, rx: 30, ry: 24, label: 'живіт' },
  { x: 100, y: 38, rx: 24, ry: 24, label: 'череп і очі' }
]
</script>

<template>
  <FigFrame :caption="caption">
    <svg viewBox="0 0 660 460" role="img" aria-label="Ділянки тіла, де тампонують рану, і де цього робити не можна">
      <g transform="translate(120 20)">
        <FigBody />
        <g class="text-emerald-500">
          <circle
            v-for="(z, i) in good" :key="`g${i}`"
            :cx="z.x" :cy="z.y" :r="z.r"
            fill="currentColor" fill-opacity="0.22" stroke="currentColor" stroke-width="2.5"
          />
        </g>
        <g class="text-primary">
          <ellipse
            v-for="(z, i) in bad" :key="`b${i}`"
            :cx="z.x" :cy="z.y" :rx="z.rx" :ry="z.ry"
            fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2.5" stroke-dasharray="6 5"
          />
        </g>
      </g>

      <g>
        <circle cx="404" cy="66" r="9" class="text-emerald-500" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2" />
        <text x="424" y="70" font-size="14" font-weight="600" class="text-highlighted fill-current">Тут тампонуємо</text>
        <text x="424" y="94" font-size="12.5" class="text-muted fill-current">шия, пахва, пах, сідниця —</text>
        <text x="424" y="112" font-size="12.5" class="text-muted fill-current">місця, де кровотечу не спинити</text>
        <text x="424" y="130" font-size="12.5" class="text-muted fill-current">ані турнікетом, ані пов’язкою</text>

        <circle cx="404" cy="186" r="9" class="text-primary" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2" stroke-dasharray="4 3" />
        <text x="424" y="190" font-size="14" font-weight="600" class="text-highlighted fill-current">Тут не тампонуємо</text>
        <text x="424" y="214" font-size="12.5" class="text-muted fill-current">грудна клітка, живіт, череп:</text>
        <text x="424" y="232" font-size="12.5" class="text-muted fill-current">бинт не спинить кровотечу</text>
        <text x="424" y="250" font-size="12.5" class="text-muted fill-current">всередині — лише нашкодить</text>

        <rect x="396" y="280" width="248" height="106" rx="12" class="text-muted" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-opacity="0.25" />
        <text x="414" y="306" font-size="12" font-weight="600" class="text-dimmed fill-current">ПАМ’ЯТАЙ</text>
        <text x="414" y="330" font-size="12.5" class="text-toned fill-current">На кінцівці турнікет завжди</text>
        <text x="414" y="348" font-size="12.5" class="text-toned fill-current">швидший. Тампонування — для</text>
        <text x="414" y="366" font-size="12.5" class="text-toned fill-current">місць, де турнікет не застосуєш.</text>
      </g>
    </svg>
  </FigFrame>
</template>
