<script setup lang="ts">
const hidden = ref();
</script>

<template>
  <nav-bar v-model="hidden" />
  <div class="tw-h-full tw-pt-[4.25rem]" :hidden="hidden">
    <div class="tw-h-full">
      <slot />
    </div>
  </div>
</template>

<style scoped></style>
