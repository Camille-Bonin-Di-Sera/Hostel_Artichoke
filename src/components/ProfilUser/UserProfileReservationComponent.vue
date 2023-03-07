<template>
  <div class="containerProfile">
    <div class="fondBlanc">
      <div class="hautPage md:m-auto">
        <img src="" alt="Avatar" class="inline">
        <div class="justify-end flex flex-col ml-24 mt-12 items-start">
          <p class="text-black text-2xl">Prénom </p>
          <p class="text-black text-2xl underline">utilisateur@gmail.com</p>
        </div>
      </div>
      <!-- A remplacer par les infos réelles de l'utilisateur depuis la base de données -->
      <NavbarUserProfilComponent v-bind:lang_fr="lang_fr"/>
      <div class="md:w-4/5 md:m-auto">
        <h3 class="colorText text-center  text-3xl sm:block sm:m-auto sm:w-1/3 sm:text-5xl">{{ this.lang_fr ? "Mes réservations" : "My booking" }}</h3>
        <div class="flex flex-wrap mt-8">
          <div v-for="reservation of reservations" class="backgroundInputResa ml-8 mt-8 flex-initial p-1">
              <p class="text-black">Date de début : {{ reservation.dateStart }}</p>
              <p class="text-black">Date de fin : {{ reservation.dateEnd }}</p>
              <p class="text-black">Nombre de personne : {{ reservation.nb_Person }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import router from "../../router"
import NavbarUserProfilComponent from "@/components/NavbarUserProfilComponent.vue";

import('../../assets/Style/main.css');
import('../../assets/Style/userProfile.css');
export default {
  components: {NavbarUserProfilComponent},

  props: ['lang_fr'],

  name: "UserProfileReservationComponent",

  data() {
    return {
      reservations: [],
      //services: [],
      local: import.meta.env.VITE_URL_API,
      longueur: 0,
      modulo: 0,
      division: 0,
    }
  },

  created() {
    axios
        .get(this.local + '/v1/reservation')
        .then((res) => {
          try {
            this.reservations = res.data;
            console.log("données : ", res.data);

          } catch (err) {
            console.log("erreur reservation : ", err);
          }
        })
        .catch((error) => {
          console.log("erreur : ", error.res.data.value);
        });
  },
};
</script>

<style scoped>

</style>