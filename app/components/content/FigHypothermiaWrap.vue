<script setup lang="ts">
withDefaults(defineProps<{ caption?: string }>(), {
  caption: 'Порядок утеплення: спершу прибрати мокре й відрізати пораненого від землі, і лише потім укутувати.'
})

const layers = [
  { n: 1, text: 'Зрізати мокрий одяг' },
  { n: 2, text: 'Ізолювати від землі: каремат, куртка' },
  { n: 3, text: 'Хімічне тепло на тулуб, через тканину' },
  { n: 4, text: 'Обгорнути повністю: термоковдра' },
  { n: 5, text: 'Обов’язково накрити голову' }
]
</script>

<template>
  <FigFrame :caption="caption">
    <svg viewBox="0 0 660 360" role="img" aria-label="Шари утеплення пораненого">
      <!-- земля -->
      <path d="M20 306 H332" class="text-muted" stroke="currentColor" stroke-width="2" stroke-dasharray="6 6" stroke-opacity="0.5" />

      <!-- зрізаний мокрий одяг -->
      <g class="text-muted" transform="translate(44 118)">
        <path d="M0 26 q16 -18 34 -6 q16 10 30 -2 l6 16 q-18 14 -36 4 q-16 -8 -28 4 z" fill="currentColor" fill-opacity="0.35" />
        <g class="text-primary" opacity="0.9">
          <path d="M84 4 L110 30 M110 4 L84 30" stroke="currentColor" stroke-width="3" stroke-linecap="round" />
          <circle cx="82" cy="34" r="5" fill="none" stroke="currentColor" stroke-width="3" />
          <circle cx="112" cy="34" r="5" fill="none" stroke="currentColor" stroke-width="3" />
        </g>
      </g>

      <!-- ізоляція від землі -->
      <rect x="40" y="278" width="288" height="18" rx="9" class="text-emerald-500" fill="currentColor" fill-opacity="0.4" />

      <!-- термоковдра -->
      <rect
        x="48" y="182" width="272" height="98" rx="42"
        class="text-primary" fill="currentColor" fill-opacity="0.13"
        stroke="currentColor" stroke-opacity="0.45" stroke-width="2"
      />

      <!-- поранений -->
      <g class="text-muted">
        <circle cx="104" cy="234" r="27" fill="currentColor" fill-opacity="0.4" />
        <rect x="126" y="208" width="172" height="58" rx="28" fill="currentColor" fill-opacity="0.4" />
      </g>

      <!-- шапка на голові -->
      <path d="M78 230 a27 27 0 0 1 53 -2" class="text-primary" stroke="currentColor" stroke-width="11" fill="none" stroke-linecap="round" stroke-opacity="0.7" />

      <!-- хімічна грілка -->
      <g class="text-amber-500">
        <rect x="188" y="216" width="48" height="30" rx="7" fill="currentColor" fill-opacity="0.65" />
        <path d="M200 212 q6 -10 0 -18 M224 212 q6 -10 0 -18" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" />
      </g>

      <!-- номери -->
      <g class="text-primary">
        <circle cx="150" cy="104" r="13" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2" />
        <text x="150" y="109" text-anchor="middle" font-size="12" font-weight="700" class="text-primary fill-current">1</text>
        <circle cx="306" cy="287" r="13" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2" />
        <text x="306" y="292" text-anchor="middle" font-size="12" font-weight="700" class="text-primary fill-current">2</text>
        <circle cx="212" cy="231" r="13" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2" />
        <text x="212" y="236" text-anchor="middle" font-size="12" font-weight="700" class="text-primary fill-current">3</text>
        <circle cx="296" cy="190" r="13" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2" />
        <text x="296" y="195" text-anchor="middle" font-size="12" font-weight="700" class="text-primary fill-current">4</text>
        <circle cx="90" cy="198" r="13" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2" />
        <text x="90" y="203" text-anchor="middle" font-size="12" font-weight="700" class="text-primary fill-current">5</text>
      </g>

      <!-- список -->
      <g>
        <text x="352" y="52" font-size="14" font-weight="600" class="text-highlighted fill-current">Порядок дій</text>
        <g v-for="(l, i) in layers" :key="l.n">
          <circle :cx="364" :cy="84 + i * 46" r="12" class="text-primary" fill="currentColor" fill-opacity="0.12" />
          <text
            :x="364" :y="88 + i * 46" text-anchor="middle" font-size="12" font-weight="700"
            class="text-primary fill-current"
          >{{ l.n }}</text>
          <text :x="386" :y="89 + i * 46" font-size="12.5" class="text-toned fill-current">{{ l.text }}</text>
        </g>
        <text x="352" y="326" font-size="12" class="text-muted fill-current">Навіть +15 °C і вітер — це вже</text>
        <text x="352" y="344" font-size="12" class="text-muted fill-current">переохолодження для того, хто втратив кров.</text>
      </g>
    </svg>
  </FigFrame>
</template>
