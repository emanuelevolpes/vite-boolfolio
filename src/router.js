import { createRouter, createWebHistory } from "vue-router";

import AppHome from './pages/AppHome.vue';
import AboutPage from './pages/AboutPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/about-us',
            name: 'about',
            component: AboutPage
        }
    ]
})

export { router };