<script setup lang="ts">
withDefaults(defineProps<{ caption?: string }>(), {
  caption: 'Порядок MARCH: спочатку те, що вбиває за хвилини, далі — те, що вбиває за години.'
})

const rows = [
  { letter: 'M', title: 'Масивна кровотеча', sub: 'Турнікет, тампонування, тиснуча пов’язка', time: 'хвилини' },
  { letter: 'A', title: 'Дихальні шляхи', sub: 'Положення тіла, щелепа, повітропровід', time: '3–5 хвилин' },
  { letter: 'R', title: 'Дихання', sub: 'Огляд грудей і спини, оклюзійна наклейка', time: 'хвилини — десятки хвилин' },
  { letter: 'C', title: 'Кровообіг', sub: 'Пульс, ознаки шоку, повторна перевірка пов’язок', time: 'десятки хвилин' },
  { letter: 'H', title: 'Гіпотермія і голова', sub: 'Зігріти, утеплити, стежити за свідомістю', time: 'години' }
]
</script>

<template>
  <FigFrame :caption="caption">
    <svg viewBox="0 0 660 400" role="img" aria-label="Схема послідовності MARCH">
      <g v-for="(row, i) in rows" :key="row.letter" :transform="`translate(0 ${i * 70})`">
        <rect
          x="8" y="10" width="644" height="58" rx="12"
          class="text-muted" fill="currentColor" fill-opacity="0.08"
          stroke="currentColor" stroke-opacity="0.25"
        />
        <rect x="20" y="22" width="34" height="34" rx="9" class="text-primary" fill="currentColor" />
        <text
          x="37" y="45" text-anchor="middle" font-size="20" font-weight="700"
          class="text-inverted fill-current"
        >{{ row.letter }}</text>
        <text x="70" y="35" font-size="16" font-weight="600" class="text-highlighted fill-current">
          {{ row.title }}
        </text>
        <text x="70" y="55" font-size="13" class="text-muted fill-current">{{ row.sub }}</text>
        <text x="640" y="45" text-anchor="end" font-size="12" class="text-dimmed fill-current">
          {{ row.time }}
        </text>
        <path
          v-if="i < rows.length - 1"
          d="M37 68 V80" class="text-primary" stroke="currentColor" stroke-width="2.5"
          stroke-linecap="round" marker-end=""
        />
        <path
          v-if="i < rows.length - 1"
          d="M32 74 L37 80 L42 74" class="text-primary" stroke="currentColor" stroke-width="2.5"
          fill="none" stroke-linecap="round" stroke-linejoin="round"
        />
      </g>
    </svg>
  </FigFrame>
</template>
