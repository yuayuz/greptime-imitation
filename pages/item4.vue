<script setup lang="ts">
import Integrations from "~/components/svg/item4/Integrations.vue";
import Experience from "~/components/svg/item4/Experience.vue";
import ServerlessScaling from "~/components/svg/item4/ServerlessScaling.vue";
import Cloud from "~/components/svg/item4/Cloud.vue";
</script>

<template>
  <div class="lg:tw-hidden">
    <div class="tw-px-4 tw-py-[3.75rem]">
      <p class="tw-text-center tw-text-3xl tw-font-black">GreptimeCloud</p>
      <p class="tw-mb-16 tw-text-center tw-text-lg">
        Your IoT & Observerbility Data Stack on the Cloud, Fully Managed
      </p>
      <div class="tw-mb-8 tw-flex tw-w-full tw-justify-between tw-space-x-5">
        <item4-card :svg="Integrations" :title="'Integrations'"
          >Built-in data ingestion, observing, and analyzing tools, with instant
          data visualization and altering.
        </item4-card>
        <item4-card :svg="Experience" :title="'Out-of-the-box Experience'"
          >Be up and running in seconds. No configuration required. Query
          consoles, dashboards and database interfaces are all built-in and
          instantly available.
        </item4-card>
      </div>
      <div class="tw-mb-8 tw-flex tw-w-full tw-justify-between tw-space-x-5">
        <item4-card :svg="ServerlessScaling" :title="'Serverless Scaling'"
          >You can start from small, and scale seamlessly with the Serverless
          (pay-as-you-go) or Dedicated Plan.
        </item4-card>
        <item4-card :svg="Cloud" :title="'Bring Your Own Cloud'"
          >Accessible within your cloud environment through the Bring Your Own
          Cloud (BYOC) deployment option.
        </item4-card>
      </div>
      <div class="tw-flex tw-justify-center tw-space-x-6">
        <v-btn
          height="45"
          color="white"
          density="default"
          width="181"
          class="tw-text-base tw-font-black hover:tw-scale-105"
          >Sign up for free
        </v-btn>
      </div>
    </div>
  </div>

  <div class="tw-hidden tw-w-full tw-py-[6.25rem] lg:tw-block">
    <p class="tw-text-center tw-text-3xl tw-font-black">GreptimeCloud</p>
    <p class="tw-mb-16 tw-text-center tw-text-lg">
      Your IoT & Observerbility Data Stack on the Cloud, Fully Managed
    </p>
    <div class="tw-mb-8 tw-flex tw-w-full tw-justify-between tw-space-x-5">
      <item4-card :svg="Integrations" :title="'Integrations'"
        >Built-in data ingestion, observing, and analyzing tools, with instant
        data visualization and altering.
      </item4-card>
      <item4-card :svg="Experience" :title="'Out-of-the-box Experience'"
        >Be up and running in seconds. No configuration required. Query
        consoles, dashboards and database interfaces are all built-in and
        instantly available.
      </item4-card>
      <item4-card :svg="ServerlessScaling" :title="'Serverless Scaling'"
        >You can start from small, and scale seamlessly with the Serverless
        (pay-as-you-go) or Dedicated Plan.
      </item4-card>
      <item4-card :svg="Cloud" :title="'Bring Your Own Cloud'"
        >Accessible within your cloud environment through the Bring Your Own
        Cloud (BYOC) deployment option.
      </item4-card>
    </div>
    <div class="tw-flex tw-justify-center tw-space-x-6">
      <v-btn
        height="45"
        color="white"
        density="default"
        width="181"
        class="tw-text-base tw-font-black hover:tw-scale-105"
        >Sign up for free
      </v-btn>
    </div>
  </div>
</template>

<style scoped>
.v-btn {
  text-transform: none !important;
}
</style>
