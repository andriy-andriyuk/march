<script setup lang="ts">
withDefaults(defineProps<{ caption?: string }>(), {
  caption: 'У непритомного на спині язик западає й перекриває дихання. Закидання голови з підняттям підборіддя або висування щелепи знову відкриває шлях повітрю.'
})
</script>

<template>
  <FigFrame :caption="caption">
    <svg viewBox="0 0 660 320" role="img" aria-label="Прийоми відновлення прохідності дихальних шляхів">
      <!-- 1. проблема -->
      <FigPanel :x="8" :y="8" :w="204" :h="304" :n="1" :lines="['Голова опущена, язик', 'перекрив прохід: хрип,', 'булькання або тиша']" :text-y="228">
        <g transform="translate(-4 -26)">
          <!-- голова в профіль -->
          <g class="text-muted" opacity="0.38">
            <circle cx="112" cy="86" r="34" fill="currentColor" />
            <path d="M124 100 Q108 124 82 116" stroke="currentColor" stroke-width="13" fill="none" stroke-linecap="round" />
            <path d="M126 114 L134 160" stroke="currentColor" stroke-width="30" fill="none" stroke-linecap="round" />
          </g>
          <!-- дихальний шлях -->
          <path
            d="M78 108 Q104 116 114 130 L124 152"
            class="text-muted" stroke="currentColor" stroke-width="11" fill="none"
            stroke-linecap="round" stroke-opacity="0.5"
          />
          <!-- язик перекриває прохід -->
          <ellipse cx="98" cy="118" rx="16" ry="9" class="text-primary" fill="currentColor" transform="rotate(14 98 118)" />
          <g class="text-primary">
            <path d="M104 132 L120 146 M120 132 L104 146" stroke="currentColor" stroke-width="4" stroke-linecap="round" />
          </g>
        </g>
        <text x="16" y="172" font-size="11.5" font-weight="600" class="text-primary fill-current">язик западає —</text>
        <text x="16" y="188" font-size="11.5" class="text-muted fill-current">повітря не проходить</text>
      </FigPanel>

      <!-- 2. голова-підборіддя -->
      <FigPanel :x="228" :y="8" :w="204" :h="304" :n="2" :lines="['Долоня на лоб, два пальці', 'під підборіддя — голова', 'назад, підборіддя вгору']" :text-y="228">
        <g transform="translate(-4 -26) rotate(-22 134 160)">
          <g class="text-muted" opacity="0.38">
            <circle cx="112" cy="86" r="34" fill="currentColor" />
            <path d="M124 100 Q108 124 82 116" stroke="currentColor" stroke-width="13" fill="none" stroke-linecap="round" />
            <path d="M126 114 L134 160" stroke="currentColor" stroke-width="30" fill="none" stroke-linecap="round" />
          </g>
          <path
            d="M78 106 Q106 112 116 130 L126 152"
            class="text-emerald-500" stroke="currentColor" stroke-width="11" fill="none" stroke-linecap="round"
          />
          <ellipse cx="94" cy="108" rx="15" ry="8" class="text-primary" fill="currentColor" fill-opacity="0.55" transform="rotate(6 94 108)" />
          <!-- долоня на лобі -->
          <rect x="96" y="42" width="46" height="15" rx="7" class="text-toned" fill="currentColor" fill-opacity="0.75" />
          <!-- два пальці під підборіддям -->
          <path d="M72 126 h18 M74 138 h16" class="text-toned" stroke="currentColor" stroke-width="9" stroke-linecap="round" stroke-opacity="0.75" />
        </g>
        <text x="16" y="172" font-size="11.5" font-weight="600" class="text-emerald-500 fill-current">шлях відкрито</text>
        <text x="16" y="188" font-size="11.5" class="text-muted fill-current">язик пішов угору</text>
      </FigPanel>

      <!-- 3. висування щелепи -->
      <FigPanel :x="448" :y="8" :w="204" :h="304" :n="3" :lines="['Є підозра на травму шиї —', 'голову не рухаємо, лише', 'висуваємо щелепу вперед']" :text-y="228">
        <g transform="translate(-4 -26)">
          <g class="text-muted" opacity="0.38">
            <circle cx="112" cy="86" r="34" fill="currentColor" />
            <path d="M126 114 L134 160" stroke="currentColor" stroke-width="30" fill="none" stroke-linecap="round" />
          </g>
          <!-- висунута щелепа -->
          <path d="M120 102 Q100 126 70 116" class="text-primary" stroke="currentColor" stroke-width="13" fill="none" stroke-linecap="round" opacity="0.9" />
          <path
            d="M72 106 Q104 114 116 130 L126 152"
            class="text-emerald-500" stroke="currentColor" stroke-width="11" fill="none" stroke-linecap="round"
          />
          <!-- стрілка вперед -->
          <g class="text-primary">
            <path d="M62 112 L44 108" stroke="currentColor" stroke-width="3" stroke-linecap="round" />
            <path d="M52 100 L40 108 L52 116" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round" />
          </g>
          <!-- пальці за кутами щелепи -->
          <path d="M136 96 h20 M136 112 h20" class="text-toned" stroke="currentColor" stroke-width="9" stroke-linecap="round" stroke-opacity="0.75" />
        </g>
        <text x="16" y="172" font-size="11.5" font-weight="600" class="text-primary fill-current">щелепа — вперед</text>
        <text x="16" y="188" font-size="11.5" class="text-muted fill-current">пальці за кути щелепи</text>
      </FigPanel>
    </svg>
  </FigFrame>
</template>
