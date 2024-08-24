<script setup lang="ts">
import Metrics from "~/components/svg/Metrics.vue";
import Events from "~/components/svg/Events.vue";
import Analytics from "~/components/svg/Analytics.vue";
import Streaming from "~/components/svg/Streaming.vue";

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
          <Metrics></Metrics>
          <div>{{ t("item1.window1.card1") }}</div>
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
          <Events></Events>
          <div>
            {{ t("item1.window1.card2") }}
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
          <Analytics></Analytics>
          <div>{{ t("item1.window1.card3") }}</div>
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
          <Streaming></Streaming>
          <div>{{ t("item1.window1.card4") }}</div>
        </div>
      </v-card>
    </div>
  </div>

  <div>
    <p data-v-6ec0c23b="">
      {{ t("item1.window1.message") }}
    </p>
  </div>
</template>

<style scoped></style>
