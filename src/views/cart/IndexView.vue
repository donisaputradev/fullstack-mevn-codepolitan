<template>
  <div>
    <div id="page-wrap">
      <h1>Shopping Cart</h1>
      <CartItemComponent v-for="item in cartItems" :key="item.id" :item="item" />
      <h3 id="total-price">Total: Rp{{ totalPrice }}</h3>
      <button id="checkout-button">Checkout</button>
    </div>
  </div>
</template>

<script>
import CartItemComponent from "@/components/CartItemComponent.vue";
import { cartItems } from "../../data-seed";

export default {
  components: {
    CartItemComponent
  },
  data() {
    return {
      cartItems
    }
  },
  computed: {
    totalPrice() {
      return this.cartItems.reduce(
        (sum, item) => sum + Number(item.price),
        0
      )
    }
  }
}
</script>

<style scoped>
h1 {
  border-bottom: 1px solid #41B883;
  margin: 0;
  margin-top: 16px;
  padding: 16px;
}

#total-price {
  padding: 16px;
  text-align: right;
}

#checkout-button {
  width: 100%;
}
</style>