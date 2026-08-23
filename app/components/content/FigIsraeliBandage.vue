<script setup lang="ts">
withDefaults(defineProps<{ caption?: string }>(), {
  caption: 'Ізраїльський бандаж: подушечка на рану, планка з прорізом задає тиск, зміна напрямку обмотування цей тиск утримує.'
})

const steps = [
  { n: 1, x: 8, y: 8, lines: ['Розгорнути пакунок, не', 'торкаючись білої подушечки,', 'і накласти її прямо на рану'] },
  { n: 2, x: 228, y: 8, lines: ['Обмотати кінцівку один-два', 'оберти, притискаючи', 'подушечку до рани'] },
  { n: 3, x: 448, y: 8, lines: ['Завести бинт у проріз', 'пластикової планки', 'і туго натягнути'] },
  { n: 4, x: 8, y: 278, lines: ['Різко змінити напрямок', 'обмотування — планка', 'втискає подушечку в рану'] },
  { n: 5, x: 228, y: 278, lines: ['Обмотувати далі внатяг,', 'повністю закриваючи', 'подушечку й краї рани'] },
  { n: 6, x: 448, y: 278, lines: ['Закріпити кінець фіксатором.', 'Пальці нижче мають лишатися', 'теплими й чутливими'] }
]
</script>

<template>
  <FigFrame :caption="caption">
    <svg viewBox="0 0 660 540" role="img" aria-label="Шість кроків накладання ізраїльського бандажа">
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

      <!-- 1: подушечка на рану -->
      <g transform="translate(8 8)">
        <rect x="18" y="108" width="168" height="44" rx="22" class="text-muted" fill="currentColor" fill-opacity="0.35" />
        <path d="M92 122 q10 -8 20 2" class="text-primary" stroke="currentColor" stroke-width="5" fill="none" stroke-linecap="round" />
        <g class="text-highlighted">
          <rect x="74" y="48" width="58" height="34" rx="6" fill="currentColor" fill-opacity="0.5" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" />
          <path d="M132 66 h34" stroke="currentColor" stroke-width="9" stroke-opacity="0.4" stroke-linecap="round" />
        </g>
        <g class="text-primary">
          <path d="M103 88 V106" stroke="currentColor" stroke-width="3" stroke-linecap="round" />
          <path d="M96 98 L103 108 L110 98" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round" />
        </g>
      </g>

      <!-- 2: перший оберт -->
      <g transform="translate(228 8)">
        <rect x="18" y="96" width="168" height="44" rx="22" class="text-muted" fill="currentColor" fill-opacity="0.35" />
        <rect x="76" y="92" width="54" height="52" rx="6" class="text-highlighted" fill="currentColor" fill-opacity="0.5" />
        <g class="text-highlighted" stroke="currentColor" stroke-opacity="0.65" stroke-width="11" stroke-linecap="round" fill="none">
          <path d="M84 88 q18 -14 36 0" />
          <path d="M84 148 q18 14 36 0" />
        </g>
        <g class="text-primary">
          <path d="M150 118 h22" stroke="currentColor" stroke-width="3" stroke-linecap="round" />
          <path d="M164 110 L174 118 L164 126" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round" />
        </g>
      </g>

      <!-- 3: планка -->
      <g transform="translate(448 8)">
        <rect x="18" y="96" width="168" height="44" rx="22" class="text-muted" fill="currentColor" fill-opacity="0.35" />
        <rect x="76" y="92" width="54" height="52" rx="6" class="text-highlighted" fill="currentColor" fill-opacity="0.45" />
        <g class="text-primary">
          <rect x="70" y="56" width="66" height="28" rx="6" fill="currentColor" />
          <rect x="82" y="64" width="42" height="12" rx="4" class="text-default" fill="currentColor" fill-opacity="0.9" />
        </g>
        <g class="text-highlighted" stroke="currentColor" stroke-opacity="0.65" stroke-width="10" stroke-linecap="round" fill="none">
          <path d="M103 92 V78" />
          <path d="M103 62 q-24 -14 -46 -10" />
        </g>
        <text x="142" y="60" font-size="11" class="text-dimmed fill-current">планка</text>
      </g>

      <!-- 4: зміна напрямку -->
      <g transform="translate(8 278)">
        <rect x="18" y="96" width="168" height="44" rx="22" class="text-muted" fill="currentColor" fill-opacity="0.35" />
        <rect x="76" y="92" width="54" height="52" rx="6" class="text-highlighted" fill="currentColor" fill-opacity="0.45" />
        <g class="text-primary">
          <rect x="70" y="58" width="66" height="26" rx="6" fill="currentColor" />
          <path d="M103 40 V58" stroke="currentColor" stroke-width="3" stroke-linecap="round" />
          <path d="M96 50 L103 60 L110 50" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round" />
        </g>
        <g class="text-highlighted" stroke="currentColor" stroke-opacity="0.65" stroke-width="10" stroke-linecap="round" fill="none">
          <path d="M103 84 V92" />
          <path d="M103 70 q28 -12 52 -4" />
        </g>
        <g class="text-primary">
          <path d="M150 74 a26 26 0 0 1 6 34" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round" />
          <path d="M148 100 L157 110 L164 100" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round" />
        </g>
      </g>

      <!-- 5: щільне обмотування -->
      <g transform="translate(228 278)">
        <rect x="18" y="96" width="168" height="44" rx="22" class="text-muted" fill="currentColor" fill-opacity="0.35" />
        <g class="text-highlighted">
          <rect x="62" y="88" width="82" height="60" rx="8" fill="currentColor" fill-opacity="0.5" />
          <g stroke="currentColor" stroke-opacity="0.75" stroke-width="3" fill="none">
            <path d="M72 88 q12 30 0 60" />
            <path d="M92 88 q12 30 0 60" />
            <path d="M112 88 q12 30 0 60" />
            <path d="M132 88 q10 30 0 60" />
          </g>
        </g>
        <rect x="62" y="60" width="82" height="20" rx="5" class="text-primary" fill="currentColor" fill-opacity="0.85" />
        <text x="103" y="52" text-anchor="middle" font-size="11" class="text-dimmed fill-current">рівномірно, внатяг</text>
      </g>

      <!-- 6: фіксація й перевірка пальців -->
      <g transform="translate(448 278)">
        <rect x="18" y="96" width="168" height="44" rx="22" class="text-muted" fill="currentColor" fill-opacity="0.35" />
        <g class="text-highlighted">
          <rect x="52" y="88" width="76" height="60" rx="8" fill="currentColor" fill-opacity="0.5" />
        </g>
        <g class="text-primary">
          <rect x="112" y="106" width="22" height="24" rx="4" fill="currentColor" />
          <path d="M118 106 v-8 M128 106 v-8" stroke="currentColor" stroke-width="3" stroke-linecap="round" />
        </g>
        <g class="text-emerald-500">
          <path d="M150 118 h20" stroke="currentColor" stroke-width="14" stroke-linecap="round" stroke-opacity="0.45" />
          <circle cx="176" cy="80" r="17" fill="currentColor" fill-opacity="0.15" />
          <path d="M168 80 l6 7 l11 -13" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round" />
        </g>
        <text x="124" y="152" font-size="11" class="text-dimmed fill-current">пальці теплі</text>
      </g>
    </svg>
  </FigFrame>
</template>
