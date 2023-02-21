<template>
  <section class="Promo mb-16 md:flex md:flex-col ">
    <div class="md:flex-row md:flex md:gap-2 md:h-96">
      <card-promo-mobile/>
      <CardPromoDesktop/>
      <CardPromoDesktop/>
    </div>
  </section>
</template>
<script setup lang="ts">
  import('../../../assets/Style/Cards/CardsPromo.css');
  import CardPromoDesktop from "../Promotion/CardPromoDesktop.vue";
  import CardPromoMobile from "../Promotion/CardPromoMobile.vue";
</script>