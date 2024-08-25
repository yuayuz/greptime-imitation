<template>
  <div class="lg:tw-hidden">
    <div class="tw-space-y-6 tw-px-4 tw-py-[3.75rem]">
      <p class="tw-mb-16 tw-text-center tw-text-3xl tw-font-black">
        {{ t("Optimized.title") }}
      </p>
      <div class="tw-space-y-6">
        <div
          class="tw-relative tw-w-full tw-border tw-shadow-violet-400 dark:tw-border-white"
        >
          <div class="tw-absolute tw-right-0 tw-top-0" style="z-index: -1">
            <v-img :src="domain_1" width="400" height="400" />
          </div>
          <div class="tw-mx-auto tw-my-8 tw-max-w-[50.8rem] tw-space-y-6">
            <div
              class="tw-flex tw-h-[6.75rem] tw-w-[28.875rem] tw-items-center tw-rounded-md"
            >
              <div
                class="tw-mr-auto tw-flex tw-w-full tw-cursor-pointer tw-items-center tw-space-x-3"
              >
                <div class="tw-h-[6.75rem] tw-w-[6.75rem]">
                  <v-img
                    :src="scale_workload"
                    style="z-index: -1"
                    class="tw-bg-violet-800"
                  />
                </div>
                <p class="tw-w-full tw-text-xl tw-font-black">
                  {{ t("Optimized.HybridWorkloadsButton") }}
                </p>
              </div>
            </div>
            <hybrid-workloads />
          </div>
        </div>

        <div
          class="tw-relative tw-w-full tw-border tw-shadow-violet-400 dark:tw-border-white"
        >
          <div class="tw-absolute tw-right-0 tw-top-0" style="z-index: -1">
            <v-img :src="domain_2" width="400" height="400" />
          </div>
          <div class="tw-mx-auto tw-my-8 tw-max-w-[50.8rem] tw-space-y-6">
            <div
              class="tw-flex tw-h-[6.75rem] tw-w-[28.875rem] tw-items-center tw-rounded-md"
            >
              <div
                class="tw-mr-auto tw-flex tw-w-full tw-cursor-pointer tw-items-center tw-space-x-3"
              >
                <div class="tw-h-[6.75rem] tw-w-[6.75rem]">
                  <v-img
                    :src="scale_capacity"
                    style="z-index: -1"
                    class="tw-bg-violet-800"
                  />
                </div>
                <p class="tw-w-full tw-text-xl tw-font-black">
                  {{ t("Optimized.UnlimitedCapacityButton") }}
                </p>
              </div>
            </div>
            <unlimited-capacity />
          </div>
        </div>

        <div
          class="tw-relative tw-w-full tw-border tw-shadow-violet-400 dark:tw-border-white"
        >
          <div class="tw-absolute tw-right-0 tw-top-0" style="z-index: -1">
            <v-img :src="domain_3" width="400" height="400" />
          </div>
          <div class="tw-mx-auto tw-my-8 tw-max-w-[50.8rem] tw-space-y-6">
            <div
              class="tw-flex tw-h-[6.75rem] tw-w-[28.875rem] tw-items-center tw-rounded-md"
            >
              <div
                class="tw-mr-auto tw-flex tw-w-full tw-cursor-pointer tw-items-center tw-space-x-3"
              >
                <div class="tw-h-[6.75rem] tw-w-[6.75rem]">
                  <v-img
                    :src="scale_organization"
                    style="z-index: -1"
                    class="tw-bg-violet-800"
                  />
                </div>

                <p class="tw-w-full tw-text-xl tw-font-black">
                  {{ t("Optimized.EnterpriseReadyButton") }}
                </p>
              </div>
            </div>
            <enterprise-ready />
          </div>
        </div>

        <div
          class="tw-relative tw-w-full tw-border tw-shadow-violet-400 dark:tw-border-white"
        >
          <div class="tw-absolute tw-right-0 tw-top-0" style="z-index: -1">
            <v-img :src="domain_4" width="400" height="400" />
          </div>
          <div class="tw-mx-auto tw-my-8 tw-max-w-[50.8rem] tw-space-y-6">
            <div
              class="tw-flex tw-h-[6.75rem] tw-w-[28.875rem] tw-items-center tw-rounded-md"
            >
              <div
                class="tw-mr-auto tw-flex tw-w-full tw-cursor-pointer tw-items-center tw-space-x-3"
              >
                <div class="tw-h-[6.75rem] tw-w-[6.75rem]">
                  <v-img
                    :src="scale_deployment"
                    style="z-index: -1"
                    class="tw-bg-violet-800"
                  />
                </div>
                <p class="tw-w-full tw-text-xl tw-font-black">
                  {{ t("Optimized.FlexibleDeploymentButton") }}
                </p>
              </div>
            </div>
            <flexible-deployment />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="tw-hidden tw-w-full tw-py-[6.25rem] lg:tw-block">
    <p class="tw-mb-16 tw-text-center tw-text-3xl tw-font-black">
      {{ t("Optimized.title") }}
    </p>
    <div class="tw-flex tw-space-x-16">
      <div class="tw-space-y-4">
        <div
          class="tw-h-[5.2rem] tw-w-[28.875rem] tw-rounded-md tw-border tw-py-[1.4rem] tw-pl-8 tw-pr-[5.2rem] tw-shadow-xl hover:tw-border-purple-900 hover:tw-shadow-xl hover:tw-shadow-violet-400 dark:tw-border-slate-400 dark:tw-shadow dark:tw-shadow-white"
          :class="
            model === 0
              ? 'tw-scale-110 tw-border-2 tw-border-purple-900 tw-shadow-xl tw-shadow-purple-400 dark:tw-border-purple-900 dark:tw-shadow-xl dark:tw-shadow-purple-900'
              : ''
          "
        >
          <div
            class="tw-flex tw-cursor-pointer tw-space-x-4"
            @click="model = 0"
          >
            <v-img
              :src="scale_workload"
              style="z-index: -1"
              class="tw-bg-violet-800"
              width="42"
              height="40"
            />
            <p class="tw-h-full tw-w-[28.875rem] tw-text-2xl">
              {{ t("Optimized.HybridWorkloadsButton") }}
            </p>
          </div>
        </div>

        <div
          class="tw-h-[5.2rem] tw-w-[28.875rem] tw-rounded-md tw-border tw-py-[1.4rem] tw-pl-8 tw-pr-[5.2rem] tw-shadow-xl hover:tw-border-purple-900 hover:tw-shadow-xl hover:tw-shadow-violet-400 dark:tw-border-slate-400 dark:tw-shadow dark:tw-shadow-white"
          :class="
            model === 1
              ? 'tw-scale-110 tw-border-2 tw-border-purple-900 tw-shadow-xl tw-shadow-purple-400 dark:tw-border-purple-900 dark:tw-shadow-xl dark:tw-shadow-purple-900'
              : ''
          "
        >
          <div
            class="tw-flex tw-cursor-pointer tw-space-x-4"
            @click="model = 1"
          >
            <v-img
              :src="scale_capacity"
              class="tw-bg-violet-800"
              style="z-index: -1"
              width="42"
              height="40"
            />
            <p class="tw-h-full tw-w-[28.875rem] tw-text-2xl">
              {{ t("Optimized.UnlimitedCapacityButton") }}
            </p>
          </div>
        </div>

        <div
          class="tw-h-[5.2rem] tw-w-[28.875rem] tw-rounded-md tw-border tw-py-[1.4rem] tw-pl-8 tw-pr-[5.2rem] tw-shadow-xl hover:tw-border-purple-900 hover:tw-shadow-xl hover:tw-shadow-violet-400 dark:tw-border-slate-400 dark:tw-shadow dark:tw-shadow-white"
          :class="
            model === 2
              ? 'tw-scale-110 tw-border-2 tw-border-purple-900 tw-shadow-xl tw-shadow-purple-400 dark:tw-border-purple-900 dark:tw-shadow-xl dark:tw-shadow-purple-900'
              : ''
          "
        >
          <div
            class="tw-flex tw-cursor-pointer tw-space-x-4"
            @click="model = 2"
          >
            <v-img
              :src="scale_organization"
              class="tw-bg-violet-800"
              style="z-index: -1"
              width="42"
              height="40"
            />
            <p class="tw-h-full tw-w-[28.875rem] tw-text-2xl">
              {{ t("Optimized.EnterpriseReadyButton") }}
            </p>
          </div>
        </div>

        <div
          class="tw-h-[5.2rem] tw-w-[28.875rem] tw-rounded-md tw-border tw-py-[1.4rem] tw-pl-8 tw-pr-[5.2rem] tw-shadow-xl hover:tw-border-purple-900 hover:tw-shadow-xl hover:tw-shadow-violet-400 dark:tw-border-slate-400 dark:tw-shadow dark:tw-shadow-white"
          :class="
            model === 3
              ? 'tw-scale-110 tw-border-2 tw-border-purple-900 tw-shadow-xl tw-shadow-purple-400 dark:tw-border-purple-900 dark:tw-shadow-xl dark:tw-shadow-purple-900'
              : ''
          "
        >
          <div
            class="tw-flex tw-cursor-pointer tw-space-x-4"
            @click="model = 3"
          >
            <v-img
              :src="scale_deployment"
              class="tw-bg-violet-800"
              style="z-index: -1"
              width="42"
              height="40"
            />
            <p class="tw-h-full tw-w-[28.875rem] tw-text-2xl">
              {{ t("Optimized.FlexibleDeploymentButton") }}
            </p>
          </div>
        </div>
      </div>

      <v-carousel
        height="370.75"
        class="tw-w-full tw-border tw-shadow-violet-400 dark:tw-border-white"
        :cycle="true"
        hide-delimiters
        v-model="model"
        show-arrows="hover"
      >
        <v-carousel-item>
          <template v-slot:default>
            <div class="tw-absolute tw--right-8 tw--top-8" style="z-index: -1">
              <v-img :src="domain_1" width="400" height="400" />
            </div>
            <div class="tw-space-y-12 tw-p-8">
              <hybrid-workloads />
            </div>
          </template>
        </v-carousel-item>
        <v-carousel-item>
          <template v-slot:default>
            <div class="tw-absolute tw--right-8 tw--top-8" style="z-index: -1">
              <v-img :src="domain_2" width="400" height="400" />
            </div>
            <div class="tw-space-y-12 tw-p-8">
              <unlimited-capacity />
            </div>
          </template>
        </v-carousel-item>
        <v-carousel-item>
          <template v-slot:default>
            <div class="tw-absolute tw--right-8 tw--top-8" style="z-index: -1">
              <v-img :src="domain_3" width="400" height="400" />
            </div>
            <div class="tw-space-y-12 tw-p-8">
              <enterprise-ready />
            </div>
          </template>
        </v-carousel-item>
        <v-carousel-item>
          <template v-slot:default>
            <div class="tw-absolute tw--right-8 tw--top-8" style="z-index: -1">
              <v-img :src="domain_4" width="400" height="400" />
            </div>
            <div class="tw-space-y-12 tw-p-8">
              <flexible-deployment />
            </div>
          </template>
        </v-carousel-item>
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
