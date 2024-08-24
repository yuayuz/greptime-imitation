<script setup lang="ts">
import Integrations from "~/components/svg/item4/Integrations.vue";
import Experience from "~/components/svg/item4/Experience.vue";
import ServerlessScaling from "~/components/svg/item4/ServerlessScaling.vue";
import Cloud from "~/components/svg/item4/Cloud.vue";

const { t } = useI18n();
</script>

<template>
  <div class="lg:tw-hidden">
    <div class="tw-px-4 tw-py-[3.75rem]">
      <p class="tw-text-center tw-text-3xl tw-font-black">GreptimeCloud</p>
      <p class="tw-mb-16 tw-text-center tw-text-lg">
        {{ t("item4.subheader") }}
      </p>
      <div class="tw-mb-8 tw-flex tw-w-full tw-justify-between tw-space-x-5">
        <item4-card :svg="Integrations" :title="t('item4.card1.title')"
          >{{ t("item4.card1.message") }}
        </item4-card>
        <item4-card :svg="Experience" :title="t('item4.card2.title')"
          >{{ t("item4.card2.message") }}
        </item4-card>
      </div>
      <div class="tw-mb-8 tw-flex tw-w-full tw-justify-between tw-space-x-5">
        <item4-card :svg="ServerlessScaling" :title="t('item4.card3.title')"
          >{{ t("item4.card3.message") }}
        </item4-card>
        <item4-card :svg="Cloud" :title="t('item4.card4.title')"
          >{{ t("item4.card4.message") }}
        </item4-card>
      </div>
      <div class="tw-flex tw-justify-center tw-space-x-6">
        <v-btn
          height="45"
          color="white"
          density="default"
          width="181"
          class="tw-text-base tw-font-black hover:tw-scale-105"
          >{{ t("item4.button") }}
        </v-btn>
      </div>
    </div>
  </div>

  <div class="tw-hidden tw-w-full tw-py-[6.25rem] lg:tw-block">
    <p class="tw-text-center tw-text-3xl tw-font-black">GreptimeCloud</p>
    <p class="tw-mb-16 tw-text-center tw-text-lg">
      {{ t("item4.subheader") }}
    </p>
    <div class="tw-mb-8 tw-flex tw-w-full tw-justify-between tw-space-x-5">
      <item4-card :svg="Integrations" :title="t('item4.card1.title')"
        >{{ t("item4.card1.message") }}
      </item4-card>
      <item4-card :svg="Experience" :title="t('item4.card2.title')"
        >{{ t("item4.card2.message") }}
      </item4-card>
      <item4-card :svg="ServerlessScaling" :title="t('item4.card3.title')"
        >{{ t("item4.card3.message") }}
      </item4-card>
      <item4-card :svg="Cloud" :title="t('item4.card4.title')"
        >{{ t("item4.card4.message") }}
      </item4-card>
    </div>
    <div class="tw-flex tw-justify-center tw-space-x-6">
      <v-btn
        height="45"
        color="white"
        density="default"
        width="181"
        class="tw-text-base tw-font-black hover:tw-scale-105"
        >{{ t("item4.button") }}
      </v-btn>
    </div>
  </div>
</template>

<style scoped>
.v-btn {
  text-transform: none !important;
}
</style>
