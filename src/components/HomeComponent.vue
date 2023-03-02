<template>
  <body_home>
    <main_home>
      <section class="Advantage">
        <div class="adv_text">
          <!-- On teste si le booleen est vrai. Si oui, on affiche le texte en français, sinon, on l'affiche en anglais -->
          <h2 id="tilte_adv" class="text-5xl	text-center md:text-6xl md:text-left	text-green mt-12">{{ this.lang_fr ? "Nos Avantages" : "Our Advantages" }}</h2>
          <p class="disapear text-black text-left text-AdventPro mt-4">
            {{ this.lang_fr ? "Rendez- vous au coeur de l'Artichaut, l'hotêl idéal pour vous reposer et vous détendre dans le calme. Nous proposons aussi une activité randonnée dans les environs de la forêt qui entoure l'hôtel" +
              "mais aussi des prix avantageux, des services tels qu'un jacuzzi et un hammam pour maximiser votre bien-être" : "Head to the heart of the Artichaut, the ideal hotel to rest and relaxe with calm. We propose hike to discover the forest around the hotel, " +
              "and also affordable price, services like jacuzzi or hammam to maximise your well-being."}}
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
                    <img class="border-solid border-2 border-black-500 rounded-full" src="../assets/Pictures/icon/icon-rando.png" alt="rando">
                  </div>
                  <div class="card_discribe  md:text-center md:text-2xl md:w-4/5">
                    <h4  class="text-green">{{ this.lang_fr ? "Découvrez les alentours" : "Discover what's around" }}</h4>
                    <p class="text_card md:text-black md:text-lg md:text-left md:ml-4">{{ this.lang_fr ? "Partez en randonnée pédestre accompagné de nos guides et découvrez la fôret qui entoure l'hôtel." :
                        "Take a hike with our guides and discover forest around the hotel" }}</p>
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
                    <img class="border-solid border-2 border-black-500 rounded-full" src="../assets/Pictures/icon/map.png" alt="map">
                  </div>
                  <div class="card_discribe  md:text-center md:text-2xl md:w-4/5">
                    <h4  class="text-green">{{ this.lang_fr ? " Détente " : "Relaxation" }}</h4>
                    <p class="text_card md:text-black md:text-lg md:text-left md:ml-4">{{ this.lang_fr ? "Un jacuzzi et un hammam sont mis à disposition pour que vous puissiez profiter de votre séjour en toute sérénité" :
                        "A jacuzzi and a hammam are available to you so you can enjoy your stay with serenity" }}</p>
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
                    <img class="" src="../assets/Pictures/icon/food-ico.png" alt="food">
                  </div>
                  <div class="card_discribe  md:text-center md:text-2xl md:w-4/5">
                    <h4  class="text-green">{{ this.lang_fr ? " Ingrédients locaux " : "Local products" }}</h4>
                    <p class="text_card md:text-black md:text-lg md:text-left md:ml-4">{{ this.lang_fr ? "Les légumes sont cultivés dans notre jardin et nous sommes partenaires de producteurs locaux pour vous préparer et vous proposer des plats authentiques" :
                        "Vegetables are grown in our garden, and we are in contact with local producer to offer you authentic dishes" }}</p>
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
                    <img class="" src="../assets/Pictures/icon/ico-spa.png" alt="spa">
                  </div>
                  <div class="card_discribe  md:text-center md:text-2xl md:w-4/5">
                    <h4  class="text-green">{{ this.lang_fr ? "Prix avantageux" : "Great prices" }}</h4>
                    <p class="text_card md:text-black md:text-lg md:text-left md:ml-4">{{ this.lang_fr ? "Des prix abordables pour une qualité de rêve" :
                        "Affordable price for a dream quality" }}</p>
                  </div>
                </div>
              </aside>
            </article>
          </div>
        </div>
      </section>

      <section class="Description md:w-4/5 md:flex md:ml-6 md:hidden	">
        <article class="text ">
          <h3 class="text-3xl	text-center	text-green">{{ this.lang_fr ? "Tout ce dont vous avez besoin" : "All what you need" }}</h3>
          <p class="text-black text-center ml-3 mr-3 mt-5">{{ this.lang_fr ? "Artichauts, si mystérieux et doux, garnissent nos plats de leur belle couleur verte. Souvent négligés, mais oh combien précieux, Leur goût délicat nous enchante à chaque crève-faim." :
              "Artichoke, mysterious and sweet, garnish our dishes with a great green color. Often neglected, but precious, their delicate tastes enchant us at every meal" }}</p>
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
                  {{ this.lang_fr ? "Voir Plus" : "View more" }}
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse show"
                   data-bs-parent="#accordionExample">
                <div class="accordion-body py-4 px-5 font-AdventPro">
                  {{ this.lang_fr ? "Les feuilles douces et tendres, une délicatesse," +
                  "Cachent un coeur tendre et sucré, un véritable trésor." +
                  "Râpés ou cuits, en salade ou en purée," +
                  "Ils ajoutent une touche de raffinement à chaque mets." +

                  "Artichauts, symbole de la cuisine italienne," +
                  "Où ils sont cuits à la vapeur et servis avec de l'huile d'olive." +
                  "Mais ils sont aussi appréciés en France et en Espagne," +
                  "Et dans le monde entier, pour leur goût unique et leur texture." +

                  "Ils sont une source de fibres et de nutriments,"+
                  "Et peuvent aider à améliorer la santé de notre corps."+
                  "Mais plus encore, c'est leur saveur qui nous attire,"+
                  "Et nous fait revenir encore et encore pour en demander plus."+

                  "Alors, ici je vous dis, chers artichauts,"+
                  "Vous êtes plus qu'un simple légume sur notre table." +
                  "Vous êtes un enchantement culinaire, un véritable don,"+
                  "Et nous vous aimons pour tout ce que vous êtes." :
                    "The leaves soft and tender, delicacy," +
                  "Hide a sweet tender heart, a real chest" +
                  "raw or cook, in salad or puree" +
                  "They add a touch of sophistication in each meal" +
                  "Artichokes, symbol of italian food"+
                  "Where they are steamed and served with olive oil" +
                  "But they are also appreciate in France and Spain" +
                  "And in the entire world, for their unique tastes and texture"+
                  "They are source of fibre and nutrients" +
                  "And can help to improve health" +
                  "More of that, it's their flavour which attracts us" +
                  "And make us come back again to ask more" +
                  "So, here, I say to you dear artichokes" +
                  "You are more than a vegetable in our table" +
                  "You are a culinary enchantment, a true gift" +
                  "And we love you for all of that" }}
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
        <h2 id="tilte_adv" class="hidden md:block text-5xl text-center md:mb-12 md:text-6xl text-green mt-12">{{ this.lang_fr ? "Nos promotions" : "Our discounts" }}</h2>
        <CardPromo v-bind:lang_fr="lang_fr"/>
      </section>
      <section class="Actu mb-16 md:flex md:flex-col  ">
        <div class="hidden md:block md:flex md:justify-center md:mb-6">
          <h2  class="text-5xl	text-center md:text-6xl md:text-left	text-green mt-12">{{ this.lang_fr ? "Nos Actualités" : "Our News" }}</h2>
        </div>
        <CardActu v-bind:lang_fr="lang_fr"/>
      </section>
      <section class="Three_comment hidden md:block md:border-t-2 md:border-green md:mb-80">
        <Comment/>
      </section>

    </main_home>
  </body_home>

</template>

<script>

import CardPromo from "../components/CardsComponent/Promotion/CardPromo.vue";
import CardActu from "../components/CardsComponent/Actualite/CardActu.vue";
import Comment from "../components/CardsComponent/Commentaire/Comment.vue";

import('../assets/Style/Home.css')
export default {
  components: {Comment, CardActu, CardPromo},
  props: ['lang_fr'], // on récupère la propriété qui nous est passée depuis la View

}
</script>
