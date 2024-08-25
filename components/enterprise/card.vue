<template>
  <div
    class="tw-flex tw-h-[6.625rem] tw-w-full tw-flex-col tw-justify-center tw-space-y-2 tw-pr-5 tw-text-black"
  >
    <div class="tw-mx-auto tw-flex">
      <img :src="props.svg" :alt="props.title" />
    </div>
    <div class="tw-text-center tw-text-2xl tw-font-bold">
      {{ props.title }}
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  svg: string;
  title: string;
}

const props = defineProps<Props>();
</script>

<style scoped></style>
