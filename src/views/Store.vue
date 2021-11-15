<template>
  <div class="products">
  <Products v-for="product in products" :key="product.id" :product="product" />

  </div>
</template>

<script>
import axios from "axios";

import Products from "@/components/Products";

const productsApi = "https://fakestoreapi.com/products/";
export default {
  name: "Store",
  components: { Products },
  data() {
    return {
      products: [],
    };
  },
  created() {
    axios.get(productsApi).then((response) => {
      this.products = response.data;
    });
  },
};
</script>

<style scoped>
.products {
  background-color: white;
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 50%;
  margin: auto;
  padding: 20px;
  border: 1px solid black;
  border-radius: 5px;
}

</style>
