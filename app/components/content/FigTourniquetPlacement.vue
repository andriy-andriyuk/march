<script setup lang="ts">
withDefaults(defineProps<{ title?: string; caption?: string }>(), {
  title: 'Місце накладання турнікета',
  caption: 'Куди накладати: під вогнем — максимально високо на кінцівці; у відносній безпеці — на 5–7 см вище рани, але ніколи не на суглоб.'
})
</script>

<template>
  <FigFrame :title="title" :caption="caption">
    <svg viewBox="0 0 660 400" role="img" aria-label="Місця накладання турнікета на руку та ногу">
      <!-- Рука -->
      <g transform="translate(8 0)">
        <rect x="0" y="8" width="316" height="384" rx="14" class="text-muted" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-opacity="0.25" />
        <text x="20" y="36" font-size="15" font-weight="600" class="text-highlighted fill-current">Рука</text>

        <!-- кінцівка -->
        <g class="text-muted">
          <rect x="118" y="56" width="58" height="290" rx="29" fill="currentColor" fill-opacity="0.35" />
          <circle cx="147" cy="200" r="30" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="5 5" stroke-opacity="0.7" />
        </g>
        <text x="196" y="196" font-size="12" class="text-muted fill-current">лікоть</text>

        <!-- рана -->
        <g class="text-primary">
          <path d="M126 268 q10 -10 20 0 q10 10 22 -2" stroke="currentColor" stroke-width="6" fill="none" stroke-linecap="round" />
        </g>
        <text x="188" y="272" font-size="12" class="text-primary fill-current">рана</text>

        <!-- турнікет: high & tight -->
        <g class="text-primary">
          <rect x="108" y="82" width="78" height="22" rx="5" fill="currentColor" />
          <rect x="140" y="66" width="14" height="14" rx="3" fill="currentColor" />
          <path d="M147 66 L172 50" stroke="currentColor" stroke-width="6" stroke-linecap="round" />
        </g>
        <text x="20" y="90" font-size="12" font-weight="600" class="text-primary fill-current">під вогнем</text>
        <text x="20" y="106" font-size="11.5" class="text-muted fill-current">якнайвище,</text>
        <text x="20" y="121" font-size="11.5" class="text-muted fill-current">поверх одягу</text>

        <!-- турнікет: 5-7 см вище рани (вище суглоба, бо рана на передпліччі) -->
        <g class="text-emerald-500">
          <rect x="108" y="142" width="78" height="20" rx="5" fill="currentColor" fill-opacity="0.85" />
        </g>
        <text x="20" y="152" font-size="12" font-weight="600" class="text-emerald-500 fill-current">спокійніше:</text>
        <text x="20" y="168" font-size="11.5" class="text-muted fill-current">вище рани,</text>
        <text x="20" y="183" font-size="11.5" class="text-muted fill-current">повз суглоб</text>

        <!-- заборонено: на суглобі -->
        <g class="text-muted" opacity="0.85">
          <rect x="112" y="190" width="70" height="20" rx="5" fill="currentColor" fill-opacity="0.45" />
          <path d="M104 178 L192 222 M192 178 L104 222" class="text-primary" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" />
        </g>
        <text x="198" y="228" font-size="11.5" font-weight="600" class="text-primary fill-current">не на суглоб</text>
      </g>

      <!-- Нога -->
      <g transform="translate(336 0)">
        <rect x="0" y="8" width="316" height="384" rx="14" class="text-muted" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-opacity="0.25" />
        <text x="20" y="36" font-size="15" font-weight="600" class="text-highlighted fill-current">Нога</text>

        <g class="text-muted">
          <rect x="112" y="56" width="74" height="290" rx="36" fill="currentColor" fill-opacity="0.35" />
          <circle cx="149" cy="214" r="32" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="5 5" stroke-opacity="0.7" />
        </g>
        <text x="196" y="218" font-size="12" class="text-muted fill-current">коліно</text>

        <g class="text-primary">
          <path d="M124 288 q12 -12 24 0 q12 12 26 -2" stroke="currentColor" stroke-width="6" fill="none" stroke-linecap="round" />
        </g>
        <text x="196" y="292" font-size="12" class="text-primary fill-current">рана</text>

        <g class="text-primary">
          <rect x="100" y="82" width="98" height="24" rx="5" fill="currentColor" />
          <rect x="142" y="64" width="14" height="14" rx="3" fill="currentColor" />
          <path d="M149 64 L176 48" stroke="currentColor" stroke-width="6" stroke-linecap="round" />
        </g>
        <text x="20" y="92" font-size="12" font-weight="600" class="text-primary fill-current">під вогнем</text>
        <text x="20" y="108" font-size="11.5" class="text-muted fill-current">у верхній</text>
        <text x="20" y="123" font-size="11.5" class="text-muted fill-current">третині стегна</text>

        <g class="text-emerald-500">
          <rect x="100" y="150" width="98" height="22" rx="5" fill="currentColor" fill-opacity="0.85" />
        </g>
        <text x="20" y="160" font-size="12" font-weight="600" class="text-emerald-500 fill-current">спокійніше:</text>
        <text x="20" y="176" font-size="11.5" class="text-muted fill-current">вище рани</text>
        <text x="20" y="191" font-size="11.5" class="text-muted fill-current">на 5–7 см</text>

        <!-- стрілка проміжку 5–7 см -->
        <g class="text-emerald-500">
          <path d="M240 172 V288" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 4" />
          <path d="M234 178 L240 172 L246 178 M234 282 L240 288 L246 282" stroke="currentColor" stroke-width="1.5" fill="none" />
          <text x="250" y="234" font-size="11.5" class="text-emerald-500 fill-current">5–7 см</text>
        </g>
      </g>
    </svg>
  </FigFrame>
</template>
