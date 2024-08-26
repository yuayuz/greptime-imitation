<template>
  <div
    class="tw-relative tw-w-full tw-border tw-shadow-violet-400 dark:tw-border-white"
  >
    <div class="tw-absolute tw-right-0 tw-top-0" style="z-index: -1">
      <v-img :src="props.background" width="400" height="400" />
    </div>
    <div class="tw-mx-auto tw-my-8 tw-space-y-6">
      <div class="tw-flex tw-h-[7rem] tw-items-center tw-rounded-md">
        <div
          class="tw-mr-auto tw-flex tw-w-full tw-cursor-pointer tw-items-center tw-space-x-3"
        >
          <div class="tw-aspect-square tw-h-[7rem]">
            <v-img
              :src="props.img"
              style="z-index: -1"
              class="tw-bg-violet-800"
            />
          </div>
          <p class="tw-w-full tw-text-xl tw-font-black">
            <slot />
          </p>
        </div>
      </div>
      <component :is="props.component" />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  background: string;
  img: string;
  component: object;
}

const props = defineProps<Props>();
</script>

<style scoped></style>
