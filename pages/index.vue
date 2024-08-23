<script setup lang="ts">
import Home from "~/pages/home.vue";
import Item1 from "~/pages/item1.vue";
import Item2 from "~/pages/item2.vue";

definePageMeta({
  layout: "nav-var-layout",
});
</script>

<template>
  <div class="tw-mx-auto 2xl:tw-w-[82.5rem]">
    <home></home>
    <item1></item1>
    <item2></item2>
  </div>
</template>

<style scoped></style>
