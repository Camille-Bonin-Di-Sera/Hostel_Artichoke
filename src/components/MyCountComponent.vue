<template>
  <div class="containerLogin">
    <section class="other_content colorText flex flex-column  bg-white w-4/5 m-auto">
      <h2 class="My_Count text-center text-6xl md:text-4xl text-white"> Mon compte </h2>
      <article class="flex  sm:flex-col md:flex-row mt-24 w-full">
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
  components: {
    Register , Login,
  }
}

</script>

<style scoped>

</style>