import { createApp } from 'vue';
import app from './app.vue';
import router from './router';
import './index.css';

createApp(app).use(router).mount('#app');
