<template>
  <div class="user">
    <img :src="user.avatar" />
    <h2>{{ user.name }}</h2>
    <p>From: {{ user.city }}</p>
    <p>Message: {{ user.description }}</p>
  </div>

</template>

<script>
import axios from "axios";
const idApi = "https://618e1d3550e24d0017ce107e.mockapi.io/Users/";
export default {
  data() {
    return {
      user: null,
    };
  },
  props: ["id"],
  created() {
    axios
      .get(idApi + this.id)
      .then((response) => {
        this.user = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
<style>
.user {
  margin: auto;
  text-align: center;
  padding: 50px 0;
  width: 40%;
  border-radius: 4px;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  transition: 0.5s;
  background-color: #fefae0;
}
.user:hover{
  transform: scale(110%);
}
.user img {
  border-radius: 50%;
  padding: 20px;
  width: 50%;
}
</style>
