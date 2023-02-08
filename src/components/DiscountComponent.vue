<template>
  <div>
    <div>
      <h1>Nos Superbes Promotions</h1>
    </div>
    <div v-for="discount of discounts">
      <p> {{discount.title_fr_discount}} </p>
      <p> {{discount.describe_fr}} </p>
      <p> {{discount.code_discount}} </p>
      <button>Test</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import('../assets/Style/Home.css');
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