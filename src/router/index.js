import { createRouter, createWebHistory } from 'vue-router';

// views
import HomePage from '../views/HomePage.vue';
import ToolPage from '../views/ToolPage.vue';
import AboutPage from '../views/AboutPage.vue';

// Tools
// import PowerCalculation from '../tools/PowerCalculation.vue';

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
    component: ToolPage,
    props: true,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;