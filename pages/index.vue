<template>
  <div class="tw-mx-auto 2xl:tw-w-[82.5rem]">
    <home />
    <optimized />
    <greptime-d-b />
    <Enterprise />
    <greptime-cloud />
    <integrated-solution />
    <index-footer />
  </div>
</template>

<script setup lang="ts">
import { definePageMeta } from "#imports"
import Enterprise from "~/pages/enterprise.vue"
import IndexFooter from "~/pages/footer.vue"
import GreptimeCloud from "~/pages/greptimeCloud.vue"
import GreptimeDB from "~/pages/greptimeDB.vue"
import Home from "~/pages/home.vue"
import IntegratedSolution from "~/pages/integratedSolution.vue"
import Optimized from "~/pages/optimized.vue"

definePageMeta({
  layout: "nav-bar-layout",
})
</script>

<style scoped></style>
