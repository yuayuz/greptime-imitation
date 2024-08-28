<template>
  <v-menu v-model="open" open-on-hover>
    <template v-slot:activator="{ props }">
      <v-btn v-bind="props" class="tw-mt-5">
        <template v-slot:prepend>
          <img :src="prop.svg" alt="language" />
        </template>
        {{ locale === "en" ? "English" : "简体中文" }}
        <template v-slot:append>
          <v-icon
            :icon="open ? ' mdi-chevron-up' : ' mdi-chevron-down'"
          ></v-icon>
        </template>
      </v-btn>
    </template>
    <v-list>
      <v-list-item @click="setLocale('en')">English</v-list-item>
      <v-list-item @click="setLocale('zhHans')">简体中文</v-list-item>
    </v-list>
  </v-menu>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { useI18n } from "vue-i18n"

const { locale, setLocale } = useI18n()

interface Props {
  svg: string
}

const prop = defineProps<Props>()
const open = ref(false)
</script>

<style scoped>
@import "@/stylus/button.css";
</style>
