import Vue from 'vue';
import Router from 'vue-router';

import HelloWorld from "../components/HelloWorld";
import TaskList from "../components/TaskList";
import login from "../components/Auth/Login";
import ForgotPassword from "../components/Auth/ForgotPassword";
import ResetPasswordForm from "../components/Auth/ResetPasswordForm";
import signUp from "../components/SignUp";
import store from '../store/store';

Vue.use(Router);
const requireAuthenticated = (to, from, next)=>{
  store.dispatch('initialize')
  .then(()=>{
    if(!store.getters['loggedIn']){
      next('/login');
    }
    else {
      next();
    }
  })
};

const requireUnauthenticated = (to, from, next)  =>{
  store.dispatch('initialize')
  .then(()=>{
    if(store.getters['loggedIn']){
      next('/');
    }
    else {
      next();
    }
  })
}
const redirectLogout = (to, from, next) => {
  store.dispatch('logout')
    .then(() => next('/login'));
};
const routes = [
  {
    path: '/forgot-password', 
    name: 'reset-password', 
    component: ForgotPassword, 
    meta: { 
      auth:false 
    } 
  },
  {
    path: '/reset-password/:token', 
    name: 'reset-password-form', 
    component: ResetPasswordForm, 
    meta: { 
      auth:false 
    } 
  },
  {
    path: "/login",
    component: login,
    beforeEnter: requireUnauthenticated,
  },
  {
    path: "/signup",
    component: signUp,
  },
  {
    path: "/logout",
    beforeEnter: redirectLogout,
  },
  {
    path: "/",
    name: "HelloWorld",
    component: HelloWorld,
  },
  {
    path: "/task-list",
    name: "TaskList",
    component: TaskList,
    beforeEnter: requireAuthenticated,
  },
];
 const router = new Router({
  mode: 'history',
  routes
})



/* router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/signup','/','/forgot-password','/reset-password/:token'];
  
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('authToken');

  if (authRequired && !loggedIn) {
    return next('/login');
  }
  next();
}) */

export default router
