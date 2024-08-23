<script setup lang="ts">
import Metrics from "~/components/svg/Metrics.vue";
import Events from "~/components/svg/Events.vue";
import Analytics from "~/components/svg/Analytics.vue";
import Streaming from "~/components/svg/Streaming.vue";
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
          <div>Metrics</div>
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
          <div>Events</div>
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
          <div>Analytics</div>
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
          <div>Streaming</div>
        </div>
      </v-card>
    </div>
  </div>

  <div>
    <p data-v-6ec0c23b="">
      GreptimeDB treats all time series as contextual events with timestamps,
      and thus
      <strong>unifies the processing of metrics, logs, and events</strong>. It
      supports analyzing metrics, logs, and events with
      <strong>SQL, PromQL</strong>, and streaming with
      <strong>continuous aggregation</strong>.
    </p>
  </div>
</template>

<style scoped></style>
