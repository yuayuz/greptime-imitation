<template>
  <div class="tw-flex tw-justify-between">
    <div
      class="tw-w-full tw-max-w-[14rem] tw-rounded-lg dark:tw-border dark:tw-border-white dark:tw-shadow dark:tw-shadow-white"
      v-for="n in 3"
      :key="n"
    >
      <v-card
        color="deep-purple-accent-4"
        height="129"
        class="tw-flex tw-content-center tw-rounded-lg"
      >
        <div class="tw-justify-center tw-space-y-1 tw-text-center">
          <div class="tw-text-4xl tw-font-bold">{{ title[n - 1] }}</div>
          <div class="tw-text-sm">
            {{ t(message[n - 1]) }}
          </div>
        </div>
      </v-card>
    </div>
  </div>

  <div>
    <p>
      {{ t("Optimized.UnlimitedCapacityWindow.Message") }}
    </p>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();
const title = ["50x", "1000+", "Cross-Cloud"];
const message = [
  "Optimized.UnlimitedCapacityWindow.CostEfficiency",
  "Optimized.UnlimitedCapacityWindow.Nodes",
  "Optimized.UnlimitedCapacityWindow.Vendors",
];
</script>

<style scoped></style>
