<script setup lang="ts">
import EdgeDatabase from "~/components/svg/item5/EdgeDatabase.vue";
import LowerData from "~/components/svg/item5/LowerData.vue";
import Cloud from "~/components/svg/item5/Cloud.vue";

const { t } = useI18n();
</script>

<template>
  <div class="lg:tw-hidden">
    <div class="tw-px-4 tw-py-[3.75rem]">
      <p class="tw-text-center tw-text-3xl tw-font-black">
        {{ t("item5.title") }}
      </p>
      <p class="tw-mb-16 tw-text-center tw-text-lg">
        {{ t("item5.subheader") }}
      </p>
      <div class="tw-grid tw-w-full tw-grid-cols-2">
        <item5-card
          :svg="EdgeDatabase"
          :title="t('item5.card1.title')"
          :list1="t('item5.card1.li1')"
          :list2="t('item5.card1.li2')"
        ></item5-card>
        <item5-card
          :svg="LowerData"
          :title="t('item5.card2.title')"
          :list1="t('item5.card2.li1')"
          :list2="t('item5.card2.li2')"
        ></item5-card>
      </div>
      <div class="tw-grid tw-w-full tw-grid-cols-2">
        <item5-card
          :svg="Cloud"
          :title="t('item5.card3.title')"
          :list1="t('item5.card3.li1')"
          :list2="t('item5.card3.li2')"
        ></item5-card>
      </div>
      <div
        class="tw-mx-auto tw-mt-5 tw-flex tw-max-w-[51rem] tw-justify-center tw-space-x-6"
      >
        <div class="tw-grid tw-w-full tw-grid-cols-2 tw-gap-10">
          <item5-comment
            :comment="t('item5.card4.message')"
            :unit="t('item5.card4.unit')"
            :author="t('item5.card4.author')"
          ></item5-comment>
          <item5-comment
            :comment="t('item5.card5.message')"
            :unit="t('item5.card5.unit')"
            :author="t('item5.card5.author')"
          ></item5-comment>
        </div>
      </div>
    </div>
  </div>

  <div class="tw-hidden tw-w-full tw-py-[6.25rem] lg:tw-block">
    <p class="tw-text-center tw-text-3xl tw-font-black">
      {{ t("item5.title") }}
    </p>
    <p class="tw-mb-16 tw-text-center tw-text-lg">
      {{ t("item5.header") }}
    </p>
    <div class="tw-grid tw-w-full tw-grid-cols-3">
      <item5-card
        :svg="EdgeDatabase"
        :title="t('item5.card1.title')"
        :list1="t('item5.card1.li1')"
        :list2="t('item5.card1.li2')"
      ></item5-card>
      <item5-card
        :svg="LowerData"
        :title="t('item5.card2.title')"
        :list1="t('item5.card2.li1')"
        :list2="t('item5.card2.li2')"
      ></item5-card>
      <item5-card
        :svg="Cloud"
        :title="t('item5.card3.title')"
        :list1="t('item5.card3.li1')"
        :list2="t('item5.card3.li2')"
      ></item5-card>
    </div>
    <div
      class="tw-mx-auto tw-mt-5 tw-flex tw-max-w-[51rem] tw-justify-center tw-space-x-6"
    >
      <div class="tw-mt-5 tw-grid tw-w-full tw-grid-cols-2 tw-gap-10">
        <item5-comment
          :comment="t('item5.card4.message')"
          :unit="t('item5.card4.unit')"
          :author="t('item5.card4.author')"
        ></item5-comment>
        <item5-comment
          :comment="t('item5.card5.message')"
          :unit="t('item5.card5.unit')"
          :author="t('item5.card5.author')"
        ></item5-comment>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
