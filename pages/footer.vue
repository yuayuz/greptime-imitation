<script setup lang="ts">
const onLanguageOpen = ref(false);
const onLanguageOpenLg = ref(false);
const { locale, setLocale, t } = useI18n();
import github from "/public/github.png";
import youtube from "/public/youtube.png";
import twitter from "/public/twitter.png";
import slack from "/public/slack.png";
import linkedin from "/public/linkedin.png";
import rss from "/public/rss.png";
import logo from "/public/logo-text.png";
</script>

<template>
  <div class="lg:tw-hidden">
    <div class="tw-px-4 tw-py-[3.75rem]">
      <div class="tw-space-y-16">
        <div class="tw-w-[8.5rem]">
          <v-img :src="logo" class="tw-mb-5" />
          <p class="tw-text-sm tw-text-zinc-500">Greptime #30</p>
          <p class="tw-text-sm tw-text-zinc-500">440 N. Wolfe Road</p>
          <p class="tw-text-sm tw-text-zinc-500">Sunnyvale, CA 94085</p>
          <v-menu v-model="onLanguageOpen" open-on-hover>
            <template v-slot:activator="{ props }">
              <v-btn v-bind="props" class="tw-mt-5">
                <template v-slot:prepend>
                  <svg-footer-language />
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
            <div class="tw-mb-5 tw-mt-2">{{ t("Footer.Products.Title") }}</div>
            <p class="tw-text-sm tw-text-zinc-500">
              {{ t("Footer.Products.Enterprise") }}
            </p>
            <p class="tw-text-sm tw-text-zinc-500">
              {{ t("Footer.Products.Cloud") }}
            </p>
            <p class="tw-text-sm tw-text-zinc-500">
              {{ t("Footer.Products.OSS") }}
            </p>
          </div>
          <div class="tw-w-[12.3rem]">
            <div class="tw-mb-5 tw-mt-2">{{ t("Footer.Resources.Title") }}</div>
            <p class="tw-text-sm tw-text-zinc-500">
              {{ t("Footer.Resources.Documentation") }}
            </p>
            <p
              :hidden="locale === 'zhHans'"
              class="tw-text-sm tw-text-zinc-500"
            >
              {{ t("Footer.Resources.Blog") }}
            </p>
            <p class="tw-text-sm tw-text-zinc-500">
              {{ t("Footer.Resources.GreptimePlay") }}
            </p>
            <p class="tw-text-sm tw-text-zinc-500">
              {{ t("Footer.Resources.Download") }}
            </p>
            <p class="tw-text-sm tw-text-zinc-500">
              {{ t("Footer.Resources.DockerRepository") }}
            </p>
            <p class="tw-text-sm tw-text-zinc-500">
              {{ t("Footer.Resources.ServiceStatus") }}
            </p>
          </div>
          <div class="tw-w-[12.3rem]">
            <div class="tw-mb-5 tw-mt-2">{{ t("Footer.Community.Title") }}</div>
            <p class="tw-text-sm tw-text-zinc-500">
              {{ t("Footer.Community.OpenSource") }}
            </p>
            <p class="tw-text-sm tw-text-zinc-500">
              {{ t("Footer.Community.Roadmap") }}
            </p>
            <p class="tw-text-sm tw-text-zinc-500">
              {{ t("Footer.Community.ContributeGuide") }}
            </p>
            <p class="tw-text-sm tw-text-zinc-500">
              {{ t("Footer.Community.SlackCommunity") }}
            </p>
          </div>
          <div class="tw-w-[12.3rem]">
            <div class="tw-mb-5 tw-mt-2">{{ t("Footer.Company.Title") }}</div>
            <p class="tw-text-sm tw-text-zinc-500">
              {{ t("Footer.Company.AboutGreptime") }}
            </p>
            <p
              :hidden="locale === 'zhHans'"
              class="tw-text-sm tw-text-zinc-500"
            >
              {{ t("Footer.Company.Careers") }}
            </p>
            <p class="tw-text-sm tw-text-zinc-500">
              {{ t("Footer.Company.Brand") }}
            </p>
            <p class="tw-text-sm tw-text-zinc-500">
              {{ t("Footer.Company.Contact") }}
            </p>
            <p
              :hidden="locale === 'zhHans'"
              class="tw-text-sm tw-text-zinc-500"
            >
              {{ t("Footer.Company.Privacy") }}
            </p>
            <p
              :hidden="locale === 'zhHans'"
              class="tw-text-sm tw-text-zinc-500"
            >
              {{ t("Footer.Company.Terms") }}
            </p>
          </div>
        </div>
        <div class="tw-w-[26.25rem]">
          <div class="tw-mb-5 tw-mt-2 tw-text-xl tw-font-black">
            {{ t("Footer.Subscribe.Title") }}
          </div>
          <v-text-field
            :placeholder="t('Footer.Subscribe.Message')"
          ></v-text-field>
          <v-btn width="420">
            {{ t("Footer.Subscribe.Button") }}
          </v-btn>
          <div class="tw-mt-5 tw-grid tw-w-[18rem] tw-grid-cols-6">
            <v-img :src="github" width="28" height="28" />
            <v-img :src="youtube" width="28" height="28" />
            <v-img :src="twitter" width="28" height="28" />
            <v-img :src="slack" width="28" height="28" />
            <v-img :src="linkedin" width="28" height="28" />
            <v-img :src="rss" width="28" height="28" />
          </div>
        </div>
      </div>
      <div
        class="tw-mt-[3.75rem] tw-w-full tw-border-t tw-p-6 tw-text-center tw-text-sm tw-text-zinc-500"
      >
        {{ t("Footer.Footer") }}
      </div>
    </div>
  </div>
  <div class="tw-hidden tw-w-full tw-border-t tw-py-[3.75rem] lg:tw-block">
    <div class="tw-flex tw-justify-between">
      <div class="tw-w-[8.5rem]">
        <v-img :src="logo" class="tw-mb-5" />
        <p class="tw-text-sm tw-text-zinc-500">Greptime #30</p>
        <p class="tw-text-sm tw-text-zinc-500">440 N. Wolfe Road</p>
        <p class="tw-text-sm tw-text-zinc-500">Sunnyvale, CA 94085</p>
        <v-menu v-model="onLanguageOpenLg" open-on-hover>
          <template v-slot:activator="{ props }">
            <v-btn v-bind="props" class="tw-mt-5">
              <template v-slot:prepend>
                <svg-footer-language />
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
          <div class="tw-mb-5 tw-mt-2">{{ t("Footer.Products.Title") }}</div>
          <p class="tw-text-sm tw-text-zinc-500">
            {{ t("Footer.Products.Enterprise") }}
          </p>
          <p class="tw-text-sm tw-text-zinc-500">
            {{ t("Footer.Products.Cloud") }}
          </p>
          <p class="tw-text-sm tw-text-zinc-500">
            {{ t("Footer.Products.OSS") }}
          </p>
        </div>
        <div class="tw-w-[12.3rem]">
          <div class="tw-mb-5 tw-mt-2">{{ t("Footer.Resources.Title") }}</div>
          <p class="tw-text-sm tw-text-zinc-500">
            {{ t("Footer.Resources.Documentation") }}
          </p>
          <p class="tw-text-sm tw-text-zinc-500">
            {{ t("Footer.Resources.Blog") }}
          </p>
          <p class="tw-text-sm tw-text-zinc-500" :hidden="locale === 'zhHans'">
            {{ t("Footer.Resources.GreptimePlay") }}
          </p>
          <p class="tw-text-sm tw-text-zinc-500">
            {{ t("Footer.Resources.Download") }}
          </p>
          <p class="tw-text-sm tw-text-zinc-500">
            {{ t("Footer.Resources.DockerRepository") }}
          </p>
          <p class="tw-text-sm tw-text-zinc-500">
            {{ t("Footer.Resources.ServiceStatus") }}
          </p>
        </div>
        <div class="tw-w-[12.3rem]">
          <div class="tw-mb-5 tw-mt-2">{{ t("Footer.Community.Title") }}</div>
          <p class="tw-text-sm tw-text-zinc-500">
            {{ t("Footer.Community.OpenSource") }}
          </p>
          <p class="tw-text-sm tw-text-zinc-500">
            {{ t("Footer.Community.Roadmap") }}
          </p>
          <p class="tw-text-sm tw-text-zinc-500">
            {{ t("Footer.Community.ContributeGuide") }}
          </p>
          <p class="tw-text-sm tw-text-zinc-500">
            {{ t("Footer.Community.SlackCommunity") }}
          </p>
        </div>
        <div class="tw-w-[12.3rem]">
          <div class="tw-mb-5 tw-mt-2">{{ t("Footer.Company.Title") }}</div>
          <p class="tw-text-sm tw-text-zinc-500">
            {{ t("Footer.Company.AboutGreptime") }}
          </p>
          <p class="tw-text-sm tw-text-zinc-500" :hidden="locale === 'zhHans'">
            {{ t("Footer.Company.Careers") }}
          </p>
          <p class="tw-text-sm tw-text-zinc-500">
            {{ t("Footer.Company.Brand") }}
          </p>
          <p class="tw-text-sm tw-text-zinc-500">
            {{ t("Footer.Company.Contact") }}
          </p>
          <p class="tw-text-sm tw-text-zinc-500" :hidden="locale === 'zhHans'">
            {{ t("Footer.Company.Privacy") }}
          </p>
          <p class="tw-text-sm tw-text-zinc-500" :hidden="locale === 'zhHans'">
            {{ t("Footer.Company.Terms") }}
          </p>
        </div>
      </div>
      <div class="tw-w-[18rem]">
        <div class="tw-mb-5 tw-mt-2 tw-text-xl tw-font-black">
          {{ t("Footer.Subscribe.Title") }}
        </div>
        <v-text-field
          :placeholder="t('Footer.Subscribe.Message')"
        ></v-text-field>
        <v-btn width="288">
          {{ t("Footer.Subscribe.Button") }}
        </v-btn>
        <div class="tw-mt-5 tw-grid tw-grid-cols-6">
          <v-img :src="github" width="28" height="28" />
          <v-img :src="youtube" width="28" height="28" />
          <v-img :src="twitter" width="28" height="28" />
          <v-img :src="slack" width="28" height="28" />
          <v-img :src="linkedin" width="28" height="28" />
          <v-img :src="rss" width="28" height="28" />
        </div>
      </div>
    </div>
    <div
      class="tw-mt-[3.75rem] tw-w-full tw-border-t tw-p-6 tw-text-center tw-text-sm tw-text-zinc-500"
    >
      {{ t("Footer.Footer") }}
    </div>
  </div>
</template>

<style scoped>
.v-btn {
  text-transform: none !important;
}
</style>
