<template>
    <div class="containerReservation">
        <div class="contentReservation colorText ">
            <div class=" contentTitle flex justify-center">
                <div class=" flex items-center ">
                    <h3 class="text-4xl sm:text-5xl "> {{ this.lang_fr ? "Nos chambres" : "Our chambers" }}</h3>
                </div>
            </div>
            <div class="imageResa">

            </div>
            <div class=" contentTitle flex justify-center">
                <div class=" flex items-center ">
                    <h3 class="colorText text-center text-2xl sm:text-4xl"> {{ this.lang_fr ? "Réserver" : "Book" }} </h3>
                </div>
            </div>
            <form class="contentReservation container max-width" v-on:submit.prevent="">
                <section class="flex-col gap-4 ">
                    <div>
                        <div class="flex columns-2  justify-around familyText text-xl ">
                            <div class="">
                                <label>&nbsp; {{ this.lang_fr ? "Arrivée : " : "Arrival : " }}</label><br />
                                <input type="date">
                            </div>
                            <div class="">
                                <label> &nbsp; {{ this.lang_fr ? "Départ : " : "Departure : " }}</label> <br />
                                <input type="date">
                            </div>
                        </div>
                    </div>
                    <article class="flex-row gap-4 justify-items-center">

                        <div class="flex space-x-5 border border-black items-center">
                            <div class=" familyText text-xl">
                                <label>&nbsp; {{ this.lang_fr ? "Nombre de personnes : " : "Number of people : " }}</label>
                            </div>
                            <div class="justify-self-end">
                                <input type="number" class="ml-10" >



                            </div>
                            <div class="lg:grid-cols-2 justify-self-end">
                                <img src="../assets/Pictures/personne.png" alt="personne" class="inline">
                            </div>
                        </div>
                        <div class="flex space-x-5 border border-black items-center">
                            <div class=" familyText text-xl ">
                                <input type="text" placeholder=" Entrer votre code promotionnel" class="">
                            </div>
                            <div></div>
                            <div>
                                <img src="../assets/Pictures/promo_icon.png" alt="logo Promo" class="w-10 inline ml-8">
                            </div>
                        </div>
                    </article>
                    <article class="grid grid-rows-3 gap-4 justify-items-center">

                        <div class="border border-black familyText text-xl">
                            <label>&nbsp; {{ this.lang_fr ? "Nombre de chambres : " : "Number of chambers : " }}</label>
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
                        <div class="border border-black familyText text-xl">
                            <br />
                            <label>&nbsp; {{ this.lang_fr ? "Type de chambres : " : " Chamber Type : " }}</label>
                            <select>
                                <option>{{ this.lang_fr ? "Standard" : "Standard" }}</option>
                                <option>{{ this.lang_fr ? "Suite" : "Suite" }}</option>
                                <option>{{ this.lang_fr ? "Luxe" : "Luxurious" }}</option>
                            </select>
                        </div>
                    </article>
                </section>
                <section>
                    <h3 class="colorText text-center text-2xl sm:text-3xl"> {{ this.lang_fr ? "Options supplémentaires" : "Additional options" }} </h3>
                </section>
                <section>
                    <h3 class="colorText text-center text-2xl sm:text-3xl"> {{ this.lang_fr ? "Coordonnées bancaires" : "Bank details" }} </h3>
                    <br />
                    <div class="border border-black familyText text-xl mb-4">
                        <label>&nbsp;  {{ this.lang_fr ? "Payer avec : " : "Pay with " }}</label>
                        <img src="../assets/Pictures/paypal.png" alt ="logo carte bancaire " class="inline w-20 border border-black ml-20">
                        <img src="../assets/Pictures/visa-credit-card.png" alt =" logo paypal" class="inline w-20 border border-black ml-20">
                        <div class="border border-black familyText space-y-4 space-x-4 text-xl">
                            <input type="password" placeholder=" Numéro carte" class="ml-4 w-4/5 border border-black">
                            <br />
                            <input type="password" placeholder=" Expiration" class="border border-black">
                            <br />
                            <input type="password" placeholder=" Crypto" class="border border-black ">
                            <div class="fontButton">
                                <button type="submit" class="text-white pr-2 pl-2 text-xl backgroundButton block m-auto ml-96 rounded sm:text-3xl inline"> {{ this.lang_fr ? "Réserver" : "Book" }} </button>
                                <button type="submit" class="text-white pr-2 pl-2 text-xl backgroundButton block m-auto ml-96 rounded sm:text-3xl inline"> {{ this.lang_fr ? "Paypal " : "Paypal" }}</button>
                            </div>
                        </div>
                    </div>
                </section>
            </form>
        </div>

    </div>
</template>

<script>
import axios from "axios";
import router from "../router"
import('../assets/Style/main.css');
import('../assets/Style/Reservation.css');
export default {

    props: ['lang_fr'],

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