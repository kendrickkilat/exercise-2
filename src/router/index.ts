import RouteNames from '@/enums/route-names';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: RouteNames.Home,
    component: () => import('../views/Home.vue'),
    props: (route) => ({
      page: route.query.page || 1,
    }),
  },
  {
    path: '/user-details/:id',
    props: true,
    name: RouteNames.UserDetails,
    component: () => import('../views/UserDetails.vue'),
  },
  {
    path: '/about',
    name: RouteNames.About,
    component: () => import('../views/About.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
