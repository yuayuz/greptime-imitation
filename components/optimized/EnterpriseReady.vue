<script setup lang="ts">
import EnterpriseReadySVG from "~/components/svg/optimized/EnterpriseReadySVG.vue";

const { t } = useI18n();
</script>

<template>
  <div class="tw-space-y-6">
    <div class="tw-flex tw-h-8 tw-items-center">
      <enterprise-ready-s-v-g />
      <div class="tw-ml-2 tw-text-base tw-font-semibold">
        {{ t("Optimized.EnterpriseReadyWindow.EnterpriseFunctionalities") }}
      </div>
    </div>

    <div class="tw-flex tw-h-8 tw-items-center">
      <enterprise-ready-s-v-g />
      <div class="tw-ml-2 tw-text-base tw-font-semibold">
        {{ t("Optimized.EnterpriseReadyWindow.TechnicalServices") }}
      </div>
    </div>

    <div class="tw-flex tw-h-8 tw-items-center">
      <enterprise-ready-s-v-g />
      <div class="tw-ml-2 tw-text-base tw-font-semibold">
        {{ t("Optimized.EnterpriseReadyWindow.Fully-managedCloud") }}
      </div>
    </div>
  </div>
  <p>
    {{ t("Optimized.EnterpriseReadyWindow.Message") }}
  </p>
</template>

<style scoped></style>
