import {createRouter, createWebHistory} from 'vue-router';
import Login from "./views/Login";

export default reateRouter({
  history: createWebHistory(),
  routes: [
    { path: '/login', component: Login},  // localhost:port/login
  ]
});
