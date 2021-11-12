<template>
  <div class="nav">
    <router-link to="/">Home</router-link>
  </div>
  <router-view></router-view>
</template>

<script lang="ts">
export default {
  name: "Header",
}
</script>

<style scoped>
.nav {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin: 20px auto 60px auto;
  padding: 30px;
  background-color: #DFF2D8;
}

.nav a {
  text-decoration: none;
  color: #6CAE75;
  font-size: 25px;
  transition: 1s;
}

.nav a:hover {
  color: black;
  transform: rotate(3deg);
}
</style>
