import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DiscountView from '@/views/DiscountView.vue';
import WhoAreWeView from '@/views/WhoAreWeView.vue';
import FooterView from '@/views/FooterView.vue';
import ReservationView from '@/views/ReservationView.vue';
import CardActu from "@/components/CardsComponent/Actualite/CardActu.vue";
import userProfileView from "@/views/UserProfileView.vue";
import RegisterLogin from "@/components/RegisterLogin.vue";
import ContactView from "@/views/ContactView.vue";
import 'tw-elements';
import {store} from "@/store";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/card',
      name: 'card',
      component: CardActu
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
      component: WhoAreWeView
    },
    {
      path: '/Register-Login',
      name: 'Register-Login',
      component: RegisterLogin,

    },
    {
      path: '/Footer',
      name: 'Footer',
      component: FooterView
    },
    {
      path: '/Reservation',
      name: 'Reservation',
      component: ReservationView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/Contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/userProfile',
      name: 'userProfile',
      component: userProfileView
    },
  ]
});

router.beforeEach((to, from, next) =>{
  if(to.meta.requiresAuth && !store.token) {
    next({name: 'Register-Login'});
  }else {
    next();
  }
})

export default router

