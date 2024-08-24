<script setup lang="ts">
import ScalingHorizontally from "~/components/svg/item2/ScalingHorizontally.vue";
import UnifiedAnalysis from "~/components/svg/item2/UnifiedAnalysis.vue";
import CostEffective from "~/components/svg/item2/CostEffective.vue";
import Compatibility from "~/components/svg/item2/Compatibility.vue";

const { t } = useI18n();
</script>

<template>
  <div class="lg:tw-hidden">
    <div class="tw-px-4 tw-py-[3.75rem]">
      <p class="tw-text-center tw-text-3xl tw-font-black">GreptimeDB</p>
      <p class="tw-mb-16 tw-text-center tw-text-lg">
        {{ t("item2.subheader") }}
      </p>
      <div class="tw-mb-8 tw-flex tw-w-full tw-justify-between tw-space-x-5">
        <item2-card :svg="ScalingHorizontally" :title="t('item2.card1.title')"
          >{{ t("item2.card1.message") }}
        </item2-card>
        <item2-card :svg="UnifiedAnalysis" :title="t('item2.card2.title')"
          >{{ t("item2.card2.message") }}
        </item2-card>
      </div>
      <div class="tw-mb-8 tw-flex tw-w-full tw-justify-between tw-space-x-5">
        <item2-card :svg="CostEffective" :title="t('item2.card3.title')"
          >{{ t("item2.card3.message") }}
        </item2-card>
        <item2-card :svg="Compatibility" :title="t('item2.card4.title')"
          >{{ t("item2.card4.message") }}
        </item2-card>
      </div>
      <div class="tw-flex tw-justify-center tw-space-x-6">
        <v-btn color="white" density="default" class="hover:tw-scale-105"
          >GreptimePlay
        </v-btn>
        <v-btn variant="outlined" density="default" class="hover:tw-scale-105"
          >{{ t("item2.button") }}
        </v-btn>
      </div>
    </div>
  </div>
  <div class="tw-hidden tw-w-full tw-py-[6.25rem] lg:tw-block">
    <p class="tw-text-center tw-text-3xl tw-font-black">GreptimeDB</p>
    <p class="tw-mb-16 tw-text-center tw-text-lg">
      {{ t("item2.subheader") }}
    </p>
    <div class="tw-mb-8 tw-flex tw-w-full tw-justify-between tw-space-x-5">
      <item2-card :svg="ScalingHorizontally" :title="t('item2.card1.title')"
        >{{ t("item2.card1.message") }}
      </item2-card>
      <item2-card :svg="UnifiedAnalysis" :title="t('item2.card2.title')"
        >{{ t("item2.card2.message") }}
      </item2-card>
      <item2-card :svg="CostEffective" :title="t('item2.card3.title')"
        >{{ t("item2.card3.message") }}
      </item2-card>
      <item2-card :svg="Compatibility" :title="t('item2.card4.title')"
        >{{ t("item2.card4.message") }}
      </item2-card>
    </div>
    <div class="tw-flex tw-justify-center tw-space-x-6">
      <v-btn color="white" density="default" class="hover:tw-scale-105"
        >GreptimePlay
      </v-btn>

      <v-btn variant="outlined" density="default" class="hover:tw-scale-105"
        >{{ t("item2.button") }}
      </v-btn>
    </div>
  </div>
</template>

<style scoped>
.v-btn {
  text-transform: none !important;
}
</style>
