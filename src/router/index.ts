import RouteNames from '@/enums/route-names';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: RouteNames.Users,
    component: () => import('../views/Users.vue'),
    props: (route) => ({
      page: parseInt(route.query.page as string, 10) || 1,
    }),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
