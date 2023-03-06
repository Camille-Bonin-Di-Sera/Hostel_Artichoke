<template>
  <nav role="navigation">
    <div class="border-b border-green-700">
      <ul class="flex space-x-20 justify-center items-center">
        <li class="hover:underline active:colorTextProfile"><a href="/userProfile"><p>{{this.lang_fr ? "Mes informations" : "My Informations" }}</p></a></li>
        <li class="hover:underline active:colorTextProfile"><a href="/userProfile/reservation"><p>{{this.lang_fr ? "Mes Réservations" : "My booking" }}</p></a></li>
        <li class="hover:underline active:colorTextProfile"><a href="/userProfile/invoices"><p>{{this.lang_fr ? "Mes Factures" : "My Invoices" }}</p></a></li>
        <li class="hover:underline active:colorTextProfile"><a href="/userProfile/bonus"><p>{{this.lang_fr ? "Mes Bonus Fidélités" : "My Discounts Bonus"}}</p></a></li>
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