<template>
  <div class="tw-flex tw-justify-evenly">
    <div class="tw-w-full tw-rounded-lg" v-for="n in 4" :key="n">
      <v-card
        variant="text"
        height="129"
        class="tw-flex tw-content-center tw-rounded-lg"
      >
        <div class="tw-justify-center tw-space-y-3 tw-text-center">
          <div
            class="tw-mx-auto tw-flex tw-aspect-square tw-w-12 tw-items-center tw-justify-center tw-rounded-lg tw-border tw-border-white tw-bg-purple-500 dark:tw-bg-purple-950"
          >
            <img :src="svg[n - 1].src" :alt="svg[n - 1].name" />
          </div>
          <div class="tw-font-bold">
            {{ t(message[n - 1]) }}
          </div>
        </div>
      </v-card>
    </div>
  </div>

  <div>
    <p>
      {{ t("Optimized.FlexibleDeploymentWindow.Message") }}
    </p>
  </div>
</template>

<script setup lang="ts">
import OnTheCloud from "public/svg/optimized/svg_cloud.svg"
import TrafficCosts from "public/svg/optimized/svg_costs.svg"
import AtEdge from "public/svg/optimized/svg_edge.svg"
import NetworkResilience from "public/svg/optimized/svg_network.svg"
import { useI18n } from "vue-i18n"

const { t } = useI18n()
const svg = [
  { src: AtEdge, name: "AtEdge" },
  { src: OnTheCloud, name: "OnTheCloud" },
  { src: NetworkResilience, name: "NetworkResilience" },
  { src: TrafficCosts, name: "TrafficCosts" },
]
const message = [
  "Optimized.FlexibleDeploymentWindow.Edge",
  "Optimized.FlexibleDeploymentWindow.Cloud",
  "Optimized.FlexibleDeploymentWindow.Network",
  "Optimized.FlexibleDeploymentWindow.TrafficCosts",
]
</script>

<style scoped></style>
