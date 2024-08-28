<template>
  <div class="tw-mx-auto 2xl:tw-w-[82.5rem]">
    <home-page />
    <optimized-page />
    <greptime-d-b-page />
    <enterprise-page />
    <greptime-cloud-page />
    <integrated-solution-page />
    <index-footer-page />
  </div>
</template>

<script setup lang="ts">
import { definePageMeta } from "#imports"
import EnterprisePage from "~/pages/EnterprisePage.vue"
import IndexFooterPage from "~/pages/FooterPage.vue"
import GreptimeCloudPage from "~/pages/GreptimeCloudPage.vue"
import GreptimeDBPage from "~/pages/GreptimeDBPage.vue"
import HomePage from "~/pages/HomePage.vue"
import IntegratedSolutionPage from "~/pages/IntegratedSolutionPage.vue"
import OptimizedPage from "~/pages/OptimizedPage.vue"

definePageMeta({
  layout: "nav-bar-layout",
})
</script>

<style scoped></style>
