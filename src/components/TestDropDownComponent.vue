<template>
  <div id="app" class="bg-blue-400">
    <input type="date" v-model="date">
  </div>
</template>

<script>
import axios from "axios";
import router from "@/router";
import {store} from "@/store";
import('../assets/Style/main.css');
export default {
  data() {
    return {
      date: new Date().toISOString().substr(0, 10) // 05/09/2019
    }
  },

  props: ['lang_fr'],


};
console.log(store);
</script>

<style scoped>

</style>



