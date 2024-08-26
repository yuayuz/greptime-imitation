<template>
  <div class="tw-space-y-6">
    <div class="tw-flex tw-h-8 tw-items-center" v-for="n in 3" :key="n">
      <img :src="EnterpriseReadySvg" alt="EnterpriseReadySVG" />
      <div class="tw-ml-2 tw-text-base tw-font-semibold">
        {{ t(list[n - 1]) }}
      </div>
    </div>
  </div>
  <p>
    {{ t("Optimized.EnterpriseReadyWindow.Message") }}
  </p>
</template>

<script setup lang="ts">
import EnterpriseReadySvg from "~/public/svg/optimized/EnterpriseReadySvg.svg";

const { t } = useI18n();
const list = [
  "Optimized.EnterpriseReadyWindow.EnterpriseFunctionalities",
  "Optimized.EnterpriseReadyWindow.TechnicalServices",
  "Optimized.EnterpriseReadyWindow.Fully-managedCloud",
];
</script>

<style scoped></style>
