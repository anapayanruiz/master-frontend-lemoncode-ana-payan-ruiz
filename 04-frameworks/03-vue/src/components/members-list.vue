<template>
  <h5>MEMBERS LIST</h5>
  <div></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "MembersList",
  data() {
    return {
      list: [],
    }
  },
  async created() {
    console.log(this.list)
  },
});
</script>
