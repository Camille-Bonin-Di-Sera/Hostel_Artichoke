<template>
  <div>
    <div v-for="advantage of advantages">
      <p>Nom : </p><p>{{advantage.title_fr_adv}}</p>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      advantages: []
    };
  },
  // Pulls posts when the component is created.
  created() {
    axios
        .get(`http://localhost/api/v1/advantages`)
        .then((response) => {
          // JSON responses are automatically parsed.
          this.advantages = response.data;
        })
  }
};
</script>
<style scoped>
</style>