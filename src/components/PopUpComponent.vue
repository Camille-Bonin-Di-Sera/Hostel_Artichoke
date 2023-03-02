<template>
  <div class="dropdown relative hidden md:block">
    <button
        class="
        dropdown-toggle
        inline-block  px-14 py-3 bg-yellow text-black font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-green hover:shadow-lg focus:bg-green focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green active:shadow-lg transition duration-150 ease-in-out
        flex
        items-center
        whitespace-nowrap "
        type="button"
        id="dropdownMenuLargeButton"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        @click="show"
    >
      {{ this.lang_fr ? "Réserver" : "Book" }}
      <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="caret-down"
          class="w-2 ml-2"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
      >
        <path
            fill="currentColor"
            d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
        ></path>
      </svg>
    </button>
    <div
        id="dropResa"
        class="
        bg-black
        px-4
        dropdown-menu
        min-w-max
        absolute
        hidden
        text-base
        z-50
        float-left
        py-2
        list-none
        text-left
        rounded-lg
        shadow-lg
        mt-1
        hidden
        m-0
        bg-clip-padding
        border-none
      "
        aria-labelledby="dropdownMenuLargeButton"
    >
      <ul>
        <li>
         <a class="
          dropdown-item
          text-sm
          py-2
          px-4
          font-normal
          block
          w-full
          whitespace-nowrap
          bg-transparent
          text-gray-700
          hover:bg-gray-100
          italic
          text-white
          text-center
          ">{{ this.lang_fr ? "Choisissez une date" : "Choose a date" }}

         </a>
        </li>

        <li>
          <div
              class="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
              href="#"
          >
            <label for="start" class="text-white">{{this.lang_fr ? "Date d'arrivée : " : "Arrival date : "}} </label>

            <input type="date" id="start" name="trip-start"
                   value="2023-07-22"
                   min="2023-01-01" max="2100-12-31">
          </div>

        </li>
        <li>
          <div
              class="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
              href="#"
          >
            <label for="start" class="text-white" >{{this.lang_fr ? "Date de départ : " : "Departure date : " }}</label>

            <input type="date" id="start" name="trip-start"
                   value="2023-07-22"
                   min="2023-01-01" max="2100-12-31">
          </div>

        </li>
        <li class="flex justify-center mt-4 mb-4">
          <router-link
              to="/Reservation" type="button"
              class="
              text-center
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-3/4
              whitespace-nowrap
              bg-green
              text-gray-700
              hover:bg-green-btn">
            Continue
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import('../assets/Style/popup.css')
const buttonResa = document.getElementById('dropdownMenuLargeButton');
export default{
  data(){
    return {
      ariaExpanded:true,
    }
  },
  props: ['lang_fr'],

  methods: {
    show: function(){
      let value = document.getElementById("dropdownMenuLargeButton").getAttribute("aria-expanded");
      let content = document.getElementById("dropResa");

      if(value === "true")
      {
        buttonResa.setAttribute("aria-expanded", "false")
        content.setAttribute("hidden", "");
      }
      else
      {
        buttonResa.setAttribute("aria-expanded", "true")
        content.removeAttribute("hidden");
      }

    }
  }
}


</script>