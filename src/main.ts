import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'modern-normalize';
import './global.scss';
// import 'normalize.css';

createApp(App).use(router).mount('#app');
