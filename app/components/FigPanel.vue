<script setup lang="ts">
// Панель-крок усередині <svg>: рамка, номер, підписи знизу та слот для малюнка.
withDefaults(
  defineProps<{
    x?: number
    y?: number
    n?: number
    w?: number
    h?: number
    title?: string
    lines?: string[]
    textY?: number
  }>(),
  { x: 0, y: 0, w: 204, h: 250, lines: () => [], textY: 186 }
)
</script>

<template>
  <g :transform="`translate(${x} ${y})`">
    <rect
      x="0" y="0" :width="w" :height="h" rx="12"
      class="text-muted" fill="currentColor" fill-opacity="0.06"
      stroke="currentColor" stroke-opacity="0.25"
    />
    <template v-if="n">
      <circle cx="26" cy="28" r="13" class="text-primary" fill="currentColor" />
      <text x="26" y="33" text-anchor="middle" font-size="14" font-weight="700" class="text-inverted fill-current">
        {{ n }}
      </text>
    </template>
    <text v-if="title" :x="n ? 48 : 18" y="33" font-size="14" font-weight="600" class="text-highlighted fill-current">
      {{ title }}
    </text>
    <text
      v-for="(line, i) in lines" :key="line"
      x="18" :y="textY + i * 18" font-size="12" class="text-muted fill-current"
    >{{ line }}</text>
    <slot />
  </g>
</template>
