<script setup lang="ts">
withDefaults(defineProps<{ caption?: string }>(), {
  caption: 'Небезпечна зона грудної клітки — від ключиць до пупка, разом з боками й спиною. Оглядати треба всю, бо рани зазвичай ходять парами: вхід і вихід.'
})
</script>

<template>
  <FigFrame :caption="caption">
    <svg viewBox="0 0 660 420" role="img" aria-label="Зона огляду грудної клітки спереду та ззаду">
      <FigPanel :x="8" :y="8" :w="204" :h="404" title="Спереду" :text-y="368" :lines="['Від ключиць до пупка,', 'включно з боками']">
        <g transform="translate(2 40) scale(0.72)">
          <FigBody />
          <g class="text-primary">
            <rect x="52" y="78" width="96" height="150" rx="18" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2.5" stroke-dasharray="7 5" />
            <path d="M118 132 q8 -8 16 2" stroke="currentColor" stroke-width="7" fill="none" stroke-linecap="round" />
          </g>
        </g>
      </FigPanel>

      <FigPanel :x="228" :y="8" :w="204" :h="404" title="Ззаду" :text-y="368" :lines="['Обов’язково перевернути', 'або завести руку під спину']">
        <g transform="translate(2 40) scale(0.72)">
          <FigBody back />
          <g class="text-primary">
            <rect x="52" y="78" width="96" height="150" rx="18" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2.5" stroke-dasharray="7 5" />
            <path d="M70 168 q8 -8 16 2" stroke="currentColor" stroke-width="7" fill="none" stroke-linecap="round" />
          </g>
        </g>
      </FigPanel>

      <FigPanel :x="448" :y="8" :w="204" :h="404" title="Правило пар">
        <g transform="translate(0 0)">
          <text x="18" y="72" font-size="12.5" class="text-muted fill-current">Куля або уламок рідко</text>
          <text x="18" y="90" font-size="12.5" class="text-muted fill-current">лишається в тілі. Знайшли</text>
          <text x="18" y="108" font-size="12.5" class="text-muted fill-current">одну дірку — шукайте другу.</text>

          <g class="text-primary" transform="translate(30 130)">
            <rect x="0" y="0" width="144" height="70" rx="12" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-opacity="0.35" />
            <circle cx="36" cy="35" r="9" fill="currentColor" />
            <text x="36" y="60" text-anchor="middle" font-size="11" class="text-muted fill-current">вхід</text>
            <path d="M52 35 H92" stroke="currentColor" stroke-width="2.5" stroke-dasharray="5 4" />
            <circle cx="110" cy="35" r="13" fill="currentColor" fill-opacity="0.6" />
            <text x="110" y="60" text-anchor="middle" font-size="11" class="text-muted fill-current">вихід</text>
          </g>

          <text x="18" y="240" font-size="12.5" class="text-toned fill-current">Заклеювати треба кожен</text>
          <text x="18" y="258" font-size="12.5" class="text-toned fill-current">отвір, а не тільки той,</text>
          <text x="18" y="276" font-size="12.5" class="text-toned fill-current">який побачили першим.</text>

          <g class="text-dimmed" transform="translate(18 300)">
            <path d="M0 0 h168" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.4" />
          </g>
          <text x="18" y="330" font-size="12" class="text-muted fill-current">Шию, пахви й спину</text>
          <text x="18" y="348" font-size="12" class="text-muted fill-current">оглядають так само уважно.</text>
        </g>
      </FigPanel>
    </svg>
  </FigFrame>
</template>
