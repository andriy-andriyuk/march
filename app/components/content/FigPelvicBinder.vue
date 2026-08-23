<script setup lang="ts">
withDefaults(defineProps<{ caption?: string }>(), {
  caption: 'Тазовий бандаж стискає таз на рівні великих вертлюгів — це найширша частина стегон, а не талія і не живіт.'
})
</script>

<template>
  <FigFrame :caption="caption">
    <svg viewBox="0 0 660 360" role="img" aria-label="Накладання тазового бандажа">
      <g transform="translate(104 20)">
        <!-- таз і ноги -->
        <g class="text-muted" opacity="0.38">
          <path d="M70 20 q60 -14 120 0 l10 74 q-70 22 -140 0 z" fill="currentColor" />
          <circle cx="76" cy="104" r="20" fill="currentColor" />
          <circle cx="184" cy="104" r="20" fill="currentColor" />
          <path d="M84 118 L78 220 L76 300" stroke="currentColor" stroke-width="30" stroke-linecap="round" fill="none" />
          <path d="M176 118 L182 220 L184 300" stroke="currentColor" stroke-width="30" stroke-linecap="round" fill="none" />
        </g>

        <!-- бандаж -->
        <g class="text-primary">
          <rect x="36" y="86" width="188" height="42" rx="10" fill="currentColor" fill-opacity="0.85" />
          <rect x="112" y="92" width="36" height="30" rx="6" class="text-inverted" fill="currentColor" fill-opacity="0.35" />
        </g>

        <!-- рівень вертлюгів -->
        <g class="text-emerald-500">
          <path d="M20 104 H36 M224 104 H244" stroke="currentColor" stroke-width="2" stroke-dasharray="5 4" />
          <circle cx="76" cy="104" r="24" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="5 4" />
          <circle cx="184" cy="104" r="24" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="5 4" />
        </g>

        <!-- зв'язані коліна і стопи -->
        <g class="text-toned">
          <rect x="60" y="206" width="140" height="16" rx="8" fill="currentColor" fill-opacity="0.55" />
          <rect x="60" y="286" width="140" height="16" rx="8" fill="currentColor" fill-opacity="0.55" />
        </g>

        <!-- заборонено: на талії -->
        <g class="text-muted" opacity="0.8">
          <rect x="52" y="14" width="156" height="26" rx="8" fill="currentColor" fill-opacity="0.35" />
          <path d="M56 10 L204 44 M204 10 L56 44" class="text-primary" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" />
        </g>
        <text x="-44" y="24" font-size="11.5" font-weight="600" class="text-primary fill-current">не на талію</text>
        <path d="M-6 20 h50" class="text-primary" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.6" fill="none" />

        <!-- підпис рівня вертлюгів -->
        <text x="-44" y="176" font-size="11.5" font-weight="600" class="text-emerald-500 fill-current">рівень великих</text>
        <text x="-44" y="192" font-size="11.5" font-weight="600" class="text-emerald-500 fill-current">вертлюгів</text>
        <path d="M-2 160 V104 h20" class="text-emerald-500" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.6" fill="none" />
      </g>

      <g>
        <text x="360" y="52" font-size="14" font-weight="600" class="text-highlighted fill-current">Коли накладати</text>
        <text x="360" y="76" font-size="12.5" class="text-muted fill-current">Падіння з висоти, підрив, ДТП,</text>
        <text x="360" y="94" font-size="12.5" class="text-muted fill-current">біль у тазу або непритомність</text>
        <text x="360" y="112" font-size="12.5" class="text-muted fill-current">із незрозумілим шоком.</text>

        <text x="360" y="152" font-size="14" font-weight="600" class="text-highlighted fill-current">Як накладати</text>
        <text x="360" y="176" font-size="12.5" class="text-muted fill-current">1. Прибрати з кишень усе тверде.</text>
        <text x="360" y="196" font-size="12.5" class="text-muted fill-current">2. Завести пояс під коліна</text>
        <text x="376" y="214" font-size="12.5" class="text-muted fill-current">і просунути до рівня стегон.</text>
        <text x="360" y="234" font-size="12.5" class="text-muted fill-current">3. Стягнути щільно й зафіксувати.</text>
        <text x="360" y="254" font-size="12.5" class="text-muted fill-current">4. Зв’язати коліна й стопи разом.</text>

        <rect x="352" y="278" width="290" height="66" rx="10" class="text-primary" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-opacity="0.3" />
        <text x="368" y="302" font-size="12.5" class="text-toned fill-current">Таз не «перевіряють» розхитуванням:</text>
        <text x="368" y="322" font-size="12.5" class="text-toned fill-current">так лише зривають згустки й посилюють</text>
        <text x="368" y="338" font-size="12.5" class="text-toned fill-current">внутрішню кровотечу.</text>
      </g>
    </svg>
  </FigFrame>
</template>
