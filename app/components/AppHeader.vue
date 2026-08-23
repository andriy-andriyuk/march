<script setup lang="ts">
const route = useRoute()
const menuOpen = ref(false)

watch(() => route.path, () => {
  menuOpen.value = false
})
</script>

<template>
  <header class="sticky top-0 z-40 border-b border-default bg-default/80 backdrop-blur">
    <div class="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
      <div class="flex items-center gap-1">
        <UButton
          icon="i-lucide-menu"
          variant="ghost"
          color="neutral"
          class="lg:hidden"
          aria-label="Відкрити зміст посібника"
          @click="menuOpen = true"
        />
        <NuxtLink to="/" class="flex items-center gap-2.5 font-semibold tracking-tight text-highlighted">
          <span class="flex size-8 items-center justify-center rounded-lg bg-primary text-inverted">
            <UIcon name="i-lucide-cross" class="size-5" />
          </span>
          <span class="hidden sm:inline">Протокол MARCH</span>
          <span class="sm:hidden">MARCH</span>
        </NuxtLink>
      </div>

      <nav class="flex items-center gap-1">
        <UButton to="/#contents" variant="ghost" color="neutral" label="Зміст" class="hidden sm:inline-flex" />
        <UButton to="/chapters/march" variant="ghost" color="neutral" label="Почати" class="hidden sm:inline-flex" />
        <ColorModeButton />
      </nav>
    </div>

    <USlideover v-model:open="menuOpen" side="left" title="Зміст посібника">
      <template #body>
        <GuideNav @navigate="menuOpen = false" />
      </template>
    </USlideover>
  </header>
</template>
