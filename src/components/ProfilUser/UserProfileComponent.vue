<template>
  <div class="containerProfile">
    <div class="hautPage">
          <img src="" alt="Avatar" class="inline">
        <div class="justify-end flex flex-col ml-24 mt-12 items-start">
          <p class="text-black text-2xl">Prénom </p>
          <p class="text-black text-2xl underline">utilisateur@gmail.com</p>
        </div>
      <!--A remplacer par les infos réelles de l'utilisateur depuis la base de données -->
    </div>
    <div>
      <h3 class="colorText text-center text-2xl sm:text-3xl"> {{lang_fr ? "Mes informations" : "My informations" }} </h3>
      <form class="w-full m-auto justify-center items-center flex flex-col" v-on:submit.prevent="updating">
        <label class="text-gray text-xs w-3/5 text-left pt-8"> {{lang_fr ? "Votre Pseudo" : "Your pseudo" }}</label>
        <br />
        <input id="Pseudo" v-model="Pseudo" name="Pseudo" type="text" class="border-b border-green">
        <br />
        <label class="text-gray text-xs w-3/5 text-left pt-8"> {{lang_fr ? "Votre Nom" : "Your lastname" }}</label>
        <br />
        <input id="lastName" v-model="lastName" name="lastName" type="text" class="border-green border-b">
        <br />
        <label class="text-gray text-xs w-3/5 text-left pt-8"> {{lang_fr ? "Votre Prénom" : "Your firstname" }}</label>
        <br />
        <input id="firstName" v-model="firstName" name="firstName" type="text" class="border-b border-green">
        <br />
        <label class="text-gray text-xs w-3/5 text-left pt-8"> {{lang_fr ? "Votre email" : "Your email" }}</label>
        <br />
        <input id="email" v-model="email" name="email" type="email" class="border-b border-green">
        <br />
        <label class="text-gray text-xs w-3/5 text-left pt-8"> {{lang_fr ? "Votre mot de passe" : "Your password" }}</label>
        <br />
        <input id="password" v-model="password" name="password" type="password" class="border-b border-green">
        <br />
        <div>
          <br />
          <button class="p-4 fontButtonSave border-green-500 border text-lg"> {{ this.lang_fr ? "Sauvegarder changement" : "Save Change" }} </button>
        </div>
      </form>
      <br />
      <div class="bg-black">
        <button class="ml-4 p-4 fontButtonDeco text-xl">{{this.lang_fr ? "Se déconnecter" : "Log out" }}</button>
        <button class="ml-4 p-4 fontButtonSupp border border-red-600 text-white text-xl">{{this.lang_fr ? "Supprimer le compte" : "Delete Account" }}</button>
      </div>
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