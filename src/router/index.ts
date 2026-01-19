import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: RouteRecordRaw[] = [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/events',
      name: 'events',
      component: () => import('../views/EventsView.vue'),
    },
    {
      path: '/events/:slug',
      name: 'event-detail',
      component: () => import('../views/EventDetailView.vue'),
    },
    {
      path: '/join',
      name: 'join',
      component: () => import('../views/JoinView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/support',
      name: 'support',
      component: () => import('../views/SupportView.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/CartView.vue')
    },
    {
    path: '/404',
    name: 'not-found',
    component: () => import('../views/NotFoundView.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404'
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})


export default router
