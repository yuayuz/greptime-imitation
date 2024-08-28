<template>
  <div
    class="tw-fixed tw-left-0 tw-right-0 tw-top-0 tw-h-[5rem] tw-w-full tw-border-b tw-border-b-gray-500 tw-bg-violet-400 tw-px-4 tw-shadow dark:tw-bg-zinc-900"
    style="z-index: 1"
  >
    <div class="tw-mx-auto tw-flex tw-h-full tw-max-w-[86rem] tw-items-center">
      <v-img :src="image" height="42" width="162" />
      <div
        class="tw-relative tw-flex tw-h-full tw-w-full tw-items-center tw-justify-end lg:tw-hidden"
      >
        <v-icon
          :icon="
            mode === 'light' ? 'mdi-weather-night' : 'mdi-white-balance-sunny'
          "
          @click="darkMode()"
          class="tw-ml-3 tw-mr-2"
        ></v-icon>
        <v-icon
          @click="onDrawer = !onDrawer"
          :icon="onDrawer ? 'mdi-close' : 'mdi-menu'"
        ></v-icon>
      </div>
      <!--  lg 以上      -->
      <div
        class="tw-hidden lg:tw-relative lg:tw-mx-auto lg:tw-flex lg:tw-h-full lg:tw-w-full lg:tw-items-center lg:tw-justify-between"
      >
        <div>
          <v-menu open-on-hover v-model="onProductOpen">
            <template v-slot:activator="{ props }">
              <v-btn
                size="sm"
                variant="text"
                color="white"
                v-bind="props"
                class="tw-ml-8 tw-px-3"
              >
                <template v-slot:append>
                  <v-icon
                    :icon="
                      onProductOpen ? ' mdi-chevron-up' : ' mdi-chevron-down'
                    "
                  ></v-icon>
                </template>
                <p
                  :class="
                    onProductOpen
                      ? 'text-decoration-underline tw-text-purple-700'
                      : 'text-decoration-none'
                  "
                  class="tw-text-sm"
                >
                  Product
                </p>
              </v-btn>
            </template>
            <v-list width="389">
              <div class="tw-p-[1.25rem]">
                <v-list-item
                  width="348"
                  height="91"
                  class="rounded-lg hover:tw-bg-violet-900/40"
                  title="GreptimeDB Enterprise"
                  subtitle="GreptimeDB with advanced and enterprise features."
                  lines="two"
                  prepend-icon="mdi-circle-medium"
                >
                </v-list-item>
                <v-list-item
                  width="348"
                  height="91"
                  class="rounded-lg hover:tw-bg-violet-900/40"
                  title=" GreptimeCloud "
                  subtitle="Fully-managed serverless and dedicated GreptimeDB as a service."
                  lines="two"
                  prepend-icon="mdi-circle-medium"
                >
                </v-list-item>
                <v-list-item
                  width="348"
                  height="91"
                  class="rounded-lg hover:tw-bg-violet-900/40"
                  title=" GreptimeDB OSS "
                  subtitle="Cloud-native time-Series database. Available in both standalone and cluster mode."
                  lines="two"
                  prepend-icon="mdi-circle-medium"
                >
                </v-list-item>
              </div>
            </v-list>
          </v-menu>
          <v-menu open-on-hover v-model="onSolutionOpen">
            <template v-slot:activator="{ props }">
              <v-btn
                variant="text"
                color="white"
                v-bind="props"
                size="sm"
                class="tw-px-3"
              >
                <template v-slot:append>
                  <v-icon
                    :icon="
                      onSolutionOpen ? ' mdi-chevron-up' : ' mdi-chevron-down'
                    "
                  ></v-icon>
                </template>
                <p
                  :class="
                    onSolutionOpen
                      ? 'text-decoration-underline tw-text-purple-700'
                      : 'text-decoration-none'
                  "
                  class="tw-text-sm"
                >
                  Solution
                </p>
              </v-btn>
            </template>
            <v-list width="389">
              <div class="tw-p-[1.25rem]">
                <v-list-item
                  width="348"
                  height="91"
                  class="rounded-lg hover:tw-bg-violet-900/40"
                  title="Edge-Cloud Integrated Solution"
                  subtitle="A finely tailored solution that aligns closely with the specific business scenarios of automotive companies."
                  lines="three"
                  prepend-icon="mdi-circle-medium"
                >
                </v-list-item>
              </div>
            </v-list>
          </v-menu>
          <v-menu
            open-on-hover
            v-model="onResourcesOpen"
            location="bottom"
            class="tw-pt-[0.625rem]"
          >
            <template v-slot:activator="{ props }">
              <v-btn
                variant="text"
                color="white"
                v-bind="props"
                size="sm"
                class="tw-px-3"
              >
                <template v-slot:append>
                  <v-icon
                    :icon="
                      onResourcesOpen ? ' mdi-chevron-up' : ' mdi-chevron-down'
                    "
                  ></v-icon>
                </template>
                <p
                  :class="
                    onResourcesOpen
                      ? 'text-decoration-underline tw-text-purple-700'
                      : 'text-decoration-none'
                  "
                  class="tw-text-sm"
                >
                  Resources
                </p>
              </v-btn>
            </template>
            <v-list
              height="460"
              class="tw-rounded-md tw-bg-violet-400 tw-p-[1.25rem] tw-shadow"
              density="comfortable"
            >
              <div class="tw-p-[1.25rem]">
                <v-list-item
                  height="50"
                  class="rounded-lg hover:tw-bg-violet-900/40"
                  title="Documentation"
                  prepend-icon="mdi-file-document-outline"
                >
                </v-list-item>
                <v-list-item
                  height="50"
                  class="rounded-lg hover:tw-bg-violet-900/40"
                  prepend-icon="mdi-download"
                  title="Download"
                >
                </v-list-item>
                <v-list-item
                  height="50"
                  class="rounded-lg hover:tw-bg-violet-900/40"
                  title="GreptimePlay"
                  prepend-icon="mdi-play-circle-outline"
                >
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item>
                  <template v-slot:subtitle>Compare</template>
                </v-list-item>
                <v-list-item
                  width="195"
                  height="50"
                  class="rounded-lg hover:tw-bg-violet-900/40"
                  prepend-icon="mdi-circle-medium"
                  title="vs. InfluxDB"
                >
                </v-list-item>
                <v-list-item
                  height="50"
                  class="rounded-lg hover:tw-bg-violet-900/40"
                  prepend-icon="mdi-circle-medium"
                  title="vs. Prometheus"
                >
                </v-list-item>
                <v-list-item
                  height="50"
                  class="rounded-lg hover:tw-bg-violet-900/40"
                  prepend-icon="mdi-circle-medium"
                  title="vs. Grafana Mimir"
                >
                </v-list-item>
                <v-list-item
                  height="50"
                  class="rounded-lg hover:tw-bg-violet-900/40"
                  prepend-icon="mdi-circle-medium"
                  title="vs. TimescaleDB"
                >
                </v-list-item>
              </div>
            </v-list>
          </v-menu>
          <nav-bar-button>Blog</nav-bar-button>
          <nav-bar-button>Pricing</nav-bar-button>
        </div>
        <div>
          <nav-bar-button>Contact us</nav-bar-button>
          <nav-bar-button>Sign in</nav-bar-button>
          <button
            class="tw-rounded-md tw-bg-violet-600 tw-px-4 tw-py-1 tw-text-base tw-text-white tw-shadow tw-delay-150 tw-ease-in-out hover:tw--translate-y-1 hover:tw-scale-110 hover:tw-transform"
          >
            Start Instantly
          </button>
          <v-icon
            :icon="
              mode === 'light' ? 'mdi-weather-night' : 'mdi-white-balance-sunny'
            "
            @click="darkMode()"
            class="tw-ml-3"
          ></v-icon>
        </div>
      </div>
    </div>
  </div>
  <nav-bar-menu v-model="onDrawer"></nav-bar-menu>
</template>

<script setup lang="ts">
import image from "public/logo_text.png"
import { ref } from "vue"
import { useTheme } from "vuetify"

const onProductOpen = ref(false)
const onSolutionOpen = ref(false)
const onResourcesOpen = ref(false)
const onDrawer = defineModel()

const theme = useTheme()
const mode = ref("light")
const darkMode = () => {
  localStorage.theme = "tw-dark"
  if (theme.global.current.value.dark) {
    theme.global.name.value = "light"
    document.documentElement.classList.remove("tw-dark")
    localStorage.theme = "tw-light"
  } else if (
    localStorage.theme === "tw-dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    theme.global.name.value = "dark"
    document.documentElement.classList.add("tw-dark")
    localStorage.theme = "tw-dark"
  }
  mode.value = theme.global.name.value
}
</script>

<style scoped lang="scss">
@import "@/stylus/button.css";
</style>
