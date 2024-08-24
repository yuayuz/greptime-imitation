<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <div
    class="bg-clip-padding tw-relative tw-w-full tw-rounded-lg tw-border tw-bg-gray-50 lg:tw-max-w-[30rem] dark:tw-bg-stone-900"
  >
    <div
      class="tw-rounded-t-lg tw-border-b-violet-400 tw-bg-violet-400 tw-py-4 dark:tw-bg-black"
    >
      <div class="tw-absolute tw-flex tw-w-full tw-items-center tw-justify-end">
        <div>
          <v-img width="143" height="16" src="/public/sql-title.png"></v-img>
        </div>
      </div>
      <div class="tw-px-3 tw-text-base tw-leading-4">
        {{ t("home.code") }}
      </div>
    </div>
    <div class="tw-my-3.5 tw-px-4 *:tw-text-sm *:tw-leading-5">
      <span>SELECT</span> <br />
      <span> time</span><span>,</span> <br />
      <span>host</span><span>,</span> <br />
      <span>approx_percentile_cont</span><span>(</span> <span>latency</span
      ><span>,</span> <span>0.95</span> <span>)</span> <span>RANGE</span>
      <span>'15s'</span> <span>as</span> <span>p95_latency</span><span>,</span
      ><br />
      <span>count</span><span>(</span><span>error</span><span>)</span>
      <span>RANGE</span> <span>'15s'</span> <span>as</span>
      <span>num_errors</span><span>,</span><br />
      <span>FROM</span><br />
      <span>metrics</span> <span>INNER JOIN</span> <span>logs</span>
      <span>on</span> <span>metrics</span><span>.</span> <span>host</span>
      <span>=</span> <span>logs</span><span>.</span> <span>host</span><br />
      <span>WHERE</span><br />
      <span>time</span> <span>&gt;</span> <span>now</span> <span>(</span>
      <span>)</span> <span>-</span> <span>INTERVAL</span> <span>'1 hour'</span>
      <span>AND</span><br />
      <span>matches</span> <span>(</span><span>path</span> <span>,</span>
      <span>'/api/v1/avatar'</span><span>)</span><br />
      <span>ALIGN</span> <span>'5s'</span> <span>BY</span> <span>(</span>
      <span>host</span> <span>)</span> <span>FILL</span>
      <span>PREV</span>
    </div>
    <div class="tw-group tw-mb-4 tw-ml-4 tw-flex">
      <v-icon
        class="tw-text-sm tw-text-purple-900"
        icon="mdi-arrow-right"
      ></v-icon>
      <div
        class="tw-cursor-pointer tw-text-sm group-hover:tw-text-purple-700 group-hover:tw-underline-offset-1"
      >
        Learn more about this query
      </div>
    </div>
  </div>
</template>

<style scoped></style>
