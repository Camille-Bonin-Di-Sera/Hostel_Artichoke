<template>
  <div>
    <div>
      <h3 class="colorText text-center  text-3xl sm:block sm:m-auto sm:w-1/3 sm:text-5xl">{{ this.lang_fr ? "Nos Promotions" : "Our discounts" }}</h3>
    </div>
    <br />
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
        <p class="colorText text-center text-4xl">{{ this.lang_fr ? discount.title_fr_discount : discount.title_ang_discount }} </p>
        <br />
        <p class="text-center text-black block m-auto sm:block sm:m-auto sm:w-1/3"> {{ this.lang_fr ? discount.describe_fr_discount : discount.describe_ang_discount }} </p>
        <p class="text-center text-black block m-auto w-1/2 sm:block sm:m-auto sm:w-1/3"> {{ discount.code_discount }} </p>
        <br />
        <button class="fontButton text-white text-2xl backgroundButton block m-auto w-1/4 rounded sm:text-4xl">{{ this.lang_fr ? "Réservez" : "Book" }}</button>
        <br />
      </div>
    </div>
</template>

<script>
import axios from "axios";
import('../assets/Style/main.css');
import('../assets/Style/discounts.css');



export default{

  props: ['lang_fr'],

  data() {
    return {
      discounts: [],
      local: import.meta.env.VITE_URL_API,


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
          }
          catch (err) {
            console.log("erreur discount : ", err);
          }
        })
        .catch((error) =>
        {
          console.log("erreur : ", error.res.data.value);
        });
    },
};

</script>

<style scoped>

</style>