<script setup lang="ts">
const { data: chapters } = await useAsyncData('all-chapters', () =>
  queryCollection('chapters')
    .select('path', 'title', 'description', 'chapter', 'part', 'duration', 'icon')
    .order('chapter', 'ASC')
    .all()
)

const chaptersByPart = computed(() => {
  const map = new Map<number, NonNullable<typeof chapters.value>>()
  for (const chapter of chapters.value ?? []) {
    if (!map.has(chapter.part)) map.set(chapter.part, [])
    map.get(chapter.part)!.push(chapter)
  }
  return map
})

const letters = [
  { letter: 'M', word: 'Massive hemorrhage', title: 'Масивна кровотеча', text: 'Зупинити те, що вбиває за хвилини: турнікет, тампонування, тиснуча пов’язка.' },
  { letter: 'A', word: 'Airway', title: 'Дихальні шляхи', text: 'Звільнити прохід для повітря: положення тіла, щелепа, повітропровід.' },
  { letter: 'R', word: 'Respiration', title: 'Дихання', text: 'Перевірити груди й спину, заклеїти отвір, стежити за наростанням задишки.' },
  { letter: 'C', word: 'Circulation', title: 'Кровообіг', text: 'Оцінити пульс і шок, ще раз перевірити всі пов’язки, дати транексамову кислоту.' },
  { letter: 'H', word: 'Hypothermia / Head', title: 'Тепло і голова', text: 'Не дати замерзнути, зігріти й утеплити, стежити за свідомістю.' }
]

</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative overflow-hidden">
      <div class="absolute inset-0 -z-10 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
      <div class="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
        <div class="mx-auto max-w-3xl text-center">
          <UBadge variant="subtle" size="lg" class="mb-6">Посібник · 14 розділів</UBadge>
          <h1 class="text-5xl font-semibold tracking-tight text-highlighted sm:text-6xl lg:text-7xl">
            Протокол MARCH
          </h1>
          <p class="mt-6 text-lg leading-8 text-muted">
            Порядок дій, який рятує життя в перші хвилини після поранення. Турнікет, тампонування рани,
            ізраїльський бандаж, оклюзійна наклейка та боротьба з шоком — покроково й з ілюстраціями.
          </p>
          <div class="mt-8 flex flex-wrap items-center justify-center gap-3">
            <UButton to="/chapters/march" size="xl" trailing-icon="i-lucide-arrow-right">
              Почати читати
            </UButton>
            <UButton to="#contents" size="xl" variant="outline" color="neutral">
              Зміст посібника
            </UButton>
          </div>
        </div>
      </div>
    </section>

    <!-- Letters -->
    <section class="mx-auto max-w-7xl px-4 pb-20 sm:px-6">
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <UCard v-for="item in letters" :key="item.letter">
          <div class="flex flex-col gap-2">
            <span class="flex size-11 items-center justify-center rounded-lg bg-primary text-2xl font-bold text-inverted">
              {{ item.letter }}
            </span>
            <p class="text-xs font-medium uppercase tracking-wide text-dimmed">{{ item.word }}</p>
            <h3 class="text-lg font-semibold text-highlighted">{{ item.title }}</h3>
            <p class="text-sm leading-6 text-muted">{{ item.text }}</p>
          </div>
        </UCard>
      </div>
    </section>

    <!-- Disclaimer -->
    <section class="mx-auto max-w-5xl px-4 pb-20 sm:px-6">
      <UCard class="border-primary/30 bg-primary/5">
        <div class="flex items-start gap-4">
          <span class="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <UIcon name="i-lucide-triangle-alert" class="size-5" />
          </span>
          <div>
            <h2 class="text-lg font-semibold text-highlighted">Це навчальний матеріал, а не заміна курсу</h2>
            <p class="mt-2 leading-7 text-toned">
              Прочитати про турнікет і накласти турнікет — різні речі. Текст і малюнки допомагають зрозуміти
              логіку дій та повторити її перед виїздом, але навички ставляться руками на очному курсі
              з домедичної допомоги (ТССС / «Домедична допомога в умовах бойових дій») під наглядом інструктора.
              У реальній ситуації дійте в межах своєї підготовки та чинних протоколів і якнайшвидше
              передайте пораненого медикам.
            </p>
          </div>
        </div>
      </UCard>
    </section>

    <!-- Contents -->
    <section id="contents" class="border-t border-default bg-elevated/40">
      <div class="mx-auto max-w-5xl px-4 py-20 sm:px-6">
        <div class="mb-12 text-center">
          <h2 class="text-3xl font-semibold tracking-tight text-highlighted sm:text-4xl">Зміст посібника</h2>
          <p class="mt-4 leading-7 text-muted">
            14 розділів у п’яти частинах — від безпеки на місці події до передачі пораненого медикам.
          </p>
        </div>

        <div class="space-y-12">
          <div v-for="part in guideParts" :key="part.number">
            <div class="mb-4 flex items-baseline gap-3">
              <span class="text-sm font-medium uppercase tracking-wide text-primary">
                Частина {{ part.number }}
              </span>
              <h3 class="text-xl font-semibold tracking-tight text-highlighted">{{ part.title }}</h3>
            </div>
            <p class="mb-6 text-sm leading-6 text-muted">{{ part.description }}</p>

            <div class="grid gap-3 sm:grid-cols-2">
              <NuxtLink
                v-for="chapter in chaptersByPart.get(part.number) ?? []"
                :key="chapter.path"
                :to="chapter.path"
                class="group"
              >
                <UCard class="h-full transition group-hover:ring-primary/60">
                  <div class="flex items-start gap-4">
                    <span class="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <UIcon :name="chapter.icon" class="size-5" />
                    </span>
                    <div class="min-w-0">
                      <p class="text-xs font-medium text-muted">
                        Розділ {{ chapter.chapter }} · {{ chapter.duration }}
                      </p>
                      <h4 class="mt-1 text-lg font-semibold text-highlighted group-hover:text-primary">
                        {{ chapter.title }}
                      </h4>
                      <p class="mt-2 line-clamp-2 text-sm leading-6 text-muted">{{ chapter.description }}</p>
                    </div>
                  </div>
                </UCard>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
      <h2 class="text-3xl font-semibold tracking-tight text-highlighted sm:text-4xl">Найкращий час прочитати це — до того, як знадобиться</h2>
      <p class="mt-4 leading-7 text-muted">
        Перший розділ займе близько 15 хвилин — і ви вже знатимете, з чого починати і в якому порядку діяти.
      </p>
      <UButton to="/chapters/march" size="xl" class="mt-8" trailing-icon="i-lucide-arrow-right">
        Розпочати перший розділ
      </UButton>
    </section>
  </div>
</template>
