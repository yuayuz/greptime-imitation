<script setup lang="ts">
import EnterpriseReady from "~/components/svg/item3/EnterpriseReady.vue";
import AdvancedFeatures from "~/components/svg/item3/AdvancedFeatures.vue";
import TechnicalServices from "~/components/svg/item3/TechnicalServices.vue";
import DeploymentOptions from "~/components/svg/item3/DeploymentOptions.vue";
</script>

<template>
  <div class="lg:tw-hidden">
    <div class="tw-px-4 tw-py-[3.75rem]">
      <p class="tw-text-center tw-text-3xl tw-font-black">
        GreptimeDB Enterprise
      </p>
      <p class="tw-mb-16 tw-text-center tw-text-lg">
        One-stop Time Series Solution to Your Specific Business Needs
      </p>
      <div
        class="tw-mx-auto tw-mb-8 tw-max-w-[82.5rem] tw-rounded-md tw-border tw-bg-white tw-shadow"
      >
        <div class="tw-grid tw-grid-cols-2 tw-gap-8 tw-py-10">
          <item3-card :svg="EnterpriseReady" class="tw-border-r"
            >Enterprise Ready
          </item3-card>
          <item3-card :svg="AdvancedFeatures">Advanced Features </item3-card>
        </div>
        <div class="tw-grid tw-grid-cols-2 tw-gap-8 tw-py-10">
          <item3-card :svg="TechnicalServices" class="tw-border-r"
            >Professional Technical Services
          </item3-card>
          <item3-card :svg="DeploymentOptions"
            >Flexible Deployment Options
          </item3-card>
        </div>
      </div>
      <div class="tw-flex tw-w-full tw-justify-center">
        <v-btn
          width="266.5"
          height="46"
          color="#8322ff"
          density="default"
          class="tw-text-2xl hover:tw-scale-105"
        >
          Compared to GreptimeDB OSS
        </v-btn>
      </div>
    </div>
  </div>

  <div class="tw-hidden tw-w-full tw-py-[6.25rem] lg:tw-block">
    <p class="tw-text-center tw-text-3xl tw-font-black">
      GreptimeDB Enterprise
    </p>
    <p class="tw-mb-16 tw-text-center tw-text-lg">
      One-stop Time Series Solution to Your Specific Business Needs
    </p>
    <div
      class="tw-mx-auto tw-mb-8 tw-max-w-[82.5rem] tw-rounded-md tw-border tw-bg-white tw-shadow"
    >
      <div class="tw-grid tw-grid-cols-4 tw-gap-8 tw-py-10">
        <item3-card :svg="EnterpriseReady" class="tw-border-r"
          >Enterprise Ready
        </item3-card>
        <item3-card :svg="AdvancedFeatures" class="tw-border-r"
          >Advanced Features
        </item3-card>
        <item3-card :svg="TechnicalServices" class="tw-border-r"
          >Professional Technical Services
        </item3-card>
        <item3-card :svg="DeploymentOptions"
          >Flexible Deployment Options
        </item3-card>
      </div>
    </div>
    <div class="tw-flex tw-w-full tw-justify-center">
      <v-btn
        width="266.5"
        height="46"
        color="#8322ff"
        density="default"
        class="tw-text-2xl hover:tw-scale-105"
      >
        Compared to GreptimeDB OSS
      </v-btn>
    </div>
  </div>
</template>

<style scoped>
.v-btn {
  text-transform: none !important;
}
</style>
