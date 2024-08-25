<script setup lang="ts">
import Home from "~/pages/home.vue";
import Optimized from "~/pages/optimized.vue";
import GreptimeDB from "~/pages/greptimeDB.vue";
import enterprise from "~/pages/enterprise.vue";
import GreptimeCloud from "~/pages/greptimeCloud.vue";
import Item5 from "~/pages/item5.vue";
import Item6 from "~/pages/item6.vue";

definePageMeta({
  layout: "nav-var-layout",
});
</script>

<template>
  <div class="tw-mx-auto 2xl:tw-w-[82.5rem]">
    <home></home>
    <optimized></optimized>
    <greptimeDB></greptimeDB>
    <enterprise></enterprise>
    <greptime-cloud></greptime-cloud>
    <item5></item5>
    <item6></item6>
  </div>
</template>

<style scoped></style>
