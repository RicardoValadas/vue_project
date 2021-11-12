<template>
  <router-link class="users" :to="{ name:'UsersDetail', params: { id: user.id } }">
  <div>
    <h2>{{ user.name }}</h2>
    <img :src="user.avatar" />
  </div>
  </router-link>
</template>

<script>
export default {
  name: "Users",
  props: {
    user: Object,
  },
};
</script>

<style scoped>
.users {
  background-color: white;
  font-family: 'Yuji Boku', serif;
  color: black;
  text-decoration: none;
  transition: 0.3s;
  text-align: center;
  padding: 10px;
  margin: 10px;
  width: 200px;
  border-radius: 4px;
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
}
.users:hover {
  cursor: pointer;
  opacity: 0.8;
  transform: scale(105%);
}
.users:active {
  transform: rotate(180deg);
}
.users img {
  border-radius: 50%;
  padding: 10px;
}

</style>
