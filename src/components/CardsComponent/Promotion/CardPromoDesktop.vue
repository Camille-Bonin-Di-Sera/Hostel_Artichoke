<template>
  <section class="Promo mb-16 md:flex md:flex-col ">
    <div class="md:flex-row md:flex md:gap-2 md:h-96">
      <div class="disapear_promo">
        <article class="promo_img">
          <div class="promo_bandeau"> <p>Théâtre</p></div>
        </article>
        <article class="promo_discrib ">
          <title class="hidden md:block md:text-green md:text-3xl md:mt-6"></title>
          <p class="text-black text-left ml-4 mt-4 mb-12 md:mb-6 md:mt-2">Les pate c'est la vie </p>
          <div class="flex space-x-2 justify-center mb-6 md:hidden">
            <router-link to="/#yourlink" type="button" class=
                "inline-block
           px-6 py-2.5
           bg-green
           text-white
           font-medium
           text-xs
           leading-tight
           uppercase
           rounded
           shadow-md
           hover:bg-green
           hover:shadow-lg
           focus:bg-green-second
           focus:shadow-lg
           focus:outline-none
           focus:ring-0
           active:bg-green-second
           active:shadow-lg
           transition
           duration-150
           ease-in-out">Voir plus</router-link>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
<script>
import('../../../assets/Style/Cards/CardsPromo.css')



</script>