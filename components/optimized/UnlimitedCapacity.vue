<template>
  <div class="tw-flex tw-justify-between">
    <div class="tw-w-full" v-for="n in 3" :key="n">
      <div
        class="tw-mx-auto tw-w-4/5 tw-rounded-md tw-outline tw-outline-white dark:tw-outline dark:tw-outline-zinc-500"
      >
        <v-card
          color="deep-purple-accent-4"
          height="129"
          class="tw-flex tw-w-full tw-content-center tw-rounded-3xl"
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
  </div>

  <div>
    <p>
      {{ t("Optimized.UnlimitedCapacityWindow.Message") }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n"

const { t } = useI18n()
const title = ["50x", "1000+", "Cross-Cloud"]
const message = [
  "Optimized.UnlimitedCapacityWindow.CostEfficiency",
  "Optimized.UnlimitedCapacityWindow.Nodes",
  "Optimized.UnlimitedCapacityWindow.Vendors",
]
</script>

<style scoped></style>
