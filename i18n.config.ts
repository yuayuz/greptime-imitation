import en from "./locales/en.json";
import zhHans from "./locales/zhHans.json";
import { en as vuetifyEn, zhHans as vuetifyZhHans } from "vuetify/locale";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  messages: {
    en: Object.assign({}, vuetifyEn, en),
    zhHans: Object.assign({}, vuetifyZhHans, zhHans),
  },
}));
