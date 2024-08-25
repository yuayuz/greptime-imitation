<template>
  <nav-bar v-model="hidden" />
  <div class="tw-h-full tw-pt-[4.25rem]" :hidden="hidden">
    <div class="tw-h-full">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const hidden = ref();
</script>

<style scoped></style>
