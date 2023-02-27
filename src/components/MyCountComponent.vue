<template>
  <div class="containerLogin">
    <section class="other_content colorText sm:flex md:flex-column sm:flex-row bg-white w-4/5 m-auto">
      <h2 class="text-center text-4xl text-white sm:text-5xl"> Mon compte </h2>
      <article class="flex flex-row mt-24 w-full">
        <Regis v-bind:lang_fr="lang_fr"/>
        <Login v-bind:lang_fr="lang_fr"/>
      </article>
    </section>
  </div>
</template>

<script>
import Regis from "@/components/Count/RegisterComponent.vue"
import Login from "@/components/Count/LoginComponent.vue"
import('../assets/Style/Login.css');
export default {
  props: ['lang_fr'],

  components: {
    Regis , Login,
  }
}

</script>

<style scoped>

</style>