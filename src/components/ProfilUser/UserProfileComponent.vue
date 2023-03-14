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
        <form class="w-full m-auto justify-center items-center flex flex-col md:items-start space-y-4 md:space-y-8 md:mt-16" v-on:submit.prevent="updating">
          <div class="userDesk">
            <label class="text-gray text-xs w-3/5 text-left pt-8"> {{ this.lang_fr ? "Votre Pseudo" : "Your pseudo" }}</label>
            <br />
            <input id="Pseudo" v-model="Pseudo" name="Pseudo" type="text" class="border-b border-green backgroundInput md:mt-8">
            <br />
            <label class="text-gray text-xs w-3/5 text-left pt-8 md:ml-48"> {{ this.lang_fr ? "Votre Nom" : "Your lastname" }}</label>
            <br />
            <input id="lastName" v-model="lastName" name="lastName" type="text" class="border-green border-b backgroundInput md:mt-8">
            <br />
          </div>
          <div class="userDesk">
            <label class="text-gray text-xs w-3/5 text-left pt-8"> {{ this.lang_fr ? "Votre Prénom" : "Your firstname" }}</label>
            <br />
            <input id="firstName" v-model="firstName" name="firstName" type="text" class="border-b border-green backgroundInput md:mt-8">
            <br />
            <label class="text-gray text-xs w-3/5 text-left pt-8 md:ml-48"> {{ this.lang_fr ? "Votre email" : "Your email" }}</label>
            <br />
            <input id="email" v-model="email" name="email" type="email" class="border-b border-green backgroundInput md:mt-8">
            <br />
          </div>
          <div class="userDesk">
            <label class="text-gray text-xs w-3/5 text-left pt-8"> {{ this.lang_fr ? "Ancien mot de passe" : "Old password" }}</label>
            <br />
            <input id="password" v-model="password" name="password" type="password" class="border-b border-green backgroundInput md:mt-8">
            <br />
            <label class="text-gray text-xs w-3/5 text-left pt-8 md:ml-48"> {{ this.lang_fr ? "Nouveau mot de passe" : "New password" }}</label>
            <br />
            <input id="password" v-model="password" name="password" type="password" class="border-b border-green backgroundInput md:mt-8">
            <br />
          </div>
          <div class="md:space-x-48">
            <br />
            <button class="p-4 fontButtonSave border-green-500 border text-lg md:text-green-500 md:font-bold"> {{ this.lang_fr ? "Sauvegarder changement" : "Save Change" }} </button>
            <button class="p-4 fontButtonSave border-red-500 border text-lg cancel"> {{ this.lang_fr ? "Annuler" : "Cancel" }} </button>
          </div>
        </form>
        <br />
        <div class="bg-black md:hidden">
          <button class="ml-4 p-4 fontButtonDeco text-xl">{{this.lang_fr ? "Se déconnecter" : "Log out" }}</button>
          <button class="ml-4 p-4 fontButtonSupp border border-red-600 text-white text-xl">{{this.lang_fr ? "Supprimer le compte" : "Delete Account" }}</button>
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

  name: "UserProfileComponent",

  data()
  {
    return {
      firstName: '',
      lastName: '',
      Pseudo: '',
      email: '',
      password: '',

      local: import.meta.env.VITE_URL_API,
      store,
    }
  },

  methods: {
    updating() {
      axios.put(this.local + '/v1/users',
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
            return erreur;
          })
    },
  },
};
</script>

<style scoped>

</style>