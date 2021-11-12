<template>
  <div class="sign">
    <form>
      <label for="username">Username</label>
      <input type="text" name="username" id="username" />

      <label for="password">Password</label>
      <input type="text" name="password" id="password" />
    </form>
    <h3>Dont have an account?</h3>
  </div>
</template>

<script>
export default {
  name: "SignIn",

};
</script>

<style>
.sign form {
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: auto;
  padding: 20px;
}
.sign form label {
  padding: 10px;
  font-size: 26px;
  font-weight: bold;
}
.sign form input {
  border: none;
  border-radius: 5px;
  margin: auto;
  padding: 15px 10px;
  width: 50%;
  transition: 0.5s;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset;
}
.sign form input:focus {
  width: 70%;
}
.sign h3 {
  margin-top: 20px;
}
</style>
