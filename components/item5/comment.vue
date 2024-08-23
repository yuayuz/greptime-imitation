<script setup lang="ts">
const props = defineProps(["comment", "unit", "author"]);
</script>

<template>
  <div class="tw-w-full tw-max-w-[24.75rem] tw-space-y-4">
    <div class="tw-h-[10.5rem]">
      <span class="tw-aspect-square tw-w-7 tw-text-5xl tw-text-purple-900">
        "
      </span>
      {{ props.comment }}
    </div>
    <div class="tw-flex tw-space-x-3">
      <div>
        <v-img
          src="public/user-avatar.png"
          width="45.67"
          height="45.67"
        ></v-img>
      </div>
      <div>
        <div class="tw-text-lg tw-font-black">{{ props.unit }}</div>
        <div class="tw-text-zinc-500">{{ props.author }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
