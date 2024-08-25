<template>
  <div class="lg:tw-hidden">
    <div class="tw-px-4 tw-py-[3.75rem]">
      <p class="tw-text-center tw-text-3xl tw-font-black">
        {{ t("Enterprise.Title") }}
      </p>
      <p class="tw-mb-16 tw-text-center tw-text-lg">
        {{ t("Enterprise.Subheader") }}
      </p>
      <div
        class="tw-mx-auto tw-mb-8 tw-max-w-[82.5rem] tw-rounded-md tw-border tw-bg-white tw-shadow"
      >
        <div class="tw-grid tw-grid-cols-2 tw-gap-8 tw-py-10">
          <enterprise-card
            :svg="EnterpriseReady"
            class="tw-border-r"
            :title="t('Enterprise.EnterpriseReady')"
          />
          <enterprise-card
            :svg="AdvancedFeatures"
            :title="t('Enterprise.AdvancedFeatures')"
          />
        </div>
        <div class="tw-grid tw-grid-cols-2 tw-gap-8 tw-py-10">
          <enterprise-card
            :svg="TechnicalServices"
            class="tw-border-r"
            :title="t('Enterprise.TechnicalServices')"
          />
          <enterprise-card
            :svg="DeploymentOptions"
            :title="t('Enterprise.DeploymentOptions')"
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
  </div>

  <div class="tw-hidden tw-w-full tw-py-[6.25rem] lg:tw-block">
    <p class="tw-text-center tw-text-3xl tw-font-black">
      {{ t("Enterprise.Title") }}
    </p>
    <p class="tw-mb-16 tw-text-center tw-text-lg">
      {{ t("Enterprise.Subheader") }}
    </p>
    <div
      class="tw-mx-auto tw-mb-8 tw-max-w-[82.5rem] tw-rounded-md tw-border tw-bg-white tw-shadow"
    >
      <div class="tw-grid tw-grid-cols-4 tw-gap-8 tw-py-10">
        <enterprise-card
          :svg="EnterpriseReady"
          class="tw-border-r"
          :title="t('Enterprise.TechnicalServices')"
        />
        <enterprise-card
          :svg="AdvancedFeatures"
          class="tw-border-r"
          :title="t('Enterprise.AdvancedFeatures')"
        />
        <enterprise-card
          :svg="TechnicalServices"
          class="tw-border-r"
          :title="t('Enterprise.TechnicalServices')"
        />
        <enterprise-card
          :svg="DeploymentOptions"
          :title="t('Enterprise.DeploymentOptions')"
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
import EnterpriseReady from "~/public/svg/enterprise/EnterpriseReady.svg";
import AdvancedFeatures from "~/public/svg/enterprise/AdvancedFeatures.svg";
import TechnicalServices from "~/public/svg/enterprise/TechnicalServices.svg";
import DeploymentOptions from "~/public/svg/enterprise/DeploymentOptions.svg";

const { t } = useI18n();
</script>

<style scoped>
.v-btn {
  text-transform: none !important;
}
</style>
