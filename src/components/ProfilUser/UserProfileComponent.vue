<template>
  <div class="containerProfile">
      <h3 class="colorText text-center text-2xl sm:text-3xl"> {{lang_fr ? "Mes informations" : "My informations" }} </h3>
      <form class="space-x-4 space-y-4" v-on:submit.prevent="updating">
        <p class="text-gray-200 text-sm"> {{lang_fr ? "Votre Pseudo" : "Your pseudo" }}</p>
        <br />
        <input id="Pseudo" v-model="Pseudo" name="Pseudo" type="text" placeholder=" Pseudo" class="border border-black">
        <br />
        <label class="text-gray-200 text-sm"> {{lang_fr ? "Votre Nom" : "Your lastname" }}</label>
        <br />
        <input id="lastName" v-model="lastName" name="lastName" type="text" placeholder=" Nom" class="border border-black">
        <br />
        <label class="text-gray-200 text-sm"> {{lang_fr ? "Votre Prénom" : "Your firstname" }}</label>
        <br />
        <input id="firstName" v-model="firstName" name="firstName" type="text" placeholder=" Prénom" class="border border-black ml-4 ">
        <br />
        <label class="text-gray-200 text-sm"> {{lang_fr ? "Votre email" : "Your email" }}</label>
        <br />
        <input id="email" v-model="email" name="email" type="email" placeholder=" E-mail" class="border border-black">
        <br />
        <label class="text-gray-200 text-sm"> {{lang_fr ? "Votre mot de passe" : "Your password" }}</label>
        <br />
        <input id="password" v-model="password" name="password" type="password" placeholder=" Mot de passe" class="border border-black">
        <br />
        <div class="fontButtonSave">
          <button class="text-white pr-2 pl-2 text-xl backgroundButton block m-auto sm:w-1/2 rounded sm:text-3xl"> {{ this.lang_fr ? "Sauvegarder changement" : "Save Change" }} </button>
        </div>
      </form>

    <div class="bg-black fontButtonDeco">
      <button class="bg-red-600 text-white">{{this.lang_fr ? "Se déconnecter" : "Log out" }}</button>
    </div>
      <br />
      <br />
    <div class="bg-black fontButtonSupp">
      <button class="border-red-400 text-white">{{this.lang_fr ? "Supprimer le compte" : "Delete Account" }}</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import router from "../../router"
import('../../assets/Style/main.css');
import('../../assets/Style/userProfile.css');
export default {

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