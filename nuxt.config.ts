// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify"

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  build: {
    transpile: ["vuetify"],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
  ],
  imports: {
    autoImport: false,
  },
  i18n: {
    vueI18n: "./i18n.config.ts",
    lazy: true,
    langDir: "locales/",
    defaultLocale: "en",
  },

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})
