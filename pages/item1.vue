<script setup lang="ts">
const model = ref(0);
</script>

<template>
  <div class="lg:tw-hidden">1</div>

  <div class="tw-hidden tw-w-full tw-py-[6.25rem] lg:tw-block">
    <p class="tw-mb-16 tw-text-center tw-text-3xl tw-font-black">
      Optimized for IoT and Observability
    </p>
    <div class="tw-flex tw-space-x-16">
      <div class="tw-space-y-4">
        <div
          class="tw-h-[5.2rem] tw-w-[28.875rem] tw-rounded-md tw-border tw-py-[1.4rem] tw-pl-8 tw-pr-[5.2rem] tw-shadow-xl hover:tw-border-purple-900 hover:tw-shadow-xl hover:tw-shadow-violet-400 dark:tw-border-slate-400 dark:tw-shadow dark:tw-shadow-white"
          :class="
            model === 0
              ? 'tw-scale-110 tw-border-2 tw-border-purple-900 tw-shadow-xl tw-shadow-purple-400 dark:tw-border-purple-900 dark:tw-shadow-xl dark:tw-shadow-purple-900'
              : ''
          "
        >
          <div
            class="tw-flex tw-cursor-pointer tw-space-x-4"
            @click="model = 0"
          >
            <v-img
              src="/public/scale_workload.png"
              style="z-index: -1"
              class="tw-bg-violet-800"
              width="42"
              height="40"
            ></v-img>
            <p class="tw-h-full tw-w-[28.875rem] tw-text-2xl">
              Hybrid Workloads
            </p>
          </div>
        </div>

        <div
          class="tw-h-[5.2rem] tw-w-[28.875rem] tw-rounded-md tw-border tw-py-[1.4rem] tw-pl-8 tw-pr-[5.2rem] tw-shadow-xl hover:tw-border-purple-900 hover:tw-shadow-xl hover:tw-shadow-violet-400 dark:tw-border-slate-400 dark:tw-shadow dark:tw-shadow-white"
          :class="
            model === 1
              ? 'tw-scale-110 tw-border-2 tw-border-purple-900 tw-shadow-xl tw-shadow-purple-400 dark:tw-border-purple-900 dark:tw-shadow-xl dark:tw-shadow-purple-900'
              : ''
          "
        >
          <div
            class="tw-flex tw-cursor-pointer tw-space-x-4"
            @click="model = 1"
          >
            <v-img
              src="/public/scale_capacity.png"
              class="tw-bg-violet-800"
              style="z-index: -1"
              width="42"
              height="40"
            ></v-img>
            <p class="tw-h-full tw-w-[28.875rem] tw-text-2xl">
              Hybrid Workloads
            </p>
          </div>
        </div>

        <div
          class="tw-h-[5.2rem] tw-w-[28.875rem] tw-rounded-md tw-border tw-py-[1.4rem] tw-pl-8 tw-pr-[5.2rem] tw-shadow-xl hover:tw-border-purple-900 hover:tw-shadow-xl hover:tw-shadow-violet-400 dark:tw-border-slate-400 dark:tw-shadow dark:tw-shadow-white"
          :class="
            model === 2
              ? 'tw-scale-110 tw-border-2 tw-border-purple-900 tw-shadow-xl tw-shadow-purple-400 dark:tw-border-purple-900 dark:tw-shadow-xl dark:tw-shadow-purple-900'
              : ''
          "
        >
          <div
            class="tw-flex tw-cursor-pointer tw-space-x-4"
            @click="model = 2"
          >
            <v-img
              src="/public/scale_organization.png"
              class="tw-bg-violet-800"
              style="z-index: -1"
              width="42"
              height="40"
            ></v-img>
            <p class="tw-h-full tw-w-[28.875rem] tw-text-2xl">
              Hybrid Workloads
            </p>
          </div>
        </div>

        <div
          class="tw-h-[5.2rem] tw-w-[28.875rem] tw-rounded-md tw-border tw-py-[1.4rem] tw-pl-8 tw-pr-[5.2rem] tw-shadow-xl hover:tw-border-purple-900 hover:tw-shadow-xl hover:tw-shadow-violet-400 dark:tw-border-slate-400 dark:tw-shadow dark:tw-shadow-white"
          :class="
            model === 3
              ? 'tw-scale-110 tw-border-2 tw-border-purple-900 tw-shadow-xl tw-shadow-purple-400 dark:tw-border-purple-900 dark:tw-shadow-xl dark:tw-shadow-purple-900'
              : ''
          "
        >
          <div
            class="tw-flex tw-cursor-pointer tw-space-x-4"
            @click="model = 3"
          >
            <v-img
              src="/public/scale_deployment.png"
              class="tw-bg-violet-800"
              style="z-index: -1"
              width="42"
              height="40"
            ></v-img>
            <p class="tw-h-full tw-w-[28.875rem] tw-text-2xl">
              Hybrid Workloads
            </p>
          </div>
        </div>
      </div>

      <v-carousel
        height="370.75"
        class="tw-w-full tw-border tw-shadow-violet-400 dark:tw-border-white"
        :cycle="true"
        hide-delimiters
        v-model="model"
        show-arrows="hover"
      >
        <v-carousel-item>
          <template v-slot:default>
            <div class="tw-absolute tw--right-8 tw--top-8" style="z-index: -1">
              <v-img
                src="/public/domain-1.png"
                width="400"
                height="400"
              ></v-img>
            </div>
            <div class="tw-space-y-12 tw-p-8">
              <div class="tw-flex tw-justify-evenly">
                <div
                  class="tw-w-full tw-max-w-[10.25rem] tw-rounded-lg dark:tw-border dark:tw-border-white dark:tw-shadow dark:tw-shadow-white"
                >
                  <v-card
                    color="deep-purple-darken-3"
                    height="129"
                    class="tw-flex tw-max-w-[10.25rem] tw-content-center tw-rounded-lg"
                  >
                    <div class="tw-justify-center tw-text-center">
                      <svg
                        class="tw-mx-auto"
                        preserveAspectRatio="xMidYMid meet"
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        viewBox="0 0 20 21"
                      >
                        <!--?lit$585805965$-->
                        <g>
                          <g fill="none" fill-rule="evenodd">
                            <path d="M-2-2h24v24H-2z"></path>
                            <g
                              data-follow-stroke="currentColor"
                              stroke="currentColor"
                            >
                              <ellipse
                                stroke-width="1.9"
                                cx="4.286"
                                cy="4.335"
                                rx="3.336"
                                ry="3.385"
                              ></ellipse>
                              <path
                                d="M15.143 1.503 5.782 19.09h-.983L14.16 1.503h.983Z"
                                stroke-width="1.2"
                              ></path>
                              <ellipse
                                stroke-width="1.9"
                                cx="15.714"
                                cy="16.665"
                                rx="3.336"
                                ry="3.385"
                              ></ellipse>
                            </g>
                          </g>
                        </g>
                      </svg>
                      <div>Metrics</div>
                    </div>
                  </v-card>
                </div>

                <div
                  class="tw-w-full tw-max-w-[10.25rem] tw-rounded-lg dark:tw-border dark:tw-border-white dark:tw-shadow dark:tw-shadow-white"
                >
                  <v-card
                    color="deep-purple-darken-3"
                    height="129"
                    class="tw-flex tw-max-w-[10.25rem] tw-content-center tw-rounded-lg"
                  >
                    <div class="tw-justify-center tw-text-center">
                      <svg
                        class="tw-mx-auto"
                        preserveAspectRatio="xMidYMid meet"
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        viewBox="0 0 18 22"
                      >
                        <!--?lit$585805965$-->
                        <g>
                          <g fill="none" fill-rule="evenodd">
                            <path d="M-3-1h24v24H-3z"></path>
                            <g
                              data-follow-stroke="currentColor"
                              stroke="currentColor"
                              stroke-linecap="round"
                            >
                              <path
                                d="M1.5 1.018h10.037a.5.5 0 0 1 .373.166l5.187 5.8a.5.5 0 0 1 .127.333V20.5a.5.5 0 0 1-.5.5H1.5a.5.5 0 0 1-.5-.5V1.518a.5.5 0 0 1 .5-.5Z"
                                stroke-width="1.5"
                              ></path>
                              <path
                                d="m11.956 1.247 5.09 5.694a.5.5 0 0 1-.372.833h-5.09a.5.5 0 0 1-.5-.5V1.58a.5.5 0 0 1 .872-.333Z"
                                stroke-width="1.5"
                              ></path>
                              <path
                                d="M3.879 11.415h8.267M3.879 14.9h4.134"
                                stroke-width="1.6"
                              ></path>
                            </g>
                          </g>
                        </g>
                      </svg>
                      <div>Events</div>
                    </div>
                  </v-card>
                </div>

                <div
                  class="tw-w-full tw-max-w-[10.25rem] tw-rounded-lg dark:tw-border dark:tw-border-white dark:tw-shadow dark:tw-shadow-white"
                >
                  <v-card
                    color="deep-purple-darken-3"
                    height="129"
                    class="tw-flex tw-max-w-[10.25rem] tw-content-center tw-rounded-lg"
                  >
                    <div class="tw-justify-center tw-text-center">
                      <svg
                        class="tw-mx-auto"
                        preserveAspectRatio="xMidYMid meet"
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        viewBox="0 0 22 22"
                      >
                        <!--?lit$585805965$-->
                        <g>
                          <g fill="none" fill-rule="evenodd">
                            <path d="M-1-1h24v24H-1z"></path>
                            <g
                              data-follow-stroke="currentColor"
                              transform="translate(.5 .5)"
                              stroke="currentColor"
                            >
                              <ellipse
                                stroke-width="1.8"
                                cx="9.844"
                                cy="9.839"
                                rx="8.944"
                                ry="8.939"
                              ></ellipse>
                              <path
                                d="M16.413 16.17a.29.29 0 0 1 .405 0l3.25 3.155a.29.29 0 0 1 .01.406l-.01.01-.29.283a.29.29 0 0 1-.405 0l-3.25-3.156a.29.29 0 0 1-.088-.204Z"
                              ></path>
                              <path
                                d="M4.844 12.318 7.34 8.9a.5.5 0 0 1 .642-.145l4.038 2.185a.5.5 0 0 0 .662-.173l2.16-3.44h0"
                                stroke-width="1.8"
                                stroke-linecap="round"
                              ></path>
                            </g>
                          </g>
                        </g>
                      </svg>
                      <div>Analytics</div>
                    </div>
                  </v-card>
                </div>

                <div
                  class="tw-w-full tw-max-w-[10.25rem] tw-rounded-lg dark:tw-border dark:tw-border-white dark:tw-shadow dark:tw-shadow-white"
                >
                  <v-card
                    color="deep-purple-accent-3"
                    height="129"
                    class="tw-flex tw-w-full tw-content-center tw-rounded-lg"
                  >
                    <div class="tw-justify-center tw-text-center">
                      <svg
                        class="tw-mx-auto"
                        preserveAspectRatio="xMidYMid meet"
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        viewBox="0 0 20 21"
                      >
                        <!--?lit$585805965$-->
                        <g>
                          <g fill="none" fill-rule="evenodd">
                            <path d="M-2-2h24v24H-2z"></path>
                            <g
                              data-follow-stroke="currentColor"
                              transform="translate(1)"
                              stroke="currentColor"
                            >
                              <path
                                d="M0 9.864h3.355a3.5 3.5 0 0 0 3.5-3.5v-.227a3.5 3.5 0 0 1 3.5-3.5h4.125M0 6.376h10.356"
                                stroke-width="1.5"
                                stroke-linecap="round"
                              ></path>
                              <ellipse
                                stroke-width="1.6"
                                cx="16.397"
                                cy="18.363"
                                rx="1.803"
                                ry="1.837"
                              ></ellipse>
                              <ellipse
                                stroke-width="1.6"
                                cx="16.244"
                                cy="2.637"
                                rx="1.803"
                                ry="1.837"
                              ></ellipse>
                              <circle
                                r="1"
                                stroke-width="2"
                                cx="10.795"
                                cy="6.333"
                              ></circle>
                              <circle
                                r="1"
                                stroke-width="2"
                                cx="10.795"
                                cy="13.088"
                              ></circle>
                              <path
                                d="M0 13.086h10.356M0 16.119h3.893a5 5 0 0 1 3.13 1.1l.053.043a5 5 0 0 0 3.13 1.1h4.274"
                                stroke-width="1.5"
                                stroke-linecap="round"
                              ></path>
                            </g>
                          </g>
                        </g>
                      </svg>
                      <div>Streaming</div>
                    </div>
                  </v-card>
                </div>
              </div>

              <div>
                <p data-v-6ec0c23b="">
                  GreptimeDB treats all time series as contextual events with
                  timestamps, and thus
                  <strong
                    >unifies the processing of metrics, logs, and events</strong
                  >. It supports analyzing metrics, logs, and events with
                  <strong>SQL, PromQL</strong>, and streaming with
                  <strong>continuous aggregation</strong>.
                </p>
              </div>
            </div>
          </template>
        </v-carousel-item>
        <v-carousel-item>
          <template v-slot:default>
            <div class="tw-absolute tw--right-8 tw--top-8" style="z-index: -1">
              <v-img
                src="/public/domain-2.png"
                width="400"
                height="400"
              ></v-img>
            </div>
            <div class="tw-space-y-12 tw-p-8">
              <div class="tw-flex tw-justify-evenly">
                <div
                  class="tw-w-full tw-max-w-[14rem] tw-rounded-lg dark:tw-border dark:tw-border-white dark:tw-shadow dark:tw-shadow-white"
                >
                  <v-card
                    color="deep-purple-accent-4"
                    height="129"
                    class="tw-flex tw-content-center tw-rounded-lg"
                  >
                    <div class="tw-justify-center tw-space-y-1 tw-text-center">
                      <div class="tw-text-4xl tw-font-bold">50x</div>
                      <div class="tw-text-sm">
                        Cost Efficiency with Object Storage
                      </div>
                    </div>
                  </v-card>
                </div>

                <div
                  class="tw-w-full tw-max-w-[14rem] tw-rounded-lg dark:tw-border dark:tw-border-white dark:tw-shadow dark:tw-shadow-white"
                >
                  <v-card
                    color="deep-purple-accent-4"
                    height="129"
                    class="tw-flex tw-content-center tw-rounded-lg"
                  >
                    <div class="tw-justify-center tw-space-y-1 tw-text-center">
                      <div class="tw-text-4xl tw-font-bold">1000+</div>
                      <div class="tw-text-sm">Nodes in Single Cluster</div>
                    </div>
                  </v-card>
                </div>

                <div
                  class="tw-w-full tw-max-w-[14rem] tw-rounded-lg dark:tw-border dark:tw-border-white dark:tw-shadow dark:tw-shadow-white"
                >
                  <v-card
                    color="deep-purple-accent-4"
                    height="129"
                    class="tw-flex tw-content-center tw-rounded-lg"
                  >
                    <div class="tw-justify-center tw-space-y-1 tw-text-center">
                      <div class="tw-text-3xl tw-font-bold">Cross-Cloud</div>
                      <div class="tw-text-xs">
                        Deployment Spans Multiple Vendors
                      </div>
                    </div>
                  </v-card>
                </div>
              </div>

              <div>
                <p>
                  GreptimeDB significantly <strong>reduces the TCO</strong> for
                  your time series data stack. It also supports
                  <strong>cross-cloud deployment</strong> with a built-in
                  unified data access layer over different object storages. By
                  leveraging <strong>Object Storage</strong> (S3, and others),
                  separating compute and storage will lead to
                  <strong>scaling</strong> stateless compute nodes
                  <strong>arbitrarily</strong>.
                </p>
              </div>
            </div>
          </template>
        </v-carousel-item>
        <v-carousel-item>
          <template v-slot:default>
            <div class="tw-absolute tw--right-8 tw--top-8" style="z-index: -1">
              <v-img
                src="/public/domain-3.png"
                width="400"
                height="400"
              ></v-img>
            </div>
            <div class="tw-space-y-12 tw-p-8">
              <div class="tw-space-y-6">
                <div class="tw-flex tw-h-8 tw-items-center">
                  <svg
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    fill=""
                    viewBox="0 0 18 18"
                  >
                    <!--?lit$277545455$-->
                    <g>
                      <path
                        data-follow-fill="#A376FF"
                        fill-rule="evenodd"
                        fill="#A376FF"
                        d="M9 0a9 9 0 1 1 0 18A9 9 0 0 1 9 0Zm5.642 6.071a.667.667 0 0 0-.943 0l-5.657 5.657L5.214 8.9a.667.667 0 1 0-.943.943l3.065 3.064a1 1 0 0 0 1.414 0l5.892-5.893a.667.667 0 0 0 0-.943Z"
                      ></path>
                    </g>
                  </svg>
                  <div class="tw-ml-2 tw-text-base tw-font-semibold">
                    Multi-tenancy, enterprise functionalities
                  </div>
                </div>

                <div class="tw-flex tw-h-8 tw-items-center">
                  <svg
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    fill=""
                    viewBox="0 0 18 18"
                  >
                    <!--?lit$277545455$-->
                    <g>
                      <path
                        data-follow-fill="#A376FF"
                        fill-rule="evenodd"
                        fill="#A376FF"
                        d="M9 0a9 9 0 1 1 0 18A9 9 0 0 1 9 0Zm5.642 6.071a.667.667 0 0 0-.943 0l-5.657 5.657L5.214 8.9a.667.667 0 1 0-.943.943l3.065 3.064a1 1 0 0 0 1.414 0l5.892-5.893a.667.667 0 0 0 0-.943Z"
                      ></path>
                    </g>
                  </svg>
                  <div class="tw-ml-2 tw-text-base tw-font-semibold">
                    Professional technical services
                  </div>
                </div>

                <div class="tw-flex tw-h-8 tw-items-center">
                  <svg
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    fill=""
                    viewBox="0 0 18 18"
                  >
                    <!--?lit$277545455$-->
                    <g>
                      <path
                        data-follow-fill="#A376FF"
                        fill-rule="evenodd"
                        fill="#A376FF"
                        d="M9 0a9 9 0 1 1 0 18A9 9 0 0 1 9 0Zm5.642 6.071a.667.667 0 0 0-.943 0l-5.657 5.657L5.214 8.9a.667.667 0 1 0-.943.943l3.065 3.064a1 1 0 0 0 1.414 0l5.892-5.893a.667.667 0 0 0 0-.943Z"
                      ></path>
                    </g>
                  </svg>
                  <div class="tw-ml-2 tw-text-base tw-font-semibold">
                    Fully-managed cloud
                  </div>
                </div>
              </div>
              <p data-v-6ec0c23b="">
                GreptimeCloud is the
                <strong>fully-managed Database as a Service (DBaaS)</strong>
                offering based on GreptimeDB Enterprise, enabling you to start
                from any size and scale as your business grows.
                <strong>GreptimeDB Enterprise</strong> implements
                <strong
                  >multi-tenancy, enterprise-specific functionalities</strong
                >, and <strong>professional technical services</strong>.
              </p>
            </div>
          </template>
        </v-carousel-item>
        <v-carousel-item>
          <template v-slot:default>
            <div class="tw-absolute tw--right-8 tw--top-8" style="z-index: -1">
              <v-img
                src="/public/domain-4.png"
                width="400"
                height="400"
              ></v-img>
            </div>
            <div class="tw-space-y-12 tw-p-8">
              <div class="tw-flex tw-justify-evenly">
                <div class="tw-w-full tw-max-w-[10.25rem] tw-rounded-lg">
                  <v-card
                    variant="text"
                    height="129"
                    class="tw-flex tw-max-w-[10.25rem] tw-content-center tw-rounded-lg"
                  >
                    <div class="tw-justify-center tw-space-y-3 tw-text-center">
                      <div
                        class="tw-mx-auto tw-flex tw-aspect-square tw-w-12 tw-items-center tw-justify-center tw-rounded-lg tw-border tw-border-white tw-bg-purple-500 dark:tw-bg-purple-950"
                      >
                        <svg
                          preserveAspectRatio="xMidYMid meet"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          viewBox="0 0 21 21"
                        >
                          <!--?lit$277545455$-->
                          <g>
                            <g fill="none" fill-rule="evenodd">
                              <path d="M-2-2h24v24H-2z"></path>
                              <g
                                data-follow-stroke="currentColor"
                                stroke="currentColor"
                              >
                                <path
                                  d="m10.448 6.68 3.623 2.068.206 4.384-3.785 2.484-3.563-2.102-.206-4.39 3.725-2.444Zm.052.425V3.158m3.596 9.891 3.467 1.974"
                                  stroke-width="1.5"
                                ></path>
                                <ellipse
                                  stroke-width="2"
                                  cx="19.031"
                                  cy="15.418"
                                  rx="1"
                                  ry="1.011"
                                ></ellipse>
                                <ellipse
                                  stroke-width="2"
                                  cx="1.969"
                                  cy="15.418"
                                  rx="1"
                                  ry="1.011"
                                ></ellipse>
                                <ellipse
                                  stroke-width="2"
                                  cx="10.5"
                                  cy="2.011"
                                  rx="1"
                                  ry="1.011"
                                ></ellipse>
                                <path
                                  d="m6.902 13.049-3.467 1.974"
                                  stroke-width="1.5"
                                ></path>
                                <path
                                  d="M6.413 3.22C3.497 4.688 1.5 7.678 1.5 11.128c0 .17.005.338.014.505m3.534 6.554A9.044 9.044 0 0 0 10.5 20c2.018 0 3.88-.655 5.382-1.76m3.603-6.601c.01-.17.015-.34.015-.511 0-3.56-2.127-6.631-5.197-8.044"
                                  stroke-width="1.4"
                                  stroke-linecap="round"
                                ></path>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <div class="tw-font-bold">At Edge</div>
                    </div>
                  </v-card>
                </div>

                <div class="tw-w-full tw-max-w-[10.25rem] tw-rounded-lg">
                  <v-card
                    variant="text"
                    height="129"
                    class="tw-flex tw-max-w-[10.25rem] tw-content-center tw-rounded-lg"
                  >
                    <div class="tw-justify-center tw-space-y-3 tw-text-center">
                      <div
                        class="tw-mx-auto tw-flex tw-aspect-square tw-w-12 tw-items-center tw-justify-center tw-rounded-lg tw-border tw-border-white tw-bg-purple-500 dark:tw-bg-purple-950"
                      >
                        <svg
                          preserveAspectRatio="xMidYMid meet"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          viewBox="0 0 21 21"
                        >
                          <!--?lit$277545455$-->
                          <g>
                            <g fill="none" fill-rule="evenodd">
                              <path d="M-2-2h24v24H-2z"></path>
                              <g
                                data-follow-stroke="currentColor"
                                stroke="currentColor"
                              >
                                <path
                                  d="m10.448 6.68 3.623 2.068.206 4.384-3.785 2.484-3.563-2.102-.206-4.39 3.725-2.444Zm.052.425V3.158m3.596 9.891 3.467 1.974"
                                  stroke-width="1.5"
                                ></path>
                                <ellipse
                                  stroke-width="2"
                                  cx="19.031"
                                  cy="15.418"
                                  rx="1"
                                  ry="1.011"
                                ></ellipse>
                                <ellipse
                                  stroke-width="2"
                                  cx="1.969"
                                  cy="15.418"
                                  rx="1"
                                  ry="1.011"
                                ></ellipse>
                                <ellipse
                                  stroke-width="2"
                                  cx="10.5"
                                  cy="2.011"
                                  rx="1"
                                  ry="1.011"
                                ></ellipse>
                                <path
                                  d="m6.902 13.049-3.467 1.974"
                                  stroke-width="1.5"
                                ></path>
                                <path
                                  d="M6.413 3.22C3.497 4.688 1.5 7.678 1.5 11.128c0 .17.005.338.014.505m3.534 6.554A9.044 9.044 0 0 0 10.5 20c2.018 0 3.88-.655 5.382-1.76m3.603-6.601c.01-.17.015-.34.015-.511 0-3.56-2.127-6.631-5.197-8.044"
                                  stroke-width="1.4"
                                  stroke-linecap="round"
                                ></path>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <div class="tw-font-bold">At Edge</div>
                    </div>
                  </v-card>
                </div>

                <div class="tw-w-full tw-max-w-[10.25rem] tw-rounded-lg">
                  <v-card
                    variant="text"
                    height="129"
                    class="tw-flex tw-max-w-[10.25rem] tw-content-center tw-rounded-lg"
                  >
                    <div class="tw-justify-center tw-space-y-3 tw-text-center">
                      <div
                        class="tw-mx-auto tw-flex tw-aspect-square tw-w-12 tw-items-center tw-justify-center tw-rounded-lg tw-border tw-border-white tw-bg-purple-500 dark:tw-bg-purple-950"
                      >
                        <svg
                          preserveAspectRatio="xMidYMid meet"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          viewBox="0 0 21 21"
                        >
                          <!--?lit$277545455$-->
                          <g>
                            <g fill="none" fill-rule="evenodd">
                              <path d="M-2-2h24v24H-2z"></path>
                              <g
                                data-follow-stroke="currentColor"
                                stroke="currentColor"
                              >
                                <path
                                  d="m10.448 6.68 3.623 2.068.206 4.384-3.785 2.484-3.563-2.102-.206-4.39 3.725-2.444Zm.052.425V3.158m3.596 9.891 3.467 1.974"
                                  stroke-width="1.5"
                                ></path>
                                <ellipse
                                  stroke-width="2"
                                  cx="19.031"
                                  cy="15.418"
                                  rx="1"
                                  ry="1.011"
                                ></ellipse>
                                <ellipse
                                  stroke-width="2"
                                  cx="1.969"
                                  cy="15.418"
                                  rx="1"
                                  ry="1.011"
                                ></ellipse>
                                <ellipse
                                  stroke-width="2"
                                  cx="10.5"
                                  cy="2.011"
                                  rx="1"
                                  ry="1.011"
                                ></ellipse>
                                <path
                                  d="m6.902 13.049-3.467 1.974"
                                  stroke-width="1.5"
                                ></path>
                                <path
                                  d="M6.413 3.22C3.497 4.688 1.5 7.678 1.5 11.128c0 .17.005.338.014.505m3.534 6.554A9.044 9.044 0 0 0 10.5 20c2.018 0 3.88-.655 5.382-1.76m3.603-6.601c.01-.17.015-.34.015-.511 0-3.56-2.127-6.631-5.197-8.044"
                                  stroke-width="1.4"
                                  stroke-linecap="round"
                                ></path>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <div class="tw-font-bold">At Edge</div>
                    </div>
                  </v-card>
                </div>

                <div class="tw-w-full tw-max-w-[10.25rem] tw-rounded-lg">
                  <v-card
                    variant="text"
                    height="129"
                    class="tw-flex tw-max-w-[10.25rem] tw-content-center tw-rounded-lg"
                  >
                    <div class="tw-justify-center tw-space-y-3 tw-text-center">
                      <div
                        class="tw-mx-auto tw-flex tw-aspect-square tw-w-12 tw-items-center tw-justify-center tw-rounded-lg tw-border tw-border-white tw-bg-purple-500 dark:tw-bg-purple-950"
                      >
                        <svg
                          preserveAspectRatio="xMidYMid meet"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          viewBox="0 0 21 21"
                        >
                          <!--?lit$277545455$-->
                          <g>
                            <g fill="none" fill-rule="evenodd">
                              <path d="M-2-2h24v24H-2z"></path>
                              <g
                                data-follow-stroke="currentColor"
                                stroke="currentColor"
                              >
                                <path
                                  d="m10.448 6.68 3.623 2.068.206 4.384-3.785 2.484-3.563-2.102-.206-4.39 3.725-2.444Zm.052.425V3.158m3.596 9.891 3.467 1.974"
                                  stroke-width="1.5"
                                ></path>
                                <ellipse
                                  stroke-width="2"
                                  cx="19.031"
                                  cy="15.418"
                                  rx="1"
                                  ry="1.011"
                                ></ellipse>
                                <ellipse
                                  stroke-width="2"
                                  cx="1.969"
                                  cy="15.418"
                                  rx="1"
                                  ry="1.011"
                                ></ellipse>
                                <ellipse
                                  stroke-width="2"
                                  cx="10.5"
                                  cy="2.011"
                                  rx="1"
                                  ry="1.011"
                                ></ellipse>
                                <path
                                  d="m6.902 13.049-3.467 1.974"
                                  stroke-width="1.5"
                                ></path>
                                <path
                                  d="M6.413 3.22C3.497 4.688 1.5 7.678 1.5 11.128c0 .17.005.338.014.505m3.534 6.554A9.044 9.044 0 0 0 10.5 20c2.018 0 3.88-.655 5.382-1.76m3.603-6.601c.01-.17.015-.34.015-.511 0-3.56-2.127-6.631-5.197-8.044"
                                  stroke-width="1.4"
                                  stroke-linecap="round"
                                ></path>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <div class="tw-font-bold">At Edge</div>
                    </div>
                  </v-card>
                </div>
              </div>

              <div>
                <p data-v-6ec0c23b="">
                  Written in <strong>Rust</strong>, GreptimeDB can be deployed
                  on <strong>ARM architecture-compatible</strong> Android/Linux
                  systems as well as <strong>cloud</strong> environments.
                  Providing identical APIs and control planes, and running the
                  application
                  <strong>at the edge or on the cloud</strong> without
                  modification. Extremely easy and efficient
                  <strong>data synchronization</strong>.
                </p>
              </div>
            </div>
          </template>
        </v-carousel-item>
      </v-carousel>
    </div>
  </div>
</template>

<style scoped></style>
