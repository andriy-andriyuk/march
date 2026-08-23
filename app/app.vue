<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <UApp>
    <div class="min-h-screen flex flex-col bg-default text-default">
      <AppHeader />
      <main class="flex-1">
        <NuxtPage :key="route.path" />
      </main>
      <AppFooter />
    </div>
  </UApp>
</template>
