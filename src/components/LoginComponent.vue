<template>
  <div class="containerLogin">
    <section class="other_content colorText sm:flex md:flex-column sm:flex-row bg-white w-4/5 m-auto">
      <h2 class="text-center text-4xl sm:text-5xl"> Mon compte </h2>
      <article class="flex flex-row mt-24 w-full">
        <aside class="sm:w-1/2">
          <div>
            <h3 class="title_count colorText text-center text-2xl sm:text-3xl"> Créer un compte </h3>
          </div>
          <form class="form_resa" v-on:submit.prevent="register">
            <input id="Pseudo" v-model="Pseudo" name="Pseudo" type="text" placeholder=" Pseudo" class="border border-black w-1/2">
            <br />
            <input id="email" v-model="email" name="email" type="email" placeholder=" E-mail" class="border border-black w-1/2">
            <br />
            <input id="password" v-model="password" name="password" type="password" placeholder=" Mot de passe" class="border border-black w-1/2">

            <br />
            <div class="fontButton">
              <button class="text-white pr-2 pl-2 text-xl backgroundButton block m-auto sm:w-1/2 rounded sm:text-3xl"> Créer mon compte </button>
            </div>
          </form>
          <br />
        </aside>
        <div class="v-line"></div>
        <aside class="sm:float-left sm:w-1/2 ">
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
        </aside>
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
      Pseudo: '',
      email: '',
      password: '',
      emailLog: '',
      passwordLog: '',
    }
  },

  methods: {
    register() {
      axios.post('/register',
          {
              pseudo:this.Pseudo,
              email:this.email,
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
      axios.post('/login',
          {
            emailLog:this.emailLog,
            passwordLog:this.passwordLog,
          })
    //       .then((result) => {
    //         localStorage.setItem('usertoken', result.data.token)
    //             console.log(result);
    //             this.emailLog = ''
    //             this.passwordLog = ''
    //             router.push({name: 'home'})
    //       })
    //       .catch((err) => {
    //         console.log(err)
    //       })
     },
  },

};
</script>

<style scoped>

</style>