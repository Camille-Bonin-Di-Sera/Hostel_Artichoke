<template>
  <div>
    <section class="md:flex md:flex-row">
      <section class="flex flex-column bg-black pt-8 md:w-1/3">
        <article class="w-1/2 md:w-1/2">
          <h1 class="text-white text-left ml-4 md:ml-12 text-5xl md:text-8xl">
            L'artichaut
          </h1>
          <img
            src="../assets/Pictures/Etoile.png"
            alt="Etoile"
            class="ml-4 md:ml-8 inline"
          />
          <img
            src="../assets/Pictures/Etoile.png"
            alt="Etoile"
            class="ml-1 md:ml-8 inline"
          />
          <img
            src="../assets/Pictures/Etoile.png"
            alt="Etoile"
            class="ml-1 md:ml-8 inline"
          />
          <br />
          <br />
        </article>
        <article class="w-1/2 md:w-1/2">
          <img
            src="../assets/Pictures/articho-logo.png"
            alt="Logo du site"
            class="md:w-1/3 ml-12 md:ml-20 w-1/2"
          />
          <br />
        </article>
      </section>
      <div class="v-line-footer"></div>
      <section class="flex flex-column bg-black md:w-1/3">
        <article class="w-2/5 md:w-1/2">
          <h3 class="text-white text-left ml-4 md:ml-20 text-2xl sm:text-3xl">
            Menu
          </h3>
          <br />
          <ul class="ml-2 pl-2 md:ml-20">
            <li class="text-white">
              <a href="http://localhost:5174"
                ><p class="text-left hover:underline">
                  {{ this.lang_fr ? "Accueil" : "Home" }}
                </p></a
              >
            </li>
            <li class="text-white">
              <a href="http://localhost:5174/Reservation"
                ><p class="text-left hover:underline">
                  {{ this.lang_fr ? "Réservation" : "Booking" }}
                </p></a
              >
            </li>
            <li class="text-white">
              <a href="http://localhost:5174/WhoAreWe"
                ><p class="text-left hover:underline">
                  {{ this.lang_fr ? "Qui Sommes Nous" : "About us" }}
                </p></a
              >
            </li>
            <li class="text-white">
              <a href="http://localhost:5174/mentionsLegales"
                ><p class="text-left hover:underline">
                  {{ this.lang_fr ? "Mentions Légales" : "legal notice" }}
                </p></a
              >
            </li>
          </ul>
          <br />
        </article>
        <article class="w-3/5 md:w-1/2">
          <h3
            class="text-white md:text-left ml-4 md:ml-12 text-2xl sm:text-3xl"
          >
            {{ this.lang_fr ? "Nous Contacter" : "Contact us" }}
          </h3>
          <br />
          <ul class="ml-2 pl-2 md:ml-4">
            <li class="text-white">
              <p class="text-left">Téléphone : +33 1234567890</p>
            </li>
            <li class="text-white">
              <p class="text-left">Mail : hotel.artichaud@gmail.com</p>
            </li>
            <li class="text-white">
              <p class="text-left">
                Adresse : Chemin au milieu des arbres 30200 La Grande Vallée
              </p>
            </li>
          </ul>
          <br />
        </article>
      </section>
      <div class="v-line-footer"></div>
      <section class="flex flex-column bg-black md:w-1/3">
        <article>
          <h3 class="text-white text-center text-xl sm:text-3xl">
            {{ this.lang_fr ? "Nous Suivre" : "Follow us" }}
          </h3>
          <a href="#"
            ><img
              src="../assets/Pictures/facebook.png"
              alt="Facebook"
              class="w-1/6 ml-20 md:ml-40 inline"
          /></a>
          <a href="#"
            ><img
              src="../assets/Pictures/instagram.png"
              alt="Instagram"
              class="w-1/6 ml-12 inline"
          /></a>
        </article>
      </section>
    </section>
  </div>
</template>

<script>
import("../assets/Style/main.css");
import("../assets/Style/Footer.css");

export default {
  props: ["lang_fr"],

  name: "FooterComponent",
};
</script>

<style scoped></style>
