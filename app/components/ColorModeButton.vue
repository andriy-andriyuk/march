<script setup lang="ts">
const colorMode = useColorMode()

const isDark = computed({
  get: () => colorMode.value === 'dark',
  set: (value) => {
    colorMode.preference = value ? 'dark' : 'light'
  }
})
</script>

<template>
  <ClientOnly>
    <UButton
      :icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'"
      variant="ghost"
      color="neutral"
      aria-label="Перемкнути тему"
      @click="isDark = !isDark"
    />
    <template #fallback>
      <UButton icon="i-lucide-sun" variant="ghost" color="neutral" aria-label="Перемкнути тему" />
    </template>
  </ClientOnly>
</template>
