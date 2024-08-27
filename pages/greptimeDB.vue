<template>
  <div class="lg:tw-hidden">
    <div class="tw-px-4 tw-py-[4rem]">
      <p class="tw-text-center tw-text-3xl tw-font-black">GreptimeDB</p>
      <p class="tw-mb-16 tw-text-center tw-text-lg">
        {{ t("GreptimeDB.Subheader") }}
      </p>
      <div class="tw-mb-8 tw-flex tw-w-full tw-space-x-5">
        <greptimeDB-card :svg="svg[0]" :title="title[0]"
          >{{ t(message[0]) }}
        </greptimeDB-card>
        <greptimeDB-card :svg="svg[1]" :title="title[1]"
          >{{ t(message[1]) }}
        </greptimeDB-card>
      </div>
      <div class="tw-mb-8 tw-flex tw-w-full tw-justify-between tw-space-x-5">
        <greptimeDB-card :svg="svg[2]" :title="title[2]"
          >{{ t(message[2]) }}
        </greptimeDB-card>
        <greptimeDB-card :svg="svg[3]" :title="title[3]"
          >{{ t(message[3]) }}
        </greptimeDB-card>
      </div>
      <div class="tw-flex tw-justify-center tw-space-x-6">
        <v-btn color="white" density="default" class="hover:tw-scale-105"
          >GreptimePlay
        </v-btn>
        <v-btn variant="outlined" density="default" class="hover:tw-scale-105"
          >{{ t("GreptimeDB.Button") }}
        </v-btn>
      </div>
    </div>
  </div>
  <div class="tw-hidden tw-w-full tw-py-[6rem] lg:tw-block">
    <p class="tw-text-center tw-text-3xl tw-font-black">GreptimeDB</p>
    <p class="tw-mb-16 tw-text-center tw-text-lg">
      {{ t("GreptimeDB.Subheader") }}
    </p>
    <div class="tw-mb-8 tw-flex tw-w-full tw-space-x-3">
      <greptime-d-b-card
        v-for="n in 4"
        :key="n"
        :svg="svg[n - 1]"
        :title="title[n - 1]"
      >
        {{ t(message[n - 1]) }}
      </greptime-d-b-card>
    </div>
    <div class="tw-flex tw-justify-center tw-space-x-6">
      <v-btn color="white" density="default" class="hover:tw-scale-105"
        >GreptimePlay
      </v-btn>

      <v-btn variant="outlined" density="default" class="hover:tw-scale-105"
        >{{ t("GreptimeDB.Button") }}
      </v-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n"

import Compatibility from "~/public/svg/greptimeDB/Compatibility.svg"
import CostEffective from "~/public/svg/greptimeDB/CostEffective.svg"
import ScalingHorizontally from "~/public/svg/greptimeDB/ScalingHorizontally.svg"
import UnifiedAnalysis from "~/public/svg/greptimeDB/UnifiedAnalysis.svg"

const { t } = useI18n()
const svg = [ScalingHorizontally, UnifiedAnalysis, CostEffective, Compatibility]
const title = [
  "GreptimeDB.ScalingHorizontally.title",
  "GreptimeDB.UnifiedAnalysis.title",
  "GreptimeDB.Cost-effective.title",
  "GreptimeDB.Compatibility.title",
]
const message = [
  "GreptimeDB.ScalingHorizontally.message",
  "GreptimeDB.UnifiedAnalysis.message",
  "GreptimeDB.Cost-effective.message",
  "GreptimeDB.Compatibility.message",
]
</script>

<style scoped>
.v-btn {
  text-transform: none !important;
}
</style>
