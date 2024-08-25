<script setup lang="ts">
import EdgeDatabase from "~/components/svg/integratedSolution/EdgeDatabase.vue";
import LowerData from "~/components/svg/integratedSolution/LowerData.vue";
import Cloud from "~/components/svg/integratedSolution/Cloud.vue";

const { t } = useI18n();
</script>

<template>
  <div class="lg:tw-hidden">
    <div class="tw-px-4 tw-py-[3.75rem]">
      <p class="tw-text-center tw-text-3xl tw-font-black">
        {{ t("IntegratedSolution.Title") }}
      </p>
      <p class="tw-mb-16 tw-text-center tw-text-lg">
        {{ t("IntegratedSolution.Subheader") }}
      </p>
      <div class="tw-grid tw-w-full tw-grid-cols-2">
        <integratedSolution-card
          :svg="EdgeDatabase"
          :title="t('IntegratedSolution.EdgeDatabase.Title')"
          :list1="t('IntegratedSolution.EdgeDatabase.Message1')"
          :list2="t('IntegratedSolution.EdgeDatabase.Message2')"
        ></integratedSolution-card>
        <integratedSolution-card
          :svg="LowerData"
          :title="t('IntegratedSolution.DataAsyncCost.Title')"
          :list1="t('IntegratedSolution.DataAsyncCost.Message1')"
          :list2="t('IntegratedSolution.DataAsyncCost.Message2')"
        ></integratedSolution-card>
      </div>
      <div class="tw-grid tw-w-full tw-grid-cols-2">
        <integratedSolution-card
          :svg="Cloud"
          :title="t('IntegratedSolution.Collaboration.Title')"
          :list1="t('IntegratedSolution.Collaboration.Message1')"
          :list2="t('IntegratedSolution.Collaboration.Message2')"
        ></integratedSolution-card>
      </div>
      <div
        class="tw-mx-auto tw-mt-5 tw-flex tw-max-w-[51rem] tw-justify-center tw-space-x-6"
      >
        <div class="tw-grid tw-w-full tw-grid-cols-2 tw-gap-10">
          <integratedSolution-comment
            :comment="t('IntegratedSolution.Comment1.Message')"
            :unit="t('IntegratedSolution.Comment1.Unit')"
            :author="t('IntegratedSolution.Comment1.Author')"
          ></integratedSolution-comment>
          <integratedSolution-comment
            :comment="t('IntegratedSolution.Comment2.Message')"
            :unit="t('IntegratedSolution.Comment2.Unit')"
            :author="t('IntegratedSolution.Comment2.Author')"
          ></integratedSolution-comment>
        </div>
      </div>
    </div>
  </div>

  <div class="tw-hidden tw-w-full tw-py-[6.25rem] lg:tw-block">
    <p class="tw-text-center tw-text-3xl tw-font-black">
      {{ t("IntegratedSolution.Title") }}
    </p>
    <p class="tw-mb-16 tw-text-center tw-text-lg">
      {{ t("IntegratedSolution.Header") }}
    </p>
    <div class="tw-grid tw-w-full tw-grid-cols-3">
      <integratedSolution-card
        :svg="EdgeDatabase"
        :title="t('IntegratedSolution.EdgeDatabase.Title')"
        :list1="t('IntegratedSolution.EdgeDatabase.Message1')"
        :list2="t('IntegratedSolution.EdgeDatabase.Message2')"
      ></integratedSolution-card>
      <integratedSolution-card
        :svg="LowerData"
        :title="t('IntegratedSolution.DataAsyncCost.Title')"
        :list1="t('IntegratedSolution.DataAsyncCost.Message1')"
        :list2="t('IntegratedSolution.DataAsyncCost.Message2')"
      ></integratedSolution-card>
      <integratedSolution-card
        :svg="Cloud"
        :title="t('IntegratedSolution.Collaboration.Title')"
        :list1="t('IntegratedSolution.Collaboration.Message1')"
        :list2="t('IntegratedSolution.Collaboration.Message2')"
      ></integratedSolution-card>
    </div>
    <div
      class="tw-mx-auto tw-mt-5 tw-flex tw-max-w-[51rem] tw-justify-center tw-space-x-6"
    >
      <div class="tw-mt-5 tw-grid tw-w-full tw-grid-cols-2 tw-gap-10">
        <integratedSolution-comment
          :comment="t('IntegratedSolution.Comment1.Message')"
          :unit="t('IntegratedSolution.Comment1.Unit')"
          :author="t('IntegratedSolution.Comment1.Author')"
        ></integratedSolution-comment>
        <integratedSolution-comment
          :comment="t('IntegratedSolution.Comment2.Message')"
          :unit="t('IntegratedSolution.Comment2.Unit')"
          :author="t('IntegratedSolution.Comment2.Author')"
        ></integratedSolution-comment>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
