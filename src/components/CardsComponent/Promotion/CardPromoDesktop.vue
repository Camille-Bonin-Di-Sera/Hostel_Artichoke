<template>
  <section class="Promo mb-16 md:flex md:flex-col " >
    <div class="md:flex-row md:flex md:gap-2 md:h-96">
      <div class="disapear_promo">
        <article class="promo_img">
          <div class="promo_bandeau"> <p>Théâtre</p></div>
        </article>
        <article class="promo_discrib"  v-for="discount of discounts">
          <title class="hidden md:block md:text-green md:text-3xl md:mt-6" v-if="discount.id === 1">{{ this.lang_fr ? discount.title_fr_discount : discount.title_ang_discount }}</title>
          <p class="text-black text-left ml-4 mt-4 mb-12 md:mb-6 md:mt-2" v-if="discount.id === 1">{{ this.lang_fr ? discount.describe_fr_discount : discount.describe_ang_discount }} </p>
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
           ease-in-out">{{ this.lang_fr ? "Voir plus" : " View more " }}</router-link>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
<script>
import('../../../assets/Style/Cards/CardsPromo.css')
import axios from "axios";

export default{

  props : ['lang_fr'],

  data() {
    return {
      discounts: [],
      local: import.meta.env.VITE_URL_API,
    };
  },


  created() {
    axios
        .get(this.local + '/v1/discounts')
        .then((res) =>
        {
          try{
            this.discounts = res.data;

          }
          catch (err) {
            return err;
          }
        })
        .catch((error) =>
        {
          return error;
        });
  },
};
</script>