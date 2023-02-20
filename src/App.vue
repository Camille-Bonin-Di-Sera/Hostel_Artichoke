<template>
<MobileNavbarBurgerComponent/>
  <NavbarBurgerComponent/>
  <Popup/>
      <router-view/>
  <footerComponent />
</template>
<script>
import NavbarBurgerComponent from "./components/NavbarBurgerComponent.vue";
import MobileNavbarBurgerComponent from "./components/MobileNavbarBurgerComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import Popup from "./components/PopUpComponent.vue";

export default {
  components: {FooterComponent, Popup,MobileNavbarBurgerComponent, NavbarBurgerComponent}

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