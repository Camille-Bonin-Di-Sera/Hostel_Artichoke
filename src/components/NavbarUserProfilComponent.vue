<template>
  <nav role="navigation">
    <div class="border-b border-green-700">
      <ul class="flex space-x-20 justify-center items-center">
        <li><a href="/userProfile" class="inline hover:underline active:colorTextProfile"><p>{{this.lang_fr ? "Mes informations" : "My Informations" }}</p></a></li>
        <li><a href="/userProfile/reservation" class="inline hover:underline active:colorTextProfile"><p>{{this.lang_fr ? "Mes Réservations" : "My booking" }}</p></a></li>
        <li><a href="/userProfile/invoices" class="inline hover:underline active:colorTextProfile"><p>{{this.lang_fr ? "Mes Factures" : "My Invoices" }}</p></a></li>
        <li><a href="/userProfile/bonus" class="inline hover:underline active:colorTextProfile"><p>{{this.lang_fr ? "Mes Bonus Fidélités" : "My Discounts Bonus"}}</p></a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
import('../assets/Style/userProfile.css');
export default {
  name: "NavbarUserProfilComponent",

  props: ['lang_fr'],
}
</script>

<style scoped>

</style>