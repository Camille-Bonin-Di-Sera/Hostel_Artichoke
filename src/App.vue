<template>
<MobileNavbarBurgerComponent v-bind:lang_fr="lang_fr" v-on:changeFR="changeFR"/> <!-- Ici, le v-bind sert à passer la variable dans les composants enfants. Le v-on est pour appeler la bonne fonction -->
  <NavbarBurgerComponent  v-bind:lang_fr="lang_fr" v-on:changeFR="changeFR"/>
  <Popup v-bind:lang_fr="lang_fr"/>
      <router-view v-bind:lang_fr="lang_fr"/>
  <footerComponent v-bind:lang_fr="lang_fr"/>
</template>
<script>
import NavbarBurgerComponent from "./components/NavbarBurgerComponent.vue";
import MobileNavbarBurgerComponent from "./components/MobileNavbarBurgerComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import Popup from "./components/PopUpComponent.vue";


export default {
  components: {FooterComponent, Popup,MobileNavbarBurgerComponent, NavbarBurgerComponent},


  /***
   * Paramètre pour changer la langue
   * @returns {{lang_fr: boolean}}
   */
  data() {
    return {
      lang_fr:true,
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

}

</script>
<style>
@font-face {
  font-family: "Nature";
  src: local("Nature"),
  url("./Fonts/Nature.ttf") format("truetype");
}

@font-face {
  font-family: "AdventPro";
  src: local("AdventPro-VariableFont_wdth,wght"),
  url("./Fonts/AdventPro-VariableFont_wdth,wght.ttf") format("truetype");
}

</style>