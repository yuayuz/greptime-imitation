<template>
  <div class="tw-flex tw-w-full tw-justify-center">
    <v-card variant="text" class="tw-my-6 tw-grid tw-h-[10rem] tw-w-5/6">
      <div class="tw-mb-4 tw-flex tw-items-center tw-space-x-3">
        <img :src="props.svg" :alt="props.title" />
        <div class="tw-text-xl tw-font-black">{{ t(props.title) }}</div>
      </div>
      <div>
        <ul class="list tw-list-inside">
          <li class="tw-text-base">
            {{ t(props.list1) }}
          </li>
          <li class="tw-text-base">
            {{ t(props.list2) }}
          </li>
        </ul>
      </div>
    </v-card>
  </div>
</template>

<script setup lang="ts">
interface Props {
  svg: string;
  title: string;
  list1: string;
  list2: string;
}

const props = defineProps<Props>();
const { t } = useI18n();
</script>

<style scoped>
.list {
  list-style-type: disc;

  ::marker {
    color: #7afbe6;
  }
}
</style>
