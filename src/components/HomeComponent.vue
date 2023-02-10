
<template>
<body>
<section class="Advantage">
<h2 id="tilte_adv" class="text-4xl	text-center	text-green mt-12">Nos Avantages</h2>
<article class="randonne">
  <aside class="adv_rando">
    <div class="bandeau">
      <p>Activité</p>
    </div>
    <div class="ico-rando">
      <img class="border-solid border-2 border-black-500 rounded-full" src="../assets/Pictures/icon/icon-rando.png">
    </div>
  </aside>
</article>

<article class="localisation">
  <aside class="adv_local">
    <div class="bandeau">
      <p>Emplacement</p>
    </div>
    <div class="ico-local">
      <img class="border-solid border-2 border-black-500 rounded-full" src="../assets/Pictures/icon/map.png">
    </div>
  </aside>
</article>

<article class="restaurant">
  <aside class="adv_rst">
    <div class="bandeau">
      <p>Emplacement</p>
    </div>
    <div class="ico_rst">
      <img class="" src="../assets/Pictures/icon/food-ico.png">
    </div>
  </aside>
</article>

<article class="spa">
  <aside class="adv_spa">
    <div class="bandeau">
      <p>Emplacement</p>
    </div>
    <div class="ico_spa">
      <img class="h-28 max-w-[800px]" src="../assets/Pictures/icon/ico-spa.png">
    </div>
  </aside>
</article>
</section>

<!-- <section class="Description">
  <article class="text">
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
</section>  -->


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



<section class="Actu">
  <article class="actu_img">
    <div class="bandeau"> <p>Théâtre</p></div>
  </article>
  <article class="atcu_discrib ">
    <p class="text-black text-left">Les pate c'est la vie </p>
    <div class="flex space-x-2 justify-center">
      <router-link to="/#yourlink" type="button" class=
          "inline-block
           px-6 py-2.5
           bg-green
           text-white
           font-medium
           text-xs
           leading-tight
           uppercase
           rounded
           shadow-md
           hover:bg-green
           hover:shadow-lg
           focus:bg-green-second
           focus:shadow-lg
           focus:outline-none
           focus:ring-0
           active:bg-green-second
           active:shadow-lg
           transition
           duration-150
           ease-in-out">Button</router-link>
    </div>
  </article>
</section>


</body>
</template>

<script>


import('../assets/Style/Home.css')

</script>
