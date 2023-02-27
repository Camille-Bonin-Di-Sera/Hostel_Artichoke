<script lang="ts">
export default {
  props: ['lang_fr'],
}

</script>

<script setup lang="ts">
import DiscountComponent from "@/components/DiscountComponent.vue";

</script>

<template>
  <main>
    <DiscountComponent v-bind:lang_fr="lang_fr"/>
  </main>
</template>
