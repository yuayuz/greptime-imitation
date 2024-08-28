<template>
  <div class="lg:tw-hidden">
    <div class="tw-px-4 tw-py-[4rem]">
      <p class="tw-text-center tw-text-3xl tw-font-black">
        {{ t("Enterprise.Title") }}
      </p>
      <p class="tw-mb-16 tw-text-center tw-text-lg">
        {{ t("Enterprise.Subheader") }}
      </p>
      <div
        class="tw-mx-auto tw-mb-8 tw-rounded-md tw-border tw-bg-white tw-shadow"
      >
        <div class="tw-grid tw-grid-cols-2 tw-gap-8 tw-py-10">
          <enterprise-card
            :svg="svg[0]"
            class="tw-border-r"
            :title="title[0]"
          />
          <enterprise-card :svg="svg[1]" :title="title[1]" />
        </div>
        <div class="tw-grid tw-grid-cols-2 tw-gap-8 tw-py-10">
          <enterprise-card
            :svg="svg[2]"
            class="tw-border-r"
            :title="title[2]"
          />
          <enterprise-card :svg="svg[3]" :title="title[3]" />
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
          {{ t("Enterprise.Button") }}
        </v-btn>
      </div>
    </div>
  </div>

  <div class="tw-hidden tw-w-full tw-py-[6rem] lg:tw-block">
    <p class="tw-text-center tw-text-3xl tw-font-black">
      {{ t("Enterprise.Title") }}
    </p>
    <p class="tw-mb-16 tw-text-center tw-text-lg">
      {{ t("Enterprise.Subheader") }}
    </p>
    <div
      class="tw-mx-auto tw-mb-8 tw-rounded-md tw-border tw-bg-white tw-shadow"
    >
      <div class="tw-grid tw-grid-cols-4 tw-gap-8 tw-py-10">
        <enterprise-card
          v-for="n in 4"
          :key="n"
          :svg="svg[n - 1]"
          class="tw-border-r"
          :title="title[n - 1]"
        />
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
        {{ t("Enterprise.Button") }}
      </v-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
import AdvancedFeatures from "public/svg/enterprise/svg_features.svg"
import DeploymentOptions from "public/svg/enterprise/svg_options.svg"
import EnterpriseReady from "public/svg/enterprise/svg_ready.svg"
import TechnicalServices from "public/svg/enterprise/svg_services.svg"
import { useI18n } from "vue-i18n"

const { t } = useI18n()
const svg = [
  EnterpriseReady,
  AdvancedFeatures,
  TechnicalServices,
  DeploymentOptions,
]
const title = [
  "Enterprise.TechnicalServices",
  "Enterprise.AdvancedFeatures",
  "Enterprise.TechnicalServices",
  "Enterprise.DeploymentOptions",
]
</script>

<style scoped>
.v-btn {
  text-transform: none !important;
}
</style>
