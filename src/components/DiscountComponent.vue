<template>
  <div>
    <div>
      <h3 class="colorText text-center  text-3xl sm:block sm:m-auto sm:w-1/3 sm:text-5xl">Nos Promotions</h3>
    </div>
    <br />
    <div>
      <button class="flag inline mr-6" v-on:click="testChange"><img src="../assets/Pictures/icon/flag-fr.png" alt=""></button>
    </div>
      <div v-for="discount of discounts">
        <div v-if="discount.id === 1">
          <img src="@/assets/Pictures/bedroom0.jpg" alt ="Image promo 1" class="block m-auto sm:block sm:m-auto sm:w-1/3"/>
        </div>
        <div v-else-if="discount.id === 2">
          <img src="@/assets/Pictures/bedroom1.jpg" alt ="Image promo 2" class="block m-auto sm:block sm:m-auto sm:w-1/3"/>
        </div>
        <div v-else-if="discount.id === 3">
          <img src="@/assets/Pictures/bedroom2.jpg" alt ="Image promo 3" class="block m-auto sm:block sm:m-auto sm:w-1/3"/>
        </div>
        <div v-else-if="discount.id === 4">
          <img src="@/assets/Pictures/bedroom3.jpg" alt ="Image promo 4" class="block m-auto sm:block sm:m-auto sm:w-1/3"/>
        </div>
        <p class="colorText text-center text-4xl"> {{ this.testLang }}  {{ this.testLang ? discount.title_fr_discount : discount.title_ang_discount }} </p>
        <br />
        <p class="text-center text-black block m-auto sm:block sm:m-auto sm:w-1/3"> {{ discount.describe_fr_discount }} </p>
        <p class="text-center text-black block m-auto w-1/2 sm:block sm:m-auto sm:w-1/3"> {{ discount.code_discount }} </p>
        <br />
        <button class="fontButton text-white text-2xl backgroundButton block m-auto w-1/4 rounded sm:text-4xl">Réservez</button>
        <br />
      </div>
    </div>
</template>

<script>
import axios from "axios";
import('../assets/Style/main.css');
import('../assets/Style/discounts.css');



export default{

    props: {
      lang_fr: {
        type: Boolean,
      }
    },

  data() {
    return {
      discounts: [],
      local: import.meta.env.VITE_URL_API,


      testLang:true,
    };
  },

  mounted() {
    console.log(import.meta.env);
  },

  created() {
    axios
        .get(this.local + '/v1/discounts')
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


  methods:{
    testChange() {
      this.testLang = !this.testLang;
    }
  }
};

</script>

<style scoped>

</style>