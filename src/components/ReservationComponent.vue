<template>
  <div class="containerReservation">
    <div class="contentReservation colorText">
      <h3 class="text-center text-4xl sm:text-5xl"> Nos chambres </h3>
      <br />
    </div>
    <div class="imageResa">

    </div>
    <form class="space-x-4 space-y-4 contentReservation" v-on:submit.prevent="">
      <h3 class="colorText text-center text-2xl sm:text-4xl"> Réserver </h3>
      <section class="sm:flex flex-column sm:flex-row bg-white m-auto">
        <article class="sm:w-1/2 space-y-4">
          <div class="ml-4 familyText text-xl">
            <label>&nbsp; Arrivée : </label><br />
            <input type="date">
          </div>
          <div class="bg-gray-800 border border-black ml-4 mr-4 familyText text-xl">
            <label>&nbsp; Nombre de personnes : </label>
            <select class="ml-20">
              <option>0</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
            </select>
            <img src="../assets/Pictures/personne.png" alt="personne" class="inline">
            <br />
          </div>
          <div class="ml-4 familyText text-xl border border-black">
            <input type="text" placeholder=" Entrer votre code promotionnel" class="">
            <img src="../assets/Pictures/promo_icon.png" alt="logo Promo" class="w-10 inline ml-8">
          </div>
        </article>
        <article class="sm:w-1/2 space-y-4">
          <div class="ml-4 familyText text-xl">
            <label> &nbsp; Départ : </label> <br />
            <input type="date">
          </div>
          <div class="border border-black ml-4 familyText text-xl">
            <label>&nbsp; Nombre de chambres : </label>
            <select>
              <option>0</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
            </select>
            <img src="../assets/Pictures/Lit.png" alt="chambre" class="inline">
          </div>
          <div class="border border-black ml-4 familyText text-xl">
            <br />
            <label>&nbsp; Type de chambres : </label>
            <select>
              <option>Standard</option>
              <option>Suite</option>
              <option>Luxe</option>
            </select>
          </div>
        </article>
      </section>
      <section>
        <h3 class="colorText text-center text-2xl sm:text-3xl"> Options Supplémentaire </h3>
      </section>
      <section>
            <h3 class="colorText text-center text-2xl sm:text-3xl"> Coordonnées bancaires </h3>
            <br />
            <div class="border border-black familyText text-xl mb-4">
              <label>&nbsp;  Payer avec : </label>
              <img src="../assets/Pictures/paypal.png" alt ="logo carte bancaire " class="inline w-20 border border-black ml-20">
              <img src="../assets/Pictures/visa-credit-card.png" alt =" logo paypal" class="inline w-20 border border-black ml-20">
              <div class="border border-black familyText space-y-4 space-x-4 text-xl">
                <input type="password" placeholder=" Numéro carte" class="ml-4 w-4/5 border border-black">
                <br />
                <input type="password" placeholder=" Expiration" class="border border-black">
                <br />
                <input type="password" placeholder=" Crypto" class="border border-black ">
                <div class="fontButton">
                  <button type="submit" class="text-white pr-2 pl-2 text-xl backgroundButton block m-auto ml-96 rounded sm:text-3xl inline"> Réserver </button>
                  <button type="submit" class="text-white pr-2 pl-2 text-xl backgroundButton block m-auto ml-96 rounded sm:text-3xl inline"> Paypal </button>
                </div>
              </div>
            </div>
          </section>
        </form>
  </div>
</template>

<script>
import axios from "axios";
import router from "../router"
import('../assets/Style/main.css');
import('../assets/Style/Reservation.css');
export default {

  created() {
    axios
        .get('http://localhost/api/v1/Reservation')


    //let now = new Date();
  },


  /*data()
  {
    return {
      firstName:'',
      lastName:'',
      pseudo:'',
      email:'',
      telephone:'',
      password:'',
    }
  },

  methods: {
    register() {
      axios.post('/api/v1/Users',
          {
            firstname:this.firstName,
            lastname:this.lastName,
            pseudo:this.pseudo,
            email:this.email,
            phone:this.telephone,
            password:this.password,
          })
          .then((result) => {
            console.log(result)
            router.push({name:'home'})
          })
          .catch((erreur) =>
          {
            console.log(erreur)
          })
    },


    login() {
      axios.post('api/v1/Users',
          {
            email:this.email,
            password:this.password,
          })
          .then((result) => {
            localStorage.setItem('usertoken', result.data.token)
            this.email = ''
            this.password = ''
            router.push({name: 'home'})
          })
          .catch((err) => {
            console.log(err)
          })
    },
  },*/

};
</script>

<style scoped>

</style>