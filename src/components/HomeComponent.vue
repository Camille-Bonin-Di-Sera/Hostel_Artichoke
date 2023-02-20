
<template>
  <body_home>
    <main_home>
      <div>
        <button class="flag inline mr-6" v-on:click="testChange"><img src="../assets/Pictures/icon/flag-fr.png" alt=""></button>
        <p class="colorText text-center text-4xl"> {{ this.testLang ? "Promotion pour 10 nuits" : "Discount for 10 nights" }} </p>
      </div>
    <section class="Advantage">
      <div class="adv_text">
        <h2 id="tilte_adv" class="text-5xl	text-center md:text-6xl md:text-left	text-green mt-12">Nos Avantages</h2>
        <p class="disapear text-black text-left text-AdventPro mt-4">
          Un gendarme doit avoir de très bons pieds
          Mais c'est pas tout, mais c'est pas tout
          Il lui faut aussi de la sagacité
          Mais c'est pas tout, mais c'est pas tout
          Car ce qu'il doit avoir, et surtout
          C'est d'la tactique, de la tactique dans la pratique
          Comme la montre a son tic tac, le gendarme a sa tactique
          Attendez un peu que j'vous explique
        </p>
      </div>
      <div class="adv_card">
     <div class="card_first">
       <article class="randonne">
         <aside class="adv_rando">
           <div class="adv_bandeau">
             <p>Activité</p>
           </div>
           <div class="rst_discribe md:flex md:mt-6 ">
             <div class="ico-rando">
               <img class="border-solid border-2 border-black-500 rounded-full" src="../assets/Pictures/icon/icon-rando.png">
             </div>
             <div class="card_discribe  md:text-center md:text-2xl md:w-4/5">
               <h4  class="text-green">Découvrez les alentours</h4>
               <p class="text_card md:text-black md:text-lg md:text-left md:ml-4">Partez en randonnée pédestre  accompagné de nos guides et découvrez la fôret qui entoure notre hôtel.</p>
             </div>
           </div>
         </aside>
       </article>

       <article class="localisation">
         <aside class="adv_local">
           <div class="adv_bandeau">
             <p>Emplacement</p>
           </div>
           <div class="rst_discribe md:flex md:mt-6 ">
             <div class="ico-local">
               <img class="border-solid border-2 border-black-500 rounded-full" src="../assets/Pictures/icon/map.png">
             </div>
           <div class="card_discribe  md:text-center md:text-2xl md:w-4/5">
             <h4  class="text-green">Découvrez les alentours</h4>
             <p class="text_card md:text-black md:text-lg md:text-left md:ml-4">Partez en randonnée pédestre  accompagné de nos guides et découvrez la fôret qui entoure notre hôtel.</p>
           </div>
         </div>
         </aside>
       </article>
     </div>
  <div class="card_second">
    <article class="restaurant">
      <aside class="adv_rst">
        <div class="adv_bandeau">
          <p>Emplacement</p>
        </div>
       <div class="rst_discribe md:flex md:mt-6 ">
         <div class="ico_rst">
           <img class="" src="../assets/Pictures/icon/food-ico.png">
         </div>
         <div class="card_discribe  md:text-center md:text-2xl md:w-4/5">
           <h4  class="text-green">Découvrez les alentours</h4>
           <p class="text_card md:text-black md:text-lg md:text-left md:ml-4">Partez en randonnée pédestre  accompagné de nos guides et découvrez la fôret qui entoure notre hôtel.</p>
         </div>
       </div>
      </aside>
    </article>

    <article class="spa">
      <aside class="adv_spa">
        <div class="adv_bandeau">
          <p>Emplacement</p>
        </div>
        <div class="rst_discribe md:flex md:mt-6 ">
          <div class="ico_spa">
            <img class="" src="../assets/Pictures/icon/ico-spa.png">
          </div>
          <div class="card_discribe  md:text-center md:text-2xl md:w-4/5">
            <h4  class="text-green">Découvrez les alentours</h4>
            <p class="text_card md:text-black md:text-lg md:text-left md:ml-4">Partez en randonnée pédestre  accompagné de nos guides et découvrez la fôret qui entoure notre hôtel.</p>
          </div>
        </div>
      </aside>
    </article>
  </div>

      </div>
    </section>

    <section class="Description md:w-4/5 md:flex md:ml-6 md:hidden	">
      <article class="text ">
        <h3 class="text-3xl	text-center	text-green">Tout ce dont vous avez besoin</h3>
        <p class="text-black text-center ml-3 mr-3 mt-5">Artichauts, si mystérieux et doux,
          Garnissent nos plats de leur belle couleur verte.
          Souvent négligés, mais oh combien précieux,
          Leur goût délicat nous enchante à chaque crève-faim.</p>
        <div class="accordion" id="accordionExample">
          <div class="accordion-item bg-white w-88">
            <h2 class="accordion-header mb-0 " id="headingOne">
              <button class="
        text-center
        text-green
        accordion-button
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
              >
                Voir Plus
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show"
                 data-bs-parent="#accordionExample">
              <div class="accordion-body py-4 px-5 font-AdventPro">
                Les feuilles douces et tendres, une délicatesse,
                Cachent un coeur tendre et sucré, un véritable trésor.
                Râpés ou cuits, en salade ou en purée,
                Ils ajoutent une touche de raffinement à chaque mets.

                Artichauts, symbole de la cuisine italienne,
                Où ils sont cuits à la vapeur et servis avec de l'huile d'olive.
                Mais ils sont aussi appréciés en France et en Espagne,
                Et dans le monde entier, pour leur goût unique et leur texture.

                Ils sont une source de fibres et de nutriments,
                Et peuvent aider à améliorer la santé de notre corps.
                Mais plus encore, c'est leur saveur qui nous attire,
                Et nous fait revenir encore et encore pour en demander plus.

                Alors, ici je vous dis, chers artichauts,
                Vous êtes plus qu'un simple légume sur notre table.
                Vous êtes un enchantement culinaire, un véritable don,
                Et nous vous aimons pour tout ce que vous êtes.
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>


    <div class=" Comment mt-12 bg-green ">
      <img
          src="../assets/Pictures/harold.jpg"
          class="border rounded-full w-32 mb-4 mx-auto"
          alt="Avatar"
      />
      <h3 class="text-2xl  ml-3 mb-2">Harold</h3>
      <p class="text-white">It's not a potato it's my son. Oooh is not a potatoooOOOoooOOO is my son</p>
      <p class="text-left ml-4 mt-6">Note : mettre apis</p>
    </div>

    <section class="Promo mb-16 md:flex md:flex-col md:border-t-2 md:border-b-2 md:border-green ">
      <h2 id="tilte_adv" class="hidden md:block text-5xl text-center md:mb-12 md:text-6xl text-green mt-12">Nos Promotion</h2>
      <CardPromo/>
    </section>



      <section class="Actu mb-16 md:flex md:flex-col  ">
      <div class="hidden md:block md:flex md:justify-center md:mb-6">
        <h2  class="text-5xl	text-center md:text-6xl md:text-left	text-green mt-12">Nos Actualités</h2>
      </div>
      <CardActu/>
      </section>
      <section class="Three_comment hidden md:block md:border-t-2 md:border-green md:mb-80">
        <Comment/>
      </section>




    </main_home>
  </body_home>

</template>

<script>


import CardPromo from "@/components/CardsComponent/Promotion/CardPromo.vue";
import CardActu from "@/components/CardsComponent/Actualite/CardActu.vue";
import Comment from "@/components/CardsComponent/Commentaire/Comment.vue";

import('../assets/Style/Home.css')
export default {
  components: {Comment, CardActu, CardPromo},

  data() {
    return {
      testLang:true,
    };
  },

  methods:{
    testChange() {
      this.testLang = !this.testLang;
    }
  }

}
</script>
