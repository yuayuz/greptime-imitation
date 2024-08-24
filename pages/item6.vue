<script setup lang="ts">
const onLanguageOpen = ref(false);
const { locale, setLocale } = useI18n();
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
            <div class="tw-mb-5 tw-mt-2">Products</div>
            <p class="tw-text-sm tw-text-zinc-500">GreptimeDB Enterprise</p>
            <p class="tw-text-sm tw-text-zinc-500">GreptimeCloud</p>
            <p class="tw-text-sm tw-text-zinc-500">GreptimeDB OSS</p>
          </div>
          <div class="tw-w-[12.3rem]">
            <div class="tw-mb-5 tw-mt-2">Resources</div>
            <p class="tw-text-sm tw-text-zinc-500">Documentation</p>
            <p class="tw-text-sm tw-text-zinc-500">Blog</p>
            <p class="tw-text-sm tw-text-zinc-500">GreptimePlay</p>
            <p class="tw-text-sm tw-text-zinc-500">Download</p>
            <p class="tw-text-sm tw-text-zinc-500">Docker Repository</p>
            <p class="tw-text-sm tw-text-zinc-500">Service Status</p>
          </div>
          <div class="tw-w-[12.3rem]">
            <div class="tw-mb-5 tw-mt-2">Community</div>
            <p class="tw-text-sm tw-text-zinc-500">Open Source</p>
            <p class="tw-text-sm tw-text-zinc-500">Roadmap</p>
            <p class="tw-text-sm tw-text-zinc-500">Contribute Guide</p>
            <p class="tw-text-sm tw-text-zinc-500">Slack Community</p>
          </div>
          <div class="tw-w-[12.3rem]">
            <div class="tw-mb-5 tw-mt-2">Company</div>
            <p class="tw-text-sm tw-text-zinc-500">About Greptime</p>
            <p class="tw-text-sm tw-text-zinc-500">Careers</p>
            <p class="tw-text-sm tw-text-zinc-500">Brand</p>
            <p class="tw-text-sm tw-text-zinc-500">Contact</p>
            <p class="tw-text-sm tw-text-zinc-500">Privacy</p>
            <p class="tw-text-sm tw-text-zinc-500">Terms</p>
          </div>
        </div>
        <div class="tw-w-[26.25rem]">
          <div class="tw-mb-5 tw-mt-2 tw-text-xl tw-font-black">
            Subscribe to our newsletter
          </div>
          <v-text-field placeholder="Email Address"></v-text-field>
          <v-btn width="420">Subscribe</v-btn>
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
        ©Copyright 2024 Greptime Inc. All Rights Reserved
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
      <div class="tw-grid tw-grid-cols-4">
        <div class="tw-w-[12.3rem]">
          <div class="tw-mb-5 tw-mt-2">Products</div>
          <p class="tw-text-sm tw-text-zinc-500">GreptimeDB Enterprise</p>
          <p class="tw-text-sm tw-text-zinc-500">GreptimeCloud</p>
          <p class="tw-text-sm tw-text-zinc-500">GreptimeDB OSS</p>
        </div>
        <div class="tw-w-[12.3rem]">
          <div class="tw-mb-5 tw-mt-2">Resources</div>
          <p class="tw-text-sm tw-text-zinc-500">Documentation</p>
          <p class="tw-text-sm tw-text-zinc-500">Blog</p>
          <p class="tw-text-sm tw-text-zinc-500">GreptimePlay</p>
          <p class="tw-text-sm tw-text-zinc-500">Download</p>
          <p class="tw-text-sm tw-text-zinc-500">Docker Repository</p>
          <p class="tw-text-sm tw-text-zinc-500">Service Status</p>
        </div>
        <div class="tw-w-[12.3rem]">
          <div class="tw-mb-5 tw-mt-2">Community</div>
          <p class="tw-text-sm tw-text-zinc-500">Open Source</p>
          <p class="tw-text-sm tw-text-zinc-500">Roadmap</p>
          <p class="tw-text-sm tw-text-zinc-500">Contribute Guide</p>
          <p class="tw-text-sm tw-text-zinc-500">Slack Community</p>
        </div>
        <div class="tw-w-[12.3rem]">
          <div class="tw-mb-5 tw-mt-2">Company</div>
          <p class="tw-text-sm tw-text-zinc-500">About Greptime</p>
          <p class="tw-text-sm tw-text-zinc-500">Careers</p>
          <p class="tw-text-sm tw-text-zinc-500">Brand</p>
          <p class="tw-text-sm tw-text-zinc-500">Contact</p>
          <p class="tw-text-sm tw-text-zinc-500">Privacy</p>
          <p class="tw-text-sm tw-text-zinc-500">Terms</p>
        </div>
      </div>
      <div class="tw-w-[18rem]">
        <div class="tw-mb-5 tw-mt-2 tw-text-xl tw-font-black">
          Subscribe to our newsletter
        </div>
        <v-text-field placeholder="Email Address"></v-text-field>
        <v-btn width="288">Subscribe</v-btn>
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
      ©Copyright 2024 Greptime Inc. All Rights Reserved
    </div>
  </div>
</template>

<style scoped>
.v-btn {
  text-transform: none !important;
}
</style>
