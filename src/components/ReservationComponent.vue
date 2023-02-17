<template>
  <div class="containerLogin">
    <div>
      <p class=" text-black border-4 border-red-500">Navbar du site</p>
    </div>
    <div class="contentReservation colorText">
      <h3 class="text-center text-4xl sm:text-5xl"> Nos chambres </h3>
      <img src="../assets/Pictures/suite-chambre.jpg" alt="Suite">
      <br />
    </div>
    <form class="space-x-4 space-y-4 contentReservation" v-on:submit.prevent="">
      <h3 class="colorText text-center text-2xl sm:text-3xl"> Réservez </h3>
      <section class="sm:flex flex-column sm:flex-row bg-white m-auto">
        <article class="sm:w-1/2 space-y-4">
          <div class="border border-black ml-4 w-1/2 familyText text-xl">
            <label>Arrivée</label>
            <label>17/02/2023</label>
            <img src="../assets/Pictures/Calendrier.png" alt="calendrier" class="w-1/3">
            <label>Départ</label>
            <label>17/02/2023</label>
            <img src="../assets/Pictures/Calendrier.png" alt="calendrier" class="w-1/3">
          </div>
          <div class="ml-4 w-1/2 familyText text-xl">
            <input type="text" placeholder=" Entrer votre code promotionnel" class="border border-black">
          </div>
          <div class="ml-4 w-1/2 familyText text-xl">
            <input type="text" placeholder=" Prénom" class="border border-black">
          </div>
          <div class="ml-4 w-1/2 familyText text-xl">
            <input type="password" placeholder=" Nom" class="border border-black w-1/2">
          </div>
        </article>
        <article class="sm:w-1/2 space-y-4">
          <div class="border border-black ml-4 w-1/2 familyText text-xl">
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
            <img src="../assets/Pictures/personne.png" alt="personne">
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
            <img src="../assets/Pictures/Lit.png" alt="chambre">
            <label>Type de chambres : </label>
            <select>
              <option>Standard</option>
              <option>Suite</option>
              <option>Luxe</option>
            </select>
          </div>
          <div class="border border-black ml-4 w-1/2 familyText text-xl">
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
            <img src="../assets/Pictures/breakfast.png" alt="personne">
          </div>
          <input type="email" placeholder=" E-mail" class="border border-black w-1/3">
          <br />
          <input type="text" placeholder=" Téléphone" class="border border-black w-1/3">
        </article>
      </section>
      <section>
            <h3 class="colorText text-center text-2xl sm:text-3xl"> Coordonnées bancaires </h3>
            <br />
            <div class="border border-blac familyText text-xl mb-4">
              <label>Payer avec : </label>
              <img src="" alt ="logo carte bancaire " class="inline">
              <img src="" alt =" logo paypal" class="inline">
              <div class="border border-black familyText space-y-4 space-x-4 text-xl">
                <input type="password" placeholder=" Numéro carte" class="ml-4 border border-black">
                <br />
                <input type="password" placeholder=" Expiration" class="border border-black">
                <br />
                <input type="password" placeholder=" Crypto" class="border border-black ">
                <div class="fontButton">
                  <button type="submit" class="text-white pr-2 pl-2 text-xl backgroundButton block m-auto rounded sm:text-3xl"> Réserver </button>
                  <button type="submit" class="text-white pr-2 pl-2 text-xl backgroundButton block m-auto rounded sm:text-3xl"> Paypal </button>
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