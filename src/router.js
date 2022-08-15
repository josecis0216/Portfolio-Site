import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/default/HomePage.vue';
import AboutPage from './pages/default/AboutPage.vue';
import ContactUs from './pages/requests/ContactUs.vue';
import NotFound from './pages/NotFound.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: HomePage },
        { path: '/about', component: AboutPage },
        { path: '/contact', component: ContactUs },
        { path: '/:notFound(.*)', component: NotFound }
    ]
});

export default router;