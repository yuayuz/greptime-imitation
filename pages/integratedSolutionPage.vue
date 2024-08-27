<template>
  <div class="lg:tw-hidden">
    <div class="tw-px-4 tw-py-[4rem]">
      <p class="tw-text-center tw-text-3xl tw-font-black">
        {{ t("IntegratedSolution.Title") }}
      </p>
      <p class="tw-mb-16 tw-text-center tw-text-lg">
        {{ t("IntegratedSolution.Subheader") }}
      </p>
      <div class="tw-grid tw-w-full tw-grid-cols-2">
        <integratedSolution-card
          :svg="integratedSolutionCardMessage[0].svg"
          :title="integratedSolutionCardMessage[0].title"
          :list1="integratedSolutionCardMessage[0].list1"
          :list2="integratedSolutionCardMessage[0].list2"
        ></integratedSolution-card>
        <integratedSolution-card
          :svg="integratedSolutionCardMessage[1].svg"
          :title="integratedSolutionCardMessage[1].title"
          :list1="integratedSolutionCardMessage[1].list1"
          :list2="integratedSolutionCardMessage[1].list2"
        ></integratedSolution-card>
      </div>
      <div class="tw-grid tw-w-full tw-grid-cols-2">
        <integratedSolution-card
          :svg="integratedSolutionCardMessage[2].svg"
          :title="integratedSolutionCardMessage[2].title"
          :list1="integratedSolutionCardMessage[2].list1"
          :list2="integratedSolutionCardMessage[2].list2"
        ></integratedSolution-card>
      </div>
      <div class="tw-mx-auto tw-mt-5 tw-flex tw-justify-center tw-space-x-6">
        <div class="tw-grid tw-w-full tw-grid-cols-2 tw-gap-10">
          <integrated-solution-comment
            v-for="n in 2"
            :key="n"
            :comment="integratedSolutionCommentMessage[n - 1].comment"
            :unit="integratedSolutionCommentMessage[n - 1].unit"
            :author="integratedSolutionCommentMessage[n - 1].author"
          />
        </div>
      </div>
    </div>
  </div>

  <div class="tw-hidden tw-w-full tw-py-[6rem] lg:tw-block">
    <p class="tw-text-center tw-text-3xl tw-font-black">
      {{ t("IntegratedSolution.Title") }}
    </p>
    <p class="tw-mb-16 tw-text-center tw-text-lg">
      {{ t("IntegratedSolution.Subheader") }}
    </p>
    <div class="tw-grid tw-w-full tw-grid-cols-3">
      <integrated-solution-card
        v-for="n in 3"
        :key="n"
        :svg="integratedSolutionCardMessage[n - 1].svg"
        :title="integratedSolutionCardMessage[n - 1].title"
        :list1="integratedSolutionCardMessage[n - 1].list1"
        :list2="integratedSolutionCardMessage[n - 1].list2"
      />
    </div>
    <div
      class="tw-mx-auto tw-mt-5 tw-flex tw-max-w-[51rem] tw-justify-center tw-space-x-6"
    >
      <div class="tw-mt-5 tw-grid tw-w-full tw-grid-cols-2 tw-gap-10">
        <integrated-solution-comment
          v-for="n in 2"
          :key="n"
          :comment="integratedSolutionCommentMessage[n - 1].comment"
          :unit="integratedSolutionCommentMessage[n - 1].unit"
          :author="integratedSolutionCommentMessage[n - 1].author"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n"

import Cloud from "~/public/svg/integratedSolution/Cloud.svg"
import EdgeDatabase from "~/public/svg/integratedSolution/EdgeDatabase.svg"
import LowerData from "~/public/svg/integratedSolution/LowerData.svg"

const { t } = useI18n()
const integratedSolutionCardMessage = [
  {
    svg: EdgeDatabase,
    title: "IntegratedSolution.EdgeDatabase.Title",
    list1: "IntegratedSolution.EdgeDatabase.Message1",
    list2: "IntegratedSolution.EdgeDatabase.Message2",
  },
  {
    svg: LowerData,
    title: "IntegratedSolution.DataAsyncCost.Title",
    list1: "IntegratedSolution.DataAsyncCost.Message1",
    list2: "IntegratedSolution.DataAsyncCost.Message2",
  },
  {
    svg: Cloud,
    title: "IntegratedSolution.Collaboration.Title",
    list1: "IntegratedSolution.Collaboration.Message1",
    list2: "IntegratedSolution.Collaboration.Message2",
  },
]
const integratedSolutionCommentMessage = [
  {
    comment: "IntegratedSolution.Comment1.Message",
    unit: "IntegratedSolution.Comment1.Unit",
    author: "IntegratedSolution.Comment1.Author",
  },
  {
    comment: "IntegratedSolution.Comment2.Message",
    unit: "IntegratedSolution.Comment2.Unit",
    author: "IntegratedSolution.Comment2.Author",
  },
]
</script>

<style scoped></style>
