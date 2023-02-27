<template>
    <div class="md:flex-row md:flex md:gap-2 md:h-96">
      <div class="appear_promo">
        <article class="promo_img">
          <div class="promo_bandeau "> <p>Théâtre</p></div>
        </article>
        <article class="promo_discrib " v-for="discount of discounts">
          <title class="hidden md:block text-black md:text-green md:text-3xl md:mt-6" v-if="discount.id === 1">{{ discount.title_fr_discount }}</title>
          <p class="text-black text-black text-left ml-4 mt-4 mb-12 md:mb-6 md:mt-2" v-if="discount.id === 1">{{ discount.describe_fr_discount}}</p>
          <div class="flex space-x-2 justify-center mb-6 md:hidden">
            <router-link  v-if="discount.id === 1" to="/#yourlink" type="button" class=
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
</template>
<script>
import('../../../assets/Style/Cards/CardsPromo.css')
import axios from "axios";

import {defineComponent} from "vue";
export default{
  data() {
    return {
      discounts: [],
      local: import.meta.env.VITE_URL_API,
    };
  },


  created() {
    axios
        .get(this.local + 'api/v1/discounts')
        .then((res) =>
        {
          try{
            this.discounts = res.data;
            console.log("bonjour : ", res);
          }
          catch (err) {
            console.log("erreur discount : ", err);
          }
        })
        .catch((error) =>
        {
          console.log("bonjour : ", error.res.data.value);
        });
  },
};

</script>