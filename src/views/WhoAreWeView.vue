<script lang="ts">
export default {
  props: ['lang_fr'],
}

</script>

<script setup lang="ts">
import WhoAreWeComponent from "@/components/WhoAreWeComponent.vue";


</script>

<template>
  <main>
    <WhoAreWeComponent v-bind:lang_fr="lang_fr"/>
  </main>
</template>
