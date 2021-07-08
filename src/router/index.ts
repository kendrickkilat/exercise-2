import RouteNames from '@/enums/route-names';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: RouteNames.Users,
    component: () => import('../views/users.vue'),
    props: (route) => ({
      page: parseInt(route.query.page as string, 10) || 1,
      gender: route.query.gender as string || 'all',
    }),
  },
  {
    path: '/:catchAll(.*)',
    name: RouteNames.Error,
    component: () => import('../views/404.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
