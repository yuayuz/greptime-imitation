<script setup lang="ts">
import Integrations from "~/components/svg/greptimeCloud/Integrations.vue";
import Experience from "~/components/svg/greptimeCloud/Experience.vue";
import ServerlessScaling from "~/components/svg/greptimeCloud/ServerlessScaling.vue";
import Cloud from "~/components/svg/greptimeCloud/Cloud.vue";

const { t } = useI18n();
</script>

<template>
  <div class="lg:tw-hidden">
    <div class="tw-px-4 tw-py-[3.75rem]">
      <p class="tw-text-center tw-text-3xl tw-font-black">GreptimeCloud</p>
      <p class="tw-mb-16 tw-text-center tw-text-lg">
        {{ t("GreptimeCloud.Subheader") }}
      </p>
      <div class="tw-mb-8 tw-flex tw-w-full tw-justify-between tw-space-x-5">
        <greptimeCloud-card
          :svg="Integrations"
          :title="t('GreptimeCloud.Integrations.Title')"
          >{{ t("GreptimeCloud.Integrations.Message") }}
        </greptimeCloud-card>
        <greptimeCloud-card
          :svg="Experience"
          :title="t('GreptimeCloud.Experience.Title')"
          >{{ t("GreptimeCloud.Experience.Message") }}
        </greptimeCloud-card>
      </div>
      <div class="tw-mb-8 tw-flex tw-w-full tw-justify-between tw-space-x-5">
        <greptimeCloud-card
          :svg="ServerlessScaling"
          :title="t('GreptimeCloud.ServerlessScaling.Title')"
          >{{ t("GreptimeCloud.ServerlessScaling.Message") }}
        </greptimeCloud-card>
        <greptimeCloud-card :svg="Cloud" :title="t('GreptimeCloud.Cloud.Title')"
          >{{ t("GreptimeCloud.Cloud.Message") }}
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

  <div class="tw-hidden tw-w-full tw-py-[6.25rem] lg:tw-block">
    <p class="tw-text-center tw-text-3xl tw-font-black">GreptimeCloud</p>
    <p class="tw-mb-16 tw-text-center tw-text-lg">
      {{ t("GreptimeCloud.Subheader") }}
    </p>
    <div class="tw-mb-8 tw-flex tw-w-full tw-justify-between tw-space-x-5">
      <greptimeCloud-card
        :svg="Integrations"
        :title="t('GreptimeCloud.Integrations.Title')"
        >{{ t("GreptimeCloud.Integrations.Message") }}
      </greptimeCloud-card>
      <greptimeCloud-card
        :svg="Experience"
        :title="t('GreptimeCloud.Experience.Title')"
        >{{ t("GreptimeCloud.Experience.Message") }}
      </greptimeCloud-card>
      <greptimeCloud-card
        :svg="ServerlessScaling"
        :title="t('GreptimeCloud.ServerlessScaling.Title')"
        >{{ t("GreptimeCloud.ServerlessScaling.Message") }}
      </greptimeCloud-card>
      <greptimeCloud-card :svg="Cloud" :title="t('GreptimeCloud.Cloud.Title')"
        >{{ t("GreptimeCloud.Cloud.Message") }}
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
</template>

<style scoped>
.v-btn {
  text-transform: none !important;
}
</style>
