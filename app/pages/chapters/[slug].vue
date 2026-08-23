<script setup lang="ts">
const route = useRoute()

const { data: chapter } = await useAsyncData(`chapter-${route.path}`, () =>
  queryCollection('chapters').path(route.path).first()
)

if (!chapter.value) {
  throw createError({ statusCode: 404, statusMessage: 'Розділ не знайдено', fatal: true })
}

const { data: allChapters } = await useGuideChapters()

const prev = computed(() =>
  allChapters.value?.find((c) => c.chapter === (chapter.value?.chapter ?? 0) - 1)
)
const next = computed(() =>
  allChapters.value?.find((c) => c.chapter === (chapter.value?.chapter ?? 0) + 1)
)

useSeoMeta({
  title: () => `${chapter.value?.title} — Протокол MARCH`,
  description: () => chapter.value?.description
})
</script>

<template>
  <div v-if="chapter" class="mx-auto max-w-7xl px-4 py-10 sm:px-6">
    <div class="flex gap-10">
      <!-- Sidebar (desktop) -->
      <aside class="hidden w-72 shrink-0 lg:block">
        <div class="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto pr-2">
          <p class="mb-4 text-sm font-semibold text-highlighted">Зміст посібника</p>
          <GuideNav />
        </div>
      </aside>

      <!-- Content -->
      <div class="min-w-0 flex-1">
        <UBreadcrumb
          :items="[
            { label: 'Головна', to: '/' },
            { label: 'Зміст', to: '/#contents' },
            { label: `Розділ ${chapter.chapter}` }
          ]"
          class="mb-6"
        />

        <div class="mb-8">
          <div class="mb-3 flex flex-wrap items-center gap-2">
            <UBadge variant="subtle">Розділ {{ chapter.chapter }} з 14</UBadge>
            <UBadge v-if="chapter.letter" color="primary" variant="solid">
              {{ chapter.letter }}
            </UBadge>
            <UBadge color="neutral" variant="outline" icon="i-lucide-clock">
              {{ chapter.duration }}
            </UBadge>
          </div>
          <h1 class="text-4xl font-semibold tracking-tight">{{ chapter.title }}</h1>
          <p class="mt-4 text-lg leading-8 text-muted">{{ chapter.description }}</p>
        </div>

        <div class="my-7 rounded-2xl border border-primary/30 bg-primary/5 p-5">
          <p class="text-sm font-semibold text-primary">Що ви дізнаєтесь</p>
          <ul class="mt-3 space-y-2">
            <li
              v-for="objective in chapter.objectives"
              :key="objective"
              class="flex items-start gap-2 text-[17px] leading-7 sm:text-base"
            >
              <UIcon name="i-lucide-check" class="mt-1.5 size-4 shrink-0 text-primary" />
              <span>{{ objective }}</span>
            </li>
          </ul>
        </div>

        <article class="prose-guide max-w-3xl">
          <ContentRenderer :value="chapter" />
        </article>

        <!-- Prev / Next -->
        <div class="mt-14 grid gap-4 border-t border-default pt-8 sm:grid-cols-2">
          <NuxtLink v-if="prev" :to="prev.path" class="group">
            <UCard class="h-full transition group-hover:ring-primary/60">
              <p class="mb-1 flex items-center gap-1 text-sm text-muted">
                <UIcon name="i-lucide-arrow-left" class="size-3.5" />
                Попередній розділ
              </p>
              <p class="text-lg font-semibold group-hover:text-primary">{{ prev.title }}</p>
            </UCard>
          </NuxtLink>
          <div v-else />
          <NuxtLink v-if="next" :to="next.path" class="group sm:text-right">
            <UCard class="h-full transition group-hover:ring-primary/60">
              <p class="mb-1 flex items-center justify-end gap-1 text-sm text-muted">
                Наступний розділ
                <UIcon name="i-lucide-arrow-right" class="size-3.5" />
              </p>
              <p class="text-lg font-semibold group-hover:text-primary">{{ next.title }}</p>
            </UCard>
          </NuxtLink>
          <NuxtLink v-else to="/" class="group sm:text-right">
            <UCard class="h-full transition group-hover:ring-primary/60">
              <p class="mb-1 flex items-center justify-end gap-1 text-sm text-muted">
                Посібник завершено
                <UIcon name="i-lucide-flag" class="size-3.5" />
              </p>
              <p class="text-lg font-semibold group-hover:text-primary">
                Повернутися на головну
              </p>
            </UCard>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
