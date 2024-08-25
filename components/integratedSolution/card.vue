<script setup lang="ts">
interface Props {
  svg: string;
  title: string;
  list1: string;
  list2: string;
}

const props = defineProps<Props>();
</script>

<template>
  <v-card
    variant="text"
    class="tw-mx-8 tw-my-6 tw-grid tw-h-[10rem] tw-w-full tw-max-w-[24.5rem]"
  >
    <div class="tw-mb-4 tw-flex tw-items-center tw-space-x-3">
      <img :src="props.svg" :alt="props.title" />
      <div class="tw-text-xl tw-font-black">{{ props.title }}</div>
    </div>
    <div>
      <ul class="list tw-list-inside">
        <li class="tw-text-base">
          {{ props.list1 }}
        </li>
        <li class="tw-text-base">
          {{ props.list2 }}
        </li>
      </ul>
    </div>
  </v-card>
</template>

<style scoped>
.list {
  list-style-type: disc;

  ::marker {
    color: #7afbe6;
  }
}
</style>
