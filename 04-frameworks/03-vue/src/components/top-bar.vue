<template>
  <nav
    class="z-top-bar top-0 fixed w-full h-16 tablet:h-20 desktop:h-20 p-4 bg-color-1 text-color-2 flex justify-between items-center"
  >
    <div class="z-top-bar-custom-bar"></div>
    <div class="w-full absolute z-top-bar-title">
      <h3 class="text-center text-18 tablet:text-24 text-color-3 font-default4">
        EJERCICIO DE VUE!
      </h3>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "TopBar"
});
</script>
