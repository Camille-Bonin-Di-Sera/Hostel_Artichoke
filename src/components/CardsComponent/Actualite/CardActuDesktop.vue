<template>
  <section class="Actu mb-16 md:flex md:flex-col" >
    <div class="hidden md:block md:flex md:justify-center md:mb-6">
    </div>
    <div class=" md:flex md:flex-row">
      <div class="actu_second_card md:flex-col md:flex md:gap-2 md:h-96 hidden">
        <article class="actu_img">
          <div class="actu_bandeau"> <p>Théâtre</p></div>
        </article>
        <article class="actu_discrib md:hidden">
          <p class="text-black text-left ml-4 mt-4 mb-12">Les pate c'est la vie </p>
          <div class="flex space-x-2 justify-center md:hidden">
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
           ease-in-out">Button</router-link>
          </div>
        </article>
        <article class="actu_img">
          <div class="actu_bandeau"> <p>Théâtre</p></div>
        </article>
        <article class="actu_discrib md:hidden ">
          <p class="text-black text-left ml-4 mt-4 mb-12">Les pate c'est la vie </p>
          <div class="flex space-x-2 justify-center md:hidden">
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
           ease-in-out">Button</router-link>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
<script>
import('../../../assets/Style/Cards/CardsActu.css');
import axios from "axios";
</script>