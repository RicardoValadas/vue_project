<template>
  <div id="nav">
  <Header />
  </div>
</template>

<script lang="ts">
import Header from "@/components/Header.vue";
export default {
  name: "App",
  components:{
    Header
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Barlow', sans-serif;
  /*font-family: 'Yuji Boku', serif; special style to use later maybe in users*/
}
</style>
