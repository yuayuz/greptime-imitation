<template>
  <div>
    <enterprise-page />
    <footer-page />
  </div>
</template>

<script setup lang="ts">
import { definePageMeta } from "#imports"
import EnterprisePage from "~/pages/enterprise/EnterprisePage.vue"
import FooterPage from "~/pages/FooterPage.vue"

definePageMeta({
  layout: "nav-bar-layout",
})
</script>

<style scoped></style>
