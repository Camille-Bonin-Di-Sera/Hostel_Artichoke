<template>
  <div>
    <div>
      <h1>Nos Promotions</h1>
    </div>
    <div v-for="discount of discounts">
      <img src="./assets/image/bedroom.jpg" alt ="Superbe image"/>
      <p class="titre"> {{discount.title_fr_discount}} </p>
      <p class="text-purple-600 debug"> {{discount.describe_fr}} </p>
      <p> {{discount.code_discount}} </p>
      <button>Réservez</button>
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
          console.log(error.res.data);
        });
    },
};
</script>

<style scoped>

h1 {
  color: forestgreen;
}

p.titre{
  color:forestgreen;
}

.debug{
  border:red solid 2px;
}

button{
  color:white;
  background-color: forestgreen;
  border-radius: 0.25rem;
  margin-left:0.25rem;
}

</style>