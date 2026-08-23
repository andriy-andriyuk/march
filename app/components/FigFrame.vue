<script setup lang="ts">
defineProps<{ title?: string; caption?: string }>()
</script>

<template>
  <figure class="my-8 overflow-hidden rounded-2xl border border-default bg-elevated/70">
    <div v-if="title" class="flex items-baseline justify-between gap-3 border-b border-default px-5 py-4">
      <p class="m-0 text-sm font-semibold text-highlighted">{{ title }}</p>
      <!-- На телефоні широку схему не стискаємо до нечитабельного розміру, а даємо гортати вбік -->
      <span class="flex shrink-0 items-center gap-1.5 text-xs text-muted sm:hidden">
        <UIcon name="i-lucide-move-horizontal" class="size-3.5" />
        гортайте вбік
      </span>
    </div>

    <div class="overflow-x-auto">
      <div class="min-w-[40rem] px-5 py-5 sm:min-w-0">
        <slot />
      </div>
    </div>

    <figcaption v-if="caption" class="guide-note border-t border-default px-5 py-4 text-default">
      {{ caption }}
    </figcaption>
  </figure>
</template>
