<template>
  <div>
    <div>
      <p class="border-4 border-red-500">Navbar du site</p>
    </div>
    <div>
      <h1 class="text-green-700 text-center  text-3xl sm:block sm:m-auto sm:w-1/3 sm:text-5xl">Qui sommes Nous</h1>
    </div>
    <br />
    <div>
      <div>
        <img src="@/assets/Pictures/bedroom0.jpg" alt ="Image promo 1" class="block m-auto sm:block sm:m-auto sm:w-1/3"/>
      </div>
      <br />
      <p class="text-green-700 text-center text-2xl"> Notre Histoire </p>
      <br />
      <p class="text-center block m-auto sm:block sm:m-auto sm:w-1/3"> Nous sommes implémentés dans la région depuis les années 1970. Notre positionnement près de la forêt nous permet de proposer des séjours reposant afin de se relaxer et de se ressourcer en proposant des activités de toursime et de
      découverte de la nature aux alentours. Nous proposons également des services en fonction de la saison comme un SPA l'hiver et une piscine en été. La proximité avec des petits villages nous permet également de proposer
      des activité annexes tel que des pièces de théâtres ou divers spectacle locaux ainsi que des produits issus de notre belle région</p>

      <br />
    </div>
    <div>
      <p class="border-4 border-red-500">Footer du site</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import('../assets/Style/main.css');
export default {
  created() {
    axios
        .get('http://localhost/api/v1/WhoAreWe')
  },
};
</script>

<style scoped>

</style>