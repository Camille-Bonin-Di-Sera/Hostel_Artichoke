<script lang="ts">
import axios from "axios";
import axiosClient from "../main.js";
export default {
  props: ['lang_fr'],
}

</script>

<script setup lang="ts">

import ReservationComponent from "@/components/ReservationComponent.vue";

</script>

<template>
  <main>
    <ReservationComponent v-bind:lang_fr="lang_fr" />
  </main>
</template>
