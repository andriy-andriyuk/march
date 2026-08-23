<script setup lang="ts">
withDefaults(defineProps<{ title?: string; caption?: string }>(), {
  title: 'Зони надання допомоги',
  caption: 'Обсяг допомоги залежить від того, наскільки безпечно там, де ви зараз.'
})

const zones = [
  {
    x: 8,
    name: 'Червона зона',
    en: 'Care Under Fire',
    tone: 'text-primary',
    lines: ['Стріляють, є пряма загроза.', 'Найкращий «медзасіб» —', 'вогонь у відповідь і укриття.'],
    doing: ['Турнікет на кінцівку', 'Витягнути в укриття']
  },
  {
    x: 224,
    name: 'Жовта зона',
    en: 'Tactical Field Care',
    tone: 'text-amber-500',
    lines: ['Прямої загрози немає,', 'але ви ще не в безпеці.', 'Є хвилини на роботу.'],
    doing: ['Повний огляд за MARCH', 'Пов’язки, наклейка, тепло']
  },
  {
    x: 440,
    name: 'Зелена зона',
    en: 'Tactical Evacuation',
    tone: 'text-emerald-500',
    lines: ['Евакуація, укриття, транспорт.', 'Час на переоцінку', 'і документування.'],
    doing: ['Повторний огляд MARCH', 'Картка пораненого, MIST']
  }
]
</script>

<template>
  <FigFrame :title="title" :caption="caption">
    <svg viewBox="0 0 660 300" role="img" aria-label="Три зони надання допомоги">
      <g v-for="zone in zones" :key="zone.name" :transform="`translate(${zone.x} 0)`">
        <rect
          x="0" y="8" width="212" height="284" rx="14"
          :class="zone.tone" fill="currentColor" fill-opacity="0.07"
          stroke="currentColor" stroke-opacity="0.35"
        />
        <circle cx="28" cy="42" r="11" :class="zone.tone" fill="currentColor" />
        <text x="50" y="40" font-size="15" font-weight="600" class="text-highlighted fill-current">
          {{ zone.name }}
        </text>
        <text x="50" y="57" font-size="11" class="text-muted fill-current">{{ zone.en }}</text>
        <text
          v-for="(line, i) in zone.lines" :key="line"
          x="20" :y="94 + i * 18" font-size="12.5" class="text-muted fill-current"
        >{{ line }}</text>
        <text x="20" y="176" font-size="11" font-weight="600" class="text-muted fill-current">
          ЩО РОБИМО
        </text>
        <g v-for="(item, i) in zone.doing" :key="item">
          <circle :cx="26" :cy="200 + i * 26" r="3.5" :class="zone.tone" fill="currentColor" />
          <text x="40" :y="204 + i * 26" font-size="12.5" class="text-default fill-current">{{ item }}</text>
        </g>
      </g>
    </svg>
  </FigFrame>
</template>
