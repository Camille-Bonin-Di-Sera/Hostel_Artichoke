<template>
  <div class="containerAbout">
    <div>
      <p class="text-black border-4 border-red-500">Navbar du site</p>
    </div>
    <section class="contentAbout">
      <article class="image">

      </article>
      <article>
        <br />
          <h3 class="text-green-700 text-center text-2xl sm:text-5xl colorText"> Notre Histoire </h3>
          <br />
          <p class=" text-black text-justify pl-8 pr-8 block sm:block sm:text-center lg:ml-24 lg:mr-24"> Nous sommes implémentés dans la région depuis les années 1970. Notre positionnement près de la forêt nous permet de proposer des séjours reposant afin de se relaxer et se ressourcer en proposant des activités de toursime et de
          découverte de la nature aux alentours. Nous proposons également des services en fonction de la saison comme un SPA l'hiver et une piscine en été. La proximité avec des petits villages nous permet également de proposer
          des activités annexes tel que des pièces de théâtre ou divers spectacles locaux ainsi que des produits issus de notre belle région</p>
          <br />
      </article>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import('../assets/Style/main.css');
import('../assets/Style/About.css');
export default {
  created() {
    axios
        .get('http://localhost/api/v1/WhoAreWe')
  },
};



</script>

<style scoped>

</style>