<template>
  <div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/game">Try it</router-link>
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
  font-size: 30px;
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 40px auto 60px auto;
  padding: 30px;
  width: 40%;
  background-color: #fefae0;
  border-radius: 3px;
  transform: rotate(4deg);
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
}

.nav a {
  padding: 5px;
  text-decoration: none;
  color: #8FC651;
  font-size: 25px;
  font-weight: bold;
  transition: 0.5s;
}

.nav a:hover {
  color: black;
  transform: scale(115%);
}
</style>
