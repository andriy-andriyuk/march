<script setup lang="ts">
withDefaults(defineProps<{ caption?: string }>(), {
  caption: 'Тампонування: бинт заштовхують углиб рани до самого джерела крові, а не накладають зверху.'
})

const steps = [
  { n: 1, x: 8, y: 8, lines: ['Притиснути пальцями', 'чи кулаком прямо в рану —', 'тиск не відпускаємо'] },
  { n: 2, x: 228, y: 8, lines: ['Заштовхувати бинт углиб,', 'по кілька сантиметрів,', 'просто до джерела крові'] },
  { n: 3, x: 448, y: 8, lines: ['Заповнити рану щільно,', 'до країв: порожнеча всередині', 'знову наповниться кров’ю'] },
  { n: 4, x: 8, y: 278, lines: ['Тиснути зверху щонайменше', '3 хвилини за годинником —', 'не «на око»'] },
  { n: 5, x: 228, y: 278, lines: ['Зверху — тиснуча пов’язка,', 'щоб тиск тримався', 'без ваших рук'] },
  { n: 6, x: 448, y: 278, lines: ['Промокає наскрізь — не знімай,', 'а тампонувати ще раз', 'у ту саму рану'] }
]
</script>

<template>
  <FigFrame :caption="caption">
    <svg viewBox="0 0 660 540" role="img" aria-label="Шість кроків тампонування рани">
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

      <!-- 1: тиск пальцями -->
      <g transform="translate(8 8)">
        <path d="M18 152 q84 -46 168 0 v10 H18 Z" class="text-muted" fill="currentColor" fill-opacity="0.35" />
        <path d="M86 130 q16 -26 32 0 q-16 24 -32 0 z" class="text-primary" fill="currentColor" fill-opacity="0.55" />
        <g class="text-toned">
          <path d="M102 128 V72" stroke="currentColor" stroke-width="14" stroke-linecap="round" />
          <path d="M116 92 V74" stroke="currentColor" stroke-width="12" stroke-linecap="round" />
          <path d="M88 92 V78" stroke="currentColor" stroke-width="12" stroke-linecap="round" />
        </g>
        <g class="text-primary">
          <path d="M102 40 V62" stroke="currentColor" stroke-width="3" stroke-linecap="round" />
          <path d="M95 56 L102 66 L109 56" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round" />
        </g>
      </g>

      <!-- 2: бинт углиб -->
      <g transform="translate(228 8)">
        <path d="M18 152 q84 -46 168 0 v10 H18 Z" class="text-muted" fill="currentColor" fill-opacity="0.35" />
        <path d="M84 132 q18 -32 36 0 q-18 28 -36 0 z" class="text-primary" fill="currentColor" fill-opacity="0.35" />
        <g class="text-highlighted">
          <path d="M102 130 q-2 -20 8 -34 q10 -14 26 -18 q18 -4 32 4" stroke="currentColor" stroke-width="9" fill="none" stroke-linecap="round" stroke-opacity="0.65" />
        </g>
        <g class="text-primary">
          <path d="M110 92 L102 126" stroke="currentColor" stroke-width="3" stroke-linecap="round" />
          <path d="M96 114 L101 128 L110 118" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round" />
        </g>
      </g>

      <!-- 3: рана заповнена -->
      <g transform="translate(448 8)">
        <path d="M18 152 q84 -46 168 0 v10 H18 Z" class="text-muted" fill="currentColor" fill-opacity="0.35" />
        <path d="M82 132 q20 -34 40 0 q-20 30 -40 0 z" class="text-highlighted" fill="currentColor" fill-opacity="0.5" />
        <g class="text-highlighted" stroke="currentColor" stroke-opacity="0.8" stroke-width="2.5" fill="none">
          <path d="M88 122 q14 -8 28 0" />
          <path d="M86 132 q16 -8 32 0" />
          <path d="M90 112 q12 -6 22 0" />
        </g>
        <path d="M122 116 q22 -10 40 -4" class="text-highlighted" stroke="currentColor" stroke-width="8" stroke-opacity="0.6" fill="none" stroke-linecap="round" />
        <text x="140" y="98" font-size="11" class="text-dimmed fill-current">хвостик</text>
      </g>

      <!-- 4: 3 хвилини тиску -->
      <g transform="translate(8 278)">
        <path d="M18 152 q84 -46 168 0 v10 H18 Z" class="text-muted" fill="currentColor" fill-opacity="0.35" />
        <path d="M78 128 h48 v14 h-48 z" class="text-highlighted" fill="currentColor" fill-opacity="0.45" />
        <g class="text-toned">
          <path d="M102 128 V78" stroke="currentColor" stroke-width="16" stroke-linecap="round" />
          <path d="M120 96 V80" stroke="currentColor" stroke-width="12" stroke-linecap="round" />
          <path d="M84 96 V82" stroke="currentColor" stroke-width="12" stroke-linecap="round" />
        </g>
        <g class="text-primary">
          <circle cx="152" cy="72" r="22" fill="none" stroke="currentColor" stroke-width="3" />
          <path d="M152 58 V72 l10 8" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round" />
          <text x="152" y="116" text-anchor="middle" font-size="13" font-weight="700" class="text-primary fill-current">3 хв</text>
        </g>
      </g>

      <!-- 5: пов'язка зверху -->
      <g transform="translate(228 278)">
        <path d="M18 152 q84 -46 168 0 v10 H18 Z" class="text-muted" fill="currentColor" fill-opacity="0.35" />
        <g class="text-highlighted">
          <rect x="70" y="112" width="64" height="30" rx="6" fill="currentColor" fill-opacity="0.45" />
          <path d="M60 122 h84" stroke="currentColor" stroke-width="10" stroke-opacity="0.55" stroke-linecap="round" />
          <path d="M56 136 h92" stroke="currentColor" stroke-width="10" stroke-opacity="0.55" stroke-linecap="round" />
        </g>
        <g class="text-primary">
          <path d="M102 96 V80" stroke="currentColor" stroke-width="3" stroke-linecap="round" />
          <path d="M95 88 L102 96 L109 88" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round" />
          <text x="102" y="72" text-anchor="middle" font-size="11.5" class="text-primary fill-current">тиск тримається</text>
        </g>
      </g>

      <!-- 6: промокло -->
      <g transform="translate(448 278)">
        <path d="M18 152 q84 -46 168 0 v10 H18 Z" class="text-muted" fill="currentColor" fill-opacity="0.35" />
        <g class="text-highlighted">
          <rect x="70" y="112" width="64" height="30" rx="6" fill="currentColor" fill-opacity="0.4" />
        </g>
        <g class="text-primary">
          <circle cx="102" cy="126" r="13" fill="currentColor" fill-opacity="0.6" />
          <path d="M92 152 q9 14 -4 14 q-13 0 -4 -14 z" fill="currentColor" />
        </g>
        <text x="112" y="52" font-size="11.5" class="text-dimmed fill-current">не знімати —</text>
        <text x="112" y="68" font-size="11.5" class="text-dimmed fill-current">докласти ще</text>
      </g>
    </svg>
  </FigFrame>
</template>
