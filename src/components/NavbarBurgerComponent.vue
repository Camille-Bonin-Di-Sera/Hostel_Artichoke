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
        <div >
            <p v-if="store.token !== null||''||undefined "> {{ 'Bonjour ' + store.pseudoConnected}}
              <a href="/userProfile" ><img src="../assets/Pictures/icon/Profil.png" alt="Profil" /></a>
            </p>

            <p v-else></p>
        </div>
        <div>
          <button v-on:click="logout"><img src="../assets/Pictures/icon/Logout.png" alt="logout" /></button>
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
        <!--<li><a class="hover:border-b-2 hover:border-green" href="/discounts">{{ this.lang_fr ? "Promotions" : "Discounts" }}</a></li>-->
        <!--<li><a class="hover:border-b-2 hover:border-green" href="/discounts">{{ this.lang_fr ? "Chambre" : "Room" }}</a></li>-->
        <li><a class="hover:border-b-2 hover:border-green" href="/Reservation">{{ this.lang_fr ? "Reserver" : "Book" }}</a></li>
        <li><a class="hover:border-b-2 hover:border-green" href="/Register-Login">{{ this.lang_fr ? "Me Connecter" : "Login" }}</a></li>
        <li><a class="hover:border-b-2 hover:border-green" href="/Contact">{{ this.lang_fr ? "Nous contacter" : "Contact us" }}</a></li>
        <li>
          <button class="flag inline mr-6" v-on:click="$emit('changeFR')"><img src="../assets/Pictures/icon/flag-fr.png" alt=""></button>
          <button class="flag inline mr-2" v-on:click="$emit('changeFR')"><img src="../assets/Pictures/icon/flag-eng.png" alt=""></button>
        </li>
        <li>
          <button v-on:click="logout"><img src="../assets/Pictures/icon/Logout.png" alt="logout" /></button>
        </li>

      </ul>
      
    </div>
  </nav>


</template>
<script>
import {store} from "@/store";
import axios from "axios";
import router from "@/router";

import('../assets/Style/nav.css')

export  default {

  props: ['lang_fr'],

  data() {
    return {
      local: import.meta.env.VITE_URL_API,
      auth: '',
      user: {},
        store,

    }
  },

  methods: {
    logout() {
      axios.post(this.local + '/logout', {}, { headers: {'Authorization': `Bearer ${store.token}`}})
          .then((res) => {
            localStorage.removeItem('usertoken');
            localStorage.removeItem('userId');
            store.userId = null;
            store.token = null ;
            console.log(res);
            console.log("Deconnecté");
            router.push({name:'home'});
          })
          .catch((error) => {
            return error;
          })
    },
  },
}
</script>