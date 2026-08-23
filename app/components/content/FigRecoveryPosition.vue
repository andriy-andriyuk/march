<script setup lang="ts">
withDefaults(defineProps<{ title?: string; caption?: string }>(), {
  title: 'Стабільне положення на боці',
  caption: 'Стабільне положення на боці: непритомний, який дихає сам, не задихнеться від язика й не захлинеться кров’ю чи блювотою.'
})

const notes = [
  { n: 1, x: 404, y: 74, text: 'Голова трохи закинута,' },
  { n: 1, x: 404, y: 92, text: 'рот повернутий донизу' },
  { n: 2, x: 404, y: 132, text: 'Долоня під щокою —' },
  { n: 2, x: 404, y: 150, text: 'голова не сповзає' },
  { n: 3, x: 404, y: 190, text: 'Верхня нога зігнута' },
  { n: 3, x: 404, y: 208, text: 'в коліні й упирається в землю' },
  { n: 4, x: 404, y: 248, text: 'Кожні кілька хвилин —' },
  { n: 4, x: 404, y: 266, text: 'перевірка дихання' }
]
</script>

<template>
  <FigFrame :title="title" :caption="caption">
    <svg viewBox="0 0 660 320" role="img" aria-label="Стабільне положення на боці">
      <!-- земля -->
      <path d="M40 276 H360" class="text-muted" stroke="currentColor" stroke-width="2" stroke-dasharray="6 6" stroke-opacity="0.5" />

      <!-- нижні (притиснуті) кінцівки -->
      <g class="text-muted" opacity="0.32">
        <path d="M150 206 L104 250" stroke="currentColor" stroke-width="17" stroke-linecap="round" fill="none" />
        <path d="M256 238 L330 262" stroke="currentColor" stroke-width="23" stroke-linecap="round" fill="none" />
      </g>

      <!-- тулуб і голова -->
      <g class="text-muted" opacity="0.4">
        <rect x="128" y="180" width="150" height="72" rx="34" fill="currentColor" />
        <circle cx="96" cy="214" r="31" fill="currentColor" />
      </g>

      <!-- верхня рука: долоня під щокою -->
      <g class="text-toned" opacity="0.85">
        <path d="M164 192 L122 198 L106 216" stroke="currentColor" stroke-width="17" fill="none" stroke-linecap="round" stroke-linejoin="round" />
      </g>

      <!-- верхня нога, зігнута в коліні -->
      <g class="text-toned" opacity="0.85">
        <path d="M252 220 L306 242 L302 272" stroke="currentColor" stroke-width="24" fill="none" stroke-linecap="round" stroke-linejoin="round" />
      </g>

      <!-- рот донизу: рідина витікає -->
      <g class="text-primary">
        <path d="M74 236 q7 12 -3 12 q-10 0 -3 -12 z" fill="currentColor" fill-opacity="0.8" />
        <path d="M70 254 q5 9 -2 9 q-7 0 -2 -9 z" fill="currentColor" fill-opacity="0.5" />
      </g>

      <!-- дихання -->
      <g class="text-emerald-500">
        <path d="M186 158 q10 -12 20 0 q10 12 20 0" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round" />
      </g>

      <!-- виносні номери -->
      <g class="text-primary">
        <circle cx="96" cy="172" r="12" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2" />
        <text x="96" y="177" text-anchor="middle" font-size="12" font-weight="700" class="text-primary fill-current">1</text>
        <circle cx="118" cy="228" r="12" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2" />
        <text x="118" y="233" text-anchor="middle" font-size="12" font-weight="700" class="text-primary fill-current">2</text>
        <circle cx="316" cy="222" r="12" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2" />
        <text x="316" y="227" text-anchor="middle" font-size="12" font-weight="700" class="text-primary fill-current">3</text>
        <circle cx="240" cy="150" r="12" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2" />
        <text x="240" y="155" text-anchor="middle" font-size="12" font-weight="700" class="text-primary fill-current">4</text>
      </g>

      <!-- підписи -->
      <g v-for="(note, i) in notes" :key="i">
        <circle
          v-if="i % 2 === 0" :cx="386" :cy="note.y - 4" r="11"
          class="text-primary" fill="currentColor" fill-opacity="0.12"
        />
        <text
          v-if="i % 2 === 0" :x="386" :y="note.y" text-anchor="middle" font-size="11.5" font-weight="700"
          class="text-primary fill-current"
        >{{ note.n }}</text>
        <text :x="note.x" :y="note.y" font-size="13" class="text-default fill-current">{{ note.text }}</text>
      </g>
    </svg>
  </FigFrame>
</template>
