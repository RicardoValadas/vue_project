<template>
  <div class="sign">
    <form>
      <label for="email">Email</label>
      <input type="text" name="email" id="email" />

      <label for="username">Username</label>
      <input type="text" name="username" id="username" />

      <label for="password">Password</label>
      <input type="text" name="password" id="password" />

      <label for="passwordConfirm">Confirm Password</label>
      <input type="text" name="passwordConfirm" id="passwordConfirm" />
    </form>
  </div>
</template>

<script>
export default {
  name: "Register",
};
</script>
