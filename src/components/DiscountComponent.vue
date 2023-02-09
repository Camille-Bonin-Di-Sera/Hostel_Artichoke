<template>
  <div>
    <div>
      <h1 class="text-green-700 text-center  text-5xl">Nos Promotions</h1>
    </div>
    <br />
    <div v-for="discount of discounts">
      <img src="@/assets/Pictures/bedroom0.jpg" alt ="Superbe image" class="block m-auto w-1/3"/>
      <p class="text-green-700 text-center text-2xl"> {{discount.title_fr_discount}} </p>
      <p class="text-center block m-auto w-1/3"> {{discount.describe_fr_discount}} </p>
      <p class="text-center block m-auto w-1/3"> {{discount.code_discount}} </p>
      <button class="text-white text-4xl bg-green-700 block m-auto w-1/4 rounded">Réservez</button>
      <br />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import('../assets/Style/main.css');
//import testJs from "@/js/app.js";

export default{
  data() {
    return {
      discounts: []
    };
  },

  created() {
    axios
        .get('http://localhost/api/v1/discounts')
        .then((res) =>
        {
          this.discounts = res.data;
          //console.log(this.discounts);
        })
        .catch((error) =>
        {
          console.log(error.res.data.value);
        });
    },
};
</script>

<style scoped>

</style>