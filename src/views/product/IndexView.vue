<template>
  <div>
    <div id="page-wrap">
      <div class="grid-wrap">
        <ProductItemComponent v-for="product in products" :key="product.id" :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import ProductItemComponent from "@/components/ProductItemComponent.vue";
import { products } from "../../data-seed";

export default {
  data() {
    return {
      products
    };
  },
  components: { ProductItemComponent }
}
</script>

<style scoped>
.grid-wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 16px;
}
</style>