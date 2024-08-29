<template>
  <div class="tw-flex tw-justify-between">
    <div
      class="tw-w-1/5 tw-rounded-md tw-outline tw-outline-white dark:tw-outline dark:tw-outline-zinc-500"
      v-for="n in 4"
      :key="n"
    >
      <v-card
        :color="n === 4 ? 'deep-purple-accent-3' : 'deep-purple-darken-3'"
        height="129"
        class="tw-flex tw-content-center tw-rounded-3xl"
      >
        <div class="tw-justify-center tw-text-center">
          <div class="tw-flex tw-justify-center">
            <img :src="svg[n - 1].src" :alt="svg[n - 1].name" />
          </div>
          <div>{{ t(message[n - 1]) }}</div>
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

<script setup lang="ts">
import Analytics from "public/svg/optimized/svg_analytics.svg"
import Events from "public/svg/optimized/svg_events.svg"
import Metrics from "public/svg/optimized/svg_metrics.svg"
import Streaming from "public/svg/optimized/svg_streaming.svg"
import { useI18n } from "vue-i18n"

const { t } = useI18n()
const svg = [
  { src: Metrics, name: "Metrics" },
  { src: Events, name: "Events" },
  {
    src: Analytics,
    name: "Analytics",
  },
  { src: Streaming, name: "Streaming" },
]
const message = [
  "Optimized.HybridWorkloadsWindow.Metrics",
  "Optimized.HybridWorkloadsWindow.Events",
  "Optimized.HybridWorkloadsWindow.Analytics",
  "Optimized.HybridWorkloadsWindow.Streaming",
]
</script>

<style scoped></style>
