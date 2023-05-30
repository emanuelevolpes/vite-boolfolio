import { createApp } from 'vue'
import { router } from './router';
import * as bootstrap from 'bootstrap';
import './assets/scss/main.scss';

//font-awesome
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// import { faLinkedin } from '@fortawesome/free-solid-svg-icons';

// library.add(faLinkedin)

import App from './App.vue'

createApp(App).use(router).mount('#app')
