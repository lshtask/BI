import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from 'vue-router';
import BasicLayout from '../layouts/BasicLayout.vue';
import BlankLayout from '../layouts/BlankLayout.vue';
import AnalyseMain from '@/views/Analyse/AnalyseMain.vue';
import Charts from '@/views/Charts/Charts.vue';
import LoginUser from '@/views/User/LoginUser.vue';
import ChatAI from '@/views/Chat/searchChat.vue';
import setupPageGuard from './permission';

const hasGithubPages = import.meta.env.VITE_GHPAGES;

const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoginUser,
  },
  {
    path: '/',
    name: 'index',
    meta: { title: 'Home' },
    component: BasicLayout,
    redirect: '/analyse',
    children: [
      {
        path: '/analyse',
        name: 'analyse',
        meta: { title: '智能分析', icon: 'icon-icon-test' },
        component: AnalyseMain,
      },
      {
        path: '/chatrs',
        name: 'chatrs',
        meta: {
          title: '我的图表',
          icon: 'icon-icon-test',
          flat: true,
          permission: ['dashboard'],
        },
        component: Charts,
      },
      {
        path: '/chat',
        name: 'chat',
        meta: { title: 'ChatGPT', icon: 'icon-icon-test', flat: true },
        component: ChatAI,
      },
    ],
  },
];


export const router = createRouter({
  history: hasGithubPages ? createWebHashHistory() : createWebHistory(),
  routes,
});
setupPageGuard(router)

export async function setupRouter(app) {
  app.use(router)
  await router.isReady()
}

export default router;
