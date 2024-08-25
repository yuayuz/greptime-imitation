<script setup lang="ts">
import AtEdge from "~/public/svg/optimized/AtEdge.svg";
import OnTheCloud from "~/public/svg/optimized/OnTheCloud.svg";
import NetworkResilience from "~/public/svg/optimized/NetworkResilience.svg";
import TrafficCosts from "~/public/svg/optimized/TrafficCosts.svg";

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
            <img :src="AtEdge" alt="AtEdge" />
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
            <img :src="OnTheCloud" alt="OnTheCloud" />
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
            <img :src="NetworkResilience" alt="NetworkResilience" />
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
            <img :src="TrafficCosts" alt="TrafficCosts" />
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
