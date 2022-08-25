import { createApp } from 'vue'

import router from './router.js';
import App from './App.vue';
import vuetify from './plugins/vuetify.js';
import { loadFonts } from './plugins/webfontloader';

import BaseCard from './components/ui/BaseCard.vue';
import BaseButton from './components/ui/BaseButton.vue';
import BaseBadge from './components/ui/BaseBadge.vue';
import BaseSpinner from './components/ui/BaseSpinner.vue';
import BaseDialogue from './components/ui/BaseDialogue.vue';

loadFonts();

const app = createApp(App);

app.use(router);
app.use(vuetify);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-badge', BaseBadge);
app.component('base-spinner', BaseSpinner);
app.component('base-dialogue', BaseDialogue);

app.mount('#app');