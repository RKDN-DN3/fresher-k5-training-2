import HelloWorld from "../components/HelloWorld";
import TaskList from "../components/TaskList";
import login from "../components/Auth/Login";

/* function requireAuth (to, from, next) {
    if (!auth.loggedIn()) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } */

const routes = [
  {
    path: "/login",
    component: login,
    meta: {
      requiresVisitor: true,
    },
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
    meta: {
      requiresAuth: true,
    },
    /*  beforeEnter: requireAuth */
  },
];

export default routes;
