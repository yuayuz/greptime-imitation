<template>
  <div class="lg:tw-hidden">
    <div class="tw-px-4 tw-py-[4rem]">
      <div class="tw-space-y-16">
        <div class="tw-w-1/5">
          <v-img :src="logo" class="tw-mb-5" />
          <p class="tw-text-sm tw-text-zinc-500">Greptime #30</p>
          <p class="tw-text-sm tw-text-zinc-500">440 N. Wolfe Road</p>
          <p class="tw-text-sm tw-text-zinc-500">Sunnyvale, CA 94085</p>
          <v-menu v-model="onLanguageOpen" open-on-hover>
            <template v-slot:activator="{ props }">
              <v-btn v-bind="props" class="tw-mt-5">
                <template v-slot:prepend>
                  <img :src="language" alt="language" />
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
        <div class="tw-flex tw-w-full">
          <div>
            <div class="tw-mb-5 tw-mt-2">{{ t("Footer.Products.Title") }}</div>
            <p v-for="n in 3" :key="n" class="tw-text-sm tw-text-zinc-500">
              {{ t(products[n - 1]) }}
            </p>
          </div>
          <div>
            <div class="tw-mb-5 tw-mt-2">{{ t("Footer.Resources.Title") }}</div>
            <p
              v-for="n in 6"
              :key="n"
              class="tw-text-sm tw-text-zinc-500"
              :hidden="locale === 'zhHans' && n === 2"
            >
              {{ t(resources[n - 1]) }}
            </p>
          </div>
          <div>
            <div class="tw-mb-5 tw-mt-2">{{ t("Footer.Community.Title") }}</div>
            <p v-for="n in 4" :key="n" class="tw-text-sm tw-text-zinc-500">
              {{ t(community[n - 1]) }}
            </p>
          </div>
          <div>
            <div class="tw-mb-5 tw-mt-2">{{ t("Footer.Company.Title") }}</div>
            <p
              v-for="n in 6"
              :key="n"
              class="tw-text-sm tw-text-zinc-500"
              :hidden="
                (locale === 'zhHans' && n === 2) ||
                (locale === 'zhHans' && n === 5) ||
                (locale === 'zhHans' && n === 6)
              "
            >
              {{ t(company[n - 1]) }}
            </p>
          </div>
        </div>
        <div class="tw-w-1/2">
          <div class="tw-mb-5 tw-mt-2 tw-text-xl tw-font-black">
            {{ t("Footer.Subscribe.Title") }}
          </div>
          <v-text-field
            :placeholder="t('Footer.Subscribe.Message')"
          ></v-text-field>
          <v-btn class="tw-w-full">
            {{ t("Footer.Subscribe.Button") }}
          </v-btn>
          <div class="tw-mt-5 tw-grid tw-grid-cols-6">
            <v-img
              v-for="n in 6"
              :key="n"
              :src="image[n - 1]"
              width="28"
              height="28"
            />
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
  <div class="tw-hidden tw-w-full tw-border-t tw-py-[4rem] lg:tw-block">
    <div class="tw-flex tw-justify-between">
      <div>
        <v-img :src="logo" class="tw-mb-5" />
        <p class="tw-text-sm tw-text-zinc-500">Greptime #30</p>
        <p class="tw-text-sm tw-text-zinc-500">440 N. Wolfe Road</p>
        <p class="tw-text-sm tw-text-zinc-500">Sunnyvale, CA 94085</p>
        <v-menu v-model="onLanguageOpenLg" open-on-hover>
          <template v-slot:activator="{ props }">
            <v-btn v-bind="props" class="tw-mt-5">
              <template v-slot:prepend>
                <img :src="language" alt="language" />
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
      <div class="tw-grid tw-w-2/3 tw-grid-cols-4">
        <div class="tw-mx-auto">
          <div class="tw-mb-5 tw-mt-2">{{ t("Footer.Products.Title") }}</div>
          <p v-for="n in 3" :key="n" class="tw-text-sm tw-text-zinc-500">
            {{ t(products[n - 1]) }}
          </p>
        </div>
        <div class="tw-mx-auto">
          <div class="tw-mb-5 tw-mt-2">{{ t("Footer.Resources.Title") }}</div>
          <p
            v-for="n in 6"
            :key="n"
            class="tw-text-sm tw-text-zinc-500"
            :hidden="locale === 'zhHans' && n === 2"
          >
            {{ t(resources[n - 1]) }}
          </p>
        </div>
        <div class="tw-mx-auto">
          <div class="tw-mb-5 tw-mt-2">{{ t("Footer.Community.Title") }}</div>
          <p v-for="n in 4" :key="n" class="tw-text-sm tw-text-zinc-500">
            {{ t(community[n - 1]) }}
          </p>
        </div>
        <div class="tw-mx-auto">
          <div class="tw-mb-5 tw-mt-2">{{ t("Footer.Company.Title") }}</div>
          <p
            v-for="n in 6"
            :key="n"
            class="tw-text-sm tw-text-zinc-500"
            :hidden="
              (locale === 'zhHans' && n === 2) ||
              (locale === 'zhHans' && n === 5) ||
              (locale === 'zhHans' && n === 6)
            "
          >
            {{ t(company[n - 1]) }}
          </p>
        </div>
      </div>
      <div>
        <div class="tw-mb-5 tw-mt-2 tw-text-xl tw-font-black">
          {{ t("Footer.Subscribe.Title") }}
        </div>
        <v-text-field
          :placeholder="t('Footer.Subscribe.Message')"
        ></v-text-field>
        <v-btn class="tw-w-full">
          {{ t("Footer.Subscribe.Button") }}
        </v-btn>
        <div class="tw-mt-5 tw-grid tw-grid-cols-6">
          <v-img
            v-for="n in 6"
            :key="n"
            :src="image[n - 1]"
            width="28"
            height="28"
          />
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
import language from "~/public/svg/footer/language.svg";

const products = [
  "Footer.Products.Enterprise",
  "Footer.Products.Cloud",
  "Footer.Products.OSS",
];
const resources = [
  "Footer.Resources.Documentation",
  "Footer.Resources.Blog",
  "Footer.Resources.GreptimePlay",
  "Footer.Resources.Download",
  "Footer.Resources.DockerRepository",
  "Footer.Resources.ServiceStatus",
];
const community = [
  "Footer.Community.OpenSource",
  "Footer.Community.Roadmap",
  "Footer.Community.ContributeGuide",
  "Footer.Community.SlackCommunity",
];
const company = [
  "Footer.Company.AboutGreptime",
  "Footer.Company.Careers",
  "Footer.Company.Brand",
  "Footer.Company.Contact",
  "Footer.Company.Privacy",
  "Footer.Company.Terms",
];
const image = [github, youtube, twitter, slack, linkedin, rss];
</script>

<style scoped>
.v-btn {
  text-transform: none !important;
}
</style>
