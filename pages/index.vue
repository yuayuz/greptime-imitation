<template>
  <div class="tw-mx-auto 2xl:tw-w-[82.5rem]">
    <home />
    <optimized />
    <greptime-d-b />
    <enterprise />
    <greptime-cloud />
    <integrated-solution />
    <index-footer />
  </div>
</template>

<script setup lang="ts">
import Home from "~/pages/home.vue";
import Optimized from "~/pages/optimized.vue";
import GreptimeDB from "~/pages/greptimeDB.vue";
import enterprise from "~/pages/enterprise.vue";
import GreptimeCloud from "~/pages/greptimeCloud.vue";
import IntegratedSolution from "~/pages/integratedSolution.vue";
import IndexFooter from "~/pages/footer.vue";

definePageMeta({
  layout: "nav-bar-layout",
});
</script>

<style scoped></style>
