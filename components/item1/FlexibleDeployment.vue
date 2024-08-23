<script setup lang="ts">
import AtEdge from "~/components/svg/AtEdge.vue";
import OnTheCloud from "~/components/svg/OnTheCloud.vue";
import NetworkResilience from "~/components/svg/NetworkResilience.vue";
import TrafficCosts from "~/components/svg/TrafficCosts.vue";
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
          <div class="tw-font-bold">At Edge</div>
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
          <div class="tw-font-bold">On the Cloud</div>
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
          <div class="tw-font-bold">Network resilience</div>
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
            <strong>50%</strong>reduction Traffic costs
          </div>
        </div>
      </v-card>
    </div>
  </div>

  <div>
    <p data-v-6ec0c23b="">
      Written in <strong>Rust</strong>, GreptimeDB can be deployed on
      <strong>ARM architecture-compatible</strong> Android/Linux systems as well
      as <strong>cloud</strong> environments. Providing identical APIs and
      control planes, and running the application
      <strong>at the edge or on the cloud</strong> without modification.
      Extremely easy and efficient <strong>data synchronization</strong>.
    </p>
  </div>
</template>

<style scoped></style>
