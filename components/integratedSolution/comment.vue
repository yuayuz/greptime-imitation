<template>
  <div class="tw-w-full tw-space-y-4">
    <div class="tw-h-[10.5rem]">
      <span class="tw-aspect-square tw-w-7 tw-text-5xl tw-text-purple-900">
        "
      </span>
      {{ t(props.comment) }}
    </div>
    <div class="tw-flex tw-space-x-3">
      <div>
        <v-img :src="user_avatar" width="45.67" height="45.67" />
      </div>
      <div>
        <div class="tw-text-lg tw-font-black">{{ t(props.unit) }}</div>
        <div class="tw-text-zinc-500">{{ t(props.author) }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import user_avatar from "public/user-avatar.png"
import { useI18n } from "vue-i18n"

interface Props {
  comment: string
  unit: string
  author: string
}

const props = defineProps<Props>()
const { t } = useI18n()
</script>

<style scoped></style>
