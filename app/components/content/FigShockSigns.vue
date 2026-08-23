<script setup lang="ts">
withDefaults(defineProps<{ title?: string; caption?: string }>(), {
  title: 'Ознаки шоку',
  caption: 'Шок — це не «злякався», а стан, коли крові не вистачає, щоб живити мозок і органи. Ознаки помітні задовго до того, як зникне пульс.'
})

const signs = [
  { y: 78, text: 'Сплутана свідомість, тривога' },
  { y: 118, text: 'Шкіра бліда, сіра, холодна на дотик' },
  { y: 158, text: 'Липкий піт на чолі' },
  { y: 198, text: 'Дихання часте й поверхневе' },
  { y: 238, text: 'Пульс частий, слабкий, «ниткоподібний»' },
  { y: 278, text: 'Сильна спрага' },
  { y: 318, text: 'Нігтьове ложе світлішає й довго не рожевіє' }
]
</script>

<template>
  <FigFrame :title="title" :caption="caption">
    <svg viewBox="0 0 660 400" role="img" aria-label="Ознаки шоку та перевірка пульсу на зап'ясті">
      <FigPanel :x="8" :y="8" :w="314" :h="384" title="Ознаки шоку">
        <g v-for="s in signs" :key="s.text">
          <circle :cx="30" :cy="s.y - 4" r="5" class="text-primary" fill="currentColor" />
          <text :x="48" :y="s.y" font-size="12.5" class="text-default fill-current">{{ s.text }}</text>
        </g>
      </FigPanel>

      <FigPanel :x="338" :y="8" :w="314" :h="384" title="Перевірка пульсу">
        <g transform="translate(40 70)">
          <path d="M0 40 h130" class="text-muted" stroke="currentColor" stroke-width="34" stroke-linecap="round" stroke-opacity="0.35" />
          <path d="M130 40 q26 -14 44 -4 q-14 12 -30 16 q18 2 30 -2" class="text-muted" stroke="currentColor" stroke-width="18" fill="none" stroke-linecap="round" stroke-opacity="0.35" />
          <g class="text-primary">
            <path d="M96 22 V4" stroke="currentColor" stroke-width="12" stroke-linecap="round" />
            <path d="M112 24 V8" stroke="currentColor" stroke-width="12" stroke-linecap="round" />
            <circle cx="104" cy="40" r="16" fill="currentColor" fill-opacity="0.18" />
          </g>
          <text x="0" y="104" font-size="12.5" class="text-default fill-current">Двома пальцями (не великим)</text>
          <text x="0" y="122" font-size="12.5" class="text-default fill-current">з боку великого пальця,</text>
          <text x="0" y="140" font-size="12.5" class="text-default fill-current">трохи вище складки зап’ястя.</text>
        </g>

        <rect x="18" y="252" width="278" height="112" rx="10" class="text-muted" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-opacity="0.25" />
        <text x="34" y="278" font-size="12" font-weight="600" class="text-muted fill-current">ЯК ЧИТАТИ РЕЗУЛЬТАТ</text>
        <text x="34" y="302" font-size="12.5" class="text-default fill-current">Пульс на зап’ясті добре відчутний —</text>
        <text x="34" y="320" font-size="12.5" class="text-default fill-current">тиск поки що прийнятний.</text>
        <text x="34" y="342" font-size="12.5" class="text-primary fill-current">Зник, а на шиї є — крові втрачено</text>
        <text x="34" y="358" font-size="12.5" class="text-primary fill-current">багато, це вже важкий шок.</text>
      </FigPanel>
    </svg>
  </FigFrame>
</template>
