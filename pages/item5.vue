<script setup lang="ts">
import EdgeDatabase from "~/components/svg/item5/EdgeDatabase.vue";
import LowerData from "~/components/svg/item5/LowerData.vue";
import Cloud from "~/components/svg/item5/Cloud.vue";
</script>

<template>
  <div class="lg:tw-hidden">
    <div class="tw-px-4 tw-py-[3.75rem]">
      <p class="tw-text-center tw-text-3xl tw-font-black">
        Edge-Cloud Integrated Solution
      </p>
      <p class="tw-mb-16 tw-text-center tw-text-lg">
        Processing High-volume Time Series both At the Edge or On the Cloud
      </p>
      <div class="tw-grid tw-w-full tw-grid-cols-2">
        <item5-card
          :svg="EdgeDatabase"
          :title="'Edge Database'"
          :list1="'Embedded database for ARM architecture compatible Android/Linux system'"
          :list2="'Low resource requirements to support edge applications'"
        ></item5-card>
        <item5-card
          :svg="LowerData"
          :title="'Lower Data Async Cost'"
          :list1="'Highly compressed data files directly sync without format transformation'"
          :list2="'Use object storage for ultra-low storage cost (1/30 of the original)'"
        ></item5-card>
      </div>
      <div class="tw-grid tw-w-full tw-grid-cols-2">
        <item5-card
          :svg="Cloud"
          :title="'Cloud-Edge Collaboration'"
          :list1="'Push down queries to the edge'"
          :list2="'One control plane for edge and cloud'"
        ></item5-card>
      </div>
      <div
        class="tw-mx-auto tw-mt-5 tw-flex tw-max-w-[51rem] tw-justify-center tw-space-x-6"
      >
        <div class="tw-grid tw-w-full tw-grid-cols-2 tw-gap-10">
          <item5-comment
            :comment="'After integrating GreptimeDB into our mass-produced vehicles, it has not only significantly reduced our data processing costs, but also established a foundation for streamlined in-vehicle and edge computing, ensuring the security and efficiency of data-driven applications.'"
            :unit="'Leading Manufacturer of New Energy Vehicles'"
            :author="'Tao W. | Staff Engineer'"
          ></item5-comment>
          <item5-comment
            :comment="'GreptimeDB successfully replaced InfluxDB in our IoT project. The entire migration process was smooth and painless. Its cluster version excellently meets our scalability and performance requirements, and the SQL queries are more user-friendly and powerful.'"
            :unit="'SGCC'"
            :author="'JianX L. | Staff Engineer'"
          ></item5-comment>
        </div>
      </div>
    </div>
  </div>

  <div class="tw-hidden tw-w-full tw-py-[6.25rem] lg:tw-block">
    <p class="tw-text-center tw-text-3xl tw-font-black">
      Edge-Cloud Integrated Solution
    </p>
    <p class="tw-mb-16 tw-text-center tw-text-lg">
      Processing High-volume Time Series both At the Edge or On the Cloud
    </p>
    <div class="tw-grid tw-w-full tw-grid-cols-3">
      <item5-card
        :svg="EdgeDatabase"
        :title="'Edge Database'"
        :list1="'Embedded database for ARM architecture compatible Android/Linux system'"
        :list2="'Low resource requirements to support edge applications'"
      ></item5-card>
      <item5-card
        :svg="LowerData"
        :title="'Lower Data Async Cost'"
        :list1="'Highly compressed data files directly sync without format transformation'"
        :list2="'Use object storage for ultra-low storage cost (1/30 of the original)'"
      ></item5-card>
      <item5-card
        :svg="Cloud"
        :title="'Cloud-Edge Collaboration'"
        :list1="'Push down queries to the edge'"
        :list2="'One control plane for edge and cloud'"
      ></item5-card>
    </div>
    <div
      class="tw-mx-auto tw-mt-5 tw-flex tw-max-w-[51rem] tw-justify-center tw-space-x-6"
    >
      <div class="tw-mt-5 tw-grid tw-w-full tw-grid-cols-2 tw-gap-10">
        <item5-comment
          :comment="'After integrating GreptimeDB into our mass-produced vehicles, it has not only significantly reduced our data processing costs, but also established a foundation for streamlined in-vehicle and edge computing, ensuring the security and efficiency of data-driven applications.'"
          :unit="'Leading Manufacturer of New Energy Vehicles'"
          :author="'Tao W. | Staff Engineer'"
        ></item5-comment>
        <item5-comment
          :comment="'GreptimeDB successfully replaced InfluxDB in our IoT project. The entire migration process was smooth and painless. Its cluster version excellently meets our scalability and performance requirements, and the SQL queries are more user-friendly and powerful.'"
          :unit="'SGCC'"
          :author="'JianX L. | Staff Engineer'"
        ></item5-comment>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
