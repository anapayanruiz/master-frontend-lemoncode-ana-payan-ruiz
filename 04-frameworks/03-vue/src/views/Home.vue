<template>
  <div class="bg-color-5 h-full pt-16">
    <MembersList />
  </div>
</template>

<script lang="ts">
import MembersList from "@/components/members-list.vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: { MembersList },
  name: "Home"
});
</script>
