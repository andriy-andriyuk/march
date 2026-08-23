<script setup lang="ts">
const props = withDefaults(
  defineProps<{ type?: 'tip' | 'warning' | 'danger'; title?: string }>(),
  { type: 'tip' }
)

const styles = computed(() => {
  switch (props.type) {
    case 'danger':
      return { icon: 'i-lucide-octagon-alert', tone: 'text-primary', ring: 'border-primary/40', bg: 'bg-primary/5' }
    case 'warning':
      return { icon: 'i-lucide-triangle-alert', tone: 'text-amber-500', ring: 'border-amber-500/40', bg: 'bg-amber-500/5' }
    default:
      return { icon: 'i-lucide-lightbulb', tone: 'text-emerald-500', ring: 'border-emerald-500/40', bg: 'bg-emerald-500/5' }
  }
})
</script>

<template>
  <div class="my-7 flex gap-3 rounded-2xl border p-5" :class="[styles.ring, styles.bg]">
    <UIcon :name="styles.icon" class="mt-0.5 size-5 shrink-0" :class="styles.tone" />
    <div class="min-w-0">
      <p v-if="title" class="mt-0 mb-1 text-sm font-semibold" :class="styles.tone">{{ title }}</p>
      <div class="[&>*:first-child]:mt-0 [&>*:last-child]:mb-0">
        <slot />
      </div>
    </div>
  </div>
</template>
