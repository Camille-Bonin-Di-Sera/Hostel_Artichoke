<template>
  <section class="Actu mb-16 md:flex md:flex-col ">
    <div class="cont_actu md:flex-row md:flex md:gap-2 md:h-96">
      <CardActuMobile v-bind:lang_fr="lang_fr"/>
      <CardActuDesktop v-bind:lang_fr="lang_fr"/>
    </div>
  </section>
</template>
<script setup lang="ts">
  import CardActuMobile from "../Actualite/CardActuMobile.vue";
  import CardActuDesktop from "../Actualite/CardActuDesktop.vue";
  import('../../../assets/Style/Cards/CardsPromo.css');
</script>


<script lang="ts">
export default {
  props: ['lang_fr'],
}

</script>