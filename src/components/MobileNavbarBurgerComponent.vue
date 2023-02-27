<template>
  <div class="top_phone-flag">
    <a class="inline md:text-2xl" href="/">+ 4 66 99 99 99</a>
    <div class="picture">
      <button v-on:click="$emit('changeFR')"><img src="../assets/Pictures/icon/flag-fr.png" alt="" class="flag_white inline md:mr-6 md:h-12"></button>
      <button v-on:click="$emit('changeFR')"><img src="../assets/Pictures/icon/flag-eng.png" alt="" class="flag_white inline md:mr-2 md:h-12"></button>
    </div>
  </div>

</template>
<script>
import('../assets/Style/navmobile.css')
import NavbarBurgerComponent from '../components/NavbarBurgerComponent.vue'
export  default {
}
</script>