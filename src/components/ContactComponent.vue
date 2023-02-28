<template>
  <div class="Container_Contact">
    <section class="Content_Contact colorText bg-white w-4/5 m-auto">
      <h2 class="Contact_Us text-center text-6xl text-white md:text-8xl"> Nous contacter </h2>
      <article class="flex flex-col sm:flex-row mt-24 w-full h-full">
        <Regis v-bind:lang_fr="lang_fr"/>
        <Login v-bind:lang_fr="lang_fr"/>
      </article>
    </section>
  </div>

</template>

<script>
import('../assets/Style/Contact.css')

export default{
  props: ['lang_fr'],
}
</script>