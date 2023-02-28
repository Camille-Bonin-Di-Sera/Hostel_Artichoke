<script lang="ts">
export default {
  props: ['lang_fr'],
}

</script>

<script setup lang="ts">
import ReservationComponent from "@/components/ReservationComponent.vue";

</script>

<template>
  <main>
    <ReservationComponent v-bind:lang_fr="lang_fr"/>
  </main>
</template>