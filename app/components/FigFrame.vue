<script setup lang="ts">
defineProps<{ caption?: string }>()
</script>

<template>
  <figure>
    <!-- На телефоні широку схему не стискаємо до нечитабельного розміру,
         а даємо гортати вбік: підписи всередині SVG лишаються розбірливими -->
    <div class="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
      <div class="min-w-[40rem] rounded-xl border border-default bg-elevated/30 p-4 sm:min-w-0 sm:p-6">
        <slot />
      </div>
    </div>
    <p class="mt-2 flex items-center gap-1.5 text-xs text-dimmed sm:hidden">
      <UIcon name="i-lucide-move-horizontal" class="size-3.5" />
      Гортайте схему вбік
    </p>
    <figcaption v-if="caption">{{ caption }}</figcaption>
  </figure>
</template>
