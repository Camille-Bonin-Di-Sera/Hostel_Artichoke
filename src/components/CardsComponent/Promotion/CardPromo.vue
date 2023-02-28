<template>
  <section class="Promo mb-16 md:flex md:flex-col ">
    <div class="md:flex-row md:flex md:gap-2 md:h-96">
      <CardPromoDesktop v-bind:lang_fr="lang_fr"/>
      <CardPromoDesktop v-bind:lang_fr="lang_fr"/>
      <CardPromoMobile v-bind:lang_fr="lang_fr"/>
    </div>
  </section>
</template>
<script setup lang="ts">
  import CardPromoDesktop from "../Promotion/CardPromoDesktop.vue";
  import CardPromoMobile from "../Promotion/CardPromoMobile.vue";
  import('../../../assets/Style/Cards/CardsPromo.css');
</script>

<script lang="ts">
export default {
  props: ['lang_fr'],
}

</script>