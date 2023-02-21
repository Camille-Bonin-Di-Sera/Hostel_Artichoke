<template>
  <section class="Actu mb-16 md:flex md:flex-col ">
    <div class="cont_actu md:flex-row md:flex md:gap-2 md:h-96">
      <CardActuMobile/>
      <CardActuDesktop/>
    </div>
  </section>
</template>
<script setup lang="ts">
  import CardActuMobile from "../Actualite/CardActuMobile.vue";
  import CardActuDesktop from "../Actualite/CardActuDesktop.vue";
  import('../../../assets/Style/Cards/CardsPromo.css');
</script>