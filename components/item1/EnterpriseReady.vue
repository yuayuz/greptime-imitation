<script setup lang="ts">
import EnterpriseReadySVG from "~/components/svg/EnterpriseReadySVG.vue";

const { t } = useI18n();
</script>

<template>
  <div class="tw-space-y-6">
    <div class="tw-flex tw-h-8 tw-items-center">
      <enterprise-ready-s-v-g></enterprise-ready-s-v-g>
      <div class="tw-ml-2 tw-text-base tw-font-semibold">
        {{ t("item1.window3.p1") }}
      </div>
    </div>

    <div class="tw-flex tw-h-8 tw-items-center">
      <enterprise-ready-s-v-g></enterprise-ready-s-v-g>
      <div class="tw-ml-2 tw-text-base tw-font-semibold">
        {{ t("item1.window3.p2") }}
      </div>
    </div>

    <div class="tw-flex tw-h-8 tw-items-center">
      <enterprise-ready-s-v-g></enterprise-ready-s-v-g>
      <div class="tw-ml-2 tw-text-base tw-font-semibold">
        {{ t("item1.window3.p3") }}
      </div>
    </div>
  </div>
  <p>
    {{ t("item1.window3.message") }}
  </p>
</template>

<style scoped></style>
