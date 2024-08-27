<template>
  <div class="lg:tw-hidden">
    <div class="tw-px-4 tw-py-[4rem]">
      <p class="tw-text-center tw-text-3xl tw-font-black">GreptimeCloud</p>
      <p class="tw-mb-16 tw-text-center tw-text-lg">
        {{ t("GreptimeCloud.Subheader") }}
      </p>
      <div class="tw-mb-8 tw-flex tw-w-full tw-justify-between tw-space-x-5">
        <greptimeCloud-card :svg="svg[0]" :title="title[0]"
          >{{ t(message[0]) }}
        </greptimeCloud-card>
        <greptimeCloud-card :svg="svg[1]" :title="title[1]"
          >{{ t(message[1]) }}
        </greptimeCloud-card>
      </div>
      <div class="tw-mb-8 tw-flex tw-w-full tw-justify-between tw-space-x-5">
        <greptimeCloud-card :svg="svg[2]" :title="title[2]"
          >{{ t(message[2]) }}
        </greptimeCloud-card>
        <greptimeCloud-card :svg="svg[3]" :title="title[3]"
          >{{ t(message[3]) }}
        </greptimeCloud-card>
      </div>
      <div class="tw-flex tw-justify-center tw-space-x-6">
        <v-btn
          height="45"
          color="white"
          density="default"
          width="181"
          class="tw-text-base tw-font-black hover:tw-scale-105"
          >{{ t("GreptimeCloud.Button") }}
        </v-btn>
      </div>
    </div>
  </div>

  <div class="tw-hidden tw-w-full tw-py-[6rem] lg:tw-block">
    <p class="tw-text-center tw-text-3xl tw-font-black">GreptimeCloud</p>
    <p class="tw-mb-16 tw-text-center tw-text-lg">
      {{ t("GreptimeCloud.Subheader") }}
    </p>
    <div class="tw-mb-8 tw-flex tw-w-full tw-justify-between tw-space-x-5">
      <greptime-cloud-card
        v-for="n in 4"
        :key="n"
        :svg="svg[n - 1]"
        :title="title[n - 1]"
      >
        {{ t(message[n - 1]) }}
      </greptime-cloud-card>
    </div>
    <div class="tw-flex tw-justify-center tw-space-x-6">
      <v-btn
        height="45"
        color="white"
        density="default"
        width="181"
        class="tw-text-base tw-font-black hover:tw-scale-105"
        >{{ t("GreptimeCloud.Button") }}
      </v-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n"

import Cloud from "~/public/svg/greptimeCloud/Cloud.svg"
import Experience from "~/public/svg/greptimeCloud/Experience.svg"
import Integrations from "~/public/svg/greptimeCloud/Integrations.svg"
import ServerlessScaling from "~/public/svg/greptimeCloud/ServerlessScaling.svg"

const { t } = useI18n()
const svg = [Integrations, Experience, ServerlessScaling, Cloud]
const title = [
  "GreptimeCloud.Integrations.Title",
  "GreptimeCloud.Experience.Title",
  "GreptimeCloud.ServerlessScaling.Title",
  "GreptimeCloud.Cloud.Title",
]
const message = [
  "GreptimeCloud.Integrations.Message",
  "GreptimeCloud.Experience.Message",
  "GreptimeCloud.ServerlessScaling.Message",
  "GreptimeCloud.Cloud.Message",
]
</script>

<style scoped>
.v-btn {
  text-transform: none !important;
}
</style>
