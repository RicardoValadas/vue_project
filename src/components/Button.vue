<template>
    <button class="btn" :style="{ background: color }">{{ text }}</button>
</template>

<script lang="ts">
export default {
  name: "Button",
  props: {
    text: {
      type: String,
      default: "Error",
    },
    color: {
      type: String,
      default: "grey",
    },
  },
};
</script>

<style scoped>
.btn {
  border: none;
  border-radius: 2px;
  padding: 10px 20px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  cursor: pointer;
  transition: 0.3s;
}
.btn:hover {
  transform: rotate(2deg);
}
.btn:active {
  transform: scale(110%);
}
</style>
