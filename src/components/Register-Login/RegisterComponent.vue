<template>
  <aside class="sm:w-full">
    <div>
      <h3
        class="title_count text-white text-center text-4xl sm:text-4xl md:text-6xl"
      >
        {{ this.lang_fr ? "Créer un compte" : "Create an account" }}
      </h3>
    </div>
    <form
      class="form_resa w-full flex flex-col justify-center items-center"
      v-on:submit.prevent="register"
    >
      <input
        id="Pseudo"
        v-model="Pseudo"
        name="Pseudo"
        type="text"
        placeholder="Pseudo"
        class="border border-black w-1/2"
      />
      <br />
      <input
        id="email"
        v-model="email"
        name="email"
        type="email"
        placeholder=" E-mail"
        class="border border-black w-1/2"
      />
      <br />
      <input
        id="password"
        v-model="password"
        name="password"
        type="password"
        placeholder=" Mot de passe"
        class="border border-black w-1/2"
      />

      <br />
      <div class="fontButton">
        <button
          class="text-black pr-2 pl-2 text-xl backgroundButton block m-auto w-full rounded sm:text-3xl"
        >
          {{ this.lang_fr ? "Créer mon compte" : "Sign up" }}
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
    register() {
      axios
        .post("/register", {
          pseudo: this.Pseudo,
          email: this.email,
          password: this.password,
        })
        .then((result) => {
          console.log(result);
          router.push({ name: "home" });
        })
        .catch((erreur) => {
          console.log(erreur);
        });
    },
  },
};
</script>

<style scoped></style>
