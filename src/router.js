import { createRouter, createWebHistory } from "vue-router";

import AppHome from './pages/AppHome.vue';
import AboutPage from './pages/AboutPage.vue';
import BlogPage from './pages/BlogPage.vue';
import ProjectPage from './pages/ProjectPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/about',
            name: 'about',
            component: AboutPage
        },
        {
            path: '/blog',
            name: 'blog',
            component: BlogPage
        },
        {
            path: '/project/:slug',
            name: 'project',
            component: ProjectPage
        },
        {
            path: '/linkedin',
            name: 'linkedin',
            component: AboutPage,
            beforeEnter(to, from, next) {
                window.location.href = "https://www.linkedin.com/in/emanuelevolpes/";
              }
        }
    ]
})

export { router };