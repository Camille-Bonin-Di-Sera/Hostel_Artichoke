<template>
  <div class="containerLogin">
    <section class="other_content colorText sm:flex md:flex-column sm:flex-row bg-white w-4/5 m-auto">
      <h2 class="text-center text-4xl text-white sm:text-5xl"> Mon compte </h2>
      <article class="flex flex-row mt-24 w-full">
        <Register/>
        <Login/>
      </article>
    </section>
  </div>
</template>

<script>
import Register from "@/components/Count/RegisterComponent.vue"
import Login from "@/components/Count/LoginComponent.vue"
import('../assets/Style/Login.css');
export default {
  props: ['lang_fr'],

  components: {
    Register , Login,
  }
}

</script>

<style scoped>

</style>