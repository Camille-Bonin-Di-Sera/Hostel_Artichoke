<template>
  <div class="container">
    <div>
      <p class="border-4 border-red-500">Navbar du site</p>
    </div>
    <div class="content">
      <h1 class="text-green-700 text-center text-2xl sm:text-5xl"> Mon compte </h1>
      <br />
    </div>
    <section class="sm:flex flex-column sm:flex-row bg-white w-4/5 m-auto">
      <article class="sm:w-1/2">
        <h3 class="text-green-700 text-center text-xl sm:text-3xl"> Créer un compte </h3>
        <form class="space-x-4 space-y-4">
          <input type="text" placeholder="Prénom" class="border border-black ml-4 w-1/2">
          <input type="text" placeholder="Nom" class="border border-black w-1/3">
          <br />
          <input type="text" placeholder="Pseudo" class="border border-black">
          <br />
          <input type="email" placeholder="E-mail" class="border border-black">
          <br />
          <input type="text" placeholder="Telephone" class="border border-black">
          <br />
          <input type="password" placeholder="Mot de passe" class="border border-black w-1/3">
          <input type="password" placeholder="Mot de passe" class="border border-black w-1/2">
          <br />
          <button type="submit" class="text-white text-lg bg-green-700 block m-auto sm:w-1/5 rounded sm:text-2xl"> Creer mon compte </button>
        </form>
        <br />
      </article>
      <div class="sm:absolute sm:border-green-700 sm:left-1/3 sm:ml-28 sm:mt-10 sm:h-2/5 sm:border-solid sm:border"></div>
      <article class="sm:float-left sm:w-1/2">
        <h3 class="text-green-700 text-center text-xl sm:text-3xl"> Me connecter </h3>
        <form class="space-x-4 space-y-4">
          <input type="email" placeholder="E-mail" class="border border-black ml-4">
          <br />
          <input type="password" placeholder="Mot de passe" class="border border-black">
          <br />
          <input type="checkbox"> <label class="text-green-600">Rester connecté</label>
          <br />
          <button type="submit" class="items-center text-white text-lg bg-green-700 block m-auto sm:w-1/5 rounded sm:text-2xl"> Se connecter </button>
        </form>
        <br />
      </article>
    </section>
    <div>
      <p class="border-4 border-red-500">Footer du site</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import('../assets/Style/main.css');
import('../assets/Style/Login.css');
export default {
  created() {
    axios
        .get('http://localhost/api/v1/Login')
  },
};
</script>

<style scoped>

</style>