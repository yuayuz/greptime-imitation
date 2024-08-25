<script setup lang="ts">
import Metrics from "~/public/svg/optimized/Metrics.svg";
import Events from "~/public/svg/optimized/Events.svg";
import Analytics from "~/public/svg/optimized/Analytics.svg";
import Streaming from "~/public/svg/optimized/Streaming.svg";

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
          <div class="tw-flex tw-justify-center">
            <img :src="Metrics" alt="Metrics" />
          </div>
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
          <div class="tw-flex tw-justify-center">
            <img :src="Events" alt="Events" />
          </div>
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
          <div class="tw-flex tw-justify-center">
            <img :src="Analytics" alt="Analytics" />
          </div>
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
          <div class="tw-flex tw-justify-center">
            <img :src="Streaming" alt="Streaming" />
          </div>
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
