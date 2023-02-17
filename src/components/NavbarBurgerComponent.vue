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
          <img src="../assets/Pictures/icon/flag-fr.png" alt="" class="flag inline mr-6">
          <img src="../assets/Pictures/icon/flag-eng.png" alt="" class="flag inline mr-2">
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
    }
  },

  methods: {
    logout() {
      localStorage.removeItem('userToken')
    }
  },
}
</script>