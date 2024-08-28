<template>
  <div class="lg:tw-hidden">
    <div class="tw-space-y-6 tw-px-4 tw-py-[3.75rem]">
      <p class="tw-mb-16 tw-text-center tw-text-3xl tw-font-black">
        {{ t("Optimized.title") }}
      </p>
      <div class="tw-space-y-6">
        <optimized-card
          v-for="n in 4"
          :key="n"
          :background="background[n - 1]"
          :img="img[n - 1]"
          :component="component[n - 1]"
        >
          {{ t(title[n - 1]) }}
        </optimized-card>
      </div>
    </div>
  </div>

  <div class="tw-hidden tw-w-full tw-py-[6.25rem] lg:tw-block">
    <p class="tw-mb-16 tw-text-center tw-text-3xl tw-font-black">
      {{ t("Optimized.title") }}
    </p>
    <div class="tw-flex tw-w-full tw-space-x-16">
      <div class="tw-w-2/5 tw-space-y-4">
        <optimized-button
          v-for="n in 4"
          :key="n"
          v-model="model"
          :img="img[n - 1]"
          :model="n - 1"
          >{{ t(title[n - 1]) }}
        </optimized-button>
      </div>

      <v-carousel
        height="370.75"
        class="tw-w-3/5 tw-border tw-shadow-violet-400 dark:tw-border-white"
        :cycle="true"
        hide-delimiters
        v-model="model"
        show-arrows="hover"
      >
        <optimized-carousel-item
          v-for="n in 4"
          :key="n"
          :img="background[n - 1]"
          :component="component[n - 1]"
        />
      </v-carousel>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { useI18n } from "vue-i18n"

import domain_1 from "/public/domain_1.png"
import domain_2 from "/public/domain_2.png"
import domain_3 from "/public/domain_3.png"
import domain_4 from "/public/domain_4.png"
import scale_capacity from "/public/scale_capacity.png"
import scale_deployment from "/public/scale_deployment.png"
import scale_organization from "/public/scale_organization.png"
import scale_workload from "/public/scale_workload.png"
import EnterpriseReady from "~/components/optimized/EnterpriseReady.vue"
import FlexibleDeployment from "~/components/optimized/FlexibleDeployment.vue"
import HybridWorkloads from "~/components/optimized/HybridWorkloads.vue"
import UnlimitedCapacity from "~/components/optimized/UnlimitedCapacity.vue"

const model = ref(0)
const { t } = useI18n()
const background = [domain_1, domain_2, domain_3, domain_4]
const img = [
  scale_workload,
  scale_capacity,
  scale_organization,
  scale_deployment,
]
const title = [
  "Optimized.HybridWorkloadsButton",
  "Optimized.UnlimitedCapacityButton",
  "Optimized.EnterpriseReadyButton",
  "Optimized.FlexibleDeploymentButton",
]
const component = [
  HybridWorkloads,
  UnlimitedCapacity,
  EnterpriseReady,
  FlexibleDeployment,
]
</script>

<style scoped></style>
