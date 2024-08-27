<template>
  <div class="tw-w-full tw-pt-[4rem] lg:tw-hidden" :hidden="!onDrawer">
    <ul>
      <nav-bar-menu-item :show="true">Product</nav-bar-menu-item>
      <nav-bar-menu-item :show="true">Solution</nav-bar-menu-item>
      <nav-bar-menu-item :show="true">Resources</nav-bar-menu-item>
      <nav-bar-menu-item :show="false">Blog</nav-bar-menu-item>
      <nav-bar-menu-item :show="false">Pricing</nav-bar-menu-item>
    </ul>
    <div class="tw-flex tw-w-full tw-justify-center">
      <button
        class="tw-h-10 tw-w-1/3 tw-justify-center tw-rounded-md tw-bg-violet-600 tw-p-[0.625rem] tw-py-1 tw-text-base tw-text-white tw-shadow tw-delay-150 tw-ease-in-out hover:tw--translate-y-1 hover:tw-scale-100 hover:tw-transform"
      >
        Start Instantly
      </button>
    </div>
    <div class="tw-flex tw-w-full tw-justify-center">
      <button
        class="tw-my-4 tw-h-10 tw-w-1/3 tw-justify-center tw-rounded-md tw-p-[0.625rem] tw-py-1 tw-text-base tw-text-black tw-shadow tw-delay-150 tw-ease-in-out hover:tw--translate-y-1 hover:tw-scale-100 hover:tw-transform dark:tw-text-white dark:tw-shadow dark:tw-shadow-gray-500"
      >
        Start Instantly
      </button>
    </div>
    <div class="tw-flex tw-w-full tw-justify-center">
      <p class="tw-text-black hover:tw-text-purple-700 dark:tw-text-white">
        Pricing
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const onDrawer = defineModel()
</script>

<style scoped></style>
