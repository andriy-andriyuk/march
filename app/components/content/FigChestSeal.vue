<script setup lang="ts">
withDefaults(defineProps<{ title?: string; caption?: string }>(), {
  title: 'Оклюзійна наклейка крок за кроком',
  caption: 'Оклюзійна наклейка закриває отвір у грудній клітці, щоб повітря заходило в легені через дихальні шляхи, а не крізь рану.'
})
</script>

<template>
  <FigFrame :title="title" :caption="caption">
    <svg viewBox="0 0 660 560" role="img" aria-label="Чотири кроки накладання оклюзійної наклейки">
      <FigPanel :x="8" :y="8" :w="314" :h="260" :n="1" :lines="['Витерти шкіру навколо рани', 'насухо — на мокре й слизьке', 'наклейка не тримається']" :text-y="196">
        <g transform="translate(40 40)">
          <rect x="0" y="0" width="234" height="112" rx="16" class="text-muted" fill="currentColor" fill-opacity="0.3" />
          <circle cx="118" cy="56" r="10" class="text-primary" fill="currentColor" fill-opacity="0.7" />
          <g class="text-highlighted">
            <rect x="150" y="24" width="54" height="40" rx="8" fill="currentColor" fill-opacity="0.5" />
            <path d="M150 44 q-16 8 -22 20" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round" stroke-opacity="0.7" />
          </g>
        </g>
      </FigPanel>

      <FigPanel :x="338" :y="8" :w="314" :h="260" :n="2" :lines="['Клеїти на видиху, повністю', 'перекриваючи рану — наклейка', 'має бути помітно більшою']" :text-y="196">
        <g transform="translate(40 40)">
          <rect x="0" y="0" width="234" height="112" rx="16" class="text-muted" fill="currentColor" fill-opacity="0.3" />
          <rect x="72" y="16" width="94" height="80" rx="10" class="text-emerald-500" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="2.5" />
          <circle cx="119" cy="56" r="10" class="text-primary" fill="currentColor" fill-opacity="0.6" />
          <g class="text-emerald-500">
            <path d="M72 108 H166" stroke="currentColor" stroke-width="2" stroke-dasharray="4 4" />
            <text x="119" y="126" text-anchor="middle" font-size="11.5" class="text-emerald-500 fill-current">запас з усіх боків</text>
          </g>
        </g>
      </FigPanel>

      <FigPanel :x="8" :y="288" :w="314" :h="260" :n="3" :lines="['Наклейка з клапаном випускає', 'повітря назовні й не пускає', 'назад — така краща']" :text-y="196">
        <g transform="translate(40 40)">
          <rect x="0" y="0" width="234" height="112" rx="16" class="text-muted" fill="currentColor" fill-opacity="0.3" />
          <rect x="72" y="16" width="94" height="80" rx="10" class="text-emerald-500" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="2.5" />
          <g class="text-emerald-500">
            <circle cx="119" cy="56" r="16" fill="currentColor" fill-opacity="0.35" />
            <path d="M119 40 V16" stroke="currentColor" stroke-width="3" stroke-linecap="round" />
            <path d="M112 24 L119 14 L126 24" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round" />
          </g>
          <text x="176" y="52" font-size="11.5" class="text-emerald-500 fill-current">повітря</text>
          <text x="176" y="68" font-size="11.5" class="text-emerald-500 fill-current">виходить</text>
        </g>
      </FigPanel>

      <FigPanel :x="338" :y="288" :w="314" :h="260" :n="4" :lines="['Стало гірше — відклеїти край', 'на видиху, випустити повітря', 'і приклеїти назад']" :text-y="196">
        <g transform="translate(40 40)">
          <rect x="0" y="0" width="234" height="112" rx="16" class="text-muted" fill="currentColor" fill-opacity="0.3" />
          <path d="M72 96 h94 v-80 l-40 -2 q-18 22 -54 26 z" class="text-highlighted" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-opacity="0.5" stroke-width="2" />
          <g class="text-primary">
            <path d="M128 18 q20 -14 44 -10" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round" />
            <path d="M162 2 L174 8 L166 18" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round" />
          </g>
          <text x="176" y="58" font-size="11.5" class="text-primary fill-current">випустити</text>
          <text x="176" y="74" font-size="11.5" class="text-primary fill-current">повітря</text>
        </g>
      </FigPanel>
    </svg>
  </FigFrame>
</template>
