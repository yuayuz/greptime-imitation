<template>
  <div
    class="tw-w-full tw-rounded-lg hover:tw-border-2 hover:tw-border-purple-400"
  >
    <v-card height="276" color="white">
      <div class="tw-mx-auto tw-w-full tw-space-y-3 tw-py-8">
        <div class="tw-flex tw-justify-center">
          <img :src="props.svg" :alt="t(props.title)" />
        </div>
        <p class="tw-text-center tw-text-xl tw-font-bold">
          {{ t(props.title) }}
        </p>
        <div class="tw-text-center">
          <slot />
        </div>
      </div>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n"

interface Props {
  svg: string
  title: string
}

const props = defineProps<Props>()
const { t } = useI18n()
</script>

<style scoped></style>
