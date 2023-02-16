<template>

  <NavbarBurgerComponent/>
      <router-view/>
</template>
<script>
import NavbarBurgerComponent from "@/components/NavbarBurgerComponent.vue";

export default {
  components: {NavbarBurgerComponent}

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