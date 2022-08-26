import { createStore } from 'vuex';

import requestsModule from './requests/requests.js';

const store = createStore({
    modules: {
        reqs: requestsModule,
    }, 
    mutations: {

    },
    actions: {

    }
});

export default store;