<template>

  <nav role="navigation">
    <div class="link">
      <div class="">
        <img src="../assets/Pictures/icon/phone-logo.png" alt="" class="inline md:mr-6 md:h-12 ">
        <img src="../assets/Pictures/icon/mail.png" alt="" class="inline md:mr-2 md:h-12">
      </div>
      <a class="md:hover:border-b-2 md:hover:border-green md:text-2xl" href="/Reservation">{{ this.lang_fr ? "Réserver" : "Book" }}</a>

      <div>
        <button v-on:click="$emit('changeFR')" class="languageButton"><img src="../assets/Pictures/icon/flag-fr.png" alt="" class="inline md:mr-6 md:h-12"></button>
        <button v-on:click="$emit('changeFR')" class="languageButton"><img src="../assets/Pictures/icon/flag-eng.png" alt="" class="inline md:mr-2 md:h-12"></button>
      </div>
        <div>
            <p>Bonjour {{ store.pseudoConnected}}</p>
        </div>
    </div>

    <div class="link_mobile flex flex-row-reverse md:hidden">
        <img src="../assets/Pictures/icon/articho-logo.png" alt="" class="arti inline md:mr-6 md:h-12">
         <a class=" slogan" href="/">{{ this.lang_fr ? "Un Hotel en Nature" : "A Hotel in Nature" }}</a>
    </div>

    <div id="menuToggle">
      <input type="checkbox" />
      <span></span>
      <span></span>
      <span></span>
      <ul id="menu">
        <li><a class="hover:border-b-2 hover:border-green" href="/">{{ this.lang_fr ? "Accueil" : "Home" }} </a></li>
        <!--<li><a class="hover:border-b-2 hover:border-green" href="/discounts">{{ this.lang_fr ? "Chambre" : "Room" }}</a></li>-->
        <li><a class="hover:border-b-2 hover:border-green" href="/discounts">{{ this.lang_fr ? "Promotion" : "Discount" }}</a></li>
        <li><a class="hover:border-b-2 hover:border-green" href="/Reservation">{{ this.lang_fr ? "Reserver" : "Book" }}</a></li>
        <li><a class="hover:border-b-2 hover:border-green" href="/Register-Login">{{ this.lang_fr ? "Me Connecter" : "Login" }}</a></li>
        <li><a class="hover:border-b-2 hover:border-green" href="/Contact">{{ this.lang_fr ? "Nous contacter" : "Contact us" }}</a></li>
        <li>
          <button class="flag inline mr-6" v-on:click="$emit('changeFR')"><img src="../assets/Pictures/icon/flag-fr.png" alt=""></button>
          <button class="flag inline mr-2" v-on:click="$emit('changeFR')"><img src="../assets/Pictures/icon/flag-eng.png" alt=""></button>
        </li>

      </ul>
      
    </div>
  </nav>


</template>
<script>
import {store} from "@/store";
import('../assets/Style/nav.css')
export  default {

  props: ['lang_fr'],

  data() {
    return {
      auth: '',
      user: '',
        store,

    }
  },

  methods: {
    logout() {
      //localStorage.removeItem('userToken')
    },
  },
}
</script>