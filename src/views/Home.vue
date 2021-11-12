<template>
  <div class="home">
    <h1>home</h1>
    <Button text="Show something" color="yellow" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Button from "@/components/Button.vue";

export default defineComponent({
  name: "Home",
  components: {
    Button,
  },
});
</script>
