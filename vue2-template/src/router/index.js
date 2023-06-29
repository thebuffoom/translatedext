import Vue from 'vue';
import VueRouter from 'vue-router';
import List from '../views/list.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'list',
    component: List,
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/cart.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
