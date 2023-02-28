<template>
  <div class="containerLogin">
    <section class="other_content colorText bg-white w-4/5 m-auto">
      <h2 class="My_count text-center text-6xl text-white md:text-8xl"> Mon compte </h2>
      <article class="flex flex-col sm:flex-row mt-24 w-full h-full">
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