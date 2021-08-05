import Vue from 'vue';
import Router from 'vue-router';

import HelloWorld from "../components/HelloWorld";
import TaskList from "../components/TaskList";
import login from "../components/Auth/Login";
import signUp from "../components/SignUp";

Vue.use(Router);

const routes = [
  {
    path: "/login",
    component: login,
  },
  {
    path: "/signup",
    component: signUp,
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
  },
];
 const router = new Router({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/signup'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('authToken');

  if (authRequired && !loggedIn) {
    return next('/login');
  }
  next();
})

export default router
