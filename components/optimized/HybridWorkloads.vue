<script setup lang="ts">
import Metrics from "~/components/svg/optimized/Metrics.vue";
import Events from "~/components/svg/optimized/Events.vue";
import Analytics from "~/components/svg/optimized/Analytics.vue";
import Streaming from "~/components/svg/optimized/Streaming.vue";

const { t } = useI18n();
</script>

<template>
  <div class="tw-flex tw-justify-between">
    <div
      class="tw-w-full tw-max-w-[10.25rem] tw-rounded-lg dark:tw-border dark:tw-border-white dark:tw-shadow dark:tw-shadow-white"
    >
      <v-card
        color="deep-purple-darken-3"
        height="129"
        class="tw-flex tw-max-w-[10.25rem] tw-content-center tw-rounded-lg"
      >
        <div class="tw-justify-center tw-text-center">
          <Metrics />
          <div>{{ t("Optimized.HybridWorkloadsWindow.Metrics") }}</div>
        </div>
      </v-card>
    </div>

    <div
      class="tw-w-full tw-max-w-[10.25rem] tw-rounded-lg dark:tw-border dark:tw-border-white dark:tw-shadow dark:tw-shadow-white"
    >
      <v-card
        color="deep-purple-darken-3"
        height="129"
        class="tw-flex tw-max-w-[10.25rem] tw-content-center tw-rounded-lg"
      >
        <div class="tw-justify-center tw-text-center">
          <Events />
          <div>
            {{ t("Optimized.HybridWorkloadsWindow.Events") }}
          </div>
        </div>
      </v-card>
    </div>

    <div
      class="tw-w-full tw-max-w-[10.25rem] tw-rounded-lg dark:tw-border dark:tw-border-white dark:tw-shadow dark:tw-shadow-white"
    >
      <v-card
        color="deep-purple-darken-3"
        height="129"
        class="tw-flex tw-max-w-[10.25rem] tw-content-center tw-rounded-lg"
      >
        <div class="tw-justify-center tw-text-center">
          <Analytics />
          <div>{{ t("Optimized.HybridWorkloadsWindow.Analytics") }}</div>
        </div>
      </v-card>
    </div>

    <div
      class="tw-w-full tw-max-w-[10.25rem] tw-rounded-lg dark:tw-border dark:tw-border-white dark:tw-shadow dark:tw-shadow-white"
    >
      <v-card
        color="deep-purple-accent-3"
        height="129"
        class="tw-flex tw-w-full tw-content-center tw-rounded-lg"
      >
        <div class="tw-justify-center tw-text-center">
          <Streaming />
          <div>{{ t("Optimized.HybridWorkloadsWindow.Streaming") }}</div>
        </div>
      </v-card>
    </div>
  </div>

  <div>
    <p data-v-6ec0c23b="">
      {{ t("Optimized.HybridWorkloadsWindow.Message") }}
    </p>
  </div>
</template>

<style scoped></style>
