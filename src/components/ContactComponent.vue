<template>
  <main class="
  flex justify-center
  bg-cover bg-center bg-contact-bg bg-no-repeat">


    <!-- Container  --->
    <section
        class="Content_Contact
        bg-green/30 backdrop-blur
        flex flex-col
        mt-[36vh] sm:mt-[40vh] md:mt-[8vh]
        mb-[8%]
        w-[86%]">


      <h2 class="Contact_Us text-center text-6xl text-white md:text-8xl">
        Nous contacter
      </h2>
      <article class="flex flex-col items-center w-full h-full">
        <div id="infoblock" class="flex flex-col mt-8 mx-4 w-[92%] bg-white/70">
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
          <div class=" mt-[-6vh] w-full flex flex-row">
            <div class="adress_p text-black ml-1">
              <p class="adress_p text-black text-left">
                73000 Barberaz
              </p>
              <p class="adress_p text-black  text-left">
                45 Rte d'Apremont
              </p>
              <p class="adress_p text-black  text-left">
                73000 Barberaz
              </p>
            </div>
            <div class="mt-4 ml-4">
              <p class="adress_p text-left text-black  text-left">
                06-13-31-09-06
              </p>
              <p class="adress_p text-black text-right">
                artichaut@gmail.com
              </p>
            </div>
          </div>
        </div>

        <!-- bloc mail       -->



        <div id="mail" class="flex flex-col mt-8 mx-4 w-[92%]">
          <input type="email"
                 class="Contcat_mail bg-white/70 placeholder:text-black font-adpro"
                 placeholder="Email"
                 name="email" />
        </div>



<!-- bloc message       -->
        <div id="messageBlock" class="flex flex-col mt-8 mx-4 w-[92%]">
          <textarea type="longtext"
                    class=" bg-white/70 placeholder:text-black"
                    placeholder="Message"
                    name="textarea"
                    rows="10" cols="50" />
        </div>


        <!-- bloc Map       -->
        <div id="map" class="w-[92%] mt-8 mb-[8%]">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2762.438778586826!2d4.752517300000001!3d46.18182649999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f37ca271d1423d%3A0x203b2e21f681f8ca!2sTouroparc%20Zoo!5e0!3m2!1sfr!2sfr!4v1677846388654!5m2!1sfr!2sfr"
                  class="map
                  w-full"
                  style="border:0;"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </article>
    </section>
  </main>
</template>

<script>
import("../assets/Style/Contact.css");

export default {
  props: ["lang_fr"],
};
</script>


