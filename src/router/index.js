import { createRouter, createWebHistory } from 'vue-router';
import { useSiteStore } from '@/stores/store.site';

const routes = [
  {
    path: '/',
    meta: { layout: 'landing' },
    component: () => import('@/views/Page.Landing.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to) => {
  const siteStore = useSiteStore();
  siteStore.setLayout(to.meta.layout);
});

export default router;
