<template>
  <div class="containerLogin">
    <div class="contentReservation colorText">
      <h3 class="text-center text-4xl sm:text-5xl"> Nos chambres </h3>
      <img src="../assets/Pictures/suite-chambre.jpg" alt="Suite">
      <br />
    </div>
    <form class="space-x-4 space-y-4 contentReservation" v-on:submit.prevent="">
      <h3 class="colorText text-center text-2xl sm:text-3xl"> Réservez </h3>
      <section class="sm:flex flex-column sm:flex-row bg-white m-auto">
        <article class="sm:w-1/2 space-y-4">
          <div class="border border-black ml-4 familyText text-xl">
            <label>Arrivée : </label><label>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  Départ : </label>
            <br />
            <input type="date">

            <img src="../assets/Pictures/Calendrier.png" alt="calendrier" class="w-1/6 inline">

            <input type="date">
            <img src="../assets/Pictures/Calendrier.png" alt="calendrier" class="w-1/6 inline">
          </div>
          <div class="ml-4 familyText text-xl">
            <img src="../assets/Pictures/promo_icon.png" alt="logo Promo" class="w-1/6 inline">
            <input type="text" placeholder=" Entrer votre code promotionnel" class="border border-black ml-8">
          </div>
          <div class="ml-4 familyText text-xl">
            <input type="text" placeholder=" Prénom" class="border border-black">
          </div>
          <div class="ml-4 familyText text-xl">
            <input type="password" placeholder=" Nom" class="border border-black">
          </div>
        </article>
        <article class="sm:w-1/2 space-y-4">
          <div class="border border-black ml-4 mr-4 familyText text-xl">
            <label>Nombre de personnes : </label>
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
            <img src="../assets/Pictures/personne.png" alt="personne" class="inline">
            <br />
            <label>Nombre de chambres : </label>
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
            <br />
            <label>Type de chambres : </label>
            <select>
              <option>Standard</option>
              <option>Suite</option>
              <option>Luxe</option>
            </select>
          </div>
          <div class="border border-black ml-4 mr-4 familyText text-xl">
            <label>Petit déjeuner</label>
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
            </select>
            <img src="../assets/Pictures/breakfast.png" alt="petit Dej" class="inline">
          </div>
          <input type="email" placeholder=" E-mail" class="ml-4 border border-black">
          <br />
          <input type="text" placeholder=" Téléphone" class="ml-4 border border-black">
        </article>
      </section>
      <section>
            <h3 class="colorText text-center text-2xl sm:text-3xl"> Coordonnées bancaires </h3>
            <br />
            <div class="border border-blac familyText text-xl mb-4">
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