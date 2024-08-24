<script setup lang="ts">
const onLanguageOpen = ref(false);
const { locale, setLocale, t } = useI18n();
</script>

<template>
  <div class="lg:tw-hidden">
    <div class="tw-px-4 tw-py-[3.75rem]">
      <div class="tw-space-y-16">
        <div class="tw-w-[8.5rem]">
          <v-img src="/public/logo-text.png" class="tw-mb-5"></v-img>
          <p class="tw-text-sm tw-text-zinc-500">Greptime #30</p>
          <p class="tw-text-sm tw-text-zinc-500">440 N. Wolfe Road</p>
          <p class="tw-text-sm tw-text-zinc-500">Sunnyvale, CA 94085</p>
          <v-menu v-model="onLanguageOpen" open-on-hover>
            <template v-slot:activator="{ props }">
              <v-btn v-bind="props" class="tw-mt-5">
                <template v-slot:prepend>
                  <svg-item6-language></svg-item6-language>
                </template>
                {{ locale === "EN" ? "English" : "简体中文" }}
                <template v-slot:append>
                  <v-icon
                    :icon="
                      onLanguageOpen ? ' mdi-chevron-up' : ' mdi-chevron-down'
                    "
                  ></v-icon>
                </template>
              </v-btn>
            </template>
            <v-list>
              <v-list-item @click="setLocale('en')">English</v-list-item>
              <v-list-item @click="setLocale('zhHans')">简体中文</v-list-item>
            </v-list>
          </v-menu>
        </div>
        <div class="tw-flex">
          <div class="tw-w-[12.3rem]">
            <div class="tw-mb-5 tw-mt-2">{{ t("item6.list1.title") }}</div>
            <p class="tw-text-sm tw-text-zinc-500">
              {{ t("item6.list1.li1") }}
            </p>
            <p class="tw-text-sm tw-text-zinc-500">
              {{ t("item6.list1.li2") }}
            </p>
            <p class="tw-text-sm tw-text-zinc-500">
              {{ t("item6.list1.li3") }}
            </p>
          </div>
          <div class="tw-w-[12.3rem]">
            <div class="tw-mb-5 tw-mt-2">{{ t("item6.list2.title") }}</div>
            <p class="tw-text-sm tw-text-zinc-500">
              {{ t("item6.list2.li1") }}
            </p>
            <p
              :hidden="locale === 'zhHans'"
              class="tw-text-sm tw-text-zinc-500"
            >
              {{ t("item6.list2.li2") }}
            </p>
            <p class="tw-text-sm tw-text-zinc-500">
              {{ t("item6.list2.li3") }}
            </p>
            <p class="tw-text-sm tw-text-zinc-500">
              {{ t("item6.list2.li4") }}
            </p>
            <p class="tw-text-sm tw-text-zinc-500">
              {{ t("item6.list2.li5") }}
            </p>
            <p class="tw-text-sm tw-text-zinc-500">
              {{ t("item6.list2.li6") }}
            </p>
          </div>
          <div class="tw-w-[12.3rem]">
            <div class="tw-mb-5 tw-mt-2">{{ t("item6.list3.title") }}</div>
            <p class="tw-text-sm tw-text-zinc-500">
              {{ t("item6.list3.li1") }}
            </p>
            <p class="tw-text-sm tw-text-zinc-500">
              {{ t("item6.list3.li2") }}
            </p>
            <p class="tw-text-sm tw-text-zinc-500">
              {{ t("item6.list3.li3") }}
            </p>
            <p class="tw-text-sm tw-text-zinc-500">
              {{ t("item6.list3.li4") }}
            </p>
          </div>
          <div class="tw-w-[12.3rem]">
            <div class="tw-mb-5 tw-mt-2">{{ t("item6.list4.title") }}</div>
            <p class="tw-text-sm tw-text-zinc-500">
              {{ t("item6.list4.li1") }}
            </p>
            <p
              :hidden="locale === 'zhHans'"
              class="tw-text-sm tw-text-zinc-500"
            >
              {{ t("item6.list4.li2") }}
            </p>
            <p class="tw-text-sm tw-text-zinc-500">
              {{ t("item6.list4.li3") }}
            </p>
            <p class="tw-text-sm tw-text-zinc-500">
              {{ t("item6.list4.li4") }}
            </p>
            <p
              :hidden="locale === 'zhHans'"
              class="tw-text-sm tw-text-zinc-500"
            >
              {{ t("item6.list4.li5") }}
            </p>
            <p
              :hidden="locale === 'zhHans'"
              class="tw-text-sm tw-text-zinc-500"
            >
              {{ t("item6.list4.li6") }}
            </p>
          </div>
        </div>
        <div class="tw-w-[26.25rem]">
          <div class="tw-mb-5 tw-mt-2 tw-text-xl tw-font-black">
            {{ t("item6.subscribe.title") }}
          </div>
          <v-text-field
            :placeholder="t('item6.subscribe.message')"
          ></v-text-field>
          <v-btn width="420">
            {{ t("item6.subscribe.button") }}
          </v-btn>
          <div class="tw-mt-5 tw-grid tw-w-[18rem] tw-grid-cols-6">
            <v-img src="/public/github.png" width="28" height="28"></v-img>
            <v-img src="/public/youtube.png" width="28" height="28"></v-img>
            <v-img src="/public/twitter.png" width="28" height="28"></v-img>
            <v-img src="/public/slack.png" width="28" height="28"></v-img>
            <v-img src="/public/linkedin.png" width="28" height="28"></v-img>
            <v-img src="/public/rss.png" width="28" height="28"></v-img>
          </div>
        </div>
      </div>
      <div
        class="tw-mt-[3.75rem] tw-w-full tw-border-t tw-p-6 tw-text-center tw-text-sm tw-text-zinc-500"
      >
        {{ t("item6.footer") }}
      </div>
    </div>
  </div>
  <div class="tw-hidden tw-w-full tw-border-t tw-py-[3.75rem] lg:tw-block">
    <div class="tw-flex tw-justify-between">
      <div class="tw-w-[8.5rem]">
        <v-img src="/public/logo-text.png" class="tw-mb-5"></v-img>
        <p class="tw-text-sm tw-text-zinc-500">Greptime #30</p>
        <p class="tw-text-sm tw-text-zinc-500">440 N. Wolfe Road</p>
        <p class="tw-text-sm tw-text-zinc-500">Sunnyvale, CA 94085</p>
        <v-menu v-model="onLanguageOpen" open-on-hover>
          <template v-slot:activator="{ props }">
            <v-btn v-bind="props" class="tw-mt-5">
              <template v-slot:prepend>
                <svg-item6-language></svg-item6-language>
              </template>
              {{ locale === "en" ? "English" : "简体中文" }}
              <template v-slot:append>
                <v-icon
                  :icon="
                    onLanguageOpen ? ' mdi-chevron-up' : ' mdi-chevron-down'
                  "
                ></v-icon>
              </template>
            </v-btn>
          </template>
          <v-list>
            <v-list-item @click="setLocale('en')">English</v-list-item>
            <v-list-item @click="setLocale('zhHans')">简体中文</v-list-item>
          </v-list>
        </v-menu>
      </div>
      <div class="tw-grid tw-grid-cols-4">
        <div class="tw-w-[12.3rem]">
          <div class="tw-mb-5 tw-mt-2">{{ t("item6.list1.title") }}</div>
          <p class="tw-text-sm tw-text-zinc-500">{{ t("item6.list1.li1") }}</p>
          <p class="tw-text-sm tw-text-zinc-500">{{ t("item6.list1.li2") }}</p>
          <p class="tw-text-sm tw-text-zinc-500">{{ t("item6.list1.li3") }}</p>
        </div>
        <div class="tw-w-[12.3rem]">
          <div class="tw-mb-5 tw-mt-2">{{ t("item6.list2.title") }}</div>
          <p class="tw-text-sm tw-text-zinc-500">{{ t("item6.list2.li1") }}</p>
          <p class="tw-text-sm tw-text-zinc-500">{{ t("item6.list2.li2") }}</p>
          <p class="tw-text-sm tw-text-zinc-500" :hidden="locale === 'zhHans'">
            {{ t("item6.list2.li3") }}
          </p>
          <p class="tw-text-sm tw-text-zinc-500">{{ t("item6.list2.li4") }}</p>
          <p class="tw-text-sm tw-text-zinc-500">{{ t("item6.list2.li5") }}</p>
          <p class="tw-text-sm tw-text-zinc-500">{{ t("item6.list2.li6") }}</p>
        </div>
        <div class="tw-w-[12.3rem]">
          <div class="tw-mb-5 tw-mt-2">{{ t("item6.list1.title") }}</div>
          <p class="tw-text-sm tw-text-zinc-500">{{ t("item6.list3.li1") }}</p>
          <p class="tw-text-sm tw-text-zinc-500">{{ t("item6.list3.li2") }}</p>
          <p class="tw-text-sm tw-text-zinc-500">{{ t("item6.list3.li3") }}</p>
          <p class="tw-text-sm tw-text-zinc-500">{{ t("item6.list3.li4") }}</p>
        </div>
        <div class="tw-w-[12.3rem]">
          <div class="tw-mb-5 tw-mt-2">{{ t("item6.list4.title") }}</div>
          <p class="tw-text-sm tw-text-zinc-500">{{ t("item6.list4.li1") }}</p>
          <p class="tw-text-sm tw-text-zinc-500" :hidden="locale === 'zhHans'">
            {{ t("item6.list4.li2") }}
          </p>
          <p class="tw-text-sm tw-text-zinc-500">{{ t("item6.list4.li3") }}</p>
          <p class="tw-text-sm tw-text-zinc-500">{{ t("item6.list4.li4") }}</p>
          <p class="tw-text-sm tw-text-zinc-500" :hidden="locale === 'zhHans'">
            {{ t("item6.list4.li5") }}
          </p>
          <p class="tw-text-sm tw-text-zinc-500" :hidden="locale === 'zhHans'">
            {{ t("item6.list4.li6") }}
          </p>
        </div>
      </div>
      <div class="tw-w-[18rem]">
        <div class="tw-mb-5 tw-mt-2 tw-text-xl tw-font-black">
          {{ t("item6.subscribe.title") }}
        </div>
        <v-text-field
          :placeholder="t('item6.subscribe.message')"
        ></v-text-field>
        <v-btn width="288">
          {{ t("item6.subscribe.button") }}
        </v-btn>
        <div class="tw-mt-5 tw-grid tw-grid-cols-6">
          <v-img src="/public/github.png" width="28" height="28"></v-img>
          <v-img src="/public/youtube.png" width="28" height="28"></v-img>
          <v-img src="/public/twitter.png" width="28" height="28"></v-img>
          <v-img src="/public/slack.png" width="28" height="28"></v-img>
          <v-img src="/public/linkedin.png" width="28" height="28"></v-img>
          <v-img src="/public/rss.png" width="28" height="28"></v-img>
        </div>
      </div>
    </div>
    <div
      class="tw-mt-[3.75rem] tw-w-full tw-border-t tw-p-6 tw-text-center tw-text-sm tw-text-zinc-500"
    >
      {{ t("item6.footer") }}
    </div>
  </div>
</template>

<style scoped>
.v-btn {
  text-transform: none !important;
}
</style>
