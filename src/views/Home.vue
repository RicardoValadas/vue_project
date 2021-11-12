<template>
  <div class="home">
    <Button
      class="btn-home"
      @click="showUsers"
      text="Show all Users"
      color="yellow"
    />
    <div v-show="usersActive" class="usersContainer">
      <Users v-for="user in users" :key="user.id" :user="user" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import axios from "axios";

import Button from "@/components/Button.vue";
import Users from "@/components/Users.vue";

const usersApi = "https://618e1d3550e24d0017ce107e.mockapi.io/Users";
export default defineComponent({
  name: "Home",
  data() {
    return {
      users: [],
      usersActive: false,
    };
  },
  created() {
    axios
      .get(usersApi)
      .then((response) => {
        this.users = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  components: {
    Users,
    Button,
  },
  methods: {
    showUsers() {
      this.usersActive = !this.usersActive;
    },
  },
});
</script>

<style scoped>
.home {
  width: 70%;
  margin: auto;
  text-align: center;
  border-radius: 3px;
  background-color: #fefae0;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 10px -4px, rgba(9, 30, 66, 0.08) 1px 1px 1px 2px
}
.btn-home {
  margin: 40px auto;
}
.usersContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
  padding: 10px;
}
</style>
