<script setup lang="ts">
withDefaults(defineProps<{ title?: string; caption?: string }>(), {
  title: 'Склад аптечки',
  caption: 'Мінімальний набір, з яким можна відпрацювати весь MARCH. Усе інше — приємні доповнення, але не заміна цьому.'
})

const items = [
  { letter: 'M', title: 'Турнікет', sub: ['один напоготові,', 'другий у запасі'] },
  { letter: 'M', title: 'Гемостатичний бинт', sub: ['для шиї, пахви, паху —', 'там, де турнікет не працює'] },
  { letter: 'M', title: 'Ізраїльський бандаж', sub: ['тиснуча пов’язка', 'з планкою'] },
  { letter: 'A', title: 'Повітропровід (NPA)', sub: ['разом із мастилом-', 'любрикантом'] },
  { letter: 'R', title: 'Оклюзійні наклейки', sub: ['дві: на вхідний', 'і вихідний отвір'] },
  { letter: 'C', title: 'Ножиці й маркер', sub: ['зрізати одяг,', 'підписати час'] },
  { letter: 'H', title: 'Термоковдра', sub: ['і хімічна грілка,', 'якщо є місце'] },
  { letter: '·', title: 'Рукавички', sub: ['дві пари,', 'нітрилові'] },
  { letter: '·', title: 'Картка пораненого', sub: ['й олівець, що пише', 'по мокрому'] }
]
</script>

<template>
  <FigFrame :title="title" :caption="caption">
    <svg viewBox="0 0 660 420" role="img" aria-label="Склад індивідуальної аптечки">
      <g
        v-for="(item, i) in items" :key="item.title"
        :transform="`translate(${8 + (i % 3) * 220} ${8 + Math.floor(i / 3) * 136})`"
      >
        <rect x="0" y="0" width="212" height="128" rx="12" class="text-muted" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-opacity="0.25" />
        <rect x="16" y="18" width="30" height="30" rx="8" class="text-primary" fill="currentColor" fill-opacity="0.14" />
        <text x="31" y="39" text-anchor="middle" font-size="15" font-weight="700" class="text-primary fill-current">
          {{ item.letter }}
        </text>
        <text x="56" y="39" font-size="13.5" font-weight="600" class="text-highlighted fill-current">
          {{ item.title }}
        </text>
        <text
          v-for="(line, j) in item.sub" :key="line"
          x="16" :y="76 + j * 20" font-size="12" class="text-muted fill-current"
        >{{ line }}</text>
      </g>
    </svg>
  </FigFrame>
</template>
