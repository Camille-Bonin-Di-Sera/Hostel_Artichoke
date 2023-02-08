<template>
  <div>
    <h1>Nos Promotions</h1>
    <div v-for="discount of discounts">
      <p>Titre promo : </p><p> {{discount.title_fr_discount}}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default{
  data() {
    return {
      discounts: []
    };
  },

  created() {
    axios
        .get('http://localhost/api/v1/discounts')
        .then((response) =>
          {
            this.discounts = response.data;
          })
    }
};
</script>

<style scoped>

</style>