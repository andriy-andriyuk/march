<script setup lang="ts">
withDefaults(defineProps<{ title?: string; caption?: string }>(), {
  title: 'Картка пораненого і MIST',
  caption: 'Картка пораненого: усе, що ви зробили, коротко й з часом. Її кріплять на видному місці — до нагрудної кишені або поверх пов’язки.'
})

const rows = [
  { label: 'Хто', value: 'Позивний / ПІБ, підрозділ' },
  { label: 'Коли', value: 'Час поранення й час вашої допомоги' },
  { label: 'Що сталося', value: 'Куля, уламок, вибух, падіння, ДТП' },
  { label: 'Що знайшли', value: 'Рани, їхні місця, стан свідомості' },
  { label: 'Що зробили', value: 'Турнікет (час!), тампонада, наклейка, тепло' },
  { label: 'Ліки', value: 'Назва, доза, час, знеболення й антибіотик' }
]
</script>

<template>
  <FigFrame :title="title" :caption="caption">
    <svg viewBox="0 0 660 400" role="img" aria-label="Картка пораненого та схема передачі MIST">
      <!-- картка -->
      <g transform="translate(8 8)">
        <rect x="0" y="0" width="380" height="384" rx="14" class="text-muted" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-opacity="0.3" />
        <rect x="0" y="0" width="380" height="46" rx="14" class="text-primary" fill="currentColor" fill-opacity="0.85" />
        <text x="20" y="30" font-size="15" font-weight="700" class="text-inverted fill-current">КАРТКА ПОРАНЕНОГО</text>

        <g v-for="(r, i) in rows" :key="r.label">
          <text :x="20" :y="82 + i * 48" font-size="11.5" font-weight="600" class="text-muted fill-current">
            {{ r.label.toUpperCase() }}
          </text>
          <text :x="20" :y="102 + i * 48" font-size="12.5" class="text-default fill-current">{{ r.value }}</text>
          <path
            :d="`M20 ${112 + i * 48} H360`" class="text-muted"
            stroke="currentColor" stroke-width="1" stroke-opacity="0.3"
          />
        </g>
      </g>

      <!-- MIST -->
      <g transform="translate(408 8)">
        <rect x="0" y="0" width="244" height="384" rx="14" class="text-muted" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-opacity="0.3" />
        <text x="20" y="36" font-size="15" font-weight="600" class="text-highlighted fill-current">Передача за MIST</text>
        <text x="20" y="58" font-size="12" class="text-muted fill-current">30 секунд, поки кладете ноші</text>

        <g v-for="(m, i) in [
          { l: 'M', t: 'Mechanism', d: 'що поранило' },
          { l: 'I', t: 'Injuries', d: 'які ушкодження знайшли' },
          { l: 'S', t: 'Signs', d: 'пульс, дихання, свідомість' },
          { l: 'T', t: 'Treatment', d: 'що вже зробили і о котрій' }
        ]" :key="m.l">
          <rect x="20" :y="86 + i * 66" width="34" height="34" rx="8" class="text-primary" fill="currentColor" />
          <text
            :x="37" :y="110 + i * 66" text-anchor="middle" font-size="17" font-weight="700"
            class="text-inverted fill-current"
          >{{ m.l }}</text>
          <text :x="66" :y="102 + i * 66" font-size="13" font-weight="600" class="text-highlighted fill-current">
            {{ m.t }}
          </text>
          <text :x="66" :y="120 + i * 66" font-size="12" class="text-muted fill-current">{{ m.d }}</text>
        </g>

        <text x="20" y="352" font-size="12" class="text-muted fill-current">Пишіть навіть олівцем по скотчу —</text>
        <text x="20" y="370" font-size="12" class="text-muted fill-current">головне, щоб час не загубився.</text>
      </g>
    </svg>
  </FigFrame>
</template>
