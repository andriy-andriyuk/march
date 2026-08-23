<script setup lang="ts">
withDefaults(defineProps<{ caption?: string }>(), {
  caption: 'Артеріальна кровотеча вбиває найшвидше — саме її шукають першою і саме на неї витрачають турнікет.'
})

const cards = [
  {
    x: 8,
    title: 'Артеріальна',
    tone: 'text-primary',
    lines: ['Яскраво-червона, б’є', 'поштовхами в такт пульсу.', 'Калюжа росте на очах.'],
    action: ['Турнікет або тампонування —', 'негайно, до всього іншого']
  },
  {
    x: 224,
    title: 'Венозна',
    tone: 'text-sky-500',
    lines: ['Темна, тече рівно,', 'без пульсації, але', 'може бути рясною.'],
    action: ['Пряме притискання', 'і тиснуча пов’язка']
  },
  {
    x: 440,
    title: 'Капілярна',
    tone: 'text-emerald-500',
    lines: ['Сочиться з поверхні,', 'як із садна.', 'Часто спиняється сама.'],
    action: ['Чиста пов’язка,', 'без поспіху']
  }
]
</script>

<template>
  <FigFrame :caption="caption">
    <svg viewBox="0 0 660 330" role="img" aria-label="Три види кровотечі та дії при них">
      <g v-for="card in cards" :key="card.title" :transform="`translate(${card.x} 0)`">
        <rect
          x="0" y="8" width="212" height="314" rx="14"
          :class="card.tone" fill="currentColor" fill-opacity="0.06"
          stroke="currentColor" stroke-opacity="0.3"
        />
        <!-- схема рани зі струменем -->
        <g :class="card.tone">
          <rect x="30" y="34" width="152" height="66" rx="20" class="text-muted" fill="currentColor" fill-opacity="0.35" />
          <template v-if="card.title === 'Артеріальна'">
            <path d="M104 66 C118 44 130 40 146 30" stroke="currentColor" stroke-width="7" fill="none" stroke-linecap="round" />
            <circle cx="152" cy="27" r="5" fill="currentColor" />
            <circle cx="168" cy="21" r="3.5" fill="currentColor" fill-opacity="0.7" />
          </template>
          <template v-else-if="card.title === 'Венозна'">
            <path d="M104 66 C110 82 116 92 120 104" stroke="currentColor" stroke-width="7" fill="none" stroke-linecap="round" />
            <path d="M120 104 q6 14 -6 14 q-12 0 -6 -14 z" fill="currentColor" />
          </template>
          <template v-else>
            <circle v-for="i in 5" :key="i" :cx="86 + i * 12" :cy="70 + (i % 2) * 8" r="3.5" fill="currentColor" fill-opacity="0.8" />
          </template>
        </g>

        <text x="20" y="146" font-size="16" font-weight="600" class="text-highlighted fill-current">
          {{ card.title }}
        </text>
        <text
          v-for="(line, i) in card.lines" :key="line"
          x="20" :y="172 + i * 19" font-size="12.5" class="text-muted fill-current"
        >{{ line }}</text>

        <rect x="16" y="238" width="180" height="66" rx="10" :class="card.tone" fill="currentColor" fill-opacity="0.12" />
        <text x="28" y="262" font-size="11" font-weight="600" class="text-dimmed fill-current">ЩО РОБИТИ</text>
        <text
          v-for="(line, i) in card.action" :key="line"
          x="28" :y="282 + i * 17" font-size="12.5" class="text-toned fill-current"
        >{{ line }}</text>
      </g>
    </svg>
  </FigFrame>
</template>
