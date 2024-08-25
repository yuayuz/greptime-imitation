<script setup lang="ts">
import image from "~/public/logo-text.png";

const onProductOpen = ref(false);
const onSolutionOpen = ref(false);
const onResourcesOpen = ref(false);
const onDrawer = defineModel();

const theme = useTheme();
const mode = ref("light");
const darkMode = () => {
  localStorage.theme = "tw-dark";

  if (theme.global.current.value.dark) {
    theme.global.name.value = "light";
    document.documentElement.classList.remove("tw-dark");
  } else {
    theme.global.name.value = "dark";
    document.documentElement.classList.add("tw-dark");
  }
  mode.value = theme.global.name.value;
};
</script>

<template>
  <div
    class="tw-fixed tw-left-0 tw-right-0 tw-top-0 tw-h-[4.25rem] tw-w-full tw-border-b tw-border-b-gray-500 tw-bg-violet-400 tw-px-4 tw-shadow dark:tw-bg-zinc-900"
    style="z-index: 1"
  >
    <div class="tw-mx-auto tw-flex tw-h-full tw-max-w-[86rem] tw-items-center">
      <v-img :src="image" height="42" width="162"></v-img>
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
  <div class="tw-w-full tw-pt-[4.25rem] lg:tw-hidden" :hidden="!onDrawer">
    <ul>
      <li
        class="tw-group tw-h-[5rem] tw-content-center tw-border-b tw-border-b-gray-500 tw-px-8"
      >
        <div class="tw-flex tw-w-full tw-place-content-between tw-text-left">
          <p
            class="tw-text-black group-hover:tw-text-purple-700 dark:tw-text-white"
          >
            Product
          </p>
          <v-icon style="z-index: -1" icon="mdi-chevron-right"></v-icon>
        </div>
      </li>
      <li
        class="tw-group tw-h-[5rem] tw-content-center tw-border-b tw-border-b-gray-500 tw-px-8"
      >
        <div class="tw-flex tw-w-full tw-place-content-between tw-text-left">
          <p
            class="tw-text-black group-hover:tw-text-purple-700 dark:tw-text-white"
          >
            Solution
          </p>
          <v-icon style="z-index: -1" icon="mdi-chevron-right"></v-icon>
        </div>
      </li>
      <li
        class="tw-group tw-h-[5rem] tw-content-center tw-border-b tw-border-b-gray-500 tw-px-8"
      >
        <div class="tw-flex tw-w-full tw-place-content-between tw-text-left">
          <p
            class="tw-text-black group-hover:tw-text-purple-700 dark:tw-text-white"
          >
            Resources
          </p>
          <v-icon style="z-index: -1" icon="mdi-chevron-right"></v-icon>
        </div>
      </li>
      <li
        class="tw-group tw-h-[5rem] tw-content-center tw-border-b tw-border-b-gray-500 tw-px-8"
      >
        <p
          class="tw-text-black group-hover:tw-text-purple-700 dark:tw-text-white"
        >
          Blog
        </p>
      </li>
      <li
        class="tw-group tw-h-[5rem] tw-content-center tw-border-b tw-border-b-gray-500 tw-px-8"
      >
        <p
          class="tw-text-black group-hover:tw-text-purple-700 dark:tw-text-white"
        >
          Pricing
        </p>
      </li>
    </ul>
    <div class="tw-flex tw-w-full tw-justify-center">
      <button
        class="tw-h-10 tw-w-[22.75rem] tw-justify-center tw-rounded-md tw-bg-violet-600 tw-p-[0.625rem] tw-py-1 tw-text-base tw-text-white tw-shadow tw-delay-150 tw-ease-in-out hover:tw--translate-y-1 hover:tw-scale-100 hover:tw-transform"
      >
        Start Instantly
      </button>
    </div>
    <div class="tw-flex tw-w-full tw-justify-center">
      <button
        class="tw-my-4 tw-h-10 tw-w-[22.75rem] tw-justify-center tw-rounded-md tw-p-[0.625rem] tw-py-1 tw-text-base tw-text-black tw-shadow tw-delay-150 tw-ease-in-out hover:tw--translate-y-1 hover:tw-scale-100 hover:tw-transform dark:tw-text-white dark:tw-shadow dark:tw-shadow-gray-500"
      >
        Start Instantly
      </button>
    </div>
    <div class="tw-flex tw-w-full tw-justify-center">
      <p class="tw-text-black hover:tw-text-purple-700 dark:tw-text-white">
        Pricing
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.v-btn {
  text-transform: none !important;
}
</style>
