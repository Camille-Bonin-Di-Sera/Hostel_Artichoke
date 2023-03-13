<script lang="ts">
export default {
  props: ["lang_fr"],
};
</script>

<template>
  <div class="about">
    <Contact v-bind:lang_fr="lang_fr" />
  </div>
</template>

<style></style>
<script setup lang="ts">
import Contact from "@/components/ContactComponent.vue";
</script>
