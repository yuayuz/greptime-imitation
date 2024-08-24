<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <div class="tw-flex tw-justify-between">
    <div
      class="tw-w-full tw-max-w-[14rem] tw-rounded-lg dark:tw-border dark:tw-border-white dark:tw-shadow dark:tw-shadow-white"
    >
      <v-card
        color="deep-purple-accent-4"
        height="129"
        class="tw-flex tw-content-center tw-rounded-lg"
      >
        <div class="tw-justify-center tw-space-y-1 tw-text-center">
          <div class="tw-text-4xl tw-font-bold">50x</div>
          <div class="tw-text-sm">
            {{ t("item1.window2.card1") }}
          </div>
        </div>
      </v-card>
    </div>

    <div
      class="tw-w-full tw-max-w-[14rem] tw-rounded-lg dark:tw-border dark:tw-border-white dark:tw-shadow dark:tw-shadow-white"
    >
      <v-card
        color="deep-purple-accent-4"
        height="129"
        class="tw-flex tw-content-center tw-rounded-lg"
      >
        <div class="tw-justify-center tw-space-y-1 tw-text-center">
          <div class="tw-text-4xl tw-font-bold">1000+</div>
          <div class="tw-text-sm">
            {{ t("item1.window2.card2") }}
          </div>
        </div>
      </v-card>
    </div>

    <div
      class="tw-w-full tw-max-w-[14rem] tw-rounded-lg dark:tw-border dark:tw-border-white dark:tw-shadow dark:tw-shadow-white"
    >
      <v-card
        color="deep-purple-accent-4"
        height="129"
        class="tw-flex tw-content-center tw-rounded-lg"
      >
        <div class="tw-justify-center tw-space-y-1 tw-text-center">
          <div class="tw-text-3xl tw-font-bold">Cross-Cloud</div>
          <div class="tw-text-xs">{{ t("item1.window2.card3") }}</div>
        </div>
      </v-card>
    </div>
  </div>

  <div>
    <p>
      {{ t("item1.window2.message") }}
    </p>
  </div>
</template>

<style scoped></style>
