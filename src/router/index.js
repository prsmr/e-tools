import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import ToolPage from '../views/ToolPage.vue';
import AboutPage from '../views/AboutPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage, // default homepage
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage,
  },
  {
    path: '/tool/:toolId',
    name: 'ToolPage',
    component: ToolPage, // Toolpage with param :toolId
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;