<template>
  <v-carousel-item>
    <template v-slot:default>
      <div class="tw-absolute tw--right-8 tw--top-8" style="z-index: -1">
        <v-img :src="props.img" width="400" height="400" />
      </div>
      <div class="tw-space-y-12 tw-p-8">
        <component :is="props.component" />
      </div>
    </template>
  </v-carousel-item>
</template>

<script setup lang="ts">
interface Props {
  img: string;
  component: object;
}

const props = defineProps<Props>();
</script>

<style scoped></style>
