import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DiscountView from '@/views/DiscountView.vue';
import WhoAreWeView from '@/views/WhoAreWeView.vue';
import LoginView from '@/views/LoginView.vue';
import NavbarView from '@/views/TestView.vue';
import FooterView from '@/views/FooterView.vue';
import ReservationView from '@/views/ReservationView.vue';
import 'tw-elements';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/discounts',
      name: 'discounts',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: DiscountView
    },
    {
      path: '/WhoAreWe',
      name: 'WhoAreWe',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: WhoAreWeView
    },
    {
      path: '/Login',
      name: 'Login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: LoginView

    },  {
      path: '/Nav',
      name: 'Navbar',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: NavbarView
    },
    {
      path: '/Footer',
      name: 'Footer',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: FooterView
    },

    {
      path: '/Reservation',
      name: 'Reservation',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: ReservationView
    },
  ]
})

export default router