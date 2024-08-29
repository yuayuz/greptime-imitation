<template>
  <div class="tw-absolute tw-top-0 tw-hidden dark:tw-block" style="z-index: -1">
    <v-img
      :src="background"
      width="1600"
      height="500"
      class="-tw-left-36 tw-hidden dark:tw-block"
      alt="background"
    />
  </div>
  <div class="tw-relative tw-hidden tw-py-24 lg:tw-block">
    <div class="tw-text-center tw-text-5xl tw-font-black">
      {{ t("EnterprisePage.Enterprise.Title") }}
    </div>
    <div
      class="tw-mx-auto tw-mt-4 tw-w-4/5 tw-text-center tw-text-base tw-text-zinc-500"
    >
      {{ t("EnterprisePage.Enterprise.Message") }}
    </div>
    <div class="tw-mt-10 tw-flex tw-justify-center">
      <v-btn class="tw-text-base" size="large" color="white">
        {{ t("EnterprisePage.Enterprise.Button") }}
      </v-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n"

import background from "@/public/enterprise/enterprise_bg.png"

const { t } = useI18n()
</script>

<style scoped>
@import "@/stylus/button.css";
</style>
