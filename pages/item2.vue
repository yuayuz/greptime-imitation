<script setup lang="ts">
import ScalingHorizontally from "~/components/svg/item2/ScalingHorizontally.vue";
import UnifiedAnalysis from "~/components/svg/item2/UnifiedAnalysis.vue";
import CostEffective from "~/components/svg/item2/CostEffective.vue";
import Compatibility from "~/components/svg/item2/Compatibility.vue";
</script>

<template>
  <div class="lg:tw-hidden">
    <div class="tw-px-4 tw-py-[3.75rem]">
      <p class="tw-text-center tw-text-3xl tw-font-black">GreptimeDB</p>
      <p class="tw-mb-16 tw-text-center tw-text-lg">
        Open-source, Cloud-scale, Fast and Efficient Time Series Database
      </p>
      <div class="tw-mb-8 tw-flex tw-w-full tw-justify-between tw-space-x-5">
        <item2-card :svg="ScalingHorizontally" :title="'Scaling horizontally'"
          >A transparent experience for both developers and administrators.
          Seamlessly scale from a standalone binary at the edge to a robust,
          highly available distributed cluster in the cloud.
        </item2-card>
        <item2-card :svg="UnifiedAnalysis" :title="'Unified Analysis'"
          >Embrace the broad analytics ecosystem to query metrics, logs, events,
          and traces (planning) together with standard SQL and PromQL.
        </item2-card>
      </div>
      <div class="tw-mb-8 tw-flex tw-w-full tw-justify-between tw-space-x-5">
        <item2-card :svg="CostEffective" :title="'Cost-effective'"
          >Optimized columnar layout for handling metrics and events; compacted,
          compressed, and stored on various storage backends, particularly cloud
          object storage with 50x cost efficiency.
        </item2-card>
        <item2-card :svg="Compatibility" :title="'Compatibility'"
          >Widely adopted database protocols and APIs, including SQL, InfluxDB,
          OpenTelemetry, Prometheus Remote Storage, and more.
        </item2-card>
      </div>
      <div class="tw-flex tw-justify-center tw-space-x-6">
        <v-btn color="white" density="default" class="hover:tw-scale-105"
          >GreptimePlay
        </v-btn>
        <v-btn variant="outlined" density="default" class="hover:tw-scale-105"
          >Learn More
        </v-btn>
      </div>
    </div>
  </div>
  <div class="tw-hidden tw-w-full tw-py-[6.25rem] lg:tw-block">
    <p class="tw-text-center tw-text-3xl tw-font-black">GreptimeDB</p>
    <p class="tw-mb-16 tw-text-center tw-text-lg">
      Open-source, Cloud-scale, Fast and Efficient Time Series Database
    </p>
    <div class="tw-mb-8 tw-flex tw-w-full tw-justify-between tw-space-x-5">
      <item2-card :svg="ScalingHorizontally" :title="'Scaling horizontally'"
        >A transparent experience for both developers and administrators.
        Seamlessly scale from a standalone binary at the edge to a robust,
        highly available distributed cluster in the cloud.
      </item2-card>
      <item2-card :svg="UnifiedAnalysis" :title="'Unified Analysis'"
        >Embrace the broad analytics ecosystem to query metrics, logs, events,
        and traces (planning) together with standard SQL and PromQL.
      </item2-card>
      <item2-card :svg="CostEffective" :title="'Cost-effective'"
        >Optimized columnar layout for handling metrics and events; compacted,
        compressed, and stored on various storage backends, particularly cloud
        object storage with 50x cost efficiency.
      </item2-card>
      <item2-card :svg="Compatibility" :title="'Compatibility'"
        >Widely adopted database protocols and APIs, including SQL, InfluxDB,
        OpenTelemetry, Prometheus Remote Storage, and more.
      </item2-card>
    </div>
    <div class="tw-flex tw-justify-center tw-space-x-6">
      <v-btn color="white" density="default" class="hover:tw-scale-105"
        >GreptimePlay
      </v-btn>

      <v-btn variant="outlined" density="default" class="hover:tw-scale-105"
        >Learn More
      </v-btn>
    </div>
  </div>
</template>

<style scoped>
.v-btn {
  text-transform: none !important;
}
</style>
