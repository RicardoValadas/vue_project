<template>
  <div class="home">
    <h1>Welcome to ...</h1>
    <Button
      class="btn-home"
      text="Sign in"
      color="#52FFB8"
      @click="signActivate"
    />
    <SignIn v-show="signActive" />
    <Button
      id="buttonRegister"
      v-show="signActive"
      text="Register Here"
      @click="changeRegister"
      class="btnRegister"
    />
    <Register v-show="registerActive" />
    <router-link to="/store"><Button text="Store" class="btn-home" @click="openStore" color="green" /></router-link>

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
import SignIn from "@/components/SignIn";
import Register from "@/components/Register";

const usersApi = "https://618e1d3550e24d0017ce107e.mockapi.io/Users";

export default defineComponent({
  name: "Home",
  data() {
    return {
      users: [],
      usersActive: false,
      signActive: false,
      registerActive: false,
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
    Register,
    SignIn,
    Users,
    Button,
  },
  methods: {
    openStore() {
      this.storeActive = !this.storeActive;
    },
    showUsers() {
      this.usersActive = !this.usersActive;
    },
    signActivate() {
      this.signActive = !this.signActive;
      if (this.registerActive == true) {
        this.changeRegister();
      }
    },
    changeRegister() {
      this.registerActive = !this.registerActive;
      const registerButton = document.querySelector("#buttonRegister");
      if (this.registerActive == true) {
        registerButton.classList.remove("btnRegister");
        registerButton.classList.add("btn-home");
      } else {
        registerButton.classList.remove("btn-home");
        registerButton.classList.add("btnRegister");
      }
    },
  },
});
</script>

<style scoped>
h1 {
  padding-top: 40px;
  font-size: 40px;
}
.home {
  width: 70%;
  margin: auto;
  text-align: center;
  border-radius: 3px;
  background-color: #fefae0;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 10px -4px,
    rgba(9, 30, 66, 0.08) 1px 1px 1px 2px;
  /*filter: blur(0px) !important;*/
}
.btn-home {
  margin: 40px 10px;
}
.btnRegister {
  font-size: 20px;
  padding: 10px;
  display: block;
  margin: 20px auto 5px auto;
}
.usersContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
  padding: 10px;
}
</style>
