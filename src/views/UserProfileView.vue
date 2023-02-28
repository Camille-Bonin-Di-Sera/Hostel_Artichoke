<script lang="ts">
export default {
  props: ['lang_fr'], // On récupère la propriété pour pouvoir ensuite l'utiliser.
}

</script>

<script setup lang="ts">
import Carousel from "@/components/Carousel.vue"
import UserProfileComponent from "@/components/ProfilUser/UserProfileComponent.vue";

</script>

<template>
  <main>
    <UserProfileComponent v-bind:lang_fr="lang_fr"/> <!-- On repasse de nouveau la propriété au composant enfant -->
  </main>
</template>