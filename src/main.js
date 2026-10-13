import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router.js';
import pinia from './pinia.js';
import i18n from './i18n.js';
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import 'primeicons/primeicons.css';

createApp(App)
    .use(router)
    .use(pinia)
    .use(i18n)
    .use(PrimeVue, { theme: { preset: Aura } })
    .mount('#app');
