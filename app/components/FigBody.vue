<script setup lang="ts">
// Схематична фігура людини у власній системі координат 200×420.
// Батьківський <svg> позиціює її через transform="translate(...) scale(...)".
defineProps<{ back?: boolean }>()
</script>

<template>
  <g class="text-muted" opacity="0.35">
    <!-- голова -->
    <circle cx="100" cy="38" r="22" fill="currentColor" />
    <!-- шия -->
    <path d="M100 58 V76" stroke="currentColor" stroke-width="16" stroke-linecap="round" />
    <!-- тулуб -->
    <path
      d="M72 82 Q100 72 128 82 L134 150 Q134 200 126 234 L74 234 Q66 200 66 150 Z"
      fill="currentColor"
    />
    <!-- руки -->
    <path d="M74 88 L52 152 L48 206" stroke="currentColor" stroke-width="17" stroke-linecap="round" stroke-linejoin="round" fill="none" />
    <path d="M126 88 L148 152 L152 206" stroke="currentColor" stroke-width="17" stroke-linecap="round" stroke-linejoin="round" fill="none" />
    <!-- ноги -->
    <path d="M85 232 L80 316 L78 398" stroke="currentColor" stroke-width="21" stroke-linecap="round" stroke-linejoin="round" fill="none" />
    <path d="M115 232 L120 316 L122 398" stroke="currentColor" stroke-width="21" stroke-linecap="round" stroke-linejoin="round" fill="none" />
    <!-- позначка «вигляд ззаду»: лінія хребта -->
    <path v-if="back" d="M100 88 V228" stroke="currentColor" stroke-width="3" opacity="0.6" fill="none" />
  </g>
</template>
