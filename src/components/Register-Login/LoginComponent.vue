<template>
  <div class="v-line"></div>
  <aside
    class="float-left flex flex-col justify-center items-center w-full h-max"
  >
    <h3 class="title-connect text-white text-center text-4xl md:text-6xl">
      {{ this.lang_fr ? "Me connecter" : "Log in" }}
    </h3>
    <form class="connection md:mt-8 mt-4" v-on:submit.prevent="login">
      <input
        id="email"
        v-model="emailLog"
        name="email"
        type="email"
        placeholder=" E-mail"
        class="border border-black md:w-2/5"
      />
      <br />
      <input
        id="password"
        v-model="passwordLog"
        name="password"
        type="password"
        placeholder=" Mot de passe"
        class="border border-black md:w-2/5"
      />
      <br />
      <div class="mb-4">
        <input type="checkbox" />
        <label class="text-white fontButton text-xl">{{
          this.lang_fr ? "Rester connecté" : "Stay connect"
        }}</label>
        <br />
      </div>
      <div class="fontButton">
        <button
          class="text-black pr-2 pl-2 text-xl backgroundButton block m-auto w-full rounded sm:text-3xl"
        >
          {{ this.lang_fr ? "Se connecter" : "Sign in" }}
        </button>
      </div>
    </form>
    <br />
  </aside>
</template>

<script>
import axios from "axios";
import router from "../../router";
import("../../assets/Style/Login.css");
export default {
  props: ["lang_fr"],
  created() {
    /*axios
        .get('https://localhost/api/v1/Login')*/
  },

  data() {
    return {
      Pseudo: "",
      email: "",
      password: "",
      emailLog: "",
      passwordLog: "",
    };
  },

  methods: {
    login() {
      axios
        .post("/login", {
          email: this.emailLog,
          password: this.passwordLog,
        })
        .then((result) => {
          localStorage.setItem("usertoken", result.data.token);
          console.log(result);
          this.emailLog = "";
          this.passwordLog = "";
          router.push({ name: "home" });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped></style>
