<template>
  <div>
    <router-view />
  </div>
</template>
<script>
import axios from "axios";
import DiscountView from "@/views/DiscountView.vue";

export default {
  components: {DiscountView},


  data() {
    return {
      videos: []
    };
  },
  // Pulls posts when the component is created.
  created() {
    axios
        .get(`http://localhost/api/v1/videos`)
        .then((response) => {
          // JSON responses are automatically parsed.
          this.videos = response.data;
        })
  }
};

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