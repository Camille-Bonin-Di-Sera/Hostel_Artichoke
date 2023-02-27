<script lang="ts">
export default {
  props: ['lang_fr'],
}

</script>

<script setup lang="ts">
import FooterComponent from "@/components/FooterComponent.vue";
</script>

<template>
  <main>
    <FooterComponent v-bind:lang_fr="lang_fr"/>
  </main>
</template>
