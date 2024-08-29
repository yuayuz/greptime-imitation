<template>
  <nav-bar v-model="hidden" />
  <div class="tw-h-full tw-pt-[5rem]" :hidden="hidden">
    <div class="tw-mx-auto tw-h-full 2xl:tw-w-[82.5rem]">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

const hidden = ref()
</script>

<style scoped></style>
