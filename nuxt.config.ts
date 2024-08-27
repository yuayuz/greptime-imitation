// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  modules: ["vuetify-nuxt-module", "@nuxtjs/tailwindcss", "@nuxtjs/i18n"],
  imports: {
    autoImport: false,
  },
  i18n: {
    vueI18n: "./i18n.config.ts",
    lazy: true,
    langDir: "locales/",
    defaultLocale: "en",
  },
})
