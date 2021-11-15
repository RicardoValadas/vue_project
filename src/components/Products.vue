<template>
  <div class="product">
    <h1> {{ product.title }}</h1>
    <img :src="product.image">
    <p> Price: {{ product.price}} €</p>
  </div>

</template>

<script>
export default {
  name: "Products",
  props: {
    product: Object,
  },
};
</script>

<style scoped>
.product h1 {
  padding: 10px;
  text-decoration: underline;
  font-family: 'Yuji Boku', serif;
}
.product p {
  margin: auto;
  width: 20%;
  font-size: 25px;
  padding: 10px;
  border: 2px solid black;
  border-radius: 5px;
}
.product img {
  padding: 10px;
  border-radius: 20px;
  width: 50%;
  transition: 0.4s;
}
.product img:hover {
  cursor: pointer;
  opacity: 0.8;
  transform: scale(105%);
}

</style>
