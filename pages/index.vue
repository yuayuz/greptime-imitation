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
import EnterprisePage from "~/pages/enterprisePage.vue"
import IndexFooterPage from "~/pages/footerPage.vue"
import GreptimeCloudPage from "~/pages/greptimeCloudPage.vue"
import GreptimeDBPage from "~/pages/greptimeDBPage.vue"
import HomePage from "~/pages/homePage.vue"
import IntegratedSolutionPage from "~/pages/integratedSolutionPage.vue"
import OptimizedPage from "~/pages/optimizedPage.vue"

definePageMeta({
  layout: "nav-bar-layout",
})
</script>

<style scoped></style>
