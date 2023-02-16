<template>
  <div class="container">
    <div>
      <p class=" text-black border-4 border-red-600">Navbar du site</p>
    </div>
    <div>
      <p class="text-black border-4 border-red-600">Contenu de la page</p>
    </div>
      <section class="flex flex-column bg-black  m-auto pt-8">
        <article class="w-1/2 md:w-4/5">
            <h1 class="text-white text-left ml-4 md:ml-96 text-5xl md:text-8xl"> L'artichaut </h1>
            <img src="../assets/Pictures/Etoile.png" alt="Etoile" class="ml-4 md:ml-96 inline">
            <img src="../assets/Pictures/Etoile.png" alt="Etoile" class="ml-1 md:ml-8 inline">
            <img src="../assets/Pictures/Etoile.png" alt="Etoile" class="ml-1 md:ml-8 inline">
            <br />
            <br />
        </article>
        <article class="w-1/2 md:w-1/5">
          <img src='../assets/Pictures/articho-logo.png' alt="Logo du site" class="md:w-1/2 ml-12 w-1/2">
          <br />
        </article>
      </section>
      <section class="flex flex-column bg-black">
        <article class="w-2/5 md:w-1/2">
          <h3 class="text-white text-left ml-4 md:ml-48 text-xl sm:text-3xl"> Menu </h3>
          <br />
          <ul>
            <li class="text-white"><a href="http://localhost:5174"><p class="text-left ml-2 md:ml-48 hover:underline">Accueil</p></a></li>
            <li class="text-white"><a href="http://localhost:5174/Reservation"><p class="text-left ml-2 md:ml-48 hover:underline">Réservation</p></a></li>
            <li class="text-white"><a href="http://localhost:5174/WhoAreWe"><p class="text-left ml-2 md:ml-48 hover:underline">Qui Sommes Nous</p></a></li>
            <li class="text-white"><a href="http://localhost:5174/mentionsLegales"><p class="text-left ml-2 md:ml-48 hover:underline">Mentions Légales</p></a></li>
          </ul>
          <br />
        </article>

        <article class="w-3/5 md:w-1/2">
          <h3 class="text-white md:text-left ml-4 md:ml-40 text-xl sm:text-3xl"> Nous Contacter </h3>
          <br />
          <ul>
            <li class="text-white"><p class="text-left md:ml-40">Téléphone : +33 1234567890</p></li>
            <li class="text-white"><p class="text-left md:ml-40">Mail : hotel.artichaud@gmail.com</p></li>
            <li class="text-white"><p class="text-left md:ml-40">Adresse : Chemin au milieu des arbres 30200 La Grande Vallée</p></li>
          </ul>
          <br />
        </article>
      </section>
      <div class="content">
        <h3 class="text-white text-center text-xl sm:text-3xl"> Nous Suivre </h3>
      </div>
      <section class="flex flex-column bg-black m-auto">
          <article class="w-1/2">
            <img src="../assets/Pictures/facebook.png" alt="Facebook" class="w-1/4 ml-20 md:ml-80">
          </article>
          <article class="w-1/2">
            <img src="../assets/Pictures/instagram.png" alt="Instagram" class="w-1/4 ml-16 md:ml-40">
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