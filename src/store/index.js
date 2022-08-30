import { createStore } from 'vuex';

import requestsModule from './requests/requests.js';
import authModule from './auth/index.js';

const store = createStore({
    modules: {
        reqs: requestsModule,
        auth: authModule,
    }, 
    mutations: {

    },
    actions: {

    }
});

export default store;