<template>
  <div class="lg:tw-hidden">
    <div style="z-index: -1" class="tw-absolute tw--left-36 tw-flex">
      <v-img :src="homeImage" height="576" width="1168" />
    </div>
    <div class="tw-space-y-6 tw-px-4 tw-py-[4rem]">
      <div class="tw-w-full tw-space-y-12">
        <p class="tw-text-5xl tw-font-bold">{{ t("home.title") }}</p>

        <div class="tw-mb-4 tw-flex tw-space-x-3">
          <span class="tw-text-4xl">with</span>
          <span class="tw-text-4xl tw-font-bold">Flexible Deployment</span>
        </div>
        <p class="tw-text-xl">
          {{ t("home.message") }}
        </p>
        <div class="tw-flex tw-space-x-5">
          <button
            class="tw-rounded-md tw-bg-zinc-100 tw-px-12 tw-py-2 tw-text-lg tw-text-black tw-shadow tw-transition-shadow hover:tw-scale-105 hover:tw-opacity-80 dark:tw-shadow-gray-500"
          >
            {{ t("home.button1") }}
          </button>
          <button
            class="tw-rounded-md tw-border tw-border-white tw-px-8 tw-py-2 tw-text-lg tw-text-black tw-shadow tw-shadow-white hover:tw-scale-105 dark:tw-shadow-white"
          >
            {{ t("home.button2") }}
          </button>
        </div>
      </div>
      <!-- code 组件   -->
      <code-component />
    </div>
  </div>

  <!-- lg 以上 -->
  <div class="tw-hidden lg:tw-relative lg:tw-block">
    <div class="tw-absolute tw--left-44" style="z-index: -1">
      <v-img :src="homeImage" height="576" width="1168" />
    </div>
    <div class="tw-flex tw-w-full tw-py-[6.25rem]">
      <div class="tw-mx-auto tw-flex">
        <div class="tw-flex tw-space-x-14">
          <div class="tw-space-y-12">
            <div class="tw-text-6xl tw-font-bold tw-tracking-tighter">
              {{ t("home.title") }}
            </div>
            <div class="tw-mb-4 tw-flex tw-space-x-3">
              <span class="tw-text-4xl">with</span>
              <span class="tw-text-4xl tw-font-bold">Flexible Deployment</span>
            </div>
            <p class="tw-text-xl">
              {{ t("home.message") }}
            </p>
            <div class="tw-flex tw-space-x-5">
              <button
                class="tw-rounded-md tw-bg-zinc-100 tw-px-10 tw-py-2 tw-text-lg tw-text-black tw-shadow tw-transition-shadow hover:tw-scale-105 hover:tw-opacity-80 dark:tw-shadow-gray-500"
              >
                {{ t("home.button1") }}
              </button>
              <button
                class="tw-rounded-md tw-border tw-border-white tw-px-6 tw-py-2 tw-text-lg tw-text-white tw-shadow tw-shadow-white hover:tw-scale-105 hover:tw-shadow-white"
              >
                {{ t("home.button2") }}
              </button>
            </div>
          </div>

          <!-- code 组件-->
          <code-component />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n"

import homeImage from "/public/home_bg0.png"

const { t } = useI18n()
</script>

<style scoped></style>
