<template>
  <script lang="ts">
    export default {
      props: ['lang_fr'],
    }

  </script>
  <div class="about">
    <RegisterLogin/>
  </div>
</template>

<style>

</style>
<script setup lang="ts">
import RegisterLogin from "@/components/RegisterLogin.vue";
</script>