<template>
  <div
    class="bg-clip-padding tw-relative tw-w-full tw-rounded-lg tw-border tw-bg-gray-50 lg:tw-w-1/2 dark:tw-bg-stone-900"
  >
    <div
      class="tw-rounded-t-lg tw-border-b-violet-400 tw-bg-violet-400 tw-py-4 dark:tw-bg-black"
    >
      <div class="tw-absolute tw-flex tw-w-full tw-items-center tw-justify-end">
        <div>
          <v-img width="143" height="16" :src="sqlTitle" />
        </div>
      </div>
      <div class="tw-px-3 tw-text-base tw-leading-4">
        {{ t("home.code") }}
      </div>
    </div>
    <div class="tw-my-3.5 tw-px-4 *:tw-text-sm *:tw-leading-5">
      <pre><code class="tw-w-full" v-html="highlightedCode" /></pre>
    </div>
    <div class="tw-group tw-mb-4 tw-ml-4 tw-flex">
      <v-icon
        class="tw-text-sm tw-text-purple-900"
        icon="mdi-arrow-right"
      ></v-icon>
      <div
        class="tw-cursor-pointer tw-pt-0.5 tw-text-sm group-hover:tw-text-purple-700 group-hover:tw-underline-offset-1"
      >
        Learn more about this query
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import "highlight.js/styles/default.css"

import hljs from "highlight.js/lib/core"
import sql from "highlight.js/lib/languages/sql"
import { useI18n } from "vue-i18n"

import sqlTitle from "/public/sql_title.png"

const { t } = useI18n()
hljs.registerLanguage("sql", sql)
const code = `
SELECT
    time,
    host,
    approx_percentile_cont(latency, 0.95) RANGE '15s' as p95_latency,
    count(error) RANGE '15s' as num_errors,
FROM
    metrics INNER JOIN logs ON metrics.host = logs.host
WHERE
    time > now() - INTERVAL '1 hour' AND
    matches(path, '/api/v1/avatar')
ALIGN '5s' BY (host) FILL PREV
`
const highlightedCode = hljs.highlight(code, {
  language: "sql",
}).value
</script>
