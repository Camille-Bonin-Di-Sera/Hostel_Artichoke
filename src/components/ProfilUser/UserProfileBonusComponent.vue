<template>
  <div class="containerProfile">
    <div class="fondBlanc">
      <div class="hautPage md:m-auto">
        <img src="" alt="Avatar" class="inline">
        <div class="justify-end flex flex-col ml-24 mt-12 items-start">
          <p class="text-black text-2xl">Prénom </p>
          <p class="text-black text-2xl underline">utilisateur@gmail.com</p>
        </div>
        <!-- A remplacer par les infos réelles de l'utilisateur depuis la base de données -->
      </div>
      <NavbarUserProfilComponent v-bind:lang_fr="lang_fr" />
      <div class="md:w-4/5 md:m-auto">
        <h3 class="colorText text-center  text-3xl sm:block sm:m-auto sm:w-1/2 sm:text-5xl">{{ this.lang_fr ? "Mes bonus" : "My bonus" }}</h3>
      </div>
      <div>
        <div class="flex flex-wrap mb-8 space-x-4 justify-center">
          <div class="backgroundInputFact mt-8 p-1">
            <p class="text-black">Réservation cumulées : </p>
            <p class="text-black">Nombre de réservation restantes : </p>
          </div>
          <div class="backgroundInputFact mt-8">
            <p class="text-black">Réservation cumulées : </p>
            <p class="text-black">Nombre de réservation restantes : </p>
          </div>
        </div>
      </div>
      <div>
        <h3 class="colorText text-center  text-3xl sm:block sm:m-auto sm:w-1/2 sm:text-5xl">{{ this.lang_fr ? "Promotions actuelles " : "Current Promotions" }}</h3>
        <div class="flex flex-wrap">
          <div v-for="n in 6" class="backgroundInputFact ml-8 mt-8 flex-initial p-1">
            <p class="text-black">Réservation cumulées : </p>
            <p class="text-black">Nombre de réservation restantes : </p>
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

  name: "UserProfileBonusComponent",

  data()
  {
    return {
      firstName: '',
      lastName: '',
      Pseudo: '',
      email: '',
      password: '',
    }
  },

  methods: {
    updating() {
      axios.put('/v1/users',
          {
            firstname:this.firstName,
            lastname:this.lastName,
            pseudo:this.Pseudo,
            email:this.email,
            password:this.password,
          })
          .then((result) => {
            console.log(result)
            router.push({name:'userProfile'})
          })
          .catch((erreur) =>
          {
            console.log(erreur)
          })
    },
  },
};
</script>

<style scoped>

</style>