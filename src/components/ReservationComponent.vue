<template>
  <div class="containerReservation">
    <div class="contentReservation colorText">
      <h3 class="text-center text-4xl sm:text-5xl"> {{ this.lang_fr ? "Nos chambres" : "Our chambers" }}</h3>
      <br/>

      <div class="imageResa">

      </div>
      <!--start formulaire-->
      <form class="contentReservation" v-on:submit.prevent="storeResa">
        <h3 class="colorText text-center text-2xl sm:text-4xl"> {{ this.lang_fr ? "Réserver" : "Book" }} </h3>
        <section class="sm:flex flex-column items-center justify-around sm:flex-row bg-white m-auto">
          <div class="ml-4 familyText text-xl">
            <label for="dateStart">{{ this.lang_fr ? "Arrivée : " : "Arrival : " }}
              <input type="datetime-local" id="dateStart" v-model="dateStart"></label>
          </div>
          <div class="ml-4 familyText text-xl">
            <label for="dateEnd"> {{ this.lang_fr ? "Départ : " : "Departure : " }}
              <input type="datetime-local" id="dateEnd" v-model="dateEnd" v-on:change="verifyDate"></label>
          </div>
        </section>
        <!-- section person chamber discount-->
        <section class="sm:flex flex-column sm:flex-row bg-white m-auto">
          <div class=" sm:w-1/2 space-y-4">
            <div class="inputResa border rounded-lg flex justify-between">
              <label for="PersonResaValue">&nbsp; {{
                  this.lang_fr ? "Nombre de personnes : " : "Number of people : "
                }}</label>
              <input class="NbPerson text-center"
                     type="number"
                     id="PersonResaValue"
                     v-model="nbPerson"
                     min="1"
                     max="100"
              >
              <img src="../assets/Pictures/icon/personne.png" alt="personne" class="ml-1.5  inline">
            </div>

            <div class="inputResa border rounded-lg flex justify-between">
              <input type="text" placeholder="Code promotionnel" v-model="codePromo">
              <img src="../assets/Pictures/icon/promo_icon.png" alt="logo Promo" class="logoDiscount inline ml-8">
            </div>
          </div>
          <div class="sm:w-1/2 space-y-4">
            <div class="inputResa border rounded-lg flex justify-between">
              <label for="ChamberResaValue" class=" NbChamber ">&nbsp;
                {{ this.lang_fr ? "Nombre de chambres : " : "Number of chambers : " }}</label>
              <input class="NbChamber text-center "
                     type="number"
                     id="ChamberResaValue"
                     v-model="nbChamber"
                     min="1"
                     max="20"
              >
              <img src="../assets/Pictures/icon/Lit.png" alt="chambre" class="logoBed inline">
            </div>
            <div class="inputResa border rounded-lg flex justify-between">
              <label for="selectedChamber">&nbsp; {{
                  this.lang_fr ? "Type de chambres : " : " Chamber Type : "
                }}</label>
              <select id="selectedChamber" v-model="selectedChamberType">
                <option>{{ this.lang_fr ? "Standard" : "Standard" }}</option>
                <option>{{ this.lang_fr ? "Suite" : "Suite" }}</option>
                <option>{{ this.lang_fr ? "Luxe" : "Luxurious" }}</option>
              </select>
            </div>
          </div>
        </section>
        <!--end section person chamber discount -->

        <div class="sm:flex flex-column sm:flex-row bg-white justify-center items-center h-[10vh] p-[2vh]">
          <h3 class="colorText text-center text-2xl sm:text-3xl">
            {{ this.lang_fr ? "Options supplémentaires" : "Additional options" }} </h3>
        </div>

        <!-- section choise Options -->
        <section class="md:flex-wrap columns-1 bg-white m-auto justify-center ">
          <div class="sm:flex flex-column sm:flex-row bg-white m-auto justify-center ">
            <div class=" sm:w-1/2 space-y-4">
              <div class="inputResa border rounded-lg flex justify-between">
                <label for="NbDayFullboard">&nbsp; {{
                    this.lang_fr ? "Pension complète : " : "Full board : "
                  }}</label>
                <div class="">
                  <input class="FullBoard text-center"
                         type="number"
                         id="NbDayFullboard"
                         v-model="nbDayFullboard"
                         min="0"
                         max="100"
                  >
                  <img src="../assets/Pictures/calendrier.png" alt="calendrier" class="logoOptions inline">
                  <input class="FullBoard text-center"
                         type="number"
                         id="NbPersonFullBoard"
                         v-model="nbPersonFullBoard"
                         min="0"
                         max="100"
                  >
                  <img src="../assets/Pictures/icon/personne.png" alt="Personne" class="logoOptions inline">
                </div>
              </div>

              <div class="inputResa border rounded-lg flex justify-between">
                <label for="NbBreakfast">&nbsp; {{ this.lang_fr ? "Petit Déjeuner : " : "Breakfast: " }}</label>
                <div class="">
                  <input class="FullBoard text-center"
                         type="number"
                         id="NbBreakfast"
                         v-model="nbBreakfast"
                         min="0"
                         max="100"
                  >
                  <img src="../assets/Pictures/calendrier.png" alt="calendrier" class="logoOptions inline">
                  <input class="FullBoard text-center"
                         type="number"
                         id="NbPersonBreakfast"
                         v-model="nbPersonBreakfast"
                         min="0"
                         max="100"
                  >
                  <img src="../assets/Pictures/icon/personne.png" alt="Personne" class="logoOptions inline">
                </div>
              </div>

              <div class="inputResa border rounded-lg flex justify-between">
                <label for="NbWeekTv">&nbsp; {{ this.lang_fr ? "Télévision: " : "Television : " }}</label>
                <div class="">
                  <input class="Breakfast text-center"
                         type="number"
                         id="NbWeekTv"
                         v-model="nbWeekTv"
                         min="0"
                         max="20"
                  >
                  <img src="../assets/Pictures/calendrier.png" alt="calendrier" class="logoOptions inline  mr-1">
                </div>
              </div>
            </div>

            <div class=" sm:w-1/2 space-y-4">
              <div class="inputResa border rounded-lg flex justify-between">
                <label for="NbDayHalfBoard">&nbsp; {{ this.lang_fr ? "Demi pension : " : "Half board : " }}</label>
                <div>
                  <input class="HalfBoard text-center"
                         type="number"
                         id="NbDayHalfBoard"
                         v-model="nbDayHalfBoard"
                         min="0"
                         max="100"
                  >
                  <img src="../assets/Pictures/calendrier.png" alt="calendrier" class="logoOptions inline">
                  <input class="HaldBoard text-center"
                         type="number"
                         id="NbPersonHalfBoard"
                         v-model="nbPersonHalfBoard"
                         min="0"
                         max="100"
                  >
                  <img src="../assets/Pictures/icon/personne.png" alt="Personne" class="logoOptions  inline">
                </div>
              </div>

              <div class="inputResa border rounded-lg flex justify-between">
                <label for="NbDayLaundryService">&nbsp;
                  {{ this.lang_fr ? "Service pressing: " : "Laundry service : " }}</label>
                <div>
                  <input class="laundryService text-center"
                         type="number"
                         id="NbDayLaundryService"
                         v-model="nbDayLaundryService"
                         min="0"
                         max="100"
                  >
                  <img src="../assets/Pictures/calendrier.png" alt="calendrier" class="logoOptions inline">
                  <input class="laundryService text-center"
                         type="number"
                         id="NbPersonLaundryService"
                         v-model="nbPersonlaundryService"
                         min="0"
                         max="100"
                  >
                  <img src="../assets/Pictures/icon/personne.png" alt="Personne" class="logoOptions  inline">
                </div>
              </div>
              <div class="inputResa border rounded-lg flex justify-between">
                <label for="checkWifi"> &nbsp; {{ this.lang_fr ? "WIFI: " : "WIFI : " }}</label>
                <div class="">
                  <input class="WIFI text-center mr-3"
                         type="checkbox"
                         id="checkWifi"
                         v-model="checkWifi"
                  >
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- end section choise Options -->

        <!--start payment -->
        <div class="sm:flex flex-column sm:flex-row bg-white justify-center items-center h-[10vh] p-[2vh]">
          <h3 class="colorText text-center text-2xl sm:text-3xl">
            {{ this.lang_fr ? "Choix du paiement" : "Choise of Payment" }} </h3>
        </div>
        <section class="payment md:flex-wrap columns-1 bg-white flex justify-around h-[10vh]  ">
          <div class="">
            <label for="paypal">&nbsp; {{ this.lang_fr ? "Payer avec : " : "Pay with " }}</label>
            <input type="checkbox" id="paypal" v-model="checkPaypal"/>
            <img src="../assets/Pictures/icon/paypal.png" alt="logo paypal "
                 class="inline w-20 border border-black ml-20">
          </div>
          <div>
            <label for="CB">{{ this.lang_fr ? "Payer avec : " : "Pay with " }}</label>
            <input type="checkbox" id="CB" v-model="checkCB"/>
            <img src="../assets/Pictures/credit-car.png" alt=" logo credit card"
                 class="inline w-20 border border-black ml-20">
          </div>
        </section>
        <!--end payment -->
        <div class="fontButton flex justify-around m-4">
          <div>
            <button type="submit"
                    class="text-white pr-2 pl-2 text-xl backgroundButtons block m-auto rounded sm:text-3xl inline">
              {{ this.lang_fr ? "Réserver" : "Book" }}
            </button>
          </div>
          <div>
            <button type="reset"
                    class="text-white pr-2 pl-2 text-xl backgroundButtons block m-auto  rounded sm:text-3xl inline">
              {{ this.lang_fr ? "Annuler" : "reset" }}
            </button>
          </div>
        </div>
      </form>
      <!--end formulaire -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
import router from "../router"
import {store} from "@/store"
import {ref} from "vue";

import('../assets/Style/main.css');
import('../assets/Style/Reservation.css');
export default {
  props: ['lang_fr'],
  data() {
    return {
      //Tableau pour les données à récupérer
      dataReservation: [],
      dataChambers: [],
      dataServices: [],
      dataTypeChambers: [],

      //URL pour les routes à atteindre
      local: import.meta.env.VITE_URL_API,
      //Données de la table réservation
      myDate: new Date(),
      myTomorrowDate: new Date(),
      dateStart: "",
      dateEnd: "",
      nbPerson: 1,
      nbChamber: 1,
      countNbServices: 0, // pour compter le nombre de service pris
      idReservation: 0, // Donnée à récupérer pendant le post
      //A récupérer de la table discount
      codePromo: "",
      selectedChamberType: "Standard",

      //Info pour les services
      nbDayFullboard: 0,
      nbPersonFullBoard: 0,
      nbBreakfast: 0,
      nbPersonBreakfast: 0,
      nbWeekTv: 0,
      nbDayHalfBoard: 0,
      nbPersonHalfBoard: 0,
      nbDayLaundryService: 0,
      nbPersonlaundryService: 0,
      checkWifi: false,

      //Les id pour les différents services
      idServicePensionComplete: 0,
      idServiceDemiPension: 0,
      idPetitDejeuner: 0,
      idServicePressing: 0,
      idServiceTele: 0,
      idServiceWifi: 0,
      idUser: 0,

      //Les informations pour la chambres
      idChambre: 0,
      idTypeChambre: 0,
      numeroChambre: 102,

      //Les variables pour les prix
      priceServicePensionComplete: 0,
      priceServiceDemiPension: 0,
      priceServicePtitDej: 0,
      priceServicePressing: 0,
      priceServiceTele: 0,
      priceServiceWifi: 0,
      priceChamber: 0,
      priceTotalChamber: 0,
      priceTotalResa: 0,

      //Le calcul de la date
      dateDifference: 0,
      durationStay: 0,

      //Le numero de la facture
      nbInvoice: 0,
      checkPaypal: false,
      checkCB: false,
      name: 'test',
      price: 120,
      numberPerson: 2,
      numberWeek: 1,

      store,
    }
  },
  created() {
    let urls = [this.local + '/v1/services', this.local + '/v1/chambers', this.local + '/v1/type_chambers'];
    const requests = urls.map((url) => axios.get(url));
    this.dateStart = this.myDate.toISOString().substring(0, 16);
    this.dateEnd = this.myTomorrowDate.setDate(this.myDate.getDate() + 1);
    this.dateEnd = this.myTomorrowDate.toISOString().substring(0, 16);
    axios.all(requests)
        .then((respoonse) => {
          for (let i = 0; i < respoonse.length; i++) {
            if (i === 0) {
              this.dataServices = respoonse[i];
            }
            if (i === 1) {
              this.dataChambers = respoonse[i];
            }
            if (i === 2) {
              this.dataTypeChambers = respoonse[i];
            }
          }
          console.log("Services id : ", this.dataServices.data[0].id); // Bonne méthode pour récup l'id
          console.log("Chambres : ", this.dataChambers);
          console.log("Chambres numero : ", this.dataChambers.data[0].fk_Chambers_TypeChamber);
          console.log("Type chambres : ", this.dataTypeChambers);
          this.idUser = parseInt(store.userId);
          console.log("id : ", this.idUser);
        })
  },
  methods: {
    storeResa() {
      //On compte le nombre de service pris par le client
      // on récupère les id correspondants
      // On calcule le prix du service, et ce, pour chaque service
      this.myDate = new Date(this.dateStart);
      this.myTomorrowDate = new Date(this.dateEnd);
      this.dateDifference = this.myTomorrowDate.getTime() - this.myDate.getTime();
      this.durationStay = Math.round(this.dateDifference / (1000 * 3600 * 24));
      if (this.nbDayHalfBoard > 0 || this.nbPersonHalfBoard > 0) {
        this.countNbServices++;
        this.idServiceDemiPension = this.dataServices.data[0].id;
        if (this.nbDayHalfBoard > 0) {
          this.priceServiceDemiPension = this.dataServices.data[0].price * this.nbDayHalfBoard
        }
        if (this.nbPersonHalfBoard > 0) {
          this.priceServiceDemiPension *= this.nbPersonHalfBoard;
        }
      }
      if (this.nbDayFullboard > 0 || this.nbPersonFullBoard > 0) {
        this.countNbServices++;
        this.idServicePensionComplete = this.dataServices.data[1].id;
        if (this.nbDayFullboard > 0) {
          this.priceServicePensionComplete = this.dataServices.data[1].price * this.nbDayFullboard
        }
        if (this.nbPersonFullBoard > 0) {
          this.priceServicePensionComplete *= this.nbPersonFullBoard;
        }
      }
      if (this.nbBreakfast > 0 || this.nbPersonBreakfast > 0) {
        this.countNbServices++;
        this.idPetitDejeuner = this.dataServices.data[2].id;
        if (this.nbBreakfast > 0) {
          this.priceServicePtitDej = this.dataServices.data[2].price * this.nbBreakfast;
        }
        if (this.nbPersonBreakfast > 0) {
          this.priceServicePtitDej *= this.nbPersonBreakfast;
        }
      }
      if (this.nbDayLaundryService > 0 || this.nbPersonlaundryService > 0) {
        this.countNbServices++;
        this.idServicePressing = this.dataServices.data[3].id;
        if (this.nbDayLaundryService > 0) {
          this.priceServicePressing = this.dataServices.data[3].price * this.nbDayLaundryService;
        }
        if (this.nbPersonlaundryService > 0) {
          this.priceServicePressing *= this.nbPersonlaundryService;
        }
      }
      if (this.nbWeekTv > 0) {
        this.countNbServices++;
        this.idServiceTele = this.dataServices.data[4].id;
        this.priceServiceTele = this.dataServices.data[4].price * this.nbWeekTv;
      }
      if (this.checkWifi) {
        this.countNbServices++;
        this.idServiceWifi = this.dataServices.data[5].id;
        this.priceServiceWifi = this.dataServices.data[5].price;
      }
      //On va chercher l'id de la chambre correspondant au numéro de chambre
      for (let i = 0; i < this.dataChambers.data.length; i++) {
        if (this.numeroChambre === this.dataChambers.data[i].number_chamber) {
          this.idChambre = this.dataChambers.data[i].id;
          this.idTypeChambre = this.dataChambers.data[i].fk_Chambers_TypeChamber;
        }
      }
      //On cherche le type de chambre correspondant à l'id récupérer récupérée, afin d'avoir son prix
      for (let j = 0; j < this.dataTypeChambers.data.length; j++) {
        if (this.idTypeChambre === this.dataTypeChambers.data[j].id) {
          this.priceChamber = this.dataTypeChambers.data[j].price;
        }
      }
      // On enregistre d'abord la réservation
      axios.post(this.local + '/v1/reservation', {
        dateStart: this.dateStart,
        dateEnd: this.dateEnd,
        nb_Person: this.nbPerson,
        nb_Chamber: this.nbChamber,
        nb_TotalServices: this.countNbServices,
      })
          .then((result) => {
            this.idReservation = result.data.id; // On récupère l'id de la réservation qu'on vient d'enregistrer, pour ensuite pouvoir l'enregistrer ensuite dans les tables nécessaire
            this.priceTotalChamber = this.priceChamber * this.nbPerson * this.nbChamber; // On calcule le prix total de la chambre selon le nombre de personne, le nombre de chambre et le nombre de nuit
            if (this.durationStay > 0) {
              this.priceTotalChamber *= this.durationStay;
            }
            this.priceTotalResa = this.priceTotalChamber + this.priceServiceDemiPension + this.priceServicePensionComplete + this.priceServicePtitDej
                + this.priceServicePressing + this.priceServiceTele + this.priceServiceWifi; // Calcul du prix total de la réservation
            this.StoreLinkTable(); // On appelle la fonction qui va remplir les tables de liaison, une fois qu'on a toute les données.
            router.push({name: 'home'});
          })
          .catch((erreur) => {
            console.log(erreur);
          })
    },
    StoreLinkTable() {
      //Puis on insert les données dans la table ReservationService
      if (this.idServiceDemiPension !== 0) {
        axios.post(this.local + '/v1/reservationService', {
          fk_Reservations: this.idReservation,
          fk_Services: this.idServiceDemiPension,
          numberDays: this.nbDayHalfBoard,
          numberPerson: this.nbPersonHalfBoard,
        })
            .then((result) => {
            })
            .catch((error) => {
              console.log(error);
            })
      }
      if (this.idServicePensionComplete !== 0) {
        axios.post(this.local + '/v1/reservationService', {
          fk_Reservations: this.idReservation,
          fk_Services: this.idServicePensionComplete,
          numberDays: this.nbDayFullboard,
          numberPerson: this.nbPersonFullBoard,
        })
            .then((result) => {
            })
            .catch((error) => {
              console.log(error);
            })
      }
      if (this.idPetitDejeuner !== 0) {
        axios.post(this.local + '/v1/reservationService', {
          fk_Reservations: this.idReservation,
          fk_Services: this.idPetitDejeuner,
          numberDays: this.nbBreakfast,
          numberPerson: this.nbPersonBreakfast,
        })
            .then((result) => {
            })
            .catch((error) => {
              console.log(error);
            })
      }
      if (this.idServicePressing !== 0) {
        axios.post(this.local + '/v1/reservationService', {
          fk_Reservations: this.idReservation,
          fk_Services: this.idServicePressing,
          numberDays: this.nbDayLaundryService,
          numberPerson: this.nbPersonlaundryService,
        })
            .then((result) => {
            })
            .catch((error) => {
              console.log(error);
            })
      }
      if (this.idServiceTele !== 0) {
        axios.post(this.local + '/v1/reservationService', {
          fk_Reservations: this.idReservation,
          fk_Services: this.idServiceTele,
          numberWeek: this.nbWeekTv,
        })
            .then((result) => {
            })
            .catch((error) => {
              console.log(error);
            })
      }
      if (this.idServiceWifi !== 0) {
        axios.post(this.local + '/v1/reservationService', {
          fk_Reservations: this.idReservation,
          fk_Services: this.idServiceWifi,
        })
            .then((result) => {
            })
            .catch((error) => {
              console.log(error);
            })
      }
      //On insert les données dans la table chambreReservation
      axios.post(this.local + '/v1/reservationChamber', {
        fk_Reservations: this.idReservation,
        fk_Chambers: this.idChambre,
      })
          .then((resultat) => {
          })
          .catch((error) => {
            console.log("chambre : ", error);
          })
      //On insert les données dans la table facture
      axios.post(this.local + '/v1/invoice', {
        price: this.priceTotalResa,
        number_invoices: this.nbInvoice++,
        fk_Reservation: this.idReservation,
        fk_User: this.idUser,
      })
          .then((resultat) => {
            console.log("Facture : ", resultat);
          })
          .catch((error) => {
            console.log("Facture : ", error);
          })
    },
    //On vérifie que la date de fin n'est pas inférieure à celle de début
    verifyDate() {
      let myVerifyDate = new Date(this.dateStart);
      let myVerifyTomorrowDate = new Date(this.dateEnd);
      if (myVerifyTomorrowDate.getTime() <= myVerifyDate.getTime()) {
        this.dateEnd = this.myTomorrowDate.setDate(this.myDate.getDate() + 1);
        this.dateEnd = this.myTomorrowDate.toISOString().substring(0, 16);
      }
    }
  },
}
</script>

<style scoped>

</style>