<template>
  <div class="h-full">
    <TopBar />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TopBar from "@/components/top-bar.vue";
export default defineComponent({
  components: {
    TopBar
  }
});
</script>
