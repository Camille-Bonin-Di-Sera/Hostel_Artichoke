<template>
  <div class="Container_Contact">
    <section class="Content_Contact colorText bg-green m-auto">
      <h2 class="Contact_Us text-center text-6xl text-white md:text-8xl">
        Nous contacter
      </h2>
      <article class="flex justify-center w-full h-full">
        <aside class="content_info flex flex-col mt-24 bg-white/70">
          <div
            class="sm:w-full sm:flex sm:justify-center sm:items-center flex flex-row"
          >
            <h3 class="title_contact text-black text-2xl text-left w-full ml-1">
              Hôtel Artichaut
            </h3>
            <img
              class="w-1/4 h-full"
              src="../assets/Pictures/icon/articho-logo.png"
              alt=""
            />
          </div>
          <div class="content_adress w-full flex flex-row">
            <div class="text-black ml-1">
              <p class="text-black text-xs font-bold text-left">
                73000 Barberaz
              </p>
              <p class="text-black text-xs font-bold text-left">
                45 Rte d'Apremont
              </p>
              <p class="text-black text-xs font-bold text-left">
                73000 Barberaz
              </p>
            </div>
            <div class="mt-4 ml-10">
              <p class="text-left text-black text-xs font-bold text-left">
                06-13-31-09-06
              </p>
              <p class="text-black text-xs font-bold text-right">
                artichaut@gmail.com
              </p>
            </div>
          </div>
        </aside>
        <aside>
          <input type="text" />
        </aside>
      </article>
    </section>
  </div>
</template>

<script>
import("../assets/Style/Contact.css");

export default {
  props: ["lang_fr"],
};
</script>
