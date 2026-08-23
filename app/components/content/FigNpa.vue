<script setup lang="ts">
withDefaults(defineProps<{ caption?: string }>(), {
  caption: 'Назофарингеальний повітропровід — трубка, що тримає прохід відкритим, поки ви зайняті іншим. Її переносять навіть напівпритомні.'
})
</script>

<template>
  <FigFrame :caption="caption">
    <svg viewBox="0 0 660 300" role="img" aria-label="Введення назофарингеального повітропроводу">
      <!-- 1. розмір -->
      <FigPanel :x="8" :y="8" :w="204" :h="284" :n="1" :lines="['Довжина — від ніздрі', 'до мочки вуха, товщина —', 'приблизно як мізинець']" :text-y="212">
        <g transform="translate(6 26)">
          <circle cx="96" cy="86" r="44" class="text-muted" fill="currentColor" fill-opacity="0.35" />
          <circle cx="58" cy="92" r="4" class="text-toned" fill="currentColor" />
          <circle cx="128" cy="106" r="9" class="text-toned" fill="currentColor" fill-opacity="0.6" />
          <path d="M58 92 L128 106" class="text-primary" stroke="currentColor" stroke-width="3" stroke-dasharray="6 5" />
          <path d="M52 84 V100 M134 98 V114" class="text-primary" stroke="currentColor" stroke-width="3" stroke-linecap="round" />
          <text x="70" y="140" font-size="11.5" class="text-primary fill-current">ніздря → вухо</text>
        </g>
      </FigPanel>

      <!-- 2. напрямок -->
      <FigPanel :x="228" :y="8" :w="204" :h="284" :n="2" :lines="['Змастити й вводити', 'прямо назад, по дну носа,', 'легко прокручуючи — не вгору']" :text-y="212">
        <g transform="translate(6 26)">
          <circle cx="96" cy="86" r="44" class="text-muted" fill="currentColor" fill-opacity="0.35" />
          <path d="M58 92 H112" class="text-emerald-500" stroke="currentColor" stroke-width="7" stroke-linecap="round" />
          <path d="M100 84 L114 92 L100 100" class="text-emerald-500" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M58 88 L92 58" class="text-primary" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-dasharray="7 6" />
          <path d="M78 44 L102 66 M104 42 L76 68" class="text-primary" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" />
          <text x="20" y="150" font-size="11.5" class="text-emerald-500 fill-current">так — паралельно</text>
          <text x="20" y="166" font-size="11.5" class="text-primary fill-current">не так — угору</text>
        </g>
      </FigPanel>

      <!-- 3. фіксація -->
      <FigPanel :x="448" :y="8" :w="204" :h="284" :n="3" :lines="['Фланець упирається', 'в ніздрю. Далі — стабільне', 'положення на боці']" :text-y="212">
        <g transform="translate(6 26)">
          <circle cx="96" cy="86" r="44" class="text-muted" fill="currentColor" fill-opacity="0.35" />
          <path d="M60 92 q28 4 36 26 q6 16 2 30" class="text-primary" stroke="currentColor" stroke-width="8" fill="none" stroke-linecap="round" opacity="0.85" />
          <circle cx="56" cy="92" r="9" class="text-primary" fill="none" stroke="currentColor" stroke-width="4" />
          <text x="14" y="76" font-size="11" class="text-dimmed fill-current">фланець</text>
          <g class="text-emerald-500">
            <path d="M120 150 q18 6 30 0" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round" />
            <circle cx="160" cy="148" r="14" fill="currentColor" fill-opacity="0.15" />
            <path d="M153 148 l5 6 l9 -11" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round" />
          </g>
          <text x="106" y="180" font-size="11.5" class="text-emerald-500 fill-current">дихання чути</text>
        </g>
      </FigPanel>
    </svg>
  </FigFrame>
</template>
