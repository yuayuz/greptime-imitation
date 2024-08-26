<template>
  <li
    class="tw-group tw-h-[5rem] tw-content-center tw-border-b tw-border-b-gray-500 tw-px-8"
  >
    <div class="tw-flex tw-w-full tw-place-content-between tw-text-left">
      <p
        class="tw-text-black group-hover:tw-text-purple-700 dark:tw-text-white"
      >
        <slot />
      </p>
      <v-icon style="z-index: -1" :icon="show ? 'mdi-chevron-right' : ''" />
    </div>
  </li>
</template>

<script setup lang="ts">
interface Props {
  show: boolean;
}
const props = defineProps<Props>();
</script>

<style scoped></style>
