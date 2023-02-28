<template>
        <div class="v-line"></div>
        <aside class="sm:float-left sm:w-1/2 ">
          <h3 class="title-connect text-white text-center text-2xl sm:text-3xl"> Me connecter </h3>
          <form class="connection" v-on:submit.prevent="login">
            <input id="email" v-model="emailLog" name="email" type="email" placeholder=" E-mail" class="border border-black ml-4">
            <br />
            <div>
              <input id="password" v-model="passwordLog" name="password" type="password" placeholder=" Mot de passe" class="border border-black">
              <br />
              <input type="checkbox"> <label class="text-white fontButton text-xl">Rester connecté</label>
              <br />
            </div>
            <div class="fontButton">
              <button class="pr-2 pl-2 text-white text-xl backgroundButton block ml-20 md:ml-4 md:mt-20 sm:w-1/2 rounded sm:text-3xl"> Se connecter </button>
            </div>
          </form>
          <br />
        </aside>
</template>

<script>
import axios from "axios";
import router from "../../router"
import('../../assets/Style/Login.css');
export default {

  props: ['lang_fr'],
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

    login() {
      axios.post('/login',
          {
            email:this.emailLog,
            password:this.passwordLog,
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