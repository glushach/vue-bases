import { createApp } from 'vue';
import App from './App.vue';
import './theme.css';
import translatePlugins from "./translatePlugins";

const app = createApp(App)

const ua = {
  app: {
    title: 'Як працюют плагіни у Vue js',
    changeBtn: 'Змінити мову'
  }
}

const en = {
  app: {
    title: 'How work plugin on Vue js',
    changeBtn: 'Toggle language'
  }
}

app.use(translatePlugins, {ua, en})

app.mount('#app');
