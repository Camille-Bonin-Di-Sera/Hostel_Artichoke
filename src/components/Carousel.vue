<template>
  <form class="slide_form">
    <input
      class="slide_input"
      type="radio"
      name="fancy"
      autofocus
      value="clubs"
      id="clubs"
    />
    <input
      class="slide_input"
      type="radio"
      name="fancy"
      value="hearts"
      id="hearts"
    />
    <input
      class="slide_input"
      type="radio"
      name="fancy"
      value="spades"
      id="spades"
    />
    <input
      class="slide_input"
      type="radio"
      name="fancy"
      value="diamonds"
      id="diamonds"
    />
    <label class="slide_label" for="clubs"> Chambre Standard</label>
    <label class="slide_label" for="hearts"> Chambre de Luxe</label>
    <label class="slide_label" for="spades"> Suite</label>

    <div class="keys">Use left and right keys to navigate</div>
  </form>
</template>
<script>
import("../assets/Style/Slider.css");

export default {};
</script>
