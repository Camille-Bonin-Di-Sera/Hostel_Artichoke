<template>
  <MobileNavbarBurgerComponent
    v-bind:lang_fr="lang_fr"
    v-on:changeFR="changeFR"
  />
  <!-- Ici, le v-bind sert à passer la variable dans les composants enfants. Le v-on est pour appeler la bonne fonction -->
  <NavbarBurgerComponent v-bind:lang_fr="lang_fr" v-on:changeFR="changeFR" />
  <Popup v-bind:lang_fr="lang_fr" v-if="isNotOnReserver" />
  <router-view v-bind:lang_fr="lang_fr" />
  <footerComponent v-bind:lang_fr="lang_fr" v-if="isNotLogin" />
</template>
<script>
import NavbarBurgerComponent from "./components/NavbarBurgerComponent.vue";
import MobileNavbarBurgerComponent from "./components/MobileNavbarBurgerComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import Popup from "./components/PopUpComponent.vue";
import Router from "./router/index.ts";

export default {
  components: {
    FooterComponent,
    Popup,
    MobileNavbarBurgerComponent,
    NavbarBurgerComponent,
    Router,
  },

  /***
   * Paramètre pour changer la langue
   * @returns {{lang_fr: boolean}}
   */
  data() {
    return {
      lang_fr: true,
      isNotLogin: true,
      isNotOnReserver: true,
    };
  },

  /***
   * Fonction qui permet de dire si on affiche le texte en français ou en anglais
   */
  methods: {
    changeFR() {
      this.lang_fr = !this.lang_fr;
    },
  },

  mounted: function () {
    document.onreadystatechange = () => {
      if (this.$router.currentRoute.value.name == "Register-Login") {
        this.isNotLogin = false;
      }

      if (this.$router.currentRoute.value.name == "contact") {
        this.isNotLogin = false;
      }

      if (this.$router.currentRoute.value.name == "Reservation") {
        this.isNotOnReserver = false;
      }
    };
  },
};
</script>

<style>
@font-face {
  font-family: "Nature";
  src: local("Nature"), url("./Fonts/Nature.ttf") format("truetype");
}

@font-face {
  font-family: "AdventPro";
  src: local("AdventPro-VariableFont_wdth,wght"),
    url("./Fonts/AdventPro-VariableFont_wdth,wght.ttf") format("truetype");
}
</style>
