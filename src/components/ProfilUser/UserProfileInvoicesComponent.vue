<template>
  <div class="containerProfile">
    <div class="fondBlanc">
      <div class="hautPage md:m-auto">
        <img src="" alt="Avatar" class="inline">
        <div class="justify-end flex flex-col ml-24 mt-12 items-start">
          <p class="text-black text-2xl">{{ store.firstname }} </p>
          <p class="text-black text-2xl underline">{{ store.emailConnected }}</p>
        </div>
        <!-- A remplacer par les infos réelles de l'utilisateur depuis la base de données -->
      </div>
      <NavbarUserProfilComponent v-bind:lang_fr="lang_fr" />
      <div class="md:w-4/5 md:m-auto">
        <h3 class="colorText text-center  text-3xl sm:block sm:m-auto sm:w-1/3 sm:text-5xl">{{ this.lang_fr ? "Mes Factures" : "My Invoices" }}</h3>
        <div class="flex flex-col">
          <div v-for="n in 10" class="backgroundInputFact mt-8 flex justify-between">
            <p class="text-black inline pl-2">Facture : Date facture</p> <!-- A remplacer par les données de la table facture -->
            <button><a href="iconeDownload.png" download="facture"><img src="../../assets/Pictures/icon/iconeDownload.png" alt="download" class="w-1/2 inline"></a></button>
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
import {store} from "@/store";
import('../../assets/Style/main.css');
import('../../assets/Style/userProfile.css');
export default {
  components: {NavbarUserProfilComponent},

  props: ['lang_fr'],

  name: "UserProfileInvoicesComponent",

  data()
  {
    return {
      invoices: [],
      local: import.meta.env.VITE_URL_API,
      store,
    }
  },

  methods: {
    updating() {
      axios.put(this.local + '/v1/invoice',
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















//v-for="invoice of invoices" // A remettre pour tester les données dans la table facture sur le profil utilisateur

</script>

<style scoped>

</style>