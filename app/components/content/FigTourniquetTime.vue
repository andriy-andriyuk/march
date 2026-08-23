<script setup lang="ts">
withDefaults(defineProps<{ caption?: string }>(), {
  caption: 'Час на турнікеті — це не формальність: від нього залежить, чи можна буде його послабити і що робитимуть медики далі.'
})

const zones = [
  {
    x: 30, w: 190, tone: 'text-emerald-500', title: 'До 2 годин',
    lines: ['Кінцівка добре переносить.', 'Тут можлива конверсія —', 'заміна турнікета на пов’язку.']
  },
  {
    x: 234, w: 190, tone: 'text-amber-500', title: '2–6 годин',
    lines: ['Самостійно вже не знімають.', 'Турнікет лишається до медиків,', 'час — записаний.']
  },
  {
    x: 438, w: 190, tone: 'text-primary', title: 'Понад 6 годин',
    lines: ['Знімати поза лікарнею', 'небезпечно для життя:', 'кров понесе токсини по тілу.']
  }
]
</script>

<template>
  <FigFrame :caption="caption">
    <svg viewBox="0 0 660 276" role="img" aria-label="Часова шкала перебування турнікета на кінцівці">
      <path d="M30 62 H628" class="text-muted" stroke="currentColor" stroke-width="2" stroke-opacity="0.4" />
      <g class="text-muted">
        <path d="M30 54 V70 M234 54 V70 M438 54 V70 M628 54 V70" stroke="currentColor" stroke-width="2" stroke-opacity="0.5" />
      </g>
      <text x="30" y="42" font-size="12" class="text-dimmed fill-current">0</text>
      <text x="234" y="42" font-size="12" class="text-dimmed fill-current">2 год</text>
      <text x="438" y="42" font-size="12" class="text-dimmed fill-current">6 год</text>

      <g v-for="z in zones" :key="z.title">
        <rect :x="z.x" y="80" :width="z.w" height="140" rx="12" :class="z.tone" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-opacity="0.35" />
        <rect :x="z.x" y="56" :width="z.w" height="12" rx="6" :class="z.tone" fill="currentColor" fill-opacity="0.7" />
        <text :x="z.x + 16" y="110" font-size="14" font-weight="600" class="text-highlighted fill-current">{{ z.title }}</text>
        <text
          v-for="(line, i) in z.lines" :key="line"
          :x="z.x + 16" :y="136 + i * 19" font-size="12.5" class="text-muted fill-current"
        >{{ line }}</text>
      </g>

      <text x="30" y="240" font-size="12.5" class="text-primary fill-current">Турнікет ніколи не «послаблюють, щоб кров трохи пішла»:</text>
      <text x="30" y="256" font-size="12.5" class="text-primary fill-current">його або лишають, або знімають повністю й за протоколом.</text>
    </svg>
  </FigFrame>
</template>
