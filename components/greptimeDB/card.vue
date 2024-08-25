<script setup lang="ts">
interface Props {
  svg: object;
  title: string;
}

const props = defineProps<Props>();
</script>

<template>
  <div
    class="tw-w-full tw-rounded-lg hover:tw-border-2 hover:tw-border-purple-400"
  >
    <v-card height="298">
      <div class="tw-mx-auto tw-w-full tw-max-w-[17.4rem] tw-space-y-3 tw-py-8">
        <div class="tw-flex tw-justify-center">
          <component :is="props.svg" />
        </div>
        <p class="tw-text-center tw-text-xl tw-font-bold">{{ props.title }}</p>
        <div class="tw-text-center">
          <slot />
        </div>
      </div>
    </v-card>
  </div>
</template>
<style scoped></style>
