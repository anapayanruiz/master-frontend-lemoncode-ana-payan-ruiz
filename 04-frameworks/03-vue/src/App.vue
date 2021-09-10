<template>
  <div>
    <TopBar />
    <div id="app-content">
      <router-view />
    </div>
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
