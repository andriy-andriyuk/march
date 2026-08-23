<script setup lang="ts">
withDefaults(defineProps<{ caption?: string }>(), {
  caption: 'Напружений пневмоторакс: повітря накопичується в грудній клітці й притискає легеню та серце. Розпізнати має кожен, декомпресію робить лише навчений.'
})

const signs = [
  'Дихати дедалі важче, хоча наклейка стоїть',
  'Дихання з одного боку не чути',
  'Шкіра бліда, губи синюшні',
  'Неспокій, відчуття нестачі повітря',
  'Пульс частий і слабкий, тиск падає'
]
</script>

<template>
  <FigFrame :caption="caption">
    <svg viewBox="0 0 660 380" role="img" aria-label="Ознаки напруженого пневмотораксу та місця декомпресії">
      <FigPanel :x="8" :y="8" :w="314" :h="364" title="Що видно й чути">
        <g v-for="(s, i) in signs" :key="s">
          <circle :cx="30" :cy="76 + i * 40" r="5" class="text-primary" fill="currentColor" />
          <text :x="48" :y="80 + i * 40" font-size="12.5" class="text-toned fill-current">{{ s }}</text>
        </g>
        <rect x="18" y="272" width="278" height="76" rx="10" class="text-primary" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-opacity="0.3" />
        <text x="34" y="298" font-size="12" font-weight="600" class="text-primary fill-current">ЩО РОБИТЬ НЕНАВЧЕНИЙ</text>
        <text x="34" y="320" font-size="12.5" class="text-toned fill-current">Відкрити край наклейки, посадити</text>
        <text x="34" y="338" font-size="12.5" class="text-toned fill-current">зручніше й терміново кликати медика.</text>
      </FigPanel>

      <FigPanel :x="338" :y="8" :w="314" :h="364" title="Куди коле навчений">
        <g transform="translate(58 46) scale(0.68)">
          <FigBody />
          <g class="text-primary">
            <circle cx="128" cy="118" r="11" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="2.5" />
            <circle cx="128" cy="118" r="3.5" fill="currentColor" />
            <circle cx="152" cy="158" r="11" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="2.5" />
            <circle cx="152" cy="158" r="3.5" fill="currentColor" />
          </g>
        </g>
        <g class="text-muted">
          <path d="M156 124 H186" stroke="currentColor" stroke-width="1.5" />
          <path d="M172 154 H186" stroke="currentColor" stroke-width="1.5" />
        </g>
        <text x="190" y="118" font-size="11.5" class="text-toned fill-current">2-ге міжребер’я,</text>
        <text x="190" y="134" font-size="11.5" class="text-toned fill-current">по середньоключичній</text>
        <text x="190" y="160" font-size="11.5" class="text-toned fill-current">4–5-те міжребер’я,</text>
        <text x="190" y="176" font-size="11.5" class="text-toned fill-current">по передній пахвовій</text>

        <rect x="18" y="272" width="278" height="76" rx="10" class="text-muted" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-opacity="0.25" />
        <text x="34" y="298" font-size="12.5" class="text-muted fill-current">Голку вводять по верхньому краю</text>
        <text x="34" y="316" font-size="12.5" class="text-muted fill-current">нижнього ребра — під нижнім краєм</text>
        <text x="34" y="334" font-size="12.5" class="text-muted fill-current">проходять судини й нерв.</text>
      </FigPanel>
    </svg>
  </FigFrame>
</template>
