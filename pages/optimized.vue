<template>
  <div class="lg:tw-hidden">
    <div class="tw-space-y-6 tw-px-4 tw-py-[3.75rem]">
      <p class="tw-mb-16 tw-text-center tw-text-3xl tw-font-black">
        {{ t("Optimized.title") }}
      </p>
      <div class="tw-space-y-6">
        <optimized-card
          :background="domain_1"
          :img="scale_workload"
          :component="HybridWorkloads"
        >
          {{ t("Optimized.HybridWorkloadsButton") }}
        </optimized-card>

        <optimized-card
          :background="domain_2"
          :img="scale_capacity"
          :component="UnlimitedCapacity"
        >
          {{ t("Optimized.UnlimitedCapacityButton") }}
        </optimized-card>

        <optimized-card
          :background="domain_3"
          :img="scale_organization"
          :component="EnterpriseReady"
        >
          {{ t("Optimized.EnterpriseReadyButton") }}
        </optimized-card>

        <optimized-card
          :background="domain_4"
          :img="scale_deployment"
          :component="FlexibleDeployment"
        >
          {{ t("Optimized.FlexibleDeploymentButton") }}
        </optimized-card>
      </div>
    </div>
  </div>

  <div class="tw-hidden tw-w-full tw-py-[6.25rem] lg:tw-block">
    <p class="tw-mb-16 tw-text-center tw-text-3xl tw-font-black">
      {{ t("Optimized.title") }}
    </p>
    <div class="tw-flex tw-space-x-16">
      <div class="tw-space-y-4">
        <optimized-button v-model="model" :img="scale_workload" :model="0"
          >{{ t("Optimized.HybridWorkloadsButton") }}
        </optimized-button>

        <optimized-button v-model="model" :img="scale_capacity" :model="1"
          >{{ t("Optimized.UnlimitedCapacityButton") }}
        </optimized-button>

        <optimized-button v-model="model" :img="scale_organization" :model="2"
          >{{ t("Optimized.EnterpriseReadyButton") }}
        </optimized-button>

        <optimized-button v-model="model" :img="scale_deployment" :model="3"
          >{{ t("Optimized.FlexibleDeploymentButton") }}
        </optimized-button>
      </div>

      <v-carousel
        height="370.75"
        class="tw-w-full tw-border tw-shadow-violet-400 dark:tw-border-white"
        :cycle="true"
        hide-delimiters
        v-model="model"
        show-arrows="hover"
      >
        <optimized-carousel-item :img="domain_1" :component="HybridWorkloads" />

        <optimized-carousel-item
          :img="domain_2"
          :component="UnlimitedCapacity"
        />
        <optimized-carousel-item :img="domain_3" :component="EnterpriseReady" />
        <optimized-carousel-item
          :img="domain_4"
          :component="FlexibleDeployment"
        />
      </v-carousel>
    </div>
  </div>
</template>

<script setup lang="ts">
import UnlimitedCapacity from "~/components/optimized/UnlimitedCapacity.vue";
import HybridWorkloads from "~/components/optimized/HybridWorkloads.vue";
import EnterpriseReady from "~/components/optimized/EnterpriseReady.vue";
import FlexibleDeployment from "~/components/optimized/FlexibleDeployment.vue";
import domain_1 from "/public/domain-1.png";
import domain_2 from "/public/domain-2.png";
import domain_3 from "/public/domain-3.png";
import domain_4 from "/public/domain-4.png";
import scale_workload from "/public/scale_workload.png";
import scale_capacity from "/public/scale_capacity.png";
import scale_organization from "/public/scale_organization.png";
import scale_deployment from "/public/scale_deployment.png";

const model = ref(0);
const { t } = useI18n();
</script>

<style scoped></style>
