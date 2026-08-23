<script setup lang="ts">
const emit = defineEmits<{ navigate: [] }>()

const route = useRoute()

// Без await: на сторінках розділів дані вже отримані за цим самим ключем,
// у слайдовері на інших сторінках — довантажаться при відкритті
const { data: chapters } = useGuideChapters()

const chaptersByPart = computed(() => {
  const map = new Map<number, NonNullable<typeof chapters.value>>()
  for (const c of chapters.value ?? []) {
    if (!map.has(c.part)) map.set(c.part, [])
    map.get(c.part)!.push(c)
  }
  return map
})
</script>

<template>
  <nav class="space-y-6">
    <div v-for="part in guideParts" :key="part.number">
      <p class="mb-2 text-xs font-semibold uppercase tracking-wide text-muted">
        Частина {{ part.number }}. {{ part.title }}
      </p>
      <ul class="space-y-0.5">
        <li v-for="c in chaptersByPart.get(part.number) ?? []" :key="c.path">
          <NuxtLink
            :to="c.path"
            class="flex items-start gap-2 rounded-md px-2 py-1.5 text-sm transition"
            :class="
              c.path === route.path
                ? 'bg-primary/10 font-medium text-primary'
                : 'text-muted hover:bg-elevated hover:text-highlighted'
            "
            @click="emit('navigate')"
          >
            <span class="mt-px w-5 shrink-0 text-right text-xs tabular-nums opacity-60">
              {{ c.chapter }}
            </span>
            <span>{{ c.title }}</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>
