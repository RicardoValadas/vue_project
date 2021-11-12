<template>
  <div class="btn">
    <button :style="{ background:color }">{{ text }}</button>
  </div>
</template>

<script lang="ts">
export default {
  name: "Button",
  props: {
    text: {
      type: String,
      default: "Error",
    },
    color:{
      type: String,
      default: "grey"
    }
  },
};
</script>
