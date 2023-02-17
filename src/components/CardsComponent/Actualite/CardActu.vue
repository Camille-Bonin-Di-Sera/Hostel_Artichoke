<template>
  <section class="Actu mb-16 md:flex md:flex-col ">
    <div class="cont_actu md:flex-row md:flex md:gap-2 md:h-96">
      <card-actu-mobile/>
      <card-actu-desktop/>
    </div>
  </section>
</template>
<script setup lang="ts">
import('../../../assets/Style/Cards/CardsPromo.css')
import CardActuDesktop from "@/components/CardsComponent/Actualite/CardActuDesktop.vue";
import CardActuMobile from "@/components/CardsComponent/Actualite/CardActuMobile.vue";
</script>