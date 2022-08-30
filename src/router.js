import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/default/HomePage.vue';
import AboutPage from './pages/default/AboutPage.vue';
import ContactUs from './pages/requests/ContactUs.vue';
import RequestsReceived from './pages/requests/RequestsReceived.vue';
//import UserAuth from './pages/auth/UserAuth.vue';
import NotFound from './pages/NotFound.vue';
// import store from './store/index.js';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: HomePage },
        { path: '/about', component: AboutPage },
        { path: '/contact', component: ContactUs },
        { path: '/requests', component: RequestsReceived }, //, meta: { requiresAuth: true }
        //{ path: '/auth', component: UserAuth, meta: { requiresUnauth: true } }, 
        { path: '/:notFound(.*)', component: NotFound }
    ]
});

// router.beforeEach(function (to, _, next) {
//     if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
//         next('/auth');
//     // } else if(to.meta.requiresAuth && store.getters.isAuthenticated) {
//     //     next('/coaches');
//     } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
//         next('/home');
//     } else {
//         next();
//     }
// });

export default router;