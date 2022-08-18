import { createApp } from 'vue';
import App from './App.vue';
import './theme.css';
import translatePlugins from "./translatePlugins";

const app = createApp(App)

app.use(translatePlugins)

app.mount('#app');
