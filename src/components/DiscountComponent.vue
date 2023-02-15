<template>
  <div>
    <div>
      <p class="text-black border-4 border-red-500">Navbar du site</p>
    </div>
    <div>
      <h1 class="text-green-700 text-center  text-3xl sm:block sm:m-auto sm:w-1/3 sm:text-5xl">Nos Promotions</h1>
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
      <p class="text-green-700 text-center text-2xl"> {{discount.title_fr_discount}} </p>
      <br />
      <p class="text-center text-black block m-auto sm:block sm:m-auto sm:w-1/3"> {{discount.describe_fr_discount}} </p>
      <p class="text-center text-black block m-auto w-1/2 sm:block sm:m-auto sm:w-1/3"> {{discount.code_discount}} </p>
      <br />
      <button class="text-white text-xl bg-green-700 block m-auto w-1/4 rounded sm:text-3xl">Réservez</button>
      <br />
    </div>
    <div>
      <p class="text-black border-4 border-red-500">Footer du site</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import('../assets/Style/main.css');

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