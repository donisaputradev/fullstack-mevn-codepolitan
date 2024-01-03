import { createRouter, createWebHistory } from 'vue-router'
import ProductView from '../views/product/IndexView.vue'
import DetailProductView from '../views/product/DetailView.vue'
import CartView from '../views/cart/IndexView.vue'

const routes = [
  {
    path: '/',
    name: 'product',
    component: ProductView
  },
  {
    path: '/product/:id',
    name: 'product-detail',
    component: DetailProductView
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
