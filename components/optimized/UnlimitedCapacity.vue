<template>
  <div class="tw-flex tw-justify-between">
    <div
      class="tw-w-full tw-max-w-[14rem] tw-rounded-lg dark:tw-border dark:tw-border-white dark:tw-shadow dark:tw-shadow-white"
    >
      <v-card
        color="deep-purple-accent-4"
        height="129"
        class="tw-flex tw-content-center tw-rounded-lg"
      >
        <div class="tw-justify-center tw-space-y-1 tw-text-center">
          <div class="tw-text-4xl tw-font-bold">50x</div>
          <div class="tw-text-sm">
            {{ t("Optimized.UnlimitedCapacityWindow.CostEfficiency") }}
          </div>
        </div>
      </v-card>
    </div>

    <div
      class="tw-w-full tw-max-w-[14rem] tw-rounded-lg dark:tw-border dark:tw-border-white dark:tw-shadow dark:tw-shadow-white"
    >
      <v-card
        color="deep-purple-accent-4"
        height="129"
        class="tw-flex tw-content-center tw-rounded-lg"
      >
        <div class="tw-justify-center tw-space-y-1 tw-text-center">
          <div class="tw-text-4xl tw-font-bold">1000+</div>
          <div class="tw-text-sm">
            {{ t("Optimized.UnlimitedCapacityWindow.Nodes") }}
          </div>
        </div>
      </v-card>
    </div>

    <div
      class="tw-w-full tw-max-w-[14rem] tw-rounded-lg dark:tw-border dark:tw-border-white dark:tw-shadow dark:tw-shadow-white"
    >
      <v-card
        color="deep-purple-accent-4"
        height="129"
        class="tw-flex tw-content-center tw-rounded-lg"
      >
        <div class="tw-justify-center tw-space-y-1 tw-text-center">
          <div class="tw-text-3xl tw-font-bold">Cross-Cloud</div>
          <div class="tw-text-xs">
            {{ t("Optimized.UnlimitedCapacityWindow.Vendors") }}
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
</script>

<style scoped></style>
