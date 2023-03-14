<template>
  <div class="containerProfile">
    <div class="fondBlanc">
      <div class="hautPage md:m-auto">
        <img src="" alt="Avatar" class="inline">
        <div class="justify-end flex flex-col ml-24 mt-12 items-start">
          <p class="text-black text-2xl">{{ store.firstname }} </p>
          <p class="text-black text-2xl underline">{{ store.emailConnected }}</p>
        </div>
      </div>
      <!-- A remplacer par les infos réelles de l'utilisateur depuis la base de données -->
      <NavbarUserProfilComponent v-bind:lang_fr="lang_fr"/>
      <div class="md:w-4/5 md:m-auto">
        <h3 class="colorText text-center  text-3xl sm:block sm:m-auto sm:w-1/3 sm:text-5xl">{{ this.lang_fr ? "Mes réservations" : "My booking" }}</h3>
        <div class="flex flex-wrap mt-8">
          <div v-for="reservation of userReservations" class="backgroundInputResa ml-8 mt-8 flex-initial p-1">
              <p class="text-black">Date de début : {{ reservation.dateStart }}</p>
              <p class="text-black">Date de fin : {{ reservation.dateEnd }}</p>
              <p class="text-black">Nombre de personne : {{ reservation.nb_Person }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import router from "../../router"
import NavbarUserProfilComponent from "@/components/NavbarUserProfilComponent.vue";
import {store} from "@/store";
import('../../assets/Style/main.css');
import('../../assets/Style/userProfile.css');
export default {
  components: {NavbarUserProfilComponent},

  props: ['lang_fr'],

  name: "UserProfileReservationComponent",

  data() {
    return {
      reservations: [],
      userReservations: [],
      invoices: [],
      userInvoices: [],
      //services: [],
      local: import.meta.env.VITE_URL_API,
      longueur: 0,
      modulo: 0,
      division: 0,

      store,
    }
  },


  created() {

    let urls = [this.local + '/v1/invoice', this.local + '/v1/reservation'];
    const requests = urls.map((url) => axios.get(url));
    axios.all(requests)
      .then((respoonse) => {
        for (let i = 0; i < respoonse.length; i++) {
          if (i === 0) {
            this.invoices = respoonse[i];
          }
          if (i === 1) {
            this.reservations = respoonse[i];
          }
        }
          try {
            for(let i = 0; i < this.invoices.data.length; i++)
            {
              if(this.invoices.data[i].fk_User == store.userId)
              {
                this.userInvoices.push(this.invoices.data[i].fk_Reservation);
              }
            }
            console.log("User facture : ", this.userInvoices);
            for(let j = 0; j < this.userInvoices.length; j++)
            {
              for(let k = 0; k < this.reservations.data.length; k++)
              {
                if(this.userInvoices[j] === this.reservations.data[k].id)
                {
                  this.userReservations.push(this.reservations.data[k]);
                }
              }
            }
          } catch (err) {
            console.log("erreur reservation : ", err);
          }
        })
        .catch((error) => {
          console.log("erreur : ", error);
        });
  },
};
</script>

<style scoped>

</style>