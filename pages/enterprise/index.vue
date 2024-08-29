<template>
  <div>
    <footer-page />
  </div>
</template>

<script setup lang="ts">
import { definePageMeta } from "#imports"
import FooterPage from "~/pages/FooterPage.vue"

definePageMeta({
  layout: "nav-bar-layout",
})
</script>

<style scoped></style>
