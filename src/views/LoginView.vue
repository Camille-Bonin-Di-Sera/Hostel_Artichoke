<script lang="ts">
export default {
  props: ['lang_fr'],
}

</script>

<script setup lang="ts">
import LoginComponent from "@/components/Count/LoginComponent.vue";
</script>

<template>
  <main>
    <LoginComponent v-bind:lang_fr="lang_fr"/>
  </main>
</template>
