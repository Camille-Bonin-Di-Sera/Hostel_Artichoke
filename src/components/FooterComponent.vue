<template>
  <div class="container">
    <div>
      <p class=" text-black border-4 border-red-500">Navbar du site</p>
    </div>
    <div>
      <p class="text-black border-4 border-red-500">Contenu de la page</p>
    </div>
      <section class="sm:flex flex-column sm:flex-row bg-black  m-auto pt-8">
        <article class="sm:w-4/5">
            <h1 class="text-white text-left ml-96 text-2xl sm:text-8xl"> L'artichaut </h1>
            <br/>
            <img src="../assets/Pictures/Etoile.png" alt="Etoile" class="ml-96 inline">
            <img src="../assets/Pictures/Etoile.png" alt="Etoile" class="ml-8 inline">
            <img src="../assets/Pictures/Etoile.png" alt="Etoile" class="ml-8 inline">
            <br />
            <br />
        </article>
        <article class="sm:w-1/5">
          <img src='../assets/Pictures/articho-logo.png' alt="Logo du site" class="w-1/2">
          <br />
        </article>
      </section>
      <section class="sm:flex flex-column sm:flex-row bg-black  m-auto">
        <article class="sm:w-1/2">
          <h3 class="text-white text-left ml-64 text-xl sm:text-3xl"> Menu </h3>
          <br />
          <ul>
            <li class="text-white"><p class="text-left ml-64">Accueil</p></li>
            <li class="text-white text-left"><p class="text-left ml-64">Réservation</p></li>
            <li class="text-white"><p class="text-left ml-64">Qui Sommes Nous</p></li>
            <li class="text-white"><p class="text-left ml-64">Mentions Légales</p></li>
          </ul>
          <br />
        </article>

        <article class="sm:float-left sm:w-1/2 ">
          <h3 class="text-white text-left ml-40 text-xl sm:text-3xl"> Nous Contacter </h3>
          <br />
          <ul>
            <li class="text-white"><p class="text-left ml-40">Téléphone : +33 1234567890</p></li>
            <li class="text-white"><p class="text-left ml-40">Mail : hotelartichaud@gmail.com</p></li>
            <li class="text-white"><p class="text-left ml-40">Adresse : Chemin au milieu des arbres 30200 La Grande Vallée</p></li>
          </ul>
          <br />
        </article>
      </section>
      <div class="content">
        <h3 class="text-white text-center text-xl sm:text-3xl"> Nous Suivre </h3>
      </div>
      <section class="sm:flex flex-row sm:flex-row bg-black m-auto">
          <article class="w-1/2">
            <br />
            <img src="../assets/Pictures/facebook.png" alt="Facebook" class="w-1/4 ml-80">
          </article>
          <article class="w-1/2">
            <br />
            <img src="../assets/Pictures/instagram.png" alt="Instagram" class="w-1/4 ml-40">
          </article>
      </section>
  </div>
</template>

<script>
import('../assets/Style/main.css');
import('../assets/Style/Footer.css');
export default {
  name: "FooterComponent"
}
</script>

<style scoped>

</style>