<script setup lang="ts">
import ScalingHorizontally from "~/public/svg/greptimeDB/ScalingHorizontally.svg";
import UnifiedAnalysis from "~/public/svg/greptimeDB/UnifiedAnalysis.svg";
import CostEffective from "~/public/svg/greptimeDB/CostEffective.svg";
import Compatibility from "~/public/svg/greptimeDB/Compatibility.svg";

const { t } = useI18n();
</script>

<template>
  <div class="lg:tw-hidden">
    <div class="tw-px-4 tw-py-[3.75rem]">
      <p class="tw-text-center tw-text-3xl tw-font-black">GreptimeDB</p>
      <p class="tw-mb-16 tw-text-center tw-text-lg">
        {{ t("GreptimeDB.Subheader") }}
      </p>
      <div class="tw-mb-8 tw-flex tw-w-full tw-justify-between tw-space-x-5">
        <greptimeDB-card
          :svg="ScalingHorizontally"
          :title="t('GreptimeDB.ScalingHorizontally.title')"
          >{{ t("GreptimeDB.ScalingHorizontally.message") }}
        </greptimeDB-card>
        <greptimeDB-card
          :svg="UnifiedAnalysis"
          :title="t('GreptimeDB.UnifiedAnalysis.title')"
          >{{ t("GreptimeDB.UnifiedAnalysis.message") }}
        </greptimeDB-card>
      </div>
      <div class="tw-mb-8 tw-flex tw-w-full tw-justify-between tw-space-x-5">
        <greptimeDB-card
          :svg="CostEffective"
          :title="t('GreptimeDB.Cost-effective.title')"
          >{{ t("GreptimeDB.Cost-effective.message") }}
        </greptimeDB-card>
        <greptimeDB-card
          :svg="Compatibility"
          :title="t('GreptimeDB.Compatibility.title')"
          >{{ t("GreptimeDB.Compatibility.message") }}
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
  <div class="tw-hidden tw-w-full tw-py-[6.25rem] lg:tw-block">
    <p class="tw-text-center tw-text-3xl tw-font-black">GreptimeDB</p>
    <p class="tw-mb-16 tw-text-center tw-text-lg">
      {{ t("GreptimeDB.Subheader") }}
    </p>
    <div class="tw-mb-8 tw-flex tw-w-full tw-justify-between tw-space-x-5">
      <greptimeDB-card
        :svg="ScalingHorizontally"
        :title="t('GreptimeDB.ScalingHorizontally.title')"
        >{{ t("GreptimeDB.ScalingHorizontally.message") }}
      </greptimeDB-card>
      <greptimeDB-card
        :svg="UnifiedAnalysis"
        :title="t('GreptimeDB.UnifiedAnalysis.title')"
        >{{ t("GreptimeDB.UnifiedAnalysis.message") }}
      </greptimeDB-card>
      <greptimeDB-card
        :svg="CostEffective"
        :title="t('GreptimeDB.Cost-effective.title')"
        >{{ t("GreptimeDB.Cost-effective.message") }}
      </greptimeDB-card>
      <greptimeDB-card
        :svg="Compatibility"
        :title="t('GreptimeDB.Compatibility.title')"
        >{{ t("GreptimeDB.Compatibility.message") }}
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
</template>

<style scoped>
.v-btn {
  text-transform: none !important;
}
</style>
