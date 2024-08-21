<script setup lang="ts"></script>

<template>
  <v-hover>
    <template v-slot:default="{ isHovering, props }">
      <v-btn
        variant="text"
        color="white"
        density="comfortable"
        v-bind="props"
        size="sm"
        class="tw-px-3"
      >
        <p
          :class="
            isHovering
              ? 'text-decoration-underline tw-text-purple-700'
              : 'text-decoration-none'
          "
          class="tw-text-sm"
        >
          <slot></slot>
        </p>
      </v-btn>
    </template>
  </v-hover>
</template>

<style scoped>
.v-btn {
  text-transform: none !important;
}
</style>
