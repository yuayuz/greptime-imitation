<script setup lang="ts">
import AtEdge from "~/components/svg/optimized/AtEdge.vue";
import OnTheCloud from "~/components/svg/optimized/OnTheCloud.vue";
import NetworkResilience from "~/components/svg/optimized/NetworkResilience.vue";
import TrafficCosts from "~/components/svg/optimized/TrafficCosts.vue";

const { t } = useI18n();
</script>

<template>
  <div class="tw-flex tw-justify-evenly">
    <div class="tw-w-full tw-max-w-[10.25rem] tw-rounded-lg">
      <v-card
        variant="text"
        height="129"
        class="tw-flex tw-max-w-[10.25rem] tw-content-center tw-rounded-lg"
      >
        <div class="tw-justify-center tw-space-y-3 tw-text-center">
          <div
            class="tw-mx-auto tw-flex tw-aspect-square tw-w-12 tw-items-center tw-justify-center tw-rounded-lg tw-border tw-border-white tw-bg-purple-500 dark:tw-bg-purple-950"
          >
            <at-edge></at-edge>
          </div>
          <div class="tw-font-bold">
            {{ t("Optimized.FlexibleDeploymentWindow.Edge") }}
          </div>
        </div>
      </v-card>
    </div>

    <div class="tw-w-full tw-max-w-[10.25rem] tw-rounded-lg">
      <v-card
        variant="text"
        height="129"
        class="tw-flex tw-max-w-[10.25rem] tw-content-center tw-rounded-lg"
      >
        <div class="tw-justify-center tw-space-y-3 tw-text-center">
          <div
            class="tw-mx-auto tw-flex tw-aspect-square tw-w-12 tw-items-center tw-justify-center tw-rounded-lg tw-border tw-border-white tw-bg-purple-500 dark:tw-bg-purple-950"
          >
            <on-the-cloud></on-the-cloud>
          </div>
          <div class="tw-font-bold">
            {{ t("Optimized.FlexibleDeploymentWindow.Cloud") }}
          </div>
        </div>
      </v-card>
    </div>

    <div class="tw-w-full tw-max-w-[10.25rem] tw-rounded-lg">
      <v-card
        variant="text"
        height="129"
        class="tw-flex tw-max-w-[10.25rem] tw-content-center tw-rounded-lg"
      >
        <div class="tw-justify-center tw-space-y-3 tw-text-center">
          <div
            class="tw-mx-auto tw-flex tw-aspect-square tw-w-12 tw-items-center tw-justify-center tw-rounded-lg tw-border tw-border-white tw-bg-purple-500 dark:tw-bg-purple-950"
          >
            <network-resilience></network-resilience>
          </div>
          <div class="tw-font-bold">
            {{ t("Optimized.FlexibleDeploymentWindow.Network") }}
          </div>
        </div>
      </v-card>
    </div>

    <div class="tw-w-full tw-max-w-[10.25rem] tw-rounded-lg">
      <v-card
        variant="text"
        height="129"
        class="tw-flex tw-max-w-[10.25rem] tw-content-center tw-rounded-lg"
      >
        <div class="tw-justify-center tw-space-y-3 tw-text-center">
          <div
            class="tw-mx-auto tw-flex tw-aspect-square tw-w-12 tw-items-center tw-justify-center tw-rounded-lg tw-border tw-border-white tw-bg-purple-500 dark:tw-bg-purple-950"
          >
            <traffic-costs></traffic-costs>
          </div>
          <div class="tw-font-bold">
            {{ t("Optimized.FlexibleDeploymentWindow.TrafficCosts") }}
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

<style scoped></style>
