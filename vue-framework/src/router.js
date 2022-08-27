import {createRouter, createWebHistory} from 'vue-router';
import Login from "./views/Login";
import Forget from "./views/Forget";
import Dashboard from "./views/Dashboard"
// import Mail from "./views/Mail";
import AppEmailBody from "./components/AppEmailBody";
import NotFound from "./views/NotFound";

const Mail = () => import('./views/Mail');

const route = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/login', component: Login, alias: '/'},  // localhost:port/login
    {path: '/forget', component: Forget, meta: {
      cantEnter: true
      }},
    {path: '/dashboard', component: Dashboard, name: 'home', beforeEnter() {
        console.log('beforeEnter')
      }},
    {path: '/mail', component: Mail, name: 'email', children: [
        {path: ':id?', component: AppEmailBody, props: true}
      ]},
    {path: '/:notFound(.*)', component: NotFound}
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
});

route.beforeEach( (to, from, next) => {
  console.log('beforeEach');
  (to.meta.cantEnter) ? next({name: 'home'}) : next();
});

route.afterEach((to, from) => {

});

export default route;
