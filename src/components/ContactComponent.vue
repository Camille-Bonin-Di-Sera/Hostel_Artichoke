<template>
  <main
    class="Container_Contact flex justify-center bg-cover bg-center bg-contact-bg bg-no-repeat"
  >
    <!-- Container  --->
    <section
      class="Content_Contact bg-white/20 backdrop-blur shadow-2xl shadow-white/50 flex flex-col mt-[20vh] sm:mt-[22vh] md:mt-[20vh] lg:mt-[10vh] mb-[8%] w-[86%] lg:w-[42%]"
    >
      <h2
        class="Contact_Us text-center text-6xl text-white md:text-8xl mt-[4%]"
      >
        {{ this.lang_fr ? "Nous contacter" : "Contact us" }}
      </h2>
      <article class="flex flex-col items-center w-full h-full">
        <!-- block of informations znd logo       -->
        <div
          id="infoblock"
          class="flex flex-col mt-8 mx-4 w-[92%] bg-white/70 md:pl-[4%]"
        >
          <div class="sm:w-full sm:flex sm:justify-center flex flex-row">
            <h3
              class="title_contact text-black text-2xl lg:text-[3rem] text-left w-full md:h-[50%] md:flex md:items-center ml-1"
            >
              {{ this.lang_fr ? " Hôtel Artichaut" : "Artichoke hostel" }}
            </h3>
            <img
              class="w-1/4 h-full lg:w-[12%]"
              src="../assets/Pictures/icon/articho-logo.png"
              alt=""
            />
          </div>
          <!-- container of adress and phone       -->
          <div
            id="adress-phone"
            class="mt-[-4vh] lg:mt-[-3vh] sm:mt-[-8vh] w-full lg:w-[54%] lg:space-x-20 flex flex-row"
          >
            <div id="adress_p" class="text-black ml-1">
              <p class="text-[1rem] lg:text-[1.2rem] text-black text-left">
                73000 Barberaz
              </p>
              <p class="text-[1rem] lg:text-[1.2rem] text-black text-left">
                45 Rte d'Apremont
              </p>
              <p class="text-[1rem] lg:text-[1.2rem] text-black text-left">
                73000 Barberaz
              </p>
            </div>
            <div class="mt-4 ml-4">
              <p
                class="text-[1rem] lg:text-[1.2rem] text-left text-black text-left"
              >
                06-13-31-09-06
              </p>
              <p class="text-[1rem] lg:text-[1.2rem] text-black text-right">
                artichaut@gmail.com
              </p>
            </div>
          </div>
        </div>

        <!--  formulaire      -->
        <form id="continer-map-mail-msg" class="w-full">
          <!-- container contact and map -->
          <div
            class="w-full flex flex-col lg:flex-row items-center lg:mb-[4vh]"
          >
            <!-- container of mail and message       -->
            <div
              id="container-mail-msg"
              class="w-full lg:w-[54%] lg:ml-[2%] flex flex-col items-center"
            >
              <!-- bloc mail       -->
              <div id="mail" class="flex flex-col mt-8 mx-4 w-[92%]">
                <input
                  type="email"
                  class="Contcat_mail bg-white/70 placeholder:text-black font-adpro"
                  placeholder="Email"
                  name="email"
                />
              </div>

              <!-- bloc message       -->
              <div id="messageBlock" class="flex flex-col mt-8 mx-4 w-[92%]">
                <textarea
                  type="longtext"
                  class="bg-white/70 placeholder:text-black"
                  placeholder="Message"
                  n
                  ame="textarea"
                  rows="10"
                  cols="50"
                />
              </div>
            </div>

            <!-- bloc Map       -->
            <div
              id="map"
              class="w-[92%] lg:w-[40%] lg:h-[92%] mt-8 lg:mt-[5%] lg:h-[31vh]"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2762.438778586826!2d4.752517300000001!3d46.18182649999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f37ca271d1423d%3A0x203b2e21f681f8ca!2sTouroparc%20Zoo!5e0!3m2!1sfr!2sfr!4v1677846388654!5m2!1sfr!2sfr"
                class="map w-full lg:h-full"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <!-- Content buttons -->
          <div
            id="button"
            class="w-full flex items-center justify-center flex flex-col sm:flex-row gap-[6vh] mb-[8%] mt-[8%] lg:mt-[4%] mb-[4%]"
          >
            <button
              type="button"
              class="rounded-lg bg-white backdrop-blur w-[15rem] h-[4rem] text-black font-bold font-adpro text-[1.5rem]"
            >
              {{ this.lang_fr ? "Envoyer" : "Send" }}
            </button>
            <button
              type="reset"
              class="rounded-lg bg-white/10 backdrop-blur w-[15rem] h-[4rem] text-black font-bold font-adpro text-[1.5rem]"
            >
              {{ this.lang_fr ? "Annuler" : "Reset" }}
            </button>
          </div>
        </form>
      </article>
    </section>
  </main>
</template>

<script>
import axios from "axios";
import("../assets/Style/contact.css");

export default {
  props: ["lang_fr"],

  data() {
    return {
      discounts: [],
      local: import.meta.env.VITE_URL_API,
    };
  },

  created() {
    axios
      .get(this.local + "/v1/discounts")
      .then((res) => {
        try {
          this.discounts = res.data;
          console.log("bonjour : ", res);
        } catch (err) {
          console.log("erreur discount : ", err);
        }
      })
      .catch((error) => {
        console.log("bonjour : ", error.res.data.value);
      });
  },
};
</script>
