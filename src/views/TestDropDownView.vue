<script lang="ts">
export default {
  props: ['lang_fr'],
}

</script>

<script setup lang="ts">
import TestDropDownComponent from "@/components/TestDropDownComponent.vue";


</script>

<template>
  <main>
    <TestDropDownComponent v-bind:lang_fr="lang_fr"/>
  </main>
</template>
