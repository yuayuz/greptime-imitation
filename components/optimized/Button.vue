<template>
  <div
    class="tw-h-[5.2rem] tw-w-full tw-rounded-md tw-border tw-py-[1.4rem] tw-pl-8 tw-shadow-xl hover:tw-border-purple-900 hover:tw-shadow-xl hover:tw-shadow-violet-400 dark:tw-border-slate-400 dark:tw-shadow dark:tw-shadow-white"
    :class="
      model === props.model
        ? 'tw-scale-110 tw-border-2 tw-border-purple-900 tw-shadow-xl tw-shadow-purple-400 dark:tw-border-purple-900 dark:tw-shadow-xl dark:tw-shadow-purple-900'
        : ''
    "
  >
    <div
      class="tw-flex tw-cursor-pointer tw-space-x-4"
      @click="model = props.model"
    >
      <div>
        <v-img
          :src="props.img"
          class="tw-bg-violet-800"
          style="z-index: -1"
          width="42"
          height="40"
        />
      </div>
      <p class="tw-h-full tw-text-2xl">
        <slot />
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n"

interface Props {
  model: number
  img: string
}

const model = defineModel<number>()
model.value = 0
const props = defineProps<Props>()
const { t } = useI18n()
</script>

<style scoped></style>
