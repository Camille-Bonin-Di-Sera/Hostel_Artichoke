<template>

  <nav role="navigation">
    <div class="link hidden md:block">
      <div>
        <img src="../assets/Pictures/icon/phone-logo.png" alt="" class="inline md:mr-6 md:h-12">
        <img src="../assets/Pictures/icon/mail.png" alt="" class="inline md:mr-2 md:h-12">
      </div>
      <a class="md:hover:border-b-2 md:hover:border-green md:text-2xl" href="/">Reserver</a>
      <div>
      <img src="../assets/Pictures/icon/flag-fr.png" alt="" class="inline md:mr-6 md:h-12">
      <img src="../assets/Pictures/icon/flag-eng.png" alt="" class="inline md:mr-2 md:h-12">
    </div>
    </div>

    <div class="link_mobile flex flex-col ">
      <div class="img_arti">
        <img src="../assets/Pictures/icon/articho-logo.png" alt="" class="arti inline md:mr-6 md:h-12">
      </div>
      <a class=" slogan" href="/">Un Hotel en NatureS</a>
    </div>

    <div id="menuToggle">
      <input type="checkbox" />
      <span></span>
      <span></span>
      <span></span>
      <ul id="menu">
        <li><a class="hover:border-b-2 hover:border-green" href="/">Accueil</a></li>
        <li><a class="hover:border-b-2 hover:border-green" href="/discounts">Chambre</a></li>
        <li><a class="hover:border-b-2 hover:border-green" href="/WhoAreWe">Reserver</a></li>
        <li><a class="hover:border-b-2 hover:border-green" href="#">Nous contacter</a></li>
        <li>
          <button class="flag inline mr-6" v-on:click="changeFR"><img src="../assets/Pictures/icon/flag-fr.png" alt=""></button>
          <button class="flag inline mr-2" v-on:click="changeEN"><img src="../assets/Pictures/icon/flag-eng.png" alt=""></button>
        </li>
      </ul>
      
    </div>
  </nav>


</template>
<script>

import('../assets/Style/nav.css')
export  default {


  data() {
    return {
      auth: '',
      user: '',

      lang_fr: true,
    }
  },

  methods: {
    logout() {
      localStorage.removeItem('userToken')
    },

    changeFR()
    {
      this.lang_fr = true;
      console.log("français : ", this.lang_fr);
    },

    changeEN()
    {
      this.lang_fr = false;
      console.log("français : ", this.lang_fr);
    },
  },
}
</script>