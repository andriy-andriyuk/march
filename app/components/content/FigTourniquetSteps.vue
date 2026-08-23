<script setup lang="ts">
withDefaults(defineProps<{ caption?: string }>(), {
  caption: 'Накладання турнікета крок за кроком. Уся послідовність має вкладатися приблизно в 20–30 секунд.'
})

const steps = [
  { n: 1, x: 8, y: 8, lines: ['Сильна кровотеча', 'з руки чи ноги —', 'турнікет, не роздумуючи'] },
  { n: 2, x: 228, y: 8, lines: ['Завести петлю вище рани', 'й вибрати всю слабину', 'стрічки (палець не пролазить)'] },
  { n: 3, x: 448, y: 8, lines: ['Крутити коловорот,', 'доки кровотеча не спиниться', '— зазвичай 2–4 оберти'] },
  { n: 4, x: 8, y: 278, lines: ['Зафіксувати коловорот', 'у кліпсі й защіпнути', 'фіксуючу стрічку'] },
  { n: 5, x: 228, y: 278, lines: ['Записати час накладання', 'на самому турнікеті', '(не на шкірі й не в думках)'] },
  { n: 6, x: 448, y: 278, lines: ['Перевірити: кров не тече,', 'пульсу нижче немає.', 'Якщо тече — другий турнікет'] }
]
</script>

<template>
  <FigFrame :caption="caption">
    <svg viewBox="0 0 660 540" role="img" aria-label="Шість кроків накладання турнікета">
      <!-- рамки, номери, підписи -->
      <g v-for="s in steps" :key="s.n" :transform="`translate(${s.x} ${s.y})`">
        <rect
          x="0" y="0" width="204" height="250" rx="12"
          class="text-muted" fill="currentColor" fill-opacity="0.06"
          stroke="currentColor" stroke-opacity="0.25"
        />
        <circle cx="26" cy="28" r="13" class="text-primary" fill="currentColor" />
        <text x="26" y="33" text-anchor="middle" font-size="14" font-weight="700" class="text-inverted fill-current">
          {{ s.n }}
        </text>
        <text
          v-for="(line, i) in s.lines" :key="line"
          x="18" :y="186 + i * 18" font-size="12" class="text-muted fill-current"
        >{{ line }}</text>
      </g>

      <!-- 1. рана й кровотеча -->
      <g transform="translate(8 8)">
        <rect x="18" y="92" width="168" height="44" rx="22" class="text-muted" fill="currentColor" fill-opacity="0.35" />
        <g class="text-primary">
          <path d="M140 106 q10 -10 20 0 q10 10 20 -2" stroke="currentColor" stroke-width="6" fill="none" stroke-linecap="round" />
          <path d="M150 142 q7 12 -3 12 q-10 0 -3 -12 z" fill="currentColor" />
          <path d="M170 150 q6 10 -2.5 10 q-8.5 0 -2.5 -10 z" fill="currentColor" fill-opacity="0.7" />
        </g>
      </g>

      <!-- 2. петля й затягування стрічки -->
      <g transform="translate(228 8)">
        <rect x="18" y="92" width="168" height="44" rx="22" class="text-muted" fill="currentColor" fill-opacity="0.35" />
        <g class="text-primary">
          <path d="M136 106 q10 -10 20 0" stroke="currentColor" stroke-width="5" fill="none" stroke-linecap="round" />
          <rect x="64" y="80" width="24" height="68" rx="5" fill="currentColor" />
          <path d="M64 100 H26" stroke="currentColor" stroke-width="10" stroke-linecap="round" />
          <path d="M40 84 L20 100 L40 116" stroke="currentColor" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round" />
        </g>
      </g>

      <!-- 3. коловорот -->
      <g transform="translate(448 8)">
        <rect x="18" y="98" width="168" height="44" rx="22" class="text-muted" fill="currentColor" fill-opacity="0.35" />
        <g class="text-primary">
          <rect x="76" y="86" width="24" height="68" rx="5" fill="currentColor" />
          <path d="M88 86 L88 52" stroke="currentColor" stroke-width="9" stroke-linecap="round" />
          <circle cx="88" cy="48" r="7" fill="currentColor" />
          <path d="M118 62 a34 34 0 1 0 -14 30" stroke="currentColor" stroke-width="3.5" fill="none" stroke-linecap="round" />
          <path d="M112 50 L120 62 L107 68" stroke="currentColor" stroke-width="3.5" fill="none" stroke-linecap="round" stroke-linejoin="round" />
        </g>
      </g>

      <!-- 4. фіксація в кліпсі -->
      <g transform="translate(8 278)">
        <rect x="18" y="98" width="168" height="44" rx="22" class="text-muted" fill="currentColor" fill-opacity="0.35" />
        <g class="text-primary">
          <rect x="72" y="92" width="24" height="62" rx="5" fill="currentColor" />
          <path d="M84 92 V66 H140" stroke="currentColor" stroke-width="9" fill="none" stroke-linecap="round" stroke-linejoin="round" />
        </g>
        <g class="text-toned">
          <path d="M126 50 h16 a10 10 0 0 1 10 10 v12 a10 10 0 0 1 -10 10 h-16" stroke="currentColor" stroke-width="4.5" fill="none" stroke-linecap="round" />
          <path d="M150 44 V38 h14" stroke="currentColor" stroke-width="1.5" fill="none" stroke-opacity="0.6" />
        </g>
        <text x="150" y="34" font-size="11.5" class="text-dimmed fill-current">кліпса</text>
      </g>

      <!-- 5. час -->
      <g transform="translate(228 278)">
        <rect x="18" y="98" width="168" height="44" rx="22" class="text-muted" fill="currentColor" fill-opacity="0.35" />
        <g class="text-primary">
          <rect x="72" y="86" width="24" height="68" rx="5" fill="currentColor" />
          <path d="M84 86 L124 76" stroke="currentColor" stroke-width="8" stroke-linecap="round" />
        </g>
        <rect x="102" y="44" width="76" height="30" rx="6" class="text-muted" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-opacity="0.4" />
        <text x="140" y="64" text-anchor="middle" font-size="15" font-weight="700" class="text-highlighted fill-current">14:35</text>
        <path d="M124 76 L134 74" class="text-muted" stroke="currentColor" stroke-width="2" />
      </g>

      <!-- 6. перевірка -->
      <g transform="translate(448 278)">
        <rect x="18" y="98" width="168" height="44" rx="22" class="text-muted" fill="currentColor" fill-opacity="0.35" />
        <g class="text-primary">
          <rect x="58" y="86" width="24" height="68" rx="5" fill="currentColor" />
          <path d="M70 86 L108 76" stroke="currentColor" stroke-width="8" stroke-linecap="round" />
        </g>
        <g class="text-emerald-500">
          <circle cx="150" cy="120" r="19" fill="currentColor" fill-opacity="0.15" />
          <path d="M141 120 l6 7 l12 -14" stroke="currentColor" stroke-width="3.5" fill="none" stroke-linecap="round" stroke-linejoin="round" />
        </g>
        <g class="text-muted">
          <path d="M120 58 h14 l6 -12 l8 24 l6 -12 h16" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M118 40 L172 76" class="text-primary" stroke="currentColor" stroke-width="3" stroke-linecap="round" />
        </g>
        <text x="116" y="36" font-size="11.5" class="text-dimmed fill-current">пульс</text>
      </g>
    </svg>
  </FigFrame>
</template>
