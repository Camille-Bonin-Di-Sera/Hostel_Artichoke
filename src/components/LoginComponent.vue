<template>
  <div class="containerLogin">
    <div>
      <img src="../assets/Pictures/bedroom0.jpg" alt="image Login" class="w-4/5 m-auto"> <!-- Solution temporaire pour que la page prenne toute la place
      Il n'y est pas censé avoir d'image sur cette page !-->
    </div>
    <div class="contentLogin colorText">
      <h3 class="text-center text-4xl sm:text-5xl"> Mon compte </h3>
      <br />
    </div>
    <section class="sm:flex flex-column sm:flex-row bg-white w-4/5 m-auto">
      <article class="sm:w-1/2">
        <h3 class="colorText text-center text-2xl sm:text-3xl"> Créer un compte </h3>
        <form class="space-x-4 space-y-4" v-on:submit.prevent="register">
          <input id="firstName" v-model="firstName" name="firstName" type="text" placeholder=" Prénom" class="border border-black ml-4 w-1/2">
          <input id="lastName" v-model="lastName" name="lastName" type="text" placeholder=" Nom" class="border border-black w-1/3">
          <br />
          <input id="Pseudo" v-model="Pseudo" name="Pseudo" type="text" placeholder=" Pseudo" class="border border-black">
          <br />
          <input id="email" v-model="email" name="email" type="email" placeholder=" E-mail" class="border border-black">
          <br />
          <input id="phone" v-model="phone" name="phone" type="text" placeholder=" Telephone" class="border border-black">
          <br />
          <input id="password" v-model="password" name="password" type="password" placeholder=" Mot de passe" class="border border-black w-1/2">
          <input id="password" v-model="passwordConfirm" name="password" type="password" placeholder=" Mot de passe" class="border border-black w-1/3">
          <br />
          <div class="fontButton">
            <button class="text-white pr-2 pl-2 text-xl backgroundButton block m-auto sm:w-1/2 rounded sm:text-3xl"> Créer mon compte </button>
          </div>
        </form>
        <br />
      </article>
      <div class="v-line"></div>
      <article class="sm:float-left sm:w-1/2 ">
        <h3 class="colorText text-center text-2xl sm:text-3xl"> Me connecter </h3>
        <form class="space-x-4 space-y-6 md:items-center md:w-3/4 md:ml-44" v-on:submit.prevent="login">
          <input id="email" v-model="emailLog" name="email" type="email" placeholder=" E-mail" class="border border-black ml-4">
          <br />
          <input id="password" v-model="passwordLog" name="password" type="password" placeholder=" Mot de passe" class="border border-black">
          <br />
          <input type="checkbox"> <label class="colorText fontButton text-xl">Rester connecté</label>
          <br />
          <div class="fontButton">
            <button class="pr-2 pl-2 text-white text-xl backgroundButton block ml-20 md:ml-4 md:mt-20 sm:w-1/2 rounded sm:text-3xl"> Se connecter </button>
          </div>
        </form>
        <br />
      </article>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import router from "../router"
import('../assets/Style/main.css');
import('../assets/Style/Login.css');
export default {
  created() {
    /*axios
        .get('https://localhost/api/v1/Login')*/
  },


  data()
  {
    return {
      firstName: '',
      lastName: '',
      Pseudo: '',
      email: '',
      phone: '',
      password: '',
      passwordConfirm: '',
      emailLog: '',
      passwordLog: '',
    }
  },

  methods: {
    register() {
      axios.post('/v1/users',
          {
              firstname:this.firstName,
              lastname:this.lastName,
              pseudo:this.Pseudo,
              email:this.email,
              phone:this.phone,
              password:this.password,
          })
          .then((result) => {
            console.log(result)
            router.push({name:'home'})
          })
          .catch((erreur) =>
          {
            console.log(erreur)
          })
    },


    login() {
      axios.post('/v1/users',
          {
            emailLog:this.emailLog,
            passwordLog:this.passwordLog,
          })
          .then((result) => {
            localStorage.setItem('usertoken', result.data.token)
                console.log(result);
                this.emailLog = ''
                this.passwordLog = ''
                router.push({name: 'home'})
          })
          .catch((err) => {
            console.log(err)
          })
    },
  },

};
</script>

<style scoped>

</style>