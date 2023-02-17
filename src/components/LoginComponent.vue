<template>
  <div class="containerLogin">
    <div>
      <p class=" text-black border-4 border-red-500">Navbar du site</p>
    </div>
    <div class="contentLogin colorText">
      <h3 class="text-center text-4xl sm:text-5xl"> Mon compte </h3>
      <br />
    </div>
    <section class="sm:flex flex-column sm:flex-row bg-white w-4/5 m-auto">
      <article class="sm:w-1/2">
        <h3 class="colorText text-center text-2xl sm:text-3xl"> Créer un compte </h3>
        <form class="space-x-4 space-y-4" v-on:submit.prevent="register" action="http://localhost:5174/">
          <input type="text" placeholder=" Prénom" class="border border-black ml-4 w-1/2">
          <input type="text" placeholder=" Nom" class="border border-black w-1/3">
          <br />
          <input type="text" placeholder=" Pseudo" class="border border-black">
          <br />
          <input type="email" placeholder=" E-mail" class="border border-black">
          <br />
          <input type="text" placeholder=" Telephone" class="border border-black">
          <br />
          <input type="password" placeholder=" Mot de passe" class="border border-black w-1/2">
          <input type="password" placeholder=" Mot de passe" class="border border-black w-1/3">
          <br />
          <div class="fontButton">
            <button type="submit" class="text-white pr-2 pl-2 text-xl backgroundButton block m-auto sm:w-1/2 rounded sm:text-3xl"> Créer mon compte </button>
          </div>
        </form>
        <br />
      </article>
      <div class="v-line"></div>
      <article class="sm:float-left sm:w-1/2 ">
        <h3 class="colorText text-center text-2xl sm:text-3xl"> Me connecter </h3>
        <form class="space-x-4 space-y-6 md:items-center md:w-3/4 md:ml-44" v-on:submit.prevent="login">
          <input type="email" placeholder=" E-mail" class="border border-black ml-4">
          <br />
          <input type="password" placeholder=" Mot de passe" class="border border-black">
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
import EventBus from "../components/EventBus";
import router from "../router/index.ts"
import('../assets/Style/main.css');
import('../assets/Style/Login.css');
export default {
  created() {
    axios
        .get('http://localhost/api/v1/Login')
  },


  data()
  {
    return {
      firstName:'',
      lastName:'',
      pseudo:'',
      email:'',
      telephone:'',
      password:'',
    }
  },

  methods: {
    register() {
      axios.post('/api/v1/Users',
          {
              firstname:this.firstName,
              lastname:this.lastName,
              pseudo:this.pseudo,
              email:this.email,
              phone:this.telephone,
              password:this.password,
          })
          .then((result) => {
            console.log(result)
            router.push({name:'Login'})
          })
          .catch((erreur) =>
          {
            console.log(erreur)
          })
    },


    login() {
      axios.post('api/v1/Users',
          {
            email:this.email,
            password:this.password,
          })
          .then((result) => {
            localStorage.setItem('usertoken', result.data.token)
                this.email = ''
                this.password = ''
                router.push({name: 'Profile'})
          })
          .catch((err) => {
            console.log(err)
          })

      this.emitMethod()
    },

    emitMethod() {
      EventBus.$emit('logged-in', 'loggedin');
    },
  },

};
</script>

<style scoped>

</style>