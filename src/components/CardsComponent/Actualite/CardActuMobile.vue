<template>
  <div class=" md:flex md:flex-row">
    <div class=" actu_first_card md:flex-row md:flex md:gap-2 md:h-96">
      <article class="actu_img">
        <div class="actu_bandeau md:items-center"> <p class="md:text-4xl" >{{ this.lang_fr ? "Théâtre" : "Theater" }}</p></div>
      </article>
      <article class="actu_discrib md:hidden">
        <p class="text-black text-left ml-4 mt-4 mb-12 md:hidden">Les pate c'est la vie </p>
        <div class="flex space-x-2 justify-center md:hidden">
          <router-link to="/#yourlink" type="button" class=
              "mb-12
                 inline-block
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
  import axios from "axios";
  import('../../../assets/Style/Cards/CardsActu.css')

  export default{

    props : ['lang_fr'],

    data() {
      return {
          infoNews: [],
        local: import.meta.env.VITE_URL_API,
      };
    },


    created() {
      axios
          .get(this.local + '/v1/infoNews')
          .then((res) =>
          {
            try{
              this.infoNews = res.data;
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