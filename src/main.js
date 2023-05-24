import { createApp } from 'vue'
import { store } from './store';
import App from './App.vue'
import './assets/reset.css';
import './assets/site.scss';
import VueSmoothScroll from 'vue3-smooth-scroll' // https://www.npmjs.com/package/vue3-smooth-scroll
import mitt from 'mitt';

import { createRouter, createWebHashHistory } from 'vue-router';
import { routes } from './routes';

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

const app = createApp(App);
const emitter = mitt();

app.use(router);
app.use(store);
app.use(VueSmoothScroll, { duration: 2000, offset: -100, easingFunction: t => (--t)*t*t+1 });
app.config.globalProperties.emitter = emitter;
app.mount("#app");
app.config.devtools = true;
