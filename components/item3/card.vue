<script setup lang="ts">
const props = defineProps({
  svg: "svg",
});
</script>

<template>
  <div
    class="tw-flex tw-h-[6.625rem] tw-w-full tw-flex-col tw-justify-center tw-space-y-2 tw-pr-5 tw-text-black"
  >
    <div class="tw-mx-auto tw-flex">
      <component :is="props.svg"></component>
    </div>
    <div class="tw-text-center tw-text-2xl tw-font-bold">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped></style>
